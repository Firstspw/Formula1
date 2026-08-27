"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation({ searchQuery, setSearchQuery }) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // สมมติ State จำลองสำหรับ User (หากมีระบบ Auth จริง สามารถเปลี่ยนไปใช้ Context/Props ได้)
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    setUser(null);
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
      <div className="bg-gradient-to-r from-red-950 via-zinc-950 to-red-950 border-b border-red-900/40 text-[11px] font-mono py-1.5 px-4 flex items-center justify-between overflow-hidden shadow-[0_0_15px_rgba(225,6,0,0.3)]">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600" />
          </span>
          <span className="text-red-500 font-bold uppercase tracking-widest">
            LIVE SYSTEM:
          </span>
          <span className="text-zinc-300 hidden sm:inline">
            2026 REGULATION CARS • 1,000 HP HYBRID POWER UNITS ONLINE
          </span>
        </div>
        <div className="flex items-center gap-4 text-zinc-400">
          <span className="hidden md:inline">AIR: 28°C | TRACK: 42°C</span>
          <span className="text-emerald-400 font-bold animate-pulse">
            DRS ENABLED
          </span>
        </div>
      </div>

      {/* 🏎️ MAIN NAVIGATION NAVBAR */}
      <nav className="border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-xl sticky top-0 z-50 transition-all shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 py-3.5 flex items-center justify-between gap-4">
          {/* Logo with Cyber Neon Effect */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="relative">
              <span className="bg-[#E10600] text-white text-sm font-black italic px-3.5 py-1.5 rounded-br-xl shadow-[0_0_20px_rgba(225,6,0,0.8)] group-hover:scale-110 transition-transform block border border-red-400/50">
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
          <div className="flex items-center gap-6">
            {/* Search Input Filter */}
            {setSearchQuery && (
              <div className="relative hidden sm:block">
                <input
                  type="text"
                  placeholder="ค้นหาสนาม / ประเทศ..."
                  value={searchQuery || ""}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-zinc-900/90 border border-zinc-800 focus:border-[#E10600] text-white text-xs font-mono rounded-xl px-3.5 py-2 pl-9 w-44 md:w-56 focus:outline-none focus:ring-1 focus:ring-[#E10600] transition-all"
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
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            )}

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-2 font-mono text-xs uppercase font-bold">
              {navLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    href={link.path}
                    className={`px-4 py-2 rounded-xl transition-all relative group overflow-hidden ${
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

            {/* User Auth Section */}
            <div className="hidden lg:flex items-center gap-3">
              {user ? (
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-xl">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-mono font-bold text-zinc-200">
                      {user.name || user.username}
                    </span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="text-xs font-mono font-bold text-red-500 hover:text-red-400 bg-red-500/10 border border-red-500/20 hover:bg-red-500/20 px-3 py-1.5 rounded-xl transition-all"
                  >
                    LOGOUT
                  </button>
                </div>
              ) : (
                <Link
                  href="/login"
                  className="text-xs font-mono font-bold bg-[#E10600] hover:bg-red-700 text-white px-4 py-2 rounded-xl transition-all shadow-[0_0_15px_rgba(225,6,0,0.4)]"
                >
                  LOG IN
                </Link>
              )}
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-zinc-300 hover:text-white p-2 rounded-lg bg-zinc-900 border border-zinc-800"
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
          <div className="md:hidden border-t border-zinc-800 bg-zinc-950/95 px-6 py-4 space-y-3 font-mono text-xs font-bold">
            {setSearchQuery && (
              <input
                type="text"
                placeholder="ค้นหาสนาม..."
                value={searchQuery || ""}
                onChange={(e) => setSearchQuery(e.g.target.value)}
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
          </div>
        )}
      </nav>
    </>
  );
}