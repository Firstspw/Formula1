"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import withAuth from "@/components/withAuth";
import Swal from "sweetalert2";

const API_URL = "https://api.itdev.cmtc.ac.th/users";

function FormEdit() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id;

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [form, setForm] = useState({
    txt_firstname: "",
    txt_lastname: "",
    txt_username: "",
    txt_password: "",
  });

  // 1. ตรวจสอบสิทธิ์การเข้าถึงและโหลดข้อมูลผู้ใช้
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
    if (id) {
      fetchUser(token);
    }
  }, [id, router]);

  // 2. ดึงข้อมูลสมาชิกตาม ID
  const fetchUser = async (token) => {
    const authToken = token || localStorage.getItem("token");
    setIsLoading(true);
    setIsError(false);

    try {
      const response = await fetch(`${API_URL}/${id}`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) throw new Error(`Status ${response.status}`);
      const data = await response.json();

      setForm({
        txt_firstname: data.firstname ?? "",
        txt_lastname: data.lastname ?? "",
        txt_username: data.username ?? "",
        txt_password: "", // ไม่นำรหัสผ่านเดิมมาแสดง
      });
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

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // 3. ตรวจสอบความถูกต้องของฟอร์ม
  const validateForm = () => {
    if (!form.txt_firstname.trim()) {
      Swal.fire({
        background: "#09090b",
        color: "#ffffff",
        icon: "warning",
        title: "กรุณาระบุชื่อ",
        confirmButtonColor: "#amber-500",
        confirmButtonText: "ตกลง",
      });
      return false;
    }

    if (!form.txt_lastname.trim()) {
      Swal.fire({
        background: "#09090b",
        color: "#ffffff",
        icon: "warning",
        title: "กรุณาระบุนามสกุล",
        confirmButtonColor: "#amber-500",
        confirmButtonText: "ตกลง",
      });
      return false;
    }

    if (!form.txt_username.trim()) {
      Swal.fire({
        background: "#09090b",
        color: "#ffffff",
        icon: "warning",
        title: "กรุณาระบุ Username",
        confirmButtonColor: "#amber-500",
        confirmButtonText: "ตกลง",
      });
      return false;
    }

    return true;
  };

  // 4. ส่งข้อมูลอัปเดตไปยัง API
  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const token = localStorage.getItem("token");

    try {
      setIsSaving(true);

      const payload = {
        firstname: form.txt_firstname.trim(),
        lastname: form.txt_lastname.trim(),
        username: form.txt_username.trim(),
      };

      if (form.txt_password.trim()) {
        payload.password = form.txt_password;
      }

      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => ({}));

      if (response.ok) {
        await Swal.fire({
          background: "#09090b",
          color: "#ffffff",
          icon: "success",
          title: "บันทึกสำเร็จ!",
          text: "ปรับปรุงข้อมูลสมาชิกเรียบร้อยแล้ว",
          timer: 1500,
          showConfirmButton: false,
        });

        router.push("/users");
        return;
      }

      // ดักจับ Error status ต่างๆ
      if (response.status === 400) {
        await Swal.fire({
          background: "#09090b",
          color: "#ffffff",
          icon: "warning",
          title: `ข้อมูลไม่ถูกต้อง (${response.status})`,
          text: result.message || "กรุณาตรวจสอบข้อมูลอีกครั้ง",
          confirmButtonColor: "#f59e0b",
        });
      } else {
        await Swal.fire({
          background: "#09090b",
          color: "#ffffff",
          icon: "error",
          title: `บันทึกไม่สำเร็จ (${response.status})`,
          text: result.message || "เกิดข้อผิดพลาดในการอัปเดตข้อมูล",
          confirmButtonColor: "#E10600",
        });
      }
    } catch (error) {
      await Swal.fire({
        background: "#09090b",
        color: "#ffffff",
        icon: "error",
        title: "การเชื่อมต่อล้มเหลว",
        text: "ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้ กรุณาตรวจสอบอินเทอร์เน็ต",
        confirmButtonColor: "#E10600",
      });
    } finally {
      setIsSaving(false);
    }
  };

  // ---- สถานะ 0: ตรวจสอบสิทธิ์ ----
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
          <div className="mx-auto mb-3 h-8 w-8 animate-spin rounded-full border-4 border-amber-500 border-t-transparent" />
          <p className="text-zinc-300 font-medium text-sm font-mono">กำลังดึงข้อมูลผู้ใช้...</p>
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
          <div className="flex gap-2">
            <button
              onClick={() => router.push("/users")}
              className="flex-1 py-2 bg-zinc-800 text-zinc-300 rounded-xl text-sm font-medium hover:bg-zinc-700 transition"
            >
              กลับ
            </button>
            <button
              onClick={() => fetchUser()}
              className="flex-1 py-2 bg-[#E10600] text-white rounded-xl text-sm font-medium hover:bg-red-700 transition"
            >
              ลองใหม่
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ---- สถานะ 3: แสดงฟอร์มแก้ไข ----
  return (
    <div className="min-h-screen bg-zinc-950 py-10 px-4 text-white flex items-center justify-center">
      <div className="w-full max-w-md">
        {/* Card Container */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-zinc-950 p-6 border-b border-zinc-800">
            <span className="text-xs font-mono font-bold text-amber-500 tracking-widest uppercase bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
              EDIT USER PROFILE
            </span>
            <h1 className="text-2xl font-black italic uppercase tracking-tight mt-3">
              แก้ไขข้อมูล <span className="text-amber-500">#{id}</span>
            </h1>
          </div>

          {/* Form */}
          <form onSubmit={handleUpdate} className="p-6 space-y-4">
            <div>
              <label className="block text-xs font-mono text-zinc-400 uppercase mb-1">
                ชื่อ (Firstname)
              </label>
              <input
                type="text"
                name="txt_firstname"
                value={form.txt_firstname}
                onChange={handleChange}
                placeholder="กรอกชื่อ"
                className="w-full px-4 py-2.5 rounded-xl border border-zinc-800 bg-zinc-950/70 text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all font-medium text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-400 uppercase mb-1">
                นามสกุล (Lastname)
              </label>
              <input
                type="text"
                name="txt_lastname"
                value={form.txt_lastname}
                onChange={handleChange}
                placeholder="กรอกนามสกุล"
                className="w-full px-4 py-2.5 rounded-xl border border-zinc-800 bg-zinc-950/70 text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all font-medium text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-400 uppercase mb-1">
                ชื่อผู้ใช้ (Username)
              </label>
              <input
                type="text"
                name="txt_username"
                value={form.txt_username}
                onChange={handleChange}
                placeholder="กรอกชื่อผู้ใช้"
                className="w-full px-4 py-2.5 rounded-xl border border-zinc-800 bg-zinc-950/70 text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all font-mono text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-400 uppercase mb-1">
                รหัสผ่านใหม่ <span className="text-zinc-500 font-normal">(เว้นว่างหากไม่ต้องการเปลี่ยน)</span>
              </label>
              <input
                type="password"
                name="txt_password"
                value={form.txt_password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-4 py-2.5 rounded-xl border border-zinc-800 bg-zinc-950/70 text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all font-mono text-sm"
              />
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={() => router.push("/users")}
                className="flex-1 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-xl text-sm font-semibold transition"
              >
                ยกเลิก
              </button>
              <button
                type="submit"
                disabled={isSaving}
                className="flex-1 py-2.5 bg-amber-500 hover:bg-amber-600 disabled:bg-amber-500/50 text-zinc-950 font-bold rounded-xl text-sm transition shadow-lg shadow-amber-500/10"
              >
                {isSaving ? "กำลังบันทึก..." : "บันทึกข้อมูล"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default withAuth(FormEdit);