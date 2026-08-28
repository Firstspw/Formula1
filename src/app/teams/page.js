"use client";

import Navigation from "@/components/navigation";
import withAuth from "@/components/withAuth";

const F1_2026_TEAMS_FULL = [
  {
    id: "mercedes",
    name: "Mercedes",
    logo: "https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000001/common/f1/2026/mercedes/2026mercedeslogowhite.webp",
    carImage:
      "https://media.formula1.com/image/upload/c_lfill,h_224/q_auto/d_common:f1:2026:fallback:car:2026fallbackcarright.webp/v1740000001/common/f1/2026/mercedes/2026mercedescarright.webp",
    cardBg: "bg-[#00c4a4]",
    borderColor: "border-[#00c4a4]/60",
    accentColor: "from-[#00c4a4] to-teal-300",
    drivers: [
      { name: "George RUSSELL", code: "RUS", flag: "🇬🇧" },
      { name: "Kimi ANTONELLI", code: "ANT", flag: "🇮🇹" },
    ],
  },
  {
    id: "ferrari",
    name: "Ferrari",
    logo: "https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000001/common/f1/2026/ferrari/2026ferrarilogowhite.webp",
    carImage:
      "https://media.formula1.com/image/upload/c_lfill,h_224/q_auto/d_common:f1:2026:fallback:car:2026fallbackcarright.webp/v1740000001/common/f1/2026/ferrari/2026ferraricarright.webp",
    cardBg: "bg-[#d0001a]",
    borderColor: "border-[#d0001a]/60",
    accentColor: "from-[#d0001a] to-red-400",
    drivers: [
      { name: "Charles LECLERC", code: "LEC", flag: "🇲🇨" },
      { name: "Lewis HAMILTON", code: "HAM", flag: "🇬🇧" },
    ],
  },
  {
    id: "mclaren",
    name: "McLaren",
    logo: "https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000001/common/f1/2026/mclaren/2026mclarenlogowhite.webp",
    carImage:
      "https://media.formula1.com/image/upload/c_lfill,h_224/q_auto/d_common:f1:2026:fallback:car:2026fallbackcarright.webp/v1740000001/common/f1/2026/mclaren/2026mclarencarright.webp",
    cardBg: "bg-[#ff7a00]",
    borderColor: "border-[#ff7a00]/60",
    accentColor: "from-[#ff7a00] to-amber-400",
    drivers: [
      { name: "Lando NORRIS", code: "NOR", flag: "🇬🇧" },
      { name: "Oscar PIASTRI", code: "PIA", flag: "🇦🇺" },
    ],
  },
  {
    id: "redbull",
    name: "Red Bull Racing",
    logo: "https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000001/common/f1/2026/redbullracing/2026redbullracinglogowhite.webp",
    carImage:
      "https://media.formula1.com/image/upload/c_lfill,h_224/q_auto/d_common:f1:2026:fallback:car:2026fallbackcarright.webp/v1740000001/common/f1/2026/redbullracing/2026redbullracingcarright.webp",
    cardBg: "bg-[#1848cc]",
    borderColor: "border-[#1848cc]/60",
    accentColor: "from-[#1848cc] to-blue-400",
    drivers: [
      { name: "Max VERSTAPPEN", code: "VER", flag: "🇳🇱" },
      { name: "Isack HADJAR", code: "HAD", flag: "🇫🇷" },
    ],
  },
  {
    id: "racingbulls",
    name: "Racing Bulls",
    logo: "https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000001/common/f1/2026/racingbulls/2026racingbullslogowhite.webp",
    carImage:
      "https://media.formula1.com/image/upload/c_lfill,h_224/q_auto/d_common:f1:2026:fallback:car:2026fallbackcarright.webp/v1740000001/common/f1/2026/racingbulls/2026racingbullscarright.webp",
    cardBg: "bg-[#356cee]",
    borderColor: "border-[#356cee]/60",
    accentColor: "from-[#356cee] to-sky-300",
    drivers: [
      { name: "Liam LAWSON", code: "LAW", flag: "🇳🇿" },
      { name: "Arvid LINDBLAD", code: "LIN", flag: "🇬🇧" },
    ],
  },
  {
    id: "alpine",
    name: "Alpine",
    logo: "https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000001/common/f1/2026/alpine/2026alpinelogowhite.webp",
    carImage:
      "https://media.formula1.com/image/upload/c_lfill,h_224/q_auto/d_common:f1:2026:fallback:car:2026fallbackcarright.webp/v1740000001/common/f1/2026/alpine/2026alpinecarright.webp",
    cardBg: "bg-[#0092d0]",
    borderColor: "border-[#0092d0]/60",
    accentColor: "from-[#0092d0] to-pink-400",
    drivers: [
      { name: "Pierre GASLY", code: "GAS", flag: "🇫🇷" },
      { name: "Franco COLAPINTO", code: "COL", flag: "🇦🇷" },
    ],
  },
  {
    id: "haas",
    name: "Haas F1 Team",
    logo: "https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000001/common/f1/2026/haas/2026haaslogowhite.webp",
    carImage:
      "https://media.formula1.com/image/upload/c_lfill,h_224/q_auto/d_common:f1:2026:fallback:car:2026fallbackcarright.webp/v1740000001/common/f1/2026/haas/2026haascarright.webp",
    cardBg: "bg-[#a2a8ad]",
    borderColor: "border-[#a2a8ad]/60",
    accentColor: "from-[#a2a8ad] to-zinc-200",
    drivers: [
      { name: "Esteban OCON", code: "OCO", flag: "🇫🇷" },
      { name: "Oliver BEARMAN", code: "BEA", flag: "🇬🇧" },
    ],
  },
  {
    id: "audi",
    name: "Audi",
    logo: "https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000001/common/f1/2026/audi/2026audilogowhite.webp",
    carImage:
      "https://media.formula1.com/image/upload/c_lfill,h_224/q_auto/d_common:f1:2026:fallback:car:2026fallbackcarright.webp/v1740000001/common/f1/2026/audi/2026audicarright.webp",
    cardBg: "bg-[#f20500]",
    borderColor: "border-[#f20500]/60",
    accentColor: "from-[#f20500] to-orange-500",
    drivers: [
      { name: "Nico HÜLKENBERG", code: "HUL", flag: "🇩🇪" },
      { name: "Gabriel BORTOLETO", code: "BOR", flag: "🇧🇷" },
    ],
  },
  {
    id: "williams",
    name: "Williams",
    logo: "https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000001/common/f1/2026/williams/2026williamslogowhite.webp",
    carImage:
      "https://media.formula1.com/image/upload/c_lfill,h_224/q_auto/d_common:f1:2026:fallback:car:2026fallbackcarright.webp/v1740000001/common/f1/2026/williams/2026williamscarright.webp",
    cardBg: "bg-[#1065f0]",
    borderColor: "border-[#1065f0]/60",
    accentColor: "from-[#1065f0] to-blue-300",
    drivers: [
      { name: "Carlos SAINZ", code: "SAI", flag: "🇪🇸" },
      { name: "Alexander ALBON", code: "ALB", flag: "🇹🇭" },
    ],
  },
  {
    id: "astonmartin",
    name: "Aston Martin",
    logo: "https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000001/common/f1/2026/astonmartin/2026astonmartinlogowhite.webp",
    carImage:
      "https://media.formula1.com/image/upload/c_lfill,h_224/q_auto/d_common:f1:2026:fallback:car:2026fallbackcarright.webp/v1740000001/common/f1/2026/astonmartin/2026astonmartincarright.webp",
    cardBg: "bg-[#20966e]",
    borderColor: "border-[#20966e]/60",
    accentColor: "from-[#20966e] to-emerald-300",
    drivers: [
      { name: "Fernando ALONSO", code: "ALO", flag: "🇪🇸" },
      { name: "Lance STROLL", code: "STR", flag: "🇨🇦" },
    ],
  },
  {
    id: "cadillac",
    name: "Cadillac",
    logo: "https://media.formula1.com/image/upload/c_lfill,w_48/q_auto/v1740000001/common/f1/2026/cadillac/2026cadillaclogowhite.webp",
    carImage:
      "https://media.formula1.com/image/upload/c_lfill,h_224/q_auto/d_common:f1:2026:fallback:car:2026fallbackcarright.webp/v1740000001/common/f1/2026/cadillac/2026cadillaccarright.webp",
    cardBg: "bg-[#8a9095]",
    borderColor: "border-[#8a9095]/60",
    accentColor: "from-[#8a9095] to-zinc-300",
    drivers: [
      { name: "Sergio PÉREZ", code: "PER", flag: "🇲🇽" },
      { name: "Valtteri BOTTAS", code: "BOT", flag: "🇫🇮" },
    ],
  },
];

function TeamsPage() {
  const totalDrivers = F1_2026_TEAMS_FULL.reduce(
    (acc, team) => acc + team.drivers.length,
    0,
  );

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
              F1{" "}
              <span className="text-[#E10600] drop-shadow-[0_0_30px_rgba(225,6,0,0.6)]">
                TEAMS & CARS
              </span>
            </h1>
          </div>

          {/* Quick Stats Banner */}
          <div className="bg-zinc-900/60 backdrop-blur-xl border border-zinc-800/80 p-4 rounded-2xl flex items-center gap-6 justify-around sm:justify-end shadow-2xl">
            <div>
              <p className="text-[10px] font-mono uppercase text-zinc-400">
                Total Teams
              </p>
              <p className="text-2xl font-black font-mono text-white">
                {F1_2026_TEAMS_FULL.length}
              </p>
            </div>
            <div className="w-px h-8 bg-zinc-800" />
            <div>
              <p className="text-[10px] font-mono uppercase text-zinc-400">
                Active Drivers
              </p>
              <p className="text-2xl font-black font-mono text-[#E10600]">
                {totalDrivers}
              </p>
            </div>
            <div className="w-px h-8 bg-zinc-800" />
            <div>
              <p className="text-[10px] font-mono uppercase text-zinc-400">
                Era
              </p>
              <p className="text-2xl font-black font-mono text-emerald-400">
                2026
              </p>
            </div>
          </div>
        </header>

        {/* Teams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {F1_2026_TEAMS_FULL.map((team) => (
            <div
              key={team.id}
              className={`${team.cardBg} border ${team.borderColor} rounded-3xl p-6 sm:p-8 backdrop-blur-2xl flex flex-col justify-between relative overflow-hidden group hover:border-white/80 transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:-translate-y-1.5`}
            >
              {/* Animated Top Light Bar */}
              <div
                className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${team.accentColor} opacity-90 group-hover:opacity-100 transition-all duration-300`}
              />

              {/* Background Micro Watermark */}
              <span className="absolute -bottom-6 -right-4 text-7xl font-black italic font-mono text-white/10 pointer-events-none uppercase tracking-tighter select-none">
                {team.id}
              </span>

              <div>
                {/* Team Header: Title + Logo Container */}
                <div className="flex items-center justify-between gap-4 mb-6 relative z-10">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-white/80 uppercase tracking-widest block mb-1">
                      CONSTRUCTOR
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black italic uppercase text-white tracking-wide leading-tight drop-shadow-md">
                      {team.name}
                    </h2>
                  </div>
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-black/25 p-3 rounded-2xl border border-white/20 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:border-white/50 transition-colors backdrop-blur-md">
                    <img
                      src={team.logo}
                      alt={`${team.name} Logo`}
                      className="max-h-full max-w-full object-contain filter brightness-120 group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Team F1 Car Display Area (เด้งพุ่งขึ้นเมื่อเอาเมาส์ชี้) */}
                <div className="relative w-full h-48 sm:h-60 bg-black/20 rounded-2xl border border-white/15 flex items-center justify-center p-4 my-4 overflow-hidden group-hover:border-white/40 transition-all shadow-inner backdrop-blur-sm">
                  {/* Grid lines overlay */}
                  <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

                  <img
                    src={team.carImage}
                    alt={`${team.name} Car`}
                    className="w-full h-full object-contain z-10 transition-all duration-500 ease-out group-hover:scale-115 group-hover:-translate-y-2 group-hover:translate-x-2 drop-shadow-[0_20px_15px_rgba(0,0,0,0.7)]"
                  />

                  {/* Bottom Shadow Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-black/40 to-transparent z-15 pointer-events-none" />
                </div>
              </div>

              {/* Drivers Lineup Footer (2 Seats Bottom Box) */}
              <div className="pt-5 border-t border-white/20 mt-2 relative z-20">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono font-bold text-white/90 uppercase tracking-widest flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    DRIVER LINEUP
                  </span>
                  <span className="text-[10px] font-mono text-white/70">
                    2 SEATS
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {team.drivers.map((drv) => (
                    <div
                      key={drv.code}
                      className="bg-black/30 hover:bg-black/50 px-4 py-3 rounded-2xl border border-white/20 flex items-center justify-between font-mono text-xs group/driver transition-all duration-300 shadow-md backdrop-blur-md"
                    >
                      <span className="font-bold text-white transition-colors flex items-center gap-2 truncate">
                        <span className="text-base">{drv.flag}</span>
                        <span className="truncate">{drv.name}</span>
                      </span>
                      <span className="text-[11px] text-white font-black bg-white/20 border border-white/30 px-2 py-0.5 rounded-lg flex-shrink-0">
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
