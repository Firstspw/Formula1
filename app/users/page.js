"use client";

import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import withAuth from "@/components/withAuth";
import { useRouter } from "next/navigation";

const API_URL = "https://6a7e6ea23183f5fd884a12df.mockapi.io/login";

function UsersPage() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const router = useRouter();

  // 1. ตรวจสอบ Authentication ก่อนดึงข้อมูล
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token || token === "null" || token === "undefined") {
      setIsAuth(false);
      Swal.fire({
        background: "#09090b",
        color: "#ffffff",
        icon: "warning",
        title: "ACCESS RESTRICTED",
        text: "กรุณาเข้าสู่ระบบก่อนเข้าใช้งานหน้านี้",
        confirmButtonColor: "#E10600",
        confirmButtonText: "ไปยังหน้าเข้าสู่ระบบ",
        allowOutsideClick: false,
      }).then(() => {
        router.replace("/login");
      });
      return;
    }

    setIsAuth(true);
    fetchUsers(token);
  }, [router]);

  // 2. ดึงข้อมูลสมาชิก (แนบ Authorization Token)
  const fetchUsers = async (authToken) => {
    const token = authToken || localStorage.getItem("token");
    setIsLoading(true);
    setIsError(false);
    try {
      const response = await fetch(API_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) throw new Error(`Status ${response.status}`);
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      setIsError(true);
      await Swal.fire({
        background: "#09090b",
        color: "#ffffff",
        icon: "error",
        title: "ไม่สามารถโหลดข้อมูลได้",
        text: error.message,
        confirmButtonColor: "#E10600",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // 3. ฟังก์ชันลบข้อมูล
  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    const user = users.find((u) => u.id === id);

    const result = await Swal.fire({
      background: "#09090b",
      color: "#ffffff",
      icon: "warning",
      title: "ยืนยันการลบข้อมูล",
      html: user
        ? `ต้องการลบ <b>${user.firstname} ${user.lastname}</b> ใช่หรือไม่?<br><span style="color: #a1a1aa; font-size: 14px;">เมื่อลบแล้วจะไม่สามารถกู้คืนได้</span>`
        : "เมื่อลบแล้วจะไม่สามารถกู้คืนได้",
      showCancelButton: true,
      confirmButtonText: "ลบเลย",
      cancelButtonText: "ยกเลิก",
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#3f3f46",
      reverseButtons: true,
    });

    if (!result.isConfirmed) return;

    try {
      setDeletingId(id);

      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.message || `Status ${response.status}`);
      }

      setUsers((prev) => prev.filter((u) => u.id !== id));

      await Swal.fire({
        background: "#09090b",
        color: "#ffffff",
        icon: "success",
        title: "ลบข้อมูลเรียบร้อยแล้ว",
        timer: 1500,
        showConfirmButton: false,
      });
    } catch (error) {
      await Swal.fire({
        background: "#09090b",
        color: "#ffffff",
        icon: "error",
        title: "ลบข้อมูลไม่สำเร็จ",
        text: error.message,
        confirmButtonColor: "#E10600",
      });
    } finally {
      setDeletingId(null);
    }
  };

  // ---- สถานะ 0: ยังไม่อยืนยันสิทธิ์ ----
  if (!isAuth) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-[#E10600] border-t-transparent rounded-full animate-spin" />
          <span className="text-xs font-mono text-zinc-400 tracking-widest uppercase">
            Checking Authentication...
          </span>
        </div>
      </div>
    );
  }

  // ---- สถานะ 1: กำลังโหลดข้อมูล ----
  if (isLoading) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <div className="bg-zinc-900/90 border border-zinc-800 backdrop-blur-md rounded-2xl px-8 py-6 shadow-2xl text-center">
          <div className="mx-auto mb-3 h-8 w-8 animate-spin rounded-full border-4 border-[#E10600] border-t-transparent" />
          <p className="text-zinc-300 font-medium text-sm font-mono">กำลังโหลดข้อมูลสมาชิก...</p>
        </div>
      </div>
    );
  }

  // ---- สถานะ 2: เกิดข้อผิดพลาด ----
  if (isError) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-4">
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-2xl text-center max-w-sm w-full">
          <p className="text-red-500 font-bold mb-4">เกิดข้อผิดพลาดในการโหลดข้อมูล</p>
          <button
            onClick={() => fetchUsers()}
            className="w-full py-2 bg-[#E10600] text-white rounded-xl text-sm font-medium hover:bg-red-700 transition"
          >
            ลองใหม่อีกครั้ง
          </button>
        </div>
      </div>
    );
  }

  // ---- สถานะ 3: ไม่พบข้อมูล ----
  if (users.length === 0) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-4">
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-2xl text-center text-zinc-400 max-w-sm w-full font-mono text-sm">
          ยังไม่มีข้อมูลสมาชิกในระบบ
        </div>
      </div>
    );
  }

  // ---- สถานะ 4: แสดงผลข้อมูล ----
  return (
    <div className="min-h-screen bg-zinc-950 py-10 px-4 text-white">
      <div className="max-w-4xl mx-auto">
        <header className="mb-6 flex justify-between items-center">
          <div>
            <span className="text-xs font-mono font-bold text-[#E10600] tracking-widest uppercase bg-[#E10600]/10 px-3 py-1 rounded-full border border-[#E10600]/30">
              USER MANAGEMENT
            </span>
            <h1 className="text-3xl font-black italic uppercase tracking-tight mt-2">
              รายชื่อ <span className="text-[#E10600]">สมาชิกในระบบ</span>
            </h1>
          </div>
          <span className="text-xs font-mono text-zinc-400 bg-zinc-900 px-3 py-1.5 rounded-xl border border-zinc-800">
            TOTAL: {users.length}
          </span>
        </header>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden">
          {/* ตาราง สำหรับ Desktop */}
          <table className="w-full border-collapse hidden md:table text-left">
            <thead>
              <tr className="bg-zinc-950 text-zinc-400 font-mono text-xs uppercase border-b border-zinc-800">
                <th className="p-4 text-center">#</th>
                <th className="p-4">NAME / DRIVER CALLSIGN</th>
                <th className="p-4">USERNAME</th>
                <th className="p-4 text-center">จัดการ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/60 text-sm">
              {users.map((user, index) => (
                <tr key={user.id} className="hover:bg-zinc-800/40 transition-colors">
                  <td className="p-4 text-center font-mono text-zinc-500">{index + 1}</td>
                  <td className="p-4 font-medium text-zinc-200">{user.name}</td>
                  <td className="p-4 font-mono text-zinc-400">@{user.username}</td>
                  <td className="p-4">
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => router.push(`/users/edit/${user.id}`)}
                        className="px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/30 rounded-lg text-xs font-semibold transition"
                      >
                        แก้ไข
                      </button>
                      <button
                        onClick={() => handleDelete(user.id)}
                        disabled={deletingId === user.id}
                        className="px-3 py-1.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 rounded-lg text-xs font-semibold transition disabled:opacity-50"
                      >
                        {deletingId === user.id ? "กำลังลบ..." : "ลบ"}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* การ์ด สำหรับ Mobile */}
          <div className="md:hidden divide-y divide-zinc-800/60">
            {users.map((user, index) => (
              <div key={user.id} className="p-4 hover:bg-zinc-800/30 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">
                      USER #{index + 1}
                    </span>
                    <p className="font-bold text-zinc-100">
                      {user.firstname} {user.lastname}
                    </p>
                    <p className="text-xs font-mono text-zinc-400 mt-0.5">@{user.username}</p>
                  </div>
                </div>
                <div className="flex gap-2 mt-4">
                  <button
                    onClick={() => router.push(`/users/edit/${user.id}`)}
                    className="flex-1 py-2 bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/30 rounded-xl text-xs font-semibold transition"
                  >
                    แก้ไข
                  </button>
                  <button
                    onClick={() => handleDelete(user.id)}
                    disabled={deletingId === user.id}
                    className="flex-1 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 rounded-xl text-xs font-semibold transition disabled:opacity-50"
                  >
                    {deletingId === user.id ? "กำลังลบ..." : "ลบ"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default withAuth(UsersPage);