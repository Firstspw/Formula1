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
  return (
    <div className="relative min-h-screen bg-zinc-950 text-white font-sans selection:bg-[#E10600]">
      <Navigation />

      <main className="max-w-7xl mx-auto py-10 px-6">
        <header className="mb-10">
          <span className="text-xs font-mono font-bold text-[#E10600] tracking-widest uppercase bg-[#E10600]/10 px-3.5 py-1 rounded-full border border-[#E10600]/30">
            CONSTRUCTORS GRID
          </span>
          <h1 className="text-4xl sm:text-6xl font-black italic uppercase tracking-tight mt-3">
            F1 <span className="text-[#E10600]">TEAMS & CARS</span>
          </h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {F1_2026_TEAMS_FULL.map((team) => (
            <div
              key={team.id}
              className={`bg-zinc-900/70 border ${team.borderColor} rounded-3xl p-6 sm:p-8 backdrop-blur-md flex flex-col justify-between relative overflow-hidden group hover:border-zinc-500 transition-all duration-300 shadow-2xl`}
            >
              {/* Glowing Top Line */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${team.accentColor}`} />

              <div>
                {/* Header: Team Logo + Team Name */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <h2 className="text-2xl font-black italic uppercase text-white tracking-wide">
                    {team.name}
                  </h2>
                  <div className="w-16 h-16 bg-zinc-950 p-2 rounded-2xl border border-zinc-800 flex items-center justify-center flex-shrink-0">
                    <img
                      src={team.logo}
                      alt={`${team.name} Logo`}
                      className="max-h-full max-w-full object-contain filter brightness-110"
                    />
                  </div>
                </div>

                {/* Team F1 Car Image */}
                <div className="relative w-full h-44 sm:h-52 bg-zinc-950/80 rounded-2xl border border-zinc-800/80 flex items-center justify-center p-4 my-4 overflow-hidden group-hover:border-zinc-700 transition-all">
                  <img
                    src={team.carImage}
                    alt={`${team.name} Car`}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Drivers Lineup Footer */}
              <div className="pt-4 border-t border-zinc-800/80 mt-2">
                <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest block mb-2.5">
                  OFFICIAL DRIVERS
                </span>
                <div className="grid grid-cols-2 gap-3">
                  {team.drivers.map((drv) => (
                    <div
                      key={drv.code}
                      className="bg-zinc-950 px-3.5 py-2.5 rounded-xl border border-zinc-800 flex items-center justify-between font-mono text-xs"
                    >
                      <span className="font-bold text-zinc-200">{drv.flag} {drv.name}</span>
                      <span className="text-[10px] text-[#E10600] font-black">{drv.code}</span>
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