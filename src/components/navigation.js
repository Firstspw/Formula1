"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

export default function Navigation({ searchQuery, setSearchQuery }) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  // ดึงข้อมูล User จาก LocalStorage เมื่อเริ่มโหลด Client Side
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        setUser({ name: storedUser });
      }
    } else if (token) {
      // กรณีมี Token แต่ไม่ได้เก็บวัตถุ user ไว้ สามารถ fallback ชื่อจำลองได้
      setUser({ name: "Racer Guest" });
    }
  }, []);

  const handleLogout = () => {
    Swal.fire({
      background: "#09090b",
      color: "#ffffff",
      icon: "question",
      title: "LOGOUT CONFIRMATION",
      text: "คุณต้องการออกจากระบบหรือไม่?",
      showCancelButton: true,
      confirmButtonColor: "#E10600",
      cancelButtonColor: "#27272a",
      confirmButtonText: "ออกจากระบบ",
      cancelButtonText: "ยกเลิก",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
        window.location.href = "/login";
      }
    });
  };

  const navLinks = [
    { name: "CALENDAR", path: "/" },
    { name: "DRIVERS GRID", path: "/drivers" },
    { name: "CONSTRUCTORS", path: "/teams" },
    { name: "HIGHLIGHTS", path: "/video" },
  ];

  return (
    <>
      {/* 🔴 LIVE TELEMETRY TICKER BAR */}
      <div className="bg-gradient-to-r from-red-950 via-zinc-950 to-red-950 border-b border-red-900/40 text-[11px] font-mono py-1.5 px-4 flex items-center justify-between overflow-hidden shadow-[0_0_15px_rgba(225,6,0,0.3)] select-none">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600" />
          </span>
          <span className="text-red-500 font-bold uppercase tracking-widest">
            LIVE TELEMETRY:
          </span>
          <span className="text-zinc-300 hidden sm:inline tracking-wider">
            2026 REGULATION CARS • 1,000 HP HYBRID POWER UNITS ONLINE
          </span>
        </div>
        <div className="flex items-center gap-4 text-zinc-400">
          <span className="hidden md:inline font-semibold">AIR: 28°C | TRACK: 42°C</span>
          <span className="text-emerald-400 font-bold animate-pulse bg-emerald-950/40 border border-emerald-500/30 px-2 py-0.5 rounded text-[10px]">
            DRS ENABLED
          </span>
        </div>
      </div>

      {/* 🏎️ MAIN NAVIGATION NAVBAR */}
      <nav className="border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-xl sticky top-0 z-50 transition-all shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          
          {/* Logo with Cyber Neon Effect */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="relative">
              <span className="bg-[#E10600] text-white text-sm font-black italic px-3.5 py-1.5 rounded-br-xl shadow-[0_0_20px_rgba(225,6,0,0.8)] group-hover:scale-105 transition-transform block border border-red-400/50">
                F1®
              </span>
              <div className="absolute -inset-1 bg-red-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-500 -z-10" />
            </div>
            <div className="flex flex-col">
              <span className="font-black italic tracking-widest text-xl uppercase bg-gradient-to-r from-white via-zinc-200 to-red-500 bg-clip-text text-transparent drop-shadow-sm">
                RACE<span className="text-[#E10600]">HUB</span> 2026
              </span>
              <span className="text-[9px] font-mono text-zinc-500 tracking-widest -mt-1">
                OFFICIAL FAN EXPERIENCE
              </span>
            </div>
          </Link>

          {/* Search Box & Desktop Navigation */}
          <div className="flex items-center gap-5">
            {/* Search Input Filter */}
            {setSearchQuery !== undefined && (
              <div className="relative hidden lg:block">
                <input
                  type="text"
                  placeholder="ค้นหาสนาม / นักแข่ง..."
                  value={searchQuery || ""}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-zinc-900/90 border border-zinc-800 focus:border-[#E10600] text-white text-xs font-mono rounded-xl px-3.5 py-2 pl-9 w-44 xl:w-56 focus:outline-none focus:ring-1 focus:ring-[#E10600] transition-all placeholder:text-zinc-600"
                />
                <svg
                  className="w-4 h-4 text-zinc-500 absolute left-3 top-2.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 0114 0z"
                  />
                </svg>
              </div>
            )}

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1.5 font-mono text-xs uppercase font-bold">
              {navLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    href={link.path}
                    className={`px-3.5 py-2 rounded-xl transition-all relative group overflow-hidden ${
                      isActive
                        ? "text-white bg-gradient-to-r from-red-950/60 to-zinc-900 border border-red-600/50 shadow-[0_0_15px_rgba(225,6,0,0.3)]"
                        : "text-zinc-400 hover:text-white hover:bg-zinc-900/60 border border-transparent"
                    }`}
                  >
                    <span className="relative z-10">{link.name}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#E10600] to-transparent shadow-[0_0_10px_#E10600]" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* User Profile / Auth Section */}
            <div className="hidden sm:flex items-center gap-3 pl-2 border-l border-zinc-800/80">
              {user ? (
                <div className="flex items-center gap-3">
                  {/* Badge แสดงชื่อผู้ใช้งาน */}
                  <div className="flex items-center gap-2.5 bg-zinc-900/90 border border-zinc-800 hover:border-zinc-700 px-3.5 py-1.5 rounded-xl transition-all shadow-inner">
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-[#E10600] to-amber-500 flex items-center justify-center text-white text-[11px] font-black font-mono shadow-md">
                      {(user.name || user.username || "U").charAt(0).toUpperCase()}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[11px] font-mono font-bold text-zinc-100 leading-tight">
                        {user.name || user.username || "Driver Pass"}
                      </span>
                      <span className="text-[8px] font-mono text-emerald-400 tracking-wider flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                        AUTHENTICATED
                      </span>
                    </div>
                  </div>

                  {/* ปุ่ม Logout */}
                  <button
                    onClick={handleLogout}
                    className="text-[11px] font-mono font-bold text-red-400 hover:text-white bg-red-950/40 hover:bg-[#E10600] border border-red-800/50 hover:border-red-600 px-3 py-1.5 rounded-xl transition-all duration-300 shadow-sm"
                  >
                    LOGOUT
                  </button>
                </div>
              ) : (
                <Link
                  href="/login"
                  className="text-xs font-mono font-bold bg-gradient-to-r from-[#E10600] to-red-700 hover:from-red-600 hover:to-red-800 text-white px-4 py-2 rounded-xl transition-all shadow-[0_0_15px_rgba(225,6,0,0.4)] border border-red-500/30"
                >
                  LOG IN
                </Link>
              )}
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-zinc-300 hover:text-white p-2 rounded-xl bg-zinc-900 border border-zinc-800 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-zinc-800 bg-zinc-950/95 px-6 py-4 space-y-3 font-mono text-xs font-bold animate-fadeIn">
            {/* User status on mobile */}
            {user && (
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-[#E10600] flex items-center justify-center text-white text-[10px] font-bold">
                    {(user.name || user.username || "U").charAt(0).toUpperCase()}
                  </div>
                  <span className="text-zinc-200">{user.name || user.username}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="text-red-400 text-[10px] underline"
                >
                  LOGOUT
                </button>
              </div>
            )}

            {setSearchQuery !== undefined && (
              <input
                type="text"
                placeholder="ค้นหาสนาม..."
                value={searchQuery || ""}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-xl px-3.5 py-2 focus:outline-none focus:border-[#E10600]"
              />
            )}
            
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl border ${
                  pathname === link.path
                    ? "bg-[#E10600] text-white border-red-500 shadow-[0_0_15px_rgba(225,6,0,0.5)]"
                    : "text-zinc-400 border-zinc-900 hover:bg-zinc-900 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {!user && (
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center bg-[#E10600] text-white py-3 rounded-xl mt-2"
              >
                LOG IN
              </Link>
            )}
          </div>
        )}
      </nav>
    </>
  );
}