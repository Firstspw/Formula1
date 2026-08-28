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
  const [showPassword, setShowPassword] = useState(false);

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
          html: `
            <div class="flex flex-col items-center gap-3 my-2">
              <div class="w-16 h-16 border-4 border-dashed border-[#E10600] rounded-full animate-spin flex items-center justify-center">
                <span class="text-2xl">🏎️</span>
              </div>
              <p class="text-sm font-mono text-zinc-300">ต้อนรับนักแข่งใหม่ <b class="text-[#E10600]">${form.name || form.username}</b> ลงสู่สนาม!</p>
            </div>
          `,
          timer: 1800,
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
    <div className="relative min-h-screen bg-black text-white font-sans selection:bg-[#E10600] overflow-hidden flex flex-col">
      {/* 🎥 BACKGROUND VIDEO & OVERLAY */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-35 scale-105"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-formula-1-race-car-on-a-track-40879-large.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/75 to-zinc-950/90" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#E10600]/15 rounded-full blur-[160px]" />
      </div>

      <Navigation />

      <main className="flex-1 flex items-center justify-center py-12 px-4 relative z-10">
        <div className="w-full max-w-lg bg-zinc-900/80 border border-zinc-800 hover:border-red-600/60 rounded-3xl shadow-[0_0_60px_rgba(225,6,0,0.2)] backdrop-blur-2xl overflow-hidden transition-all duration-500 group">
          
          {/* Top Neon Racing Stripe */}
          <div className="h-1.5 w-full bg-gradient-to-r from-red-600 via-amber-500 to-red-600 shadow-[0_0_15px_#E10600]" />

          {/* Header */}
          <div className="border-b border-zinc-800/80 px-8 py-6 text-center">
            <div className="inline-flex items-center gap-2 text-[10px] font-mono font-bold text-[#E10600] tracking-widest uppercase bg-[#E10600]/10 px-3 py-1 rounded-full border border-[#E10600]/30 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#E10600] animate-ping" />
              JOIN THE F1 GRID 2026
            </div>
            <h1 className="text-3xl font-black italic uppercase tracking-tight text-white drop-shadow-md">
              DRIVER <span className="text-[#E10600]">REGISTRATION</span>
            </h1>
            <p className="text-xs font-mono text-zinc-400 mt-1">
              สร้างบัญชีใหม่เพื่อเข้าสู่ระบบนิเวศข้อมูล F1 Race Hub
            </p>
          </div>

          {/* Register Form */}
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
                className="w-full bg-zinc-950/90 border border-zinc-800 focus:border-[#E10600] rounded-xl px-4 py-2.5 text-sm font-mono text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-[#E10600] transition-all shadow-inner"
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
                className="w-full bg-zinc-950/90 border border-zinc-800 focus:border-[#E10600] rounded-xl px-4 py-2.5 text-sm font-mono text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-[#E10600] transition-all shadow-inner"
                placeholder="กำหนด Username..."
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                PASSWORD
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  required
                  className="w-full bg-zinc-950/90 border border-zinc-800 focus:border-[#E10600] rounded-xl px-4 py-2.5 pr-20 text-sm font-mono text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-[#E10600] transition-all shadow-inner"
                  placeholder="กำหนด Password..."
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-mono text-zinc-400 hover:text-white px-2 py-1 bg-zinc-900 rounded-lg border border-zinc-800 transition-colors"
                >
                  {showPassword ? "HIDE" : "SHOW"}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-300 mb-1.5">
                CONFIRM PASSWORD
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                required
                className="w-full bg-zinc-950/90 border border-zinc-800 focus:border-[#E10600] rounded-xl px-4 py-2.5 text-sm font-mono text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-[#E10600] transition-all shadow-inner"
                placeholder="ยืนยัน Password อีกครั้ง..."
              />
            </div>

            {/* 🏎️ BUTTON WITH SPINNING WHEEL ANIMATION */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 px-6 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-mono font-black italic uppercase tracking-wider rounded-xl transition-all duration-300 shadow-[0_0_25px_rgba(225,6,0,0.4)] hover:shadow-[0_0_35px_rgba(225,6,0,0.8)] disabled:opacity-75 border border-red-500/50 flex items-center justify-center gap-3 mt-4 group/btn relative overflow-hidden"
            >
              {isLoading ? (
                <>
                  <div className="relative w-6 h-6 animate-spin">
                    <div className="w-full h-full rounded-full border-4 border-dashed border-zinc-200 border-t-red-500" />
                    <div className="absolute inset-1 rounded-full border-2 border-red-500 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
                    </div>
                  </div>
                  <span className="animate-pulse">PROCESSING REGISTRATION...</span>
                </>
              ) : (
                <>
                  <span>CREATE DRIVER ACCOUNT</span>
                  <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                </>
              )}
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