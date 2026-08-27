"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import Navigation from "@/components/navigation";

const MOCK_API_URL = "https://6a7e6ea23183f5fd884a12df.mockapi.io/login";

export default function RegisterPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const swalConfig = {
      background: "#09090b",
      color: "#ffffff",
      confirmButtonColor: "#E10600",
    };

    if (form.password !== form.confirmPassword) {
      await Swal.fire({
        ...swalConfig,
        icon: "warning",
        title: "PASSWORD MISMATCH",
        text: "รหัสผ่านยืนยันไม่ตรงกับรหัสผ่าน กรุณาตรวจสอบอีกครั้ง",
        confirmButtonText: "แก้ไข",
      });
      return;
    }

    try {
      setIsLoading(true);

      const response = await fetch(MOCK_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          username: form.username,
          password: form.password,
          createdAt: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        await Swal.fire({
          ...swalConfig,
          icon: "success",
          title: "REGISTRATION COMPLETE",
          text: "ลงทะเบียนนักแข่งเรียบร้อย! กรุณาเข้าสู่ระบบ",
          timer: 1500,
          showConfirmButton: false,
        });

        router.push("/login");
      } else {
        await Swal.fire({
          ...swalConfig,
          icon: "error",
          title: "REGISTRATION FAILED",
          text: "ไม่สามารถลงทะเบียนได้ กรุณาลองใหม่อีกครั้ง",
        });
      }
    } catch (error) {
      await Swal.fire({
        ...swalConfig,
        icon: "warning",
        title: "CONNECTION ERROR",
        text: "เกิดข้อผิดพลาดในการเชื่อมต่อกับ MockAPI",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-[#E10600]">
      <Navigation />

      <main className="flex items-center justify-center py-12 px-6 relative overflow-hidden">
        {/* Glow Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none -z-0" />

        <div className="w-full max-w-lg bg-gradient-to-b from-zinc-900/90 via-zinc-900/50 to-zinc-950 border border-zinc-800 hover:border-red-600/50 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.8)] backdrop-blur-xl relative z-10 overflow-hidden transition-all duration-500">
          <div className="h-1.5 w-full bg-gradient-to-r from-red-600 via-amber-500 to-red-600 shadow-[0_0_15px_#E10600]" />

          <div className="border-b border-zinc-800/80 px-8 py-6 text-center">
            <div className="inline-flex items-center gap-2 text-[10px] font-mono font-bold text-[#E10600] tracking-widest uppercase bg-[#E10600]/10 px-3 py-1 rounded-full border border-[#E10600]/30 mb-3">
              JOIN THE F1 GRID 2026
            </div>
            <h1 className="text-3xl font-black italic uppercase tracking-tight text-white">
              DRIVER <span className="text-[#E10600]">REGISTRATION</span>
            </h1>
            <p className="text-xs font-mono text-zinc-400 mt-1">
              สร้างบัญชีใหม่เพื่อเข้าสู่ระบบนิเวศข้อมูล F1 Race Hub
            </p>
          </div>

          <form onSubmit={handleRegister} className="p-8 space-y-4">
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                FULL NAME / DRIVER CALLSIGN
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full bg-zinc-950 border border-zinc-800 focus:border-[#E10600] rounded-xl px-4 py-2.5 text-sm font-mono text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-[#E10600] transition-all shadow-inner"
                placeholder="ชื่อ-นามสกุล หรือ ฉายานักแข่ง..."
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                USERNAME
              </label>
              <input
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
                required
                className="w-full bg-zinc-950 border border-zinc-800 focus:border-[#E10600] rounded-xl px-4 py-2.5 text-sm font-mono text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-[#E10600] transition-all shadow-inner"
                placeholder="กำหนด Username..."
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                PASSWORD
              </label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                className="w-full bg-zinc-950 border border-zinc-800 focus:border-[#E10600] rounded-xl px-4 py-2.5 text-sm font-mono text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-[#E10600] transition-all shadow-inner"
                placeholder="กำหนด Password..."
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                CONFIRM PASSWORD
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                required
                className="w-full bg-zinc-950 border border-zinc-800 focus:border-[#E10600] rounded-xl px-4 py-2.5 text-sm font-mono text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-[#E10600] transition-all shadow-inner"
                placeholder="ยืนยัน Password อีกครั้ง..."
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 px-6 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-mono font-black italic uppercase tracking-wider rounded-xl transition-all duration-300 shadow-[0_0_25px_rgba(225,6,0,0.5)] hover:shadow-[0_0_35px_rgba(225,6,0,0.8)] disabled:opacity-50 border border-red-500/50 flex items-center justify-center gap-2 mt-4"
            >
              {isLoading ? "PROCESSING..." : "CREATE DRIVER ACCOUNT"}
            </button>

            <div className="pt-3 border-t border-zinc-800/60 text-center">
              <p className="text-xs font-mono text-zinc-400">
                มีบัญชีอยู่แล้ว?{" "}
                <button
                  type="button"
                  onClick={() => router.push("/login")}
                  className="text-[#E10600] font-bold hover:underline hover:text-red-400 transition-colors ml-1 uppercase"
                >
                  LOG IN HERE
                </button>
              </p>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}