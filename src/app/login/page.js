"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import Navigation from "@/components/navigation";

// อัปเดต URL เป็น MockAPI
const MOCK_API_URL = "https://6a7e6ea23183f5fd884a12df.mockapi.io/login";

export default function LoginPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    txt_username: "",
    txt_password: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      // ดึงข้อมูลผู้ใช้ทั้งหมดจาก MockAPI เพื่อตรวจสอบ
      const response = await fetch(MOCK_API_URL, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      });

      if (!response.ok) {
        throw new Error("Failed to fetch server data");
      }

      const users = await response.json();

      // ค้นหาผู้ใช้ที่ match ทั้ง username และ password
      const userFound = users.find(
        (u) =>
          (u.username === form.txt_username || u.txt_username === form.txt_username) &&
          (u.password === form.txt_password || u.txt_password === form.txt_password)
      );

      const swalConfig = {
        background: "#09090b",
        color: "#ffffff",
        confirmButtonColor: "#E10600",
      };

      if (userFound) {
        // บันทึก Session จำลองไว้ใน localStorage
        localStorage.setItem("token", "f1_driver_mock_token_" + Date.now());
        localStorage.setItem("user", JSON.stringify(userFound));

        await Swal.fire({
          ...swalConfig,
          icon: "success",
          title: "AUTHENTICATION PASSED",
          text: `ยินดีต้อนรับนักแข่ง ${userFound.name || userFound.username || form.txt_username} เข้าสู่ระบบ`,
          timer: 1500,
          showConfirmButton: false,
        });

        router.push("/");
      } else {
        await Swal.fire({
          ...swalConfig,
          icon: "error",
          title: "ACCESS DENIED",
          text: "Username หรือ Password ไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง",
          confirmButtonText: "ลองใหม่",
        });
      }
    } catch (error) {
      await Swal.fire({
        background: "#09090b",
        color: "#ffffff",
        icon: "warning",
        title: "CONNECTION TIMEOUT",
        text: "ไม่สามารถเชื่อมต่อกับ MockAPI ได้ กรุณาเช็คการเชื่อมต่ออินเทอร์เน็ต",
        confirmButtonText: "ตกลง",
        confirmButtonColor: "#E10600",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-[#E10600]">
      <Navigation />

      <main className="flex items-center justify-center py-16 px-6 relative overflow-hidden">
        {/* Glow Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-600/15 rounded-full blur-[120px] pointer-events-none -z-0" />

        <div className="w-full max-w-md bg-gradient-to-b from-zinc-900/90 via-zinc-900/50 to-zinc-950 border border-zinc-800 hover:border-red-600/50 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.8)] backdrop-blur-xl relative z-10 overflow-hidden transition-all duration-500">
          <div className="h-1.5 w-full bg-gradient-to-r from-red-600 via-amber-500 to-red-600 shadow-[0_0_15px_#E10600]" />

          <div className="border-b border-zinc-800/80 px-8 py-6 text-center">
            <div className="inline-flex items-center gap-2 text-[10px] font-mono font-bold text-[#E10600] tracking-widest uppercase bg-[#E10600]/10 px-3 py-1 rounded-full border border-[#E10600]/30 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#E10600] animate-ping" />
              TELEMETRY AUTHENTICATION
            </div>
            <h1 className="text-3xl font-black italic uppercase tracking-tight text-white">
              PIT LANE <span className="text-[#E10600]">ACCESS</span>
            </h1>
            <p className="text-xs font-mono text-zinc-400 mt-1">
              ระบุ Username และ Password เพื่อเข้าสู่ระบบผู้ใช้งาน
            </p>
          </div>

          <form onSubmit={handleLogin} className="p-8 space-y-5">
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-300 mb-2">
                USERNAME
              </label>
              <input
                type="text"
                name="txt_username"
                value={form.txt_username}
                onChange={handleChange}
                required
                className="w-full bg-zinc-950 border border-zinc-800 focus:border-[#E10600] rounded-xl px-4 py-3 text-sm font-mono text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-[#E10600] transition-all shadow-inner"
                placeholder="กรอกชื่อผู้ใช้งาน..."
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-300 mb-2">
                PASSWORD
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="txt_password"
                  value={form.txt_password}
                  onChange={handleChange}
                  required
                  className="w-full bg-zinc-950 border border-zinc-800 focus:border-[#E10600] rounded-xl px-4 py-3 pr-20 text-sm font-mono text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-[#E10600] transition-all shadow-inner"
                  placeholder="กรอกรหัสผ่าน..."
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[11px] font-mono text-zinc-400 hover:text-white px-2 py-1 bg-zinc-900 rounded-lg border border-zinc-800 transition-colors"
                >
                  {showPassword ? "HIDE" : "SHOW"}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 px-6 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-mono font-black italic uppercase tracking-wider rounded-xl transition-all duration-300 shadow-[0_0_25px_rgba(225,6,0,0.5)] hover:shadow-[0_0_35px_rgba(225,6,0,0.8)] disabled:opacity-50 border border-red-500/50 flex items-center justify-center gap-2 mt-2"
            >
              {isLoading ? "AUTHENTICATING..." : "LOG IN TO TELEMETRY"}
            </button>

            <div className="pt-3 border-t border-zinc-800/60 text-center">
              <p className="text-xs font-mono text-zinc-400">
                ยังไม่มีบัญชีสมาชิก?{" "}
                <button
                  type="button"
                  onClick={() => router.push("/register")}
                  className="text-[#E10600] font-bold hover:underline hover:text-red-400 transition-colors ml-1 uppercase"
                >
                  REGISTER HERE
                </button>
              </p>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}