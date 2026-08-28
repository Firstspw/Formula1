"use client";

import Navigation from "@/components/navigation";
import withAuth from "@/components/withAuth";

const F1_2026_TEAMS_FULL = [
  {
    id: "mercedes",
    name: "Mercedes-AMG PETRONAS F1 Team",
    logo: "https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000001/common/f1/2026/mercedes/2026mercedeslogowhite.webp",
    carImage: "https://media.formula1.com/image/upload/c_lfill,h_224/q_auto/d_common:f1:2026:fallback:car:2026fallbackcarright.webp/v1740000001/common/f1/2026/mercedes/2026mercedescarright.webp",
    accentColor: "from-emerald-500 to-teal-400",
    borderColor: "border-emerald-500/40",
    drivers: [
      { name: "George Russell", code: "RUS", flag: "🇬🇧" },
      { name: "Kimi Antonelli", code: "ANT", flag: "🇮🇹" }
    ]
  },
  {
    id: "ferrari",
    name: "Scuderia Ferrari HP",
    logo: "https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000001/common/f1/2026/ferrari/2026ferrarilogowhite.webp",
    carImage: "https://media.formula1.com/image/upload/c_lfill,h_224/q_auto/d_common:f1:2026:fallback:car:2026fallbackcarright.webp/v1740000001/common/f1/2026/ferrari/2026ferraricarright.webp",
    accentColor: "from-red-600 to-rose-500",
    borderColor: "border-red-600/40",
    drivers: [
      { name: "Charles Leclerc", code: "LEC", flag: "🇲🇨" },
      { name: "Lewis Hamilton", code: "HAM", flag: "🇬🇧" }
    ]
  },
  {
    id: "mclaren",
    name: "McLaren F1 Team",
    logo: "https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000001/common/f1/2026/mclaren/2026mclarenlogowhite.webp",
    carImage: "https://media.formula1.com/image/upload/c_lfill,h_224/q_auto/d_common:f1:2026:fallback:car:2026fallbackcarright.webp/v1740000001/common/f1/2026/mclaren/2026mclarencarright.webp",
    accentColor: "from-orange-500 to-amber-400",
    borderColor: "border-orange-500/40",
    drivers: [
      { name: "Lando Norris", code: "NOR", flag: "🇬🇧" },
      { name: "Oscar Piastri", code: "PIA", flag: "🇦🇺" }
    ]
  },
  {
    id: "redbull",
    name: "Oracle Red Bull Racing",
    logo: "https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000001/common/f1/2026/redbullracing/2026redbullracinglogowhite.webp",
    carImage: "https://media.formula1.com/image/upload/c_lfill,h_224/q_auto/d_common:f1:2026:fallback:car:2026fallbackcarright.webp/v1740000001/common/f1/2026/redbullracing/2026redbullracingcarright.webp",
    accentColor: "from-blue-600 to-indigo-500",
    borderColor: "border-blue-600/40",
    drivers: [
      { name: "Max Verstappen", code: "VER", flag: "🇳🇱" },
      { name: "Isack Hadjar", code: "HAD", flag: "🇫🇷" }
    ]
  },
  {
    id: "racingbulls",
    name: "Visa Cash App RB F1 Team",
    logo: "https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000001/common/f1/2026/racingbulls/2026racingbullslogowhite.webp",
    carImage: "https://media.formula1.com/image/upload/c_lfill,h_224/q_auto/d_common:f1:2026:fallback:car:2026fallbackcarright.webp/v1740000001/common/f1/2026/racingbulls/2026racingbullscarright.webp",
    accentColor: "from-blue-500 to-cyan-400",
    borderColor: "border-blue-500/40",
    drivers: [
      { name: "Liam Lawson", code: "LAW", flag: "🇳🇿" },
      { name: "Arvid Lindblad", code: "LIN", flag: "🇬🇧" }
    ]
  },
  {
    id: "alpine",
    name: "BWT Alpine F1 Team",
    logo: "https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000001/common/f1/2026/alpine/2026alpinelogowhite.webp",
    carImage: "https://media.formula1.com/image/upload/c_lfill,h_224/q_auto/d_common:f1:2026:fallback:car:2026fallbackcarright.webp/v1740000001/common/f1/2026/alpine/2026alpinecarright.webp",
    accentColor: "from-sky-400 to-pink-500",
    borderColor: "border-sky-400/40",
    drivers: [
      { name: "Pierre Gasly", code: "GAS", flag: "🇫🇷" },
      { name: "Franco Colapinto", code: "COL", flag: "🇦🇷" }
    ]
  },
  {
    id: "haas",
    name: "MoneyGram Haas F1 Team",
    logo: "https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000001/common/f1/2026/haas/2026haaslogowhite.webp",
    carImage: "https://media.formula1.com/image/upload/c_lfill,h_224/q_auto/d_common:f1:2026:fallback:car:2026fallbackcarright.webp/v1740000001/common/f1/2026/haas/2026haascarright.webp",
    accentColor: "from-zinc-200 to-red-600",
    borderColor: "border-zinc-400/40",
    drivers: [
      { name: "Esteban Ocon", code: "OCO", flag: "🇫🇷" },
      { name: "Oliver Bearman", code: "BEA", flag: "🇬🇧" }
    ]
  },
  {
    id: "audi",
    name: "Audi Revolut F1 Team",
    logo: "https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000001/common/f1/2026/audi/2026audilogowhite.webp",
    carImage: "https://media.formula1.com/image/upload/c_lfill,h_224/q_auto/d_common:f1:2026:fallback:car:2026fallbackcarright.webp/v1740000001/common/f1/2026/audi/2026audicarright.webp",
    accentColor: "from-red-600 to-orange-600",
    borderColor: "border-red-600/40",
    drivers: [
      { name: "Nico Hülkenberg", code: "HUL", flag: "🇩🇪" },
      { name: "Gabriel Bortoleto", code: "BOR", flag: "🇧🇷" }
    ]
  },
  {
    id: "williams",
    name: "Williams Racing",
    logo: "https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000001/common/f1/2026/williams/2026williamslogowhite.webp",
    carImage: "https://media.formula1.com/image/upload/c_lfill,h_224/q_auto/d_common:f1:2026:fallback:car:2026fallbackcarright.webp/v1740000001/common/f1/2026/williams/2026williamscarright.webp",
    accentColor: "from-blue-500 to-cyan-400",
    borderColor: "border-blue-500/40",
    drivers: [
      { name: "Carlos Sainz", code: "SAI", flag: "🇪🇸" },
      { name: "Alexander Albon", code: "ALB", flag: "🇹🇭" }
    ]
  },
  {
    id: "astonmartin",
    name: "Aston Martin Aramco F1 Team",
    logo: "https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000001/common/f1/2026/astonmartin/2026astonmartinlogowhite.webp",
    carImage: "https://media.formula1.com/image/upload/c_lfill,h_224/q_auto/d_common:f1:2026:fallback:car:2026fallbackcarright.webp/v1740000001/common/f1/2026/astonmartin/2026astonmartincarright.webp",
    accentColor: "from-emerald-600 to-green-500",
    borderColor: "border-emerald-600/40",
    drivers: [
      { name: "Fernando Alonso", code: "ALO", flag: "🇪🇸" },
      { name: "Lance Stroll", code: "STR", flag: "🇨🇦" }
    ]
  },
  {
    id: "cadillac",
    name: "Cadillac Formula 1 Team",
    logo: "https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000001/common/f1/2026/cadillac/2026cadillaclogowhite.webp",
    carImage: "https://media.formula1.com/image/upload/c_lfill,h_224/q_auto/d_common:f1:2026:fallback:car:2026fallbackcarright.webp/v1740000001/common/f1/2026/cadillac/2026cadillaccarright.webp",
    accentColor: "from-zinc-400 to-zinc-700",
    borderColor: "border-zinc-500/40",
    drivers: [
      { name: "Sergio Pérez", code: "PER", flag: "🇲🇽" },
      { name: "Valtteri Bottas", code: "BOT", flag: "🇫🇮" }
    ]
  }
];

function TeamsPage() {
  const totalDrivers = F1_2026_TEAMS_FULL.reduce((acc, team) => acc + team.drivers.length, 0);

  return (
    <div className="relative min-h-screen bg-black text-white font-sans selection:bg-[#E10600] selection:text-white overflow-hidden">
      {/* Background Neon Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#E10600]/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f15_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <Navigation />

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 relative z-10">
        {/* Header Section */}
        <header className="mb-14 text-center sm:text-left flex flex-col sm:flex-row sm:items-end justify-between border-b border-zinc-800/80 pb-8 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#E10600]/10 border border-[#E10600]/40 px-4 py-1.5 rounded-full backdrop-blur-md shadow-[0_0_20px_rgba(225,6,0,0.25)]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E10600] animate-ping" />
              <span className="text-xs font-mono font-bold text-[#E10600] tracking-widest uppercase">
                2026 CONSTRUCTORS GRID
              </span>
            </div>
            <h1 className="text-4xl sm:text-7xl font-black italic uppercase tracking-tighter mt-4 bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
              F1 <span className="text-[#E10600] drop-shadow-[0_0_30px_rgba(225,6,0,0.6)]">TEAMS & CARS</span>
            </h1>
          </div>

          {/* Quick Stats Banner */}
          <div className="bg-zinc-900/60 backdrop-blur-xl border border-zinc-800/80 p-4 rounded-2xl flex items-center gap-6 justify-around sm:justify-end shadow-2xl">
            <div>
              <p className="text-[10px] font-mono uppercase text-zinc-400">Total Teams</p>
              <p className="text-2xl font-black font-mono text-white">{F1_2026_TEAMS_FULL.length}</p>
            </div>
            <div className="w-px h-8 bg-zinc-800" />
            <div>
              <p className="text-[10px] font-mono uppercase text-zinc-400">Active Drivers</p>
              <p className="text-2xl font-black font-mono text-[#E10600]">{totalDrivers}</p>
            </div>
            <div className="w-px h-8 bg-zinc-800" />
            <div>
              <p className="text-[10px] font-mono uppercase text-zinc-400">Era</p>
              <p className="text-2xl font-black font-mono text-emerald-400">2026</p>
            </div>
          </div>
        </header>

        {/* Teams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {F1_2026_TEAMS_FULL.map((team) => (
            <div
              key={team.id}
              className={`bg-zinc-950/80 border ${team.borderColor} rounded-3xl p-6 sm:p-8 backdrop-blur-2xl flex flex-col justify-between relative overflow-hidden group hover:border-zinc-400/80 transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:-translate-y-1`}
            >
              {/* Animated Top Glow Bar */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${team.accentColor} opacity-90 group-hover:opacity-100 transition-all duration-300`} />

              {/* Background Watermark Text */}
              <span className="absolute -bottom-6 -right-4 text-7xl font-black italic font-mono text-white/[0.03] pointer-events-none uppercase tracking-tighter select-none">
                {team.id}
              </span>

              <div>
                {/* Team Header: Title + Logo */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest block mb-1">
                      CONSTRUCTOR
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black italic uppercase text-white tracking-wide leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-300 transition-all">
                      {team.name}
                    </h2>
                  </div>
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-zinc-900/90 p-3 rounded-2xl border border-zinc-800/80 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:border-zinc-600 transition-colors">
                    <img
                      src={team.logo}
                      alt={`${team.name} Logo`}
                      className="max-h-full max-w-full object-contain filter brightness-110 group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Team F1 Car Display Area */}
                <div className="relative w-full h-48 sm:h-60 bg-gradient-to-b from-zinc-900/90 via-zinc-950/60 to-zinc-950 rounded-2xl border border-zinc-800/80 flex items-center justify-center p-4 my-4 overflow-hidden group-hover:border-zinc-700 transition-all shadow-inner">
                  {/* Subtle Grid overlay for car container */}
                  <div className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none" />
                  
                  <img
                    src={team.carImage}
                    alt={`${team.name} Car`}
                    className="w-full h-full object-contain z-10 group-hover:scale-110 group-hover:rotate-1 transition-all duration-500 drop-shadow-[0_15px_15px_rgba(0,0,0,0.8)]"
                  />
                  
                  {/* Bottom Shadow Gradient */}
                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-zinc-950 to-transparent z-15 pointer-events-none" />
                </div>
              </div>

              {/* Drivers Lineup Footer */}
              <div className="pt-5 border-t border-zinc-800/80 mt-2 relative z-20">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E10600]" />
                    DRIVER LINEUP
                  </span>
                  <span className="text-[10px] font-mono text-zinc-600">2 SEATS</span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {team.drivers.map((drv) => (
                    <div
                      key={drv.code}
                      className="bg-zinc-900/80 hover:bg-zinc-900 px-4 py-3 rounded-2xl border border-zinc-800/80 flex items-center justify-between font-mono text-xs group/driver transition-all duration-300 hover:border-zinc-600 shadow-md"
                    >
                      <span className="font-bold text-zinc-200 group-hover/driver:text-white transition-colors flex items-center gap-2 truncate">
                        <span className="text-base">{drv.flag}</span>
                        <span className="truncate">{drv.name}</span>
                      </span>
                      <span className="text-[11px] text-[#E10600] font-black bg-[#E10600]/10 border border-[#E10600]/30 px-2 py-0.5 rounded-lg flex-shrink-0">
                        {drv.code}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default withAuth(TeamsPage);
