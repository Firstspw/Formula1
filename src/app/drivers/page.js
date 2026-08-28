"use client";

import Navigation from "@/components/navigation";
import withAuth from "@/components/withAuth";

const F1_2026_DRIVERS = [
  {
    number: "12",
    code: "ANT",
    name: "Kimi Antonelli",
    country: "Italy",
    flag: "🇮🇹",
    team: "Mercedes",
    teamColor: "border-emerald-500/50 text-emerald-400 bg-emerald-950/30 shadow-emerald-950/50",
    glowColor: "group-hover:border-emerald-500 group-hover:shadow-[0_0_25px_rgba(16,185,129,0.35)]",
    gradient: "from-emerald-900/40 via-zinc-900/50 to-zinc-950",
    points: 242,
    image: "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/mercedes/andant01/2026mercedesandant01right.webp"
  },
  {
    number: "63",
    code: "RUS",
    name: "George Russell",
    country: "Great Britain",
    flag: "🇬🇧",
    team: "Mercedes",
    teamColor: "border-emerald-500/50 text-emerald-400 bg-emerald-950/30 shadow-emerald-950/50",
    glowColor: "group-hover:border-emerald-500 group-hover:shadow-[0_0_25px_rgba(16,185,129,0.35)]",
    gradient: "from-emerald-900/40 via-zinc-900/50 to-zinc-950",
    points: 183,
    image: "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/mercedes/georus01/2026mercedesgeorus01right.webp"
  },
  {
    number: "44",
    code: "HAM",
    name: "Lewis Hamilton",
    country: "Great Britain",
    flag: "🇬🇧",
    team: "Ferrari",
    teamColor: "border-red-500/50 text-red-400 bg-red-950/30 shadow-red-950/50",
    glowColor: "group-hover:border-red-500 group-hover:shadow-[0_0_25px_rgba(239,68,68,0.35)]",
    gradient: "from-red-900/40 via-zinc-900/50 to-zinc-950",
    points: 183,
    image: "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/ferrari/lewham01/2026ferrarilewham01right.webp"
  },
  {
    number: "1",
    code: "NOR",
    name: "Lando Norris",
    country: "Great Britain",
    flag: "🇬🇧",
    team: "McLaren",
    teamColor: "border-orange-500/50 text-orange-400 bg-orange-950/30 shadow-orange-950/50",
    glowColor: "group-hover:border-orange-500 group-hover:shadow-[0_0_25px_rgba(249,115,22,0.35)]",
    gradient: "from-orange-900/40 via-zinc-900/50 to-zinc-950",
    points: 159,
    image: "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/mclaren/lannor01/2026mclarenlannor01right.webp"
  },
  {
    number: "16",
    code: "LEC",
    name: "Charles Leclerc",
    country: "Monaco",
    flag: "🇲🇨",
    team: "Ferrari",
    teamColor: "border-red-500/50 text-red-400 bg-red-950/30 shadow-red-950/50",
    glowColor: "group-hover:border-red-500 group-hover:shadow-[0_0_25px_rgba(239,68,68,0.35)]",
    gradient: "from-red-900/40 via-zinc-900/50 to-zinc-950",
    points: 155,
    image: "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/ferrari/chalec01/2026ferrarichalec01right.webp"
  },
  {
    number: "3",
    code: "VER",
    name: "Max Verstappen",
    country: "Netherlands",
    flag: "🇳🇱",
    team: "Red Bull Racing",
    teamColor: "border-blue-600/50 text-blue-400 bg-blue-950/30 shadow-blue-950/50",
    glowColor: "group-hover:border-blue-500 group-hover:shadow-[0_0_25px_rgba(59,130,246,0.35)]",
    gradient: "from-blue-900/40 via-zinc-900/50 to-zinc-950",
    points: 112,
    image: "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/redbullracing/maxver01/2026redbullracingmaxver01right.webp"
  },
  {
    number: "81",
    code: "PIA",
    name: "Oscar Piastri",
    country: "Australia",
    flag: "🇦🇺",
    team: "McLaren",
    teamColor: "border-orange-500/50 text-orange-400 bg-orange-950/30 shadow-orange-950/50",
    glowColor: "group-hover:border-orange-500 group-hover:shadow-[0_0_25px_rgba(249,115,22,0.35)]",
    gradient: "from-orange-900/40 via-zinc-900/50 to-zinc-950",
    points: 104,
    image: "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/mclaren/oscpia01/2026mclarenoscpia01right.webp"
  },
  {
    number: "6",
    code: "HAD",
    name: "Isack Hadjar",
    country: "France",
    flag: "🇫🇷",
    team: "Red Bull Racing",
    teamColor: "border-blue-600/50 text-blue-400 bg-blue-950/30 shadow-blue-950/50",
    glowColor: "group-hover:border-blue-500 group-hover:shadow-[0_0_25px_rgba(59,130,246,0.35)]",
    gradient: "from-blue-900/40 via-zinc-900/50 to-zinc-950",
    points: 68,
    image: "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/redbullracing/isahad01/2026redbullracingisahad01right.webp"
  },
  {
    number: "30",
    code: "LAW",
    name: "Liam Lawson",
    country: "New Zealand",
    flag: "🇳🇿",
    team: "Red Bull Racing",
    teamColor: "border-blue-500/50 text-blue-400 bg-blue-950/30 shadow-blue-950/50",
    glowColor: "group-hover:border-blue-500 group-hover:shadow-[0_0_25px_rgba(59,130,246,0.35)]",
    gradient: "from-blue-900/40 via-zinc-900/50 to-zinc-950",
    points: 49,
    image: "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/redbullracing/lialaw01/2026redbullracinglialaw01right.webp"
  },
  {
    number: "10",
    code: "GAS",
    name: "Pierre Gasly",
    country: "France",
    flag: "🇫🇷",
    team: "Alpine",
    teamColor: "border-sky-400/50 text-sky-400 bg-sky-950/30 shadow-sky-950/50",
    glowColor: "group-hover:border-sky-400 group-hover:shadow-[0_0_25px_rgba(56,189,248,0.35)]",
    gradient: "from-sky-900/40 via-zinc-900/50 to-zinc-950",
    points: 44,
    image: "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/alpine/piegas01/2026alpinepiegas01right.webp"
  },
  {
    number: "41",
    code: "LIN",
    name: "Arvid Lindblad",
    country: "Great Britain",
    flag: "🇬🇧",
    team: "Racing Bulls",
    teamColor: "border-blue-500/50 text-blue-400 bg-blue-950/30 shadow-blue-950/50",
    glowColor: "group-hover:border-blue-500 group-hover:shadow-[0_0_25px_rgba(59,130,246,0.35)]",
    gradient: "from-blue-900/40 via-zinc-900/50 to-zinc-950",
    points: 23,
    image: "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/racingbulls/arvlin01/2026racingbullsarvlin01right.webp"
  },
  {
    number: "43",
    code: "COL",
    name: "Franco Colapinto",
    country: "Argentina",
    flag: "🇦🇷",
    team: "Alpine",
    teamColor: "border-sky-400/50 text-sky-400 bg-sky-950/30 shadow-sky-950/50",
    glowColor: "group-hover:border-sky-400 group-hover:shadow-[0_0_25px_rgba(56,189,248,0.35)]",
    gradient: "from-sky-900/40 via-zinc-900/50 to-zinc-950",
    points: 19,
    image: "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/alpine/fracol01/2026alpinefracol01right.webp"
  },
  {
    number: "87",
    code: "BEA",
    name: "Oliver Bearman",
    country: "Great Britain",
    flag: "🇬🇧",
    team: "Haas F1 Team",
    teamColor: "border-zinc-400/50 text-zinc-300 bg-zinc-900/30 shadow-zinc-950/50",
    glowColor: "group-hover:border-zinc-400 group-hover:shadow-[0_0_25px_rgba(161,161,170,0.35)]",
    gradient: "from-zinc-800/40 via-zinc-900/50 to-zinc-950",
    points: 18,
    image: "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/haasf1team/olibea01/2026haasf1teamolibea01right.webp"
  },
  {
    number: "5",
    code: "BOR",
    name: "Gabriel Bortoleto",
    country: "Brazil",
    flag: "🇧🇷",
    team: "Audi",
    teamColor: "border-red-600/50 text-red-400 bg-red-950/30 shadow-red-950/50",
    glowColor: "group-hover:border-red-500 group-hover:shadow-[0_0_25px_rgba(239,68,68,0.35)]",
    gradient: "from-red-900/40 via-zinc-900/50 to-zinc-950",
    points: 10,
    image: "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/audi/gabbor01/2026audigabbor01right.webp"
  },
  {
    number: "27",
    code: "HUL",
    name: "Nico Hülkenberg",
    country: "Germany",
    flag: "🇩🇪",
    team: "Audi",
    teamColor: "border-red-600/50 text-red-400 bg-red-950/30 shadow-red-950/50",
    glowColor: "group-hover:border-red-500 group-hover:shadow-[0_0_25px_rgba(239,68,68,0.35)]",
    gradient: "from-red-900/40 via-zinc-900/50 to-zinc-950",
    points: 6,
    image: "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/audi/nichul01/2026audinichul01right.webp"
  },
  {
    number: "55",
    code: "SAI",
    name: "Carlos Sainz",
    country: "Spain",
    flag: "🇪🇸",
    team: "Williams",
    teamColor: "border-blue-500/50 text-blue-400 bg-blue-950/30 shadow-blue-950/50",
    glowColor: "group-hover:border-blue-500 group-hover:shadow-[0_0_25px_rgba(59,130,246,0.35)]",
    gradient: "from-blue-900/40 via-zinc-900/50 to-zinc-950",
    points: 6,
    image: "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/williams/carsai01/2026williamscarsai01right.webp"
  },
  {
    number: "23",
    code: "ALB",
    name: "Alexander Albon",
    country: "Thailand",
    flag: "🇹🇭",
    team: "Williams",
    teamColor: "border-blue-500/50 text-blue-400 bg-blue-950/30 shadow-blue-950/50",
    glowColor: "group-hover:border-blue-500 group-hover:shadow-[0_0_25px_rgba(59,130,246,0.35)]",
    gradient: "from-blue-900/40 via-zinc-900/50 to-zinc-950",
    points: 5,
    image: "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/williams/alealb01/2026williamsalealb01right.webp"
  },
  {
    number: "31",
    code: "OCO",
    name: "Esteban Ocon",
    country: "France",
    flag: "🇫🇷",
    team: "Haas F1 Team",
    teamColor: "border-zinc-400/50 text-zinc-300 bg-zinc-900/30 shadow-zinc-950/50",
    glowColor: "group-hover:border-zinc-400 group-hover:shadow-[0_0_25px_rgba(161,161,170,0.35)]",
    gradient: "from-zinc-800/40 via-zinc-900/50 to-zinc-950",
    points: 3,
    image: "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/haasf1team/estoco01/2026haasf1teamestoco01right.webp"
  },
  {
    number: "14",
    code: "ALO",
    name: "Fernando Alonso",
    country: "Spain",
    flag: "🇪🇸",
    team: "Aston Martin",
    teamColor: "border-emerald-600/50 text-emerald-400 bg-emerald-950/30 shadow-emerald-950/50",
    glowColor: "group-hover:border-emerald-500 group-hover:shadow-[0_0_25px_rgba(16,185,129,0.35)]",
    gradient: "from-emerald-900/40 via-zinc-900/50 to-zinc-950",
    points: 3,
    image: "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/astonmartin/feralo01/2026astonmartinferalo01right.webp"
  },
  {
    number: "22",
    code: "TSU",
    name: "Yuki Tsunoda",
    country: "Japan",
    flag: "🇯🇵",
    team: "Racing Bulls",
    teamColor: "border-blue-500/50 text-blue-400 bg-blue-950/30 shadow-blue-950/50",
    glowColor: "group-hover:border-blue-500 group-hover:shadow-[0_0_25px_rgba(59,130,246,0.35)]",
    gradient: "from-blue-900/40 via-zinc-900/50 to-zinc-950",
    points: 0,
    image: "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/racingbulls/yuktsu01/2026racingbullsyuktsu01right.webp"
  },
  {
    number: "18",
    code: "STR",
    name: "Lance Stroll",
    country: "Canada",
    flag: "🇨🇦",
    team: "Aston Martin",
    teamColor: "border-emerald-600/50 text-emerald-400 bg-emerald-950/30 shadow-emerald-950/50",
    glowColor: "group-hover:border-emerald-500 group-hover:shadow-[0_0_25px_rgba(16,185,129,0.35)]",
    gradient: "from-emerald-900/40 via-zinc-900/50 to-zinc-950",
    points: 0,
    image: "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/astonmartin/lanstr01/2026astonmartinlanstr01right.webp"
  },
  {
    number: "77",
    code: "BOT",
    name: "Valtteri Bottas",
    country: "Finland",
    flag: "🇫🇮",
    team: "Cadillac",
    teamColor: "border-zinc-500/50 text-zinc-300 bg-zinc-900/30 shadow-zinc-950/50",
    glowColor: "group-hover:border-zinc-400 group-hover:shadow-[0_0_25px_rgba(161,161,170,0.35)]",
    gradient: "from-zinc-800/40 via-zinc-900/50 to-zinc-950",
    points: 0,
    image: "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/cadillac/valbot01/2026cadillacvalbot01right.webp"
  },
  {
    number: "11",
    code: "PER",
    name: "Sergio Pérez",
    country: "Mexico",
    flag: "🇲🇽",
    team: "Cadillac",
    teamColor: "border-zinc-500/50 text-zinc-300 bg-zinc-900/30 shadow-zinc-950/50",
    glowColor: "group-hover:border-zinc-400 group-hover:shadow-[0_0_25px_rgba(161,161,170,0.35)]",
    gradient: "from-zinc-800/40 via-zinc-900/50 to-zinc-950",
    points: 0,
    image: "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/cadillac/serper01/2026cadillacserper01right.webp"
  }
];

const maxPoints = Math.max(...F1_2026_DRIVERS.map((d) => d.points));

function DriversPage() {
  const p1 = F1_2026_DRIVERS[0];
  const p2 = F1_2026_DRIVERS[1];
  const p3 = F1_2026_DRIVERS[2];

  return (
    <div className="relative min-h-screen bg-black text-white font-sans selection:bg-[#E10600] selection:text-white overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#E10600]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <Navigation />

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 relative z-10">
        {/* Header Section */}
        <header className="mb-12 text-center sm:text-left flex flex-col sm:flex-row sm:items-end justify-between border-b border-zinc-800/80 pb-8 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#E10600]/10 border border-[#E10600]/40 px-4 py-1.5 rounded-full backdrop-blur-md shadow-[0_0_15px_rgba(225,6,0,0.2)]">
              <span className="w-2 h-2 rounded-full bg-[#E10600] animate-ping" />
              <span className="text-xs font-mono font-bold text-[#E10600] tracking-widest uppercase">
                2026 Official Standings
              </span>
            </div>
            <h1 className="text-4xl sm:text-7xl font-black italic uppercase tracking-tighter mt-4 bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
              F1 <span className="text-[#E10600] drop-shadow-[0_0_25px_rgba(225,6,0,0.6)]">DRIVERS</span> CHAMPIONSHIP
            </h1>
          </div>
          <div className="bg-zinc-900/60 backdrop-blur-md border border-zinc-800 p-4 rounded-2xl flex items-center gap-6 justify-around sm:justify-end">
            <div>
              <p className="text-[10px] font-mono uppercase text-zinc-400">Total Drivers</p>
              <p className="text-2xl font-black font-mono text-white">{F1_2026_DRIVERS.length}</p>
            </div>
            <div className="w-px h-8 bg-zinc-800" />
            <div>
              <p className="text-[10px] font-mono uppercase text-zinc-400">Leader</p>
              <p className="text-2xl font-black font-mono text-[#E10600]">{p1.code}</p>
            </div>
          </div>
        </header>

        {/* 🏆 PODIUM SECTION (TOP 1, 2, 3) 🏆 */}
        <section className="mb-16">
          <h2 className="text-xl font-black italic uppercase tracking-widest text-zinc-400 mb-6 flex items-center gap-2">
            <span className="text-amber-400">🏆</span> Championship Leaders
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
            {/* P2 - Silver */}
            <div className="order-2 md:order-1 bg-gradient-to-b from-zinc-800/40 via-zinc-900/60 to-zinc-950 border border-slate-400/30 rounded-3xl p-6 relative backdrop-blur-xl shadow-[0_0_35px_rgba(148,163,184,0.15)] hover:border-slate-300 transition-all">
              <div className="absolute -top-4 left-6 bg-slate-300 text-black font-black font-mono text-sm px-4 py-1 rounded-full shadow-lg flex items-center gap-1 z-30">
                🥈 P2 - SECOND PLACE
              </div>
              <div className="relative h-64 w-full overflow-hidden rounded-2xl mb-4 bg-zinc-900/80 border border-zinc-800">
                <img 
                  src={p2.image} 
                  alt={p2.name} 
                  className="w-full h-full object-cover object-[center_0%] scale-105" 
                />
                <span className="absolute bottom-2 right-2 text-2xl z-20">{p2.flag}</span>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${p2.teamColor}`}>
                    {p2.team}
                  </span>
                  <h3 className="text-2xl font-black italic uppercase text-white mt-2">{p2.name}</h3>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-black italic font-mono text-slate-300">{p2.points}</span>
                  <span className="text-[10px] font-mono text-zinc-500 block">PTS</span>
                </div>
              </div>
            </div>

            {/* P1 - Gold */}
            <div className="order-1 md:order-2 bg-gradient-to-b from-amber-500/20 via-zinc-900/80 to-zinc-950 border-2 border-amber-500/60 rounded-3xl p-6 relative backdrop-blur-xl shadow-[0_0_50px_rgba(245,158,11,0.25)] hover:border-amber-400 transition-all md:-translate-y-4">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-black font-mono text-base px-6 py-1.5 rounded-full shadow-2xl flex items-center gap-1 tracking-wider z-30">
                👑 P1 - LEADER
              </div>
              <div className="relative h-72 w-full overflow-hidden rounded-2xl mb-4 bg-amber-950/20 border border-amber-500/30">
                <img 
                  src={p1.image} 
                  alt={p1.name} 
                  className="w-full h-full object-cover object-[center_0%] scale-105" 
                />
                <span className="absolute bottom-2 right-2 text-3xl z-20">{p1.flag}</span>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <span className={`text-[11px] font-mono font-bold px-3 py-1 rounded-full border ${p1.teamColor}`}>
                    {p1.team}
                  </span>
                  <h3 className="text-3xl font-black italic uppercase text-white mt-2 drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]">
                    {p1.name}
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-4xl font-black italic font-mono text-amber-400">{p1.points}</span>
                  <span className="text-[10px] font-mono text-zinc-400 block">PTS</span>
                </div>
              </div>
            </div>

            {/* P3 - Bronze */}
            <div className="order-3 bg-gradient-to-b from-amber-900/30 via-zinc-900/60 to-zinc-950 border border-amber-700/30 rounded-3xl p-6 relative backdrop-blur-xl shadow-[0_0_35px_rgba(180,83,9,0.15)] hover:border-amber-600 transition-all">
              <div className="absolute -top-4 left-6 bg-amber-700 text-white font-black font-mono text-sm px-4 py-1 rounded-full shadow-lg flex items-center gap-1 z-30">
                🥉 P3 - THIRD PLACE
              </div>
              <div className="relative h-64 w-full overflow-hidden rounded-2xl mb-4 bg-zinc-900/80 border border-zinc-800">
                <img 
                  src={p3.image} 
                  alt={p3.name} 
                  className="w-full h-full object-cover object-[center_0%] scale-105" 
                />
                <span className="absolute bottom-2 right-2 text-2xl z-20">{p3.flag}</span>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${p3.teamColor}`}>
                    {p3.team}
                  </span>
                  <h3 className="text-2xl font-black italic uppercase text-white mt-2">{p3.name}</h3>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-black italic font-mono text-amber-600">{p3.points}</span>
                  <span className="text-[10px] font-mono text-zinc-500 block">PTS</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 🏎️ FULL GRID STANDINGS 🏎️ */}
        <section>
          <h2 className="text-xl font-black italic uppercase tracking-widest text-zinc-400 mb-6">
            All Drivers Standings
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {F1_2026_DRIVERS.map((driver, index) => {
              const isTop3 = index < 3;
              const rankBadges = ["🥇 P1", "🥈 P2", "🥉 P3"];

              return (
                <div
                  key={driver.code}
                  className={`relative bg-zinc-950/80 border border-zinc-800/80 rounded-3xl overflow-hidden backdrop-blur-xl transition-all duration-500 group flex flex-col justify-between hover:-translate-y-2 ${driver.glowColor}`}
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-zinc-700 group-hover:via-[#E10600] to-transparent transition-all duration-500 z-30" />

                  {/* Card Header & Portrait Area */}
                  <div className={`relative h-64 w-full bg-gradient-to-b ${driver.gradient} overflow-hidden`}>
                    <span className="absolute -top-3 right-2 text-7xl font-black italic font-mono text-white/5 group-hover:text-white/10 transition-colors z-0 select-none">
                      P{index + 1}
                    </span>

                    <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                      <span className="text-xl bg-zinc-950/80 backdrop-blur-md px-3 py-1.5 rounded-2xl border border-zinc-800 shadow-lg">
                        {driver.flag}
                      </span>
                      {isTop3 && (
                        <span className="text-xs bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-black px-2.5 py-1 rounded-xl shadow-md">
                          {rankBadges[index]}
                        </span>
                      )}
                    </div>

                    <span className="absolute top-4 right-4 z-20 text-xs font-mono font-bold tracking-widest text-zinc-400 bg-zinc-950/70 backdrop-blur-md px-2.5 py-1 rounded-lg border border-zinc-800">
                      {driver.code}
                    </span>

                    {/* Driver Portrait Image Focused on Head to Chest */}
                    <img
                      src={driver.image}
                      alt={driver.name}
                      className="w-full h-full object-cover object-[center_0%] scale-105 z-10 group-hover:scale-110 transition-transform duration-500 ease-out"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />

                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent z-15" />
                  </div>

                  {/* Card Body Info */}
                  <div className="p-5 bg-zinc-950 relative z-20 -mt-4 border-t border-zinc-900/60 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-end mb-2">
                        <div>
                          <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block">
                            {driver.country}
                          </span>
                          <h3 className="text-xl font-black italic uppercase text-white group-hover:text-[#E10600] transition-colors leading-tight">
                            {driver.name}
                          </h3>
                        </div>
                        <div className="text-right">
                          <span className="text-2xl font-black italic font-mono text-white group-hover:text-[#E10600] transition-colors">
                            {driver.points}
                          </span>
                          <span className="text-[10px] font-mono text-zinc-500 block -mt-1">PTS</span>
                        </div>
                      </div>

                      <div className="w-full bg-zinc-900 h-1.5 rounded-full overflow-hidden my-3 border border-zinc-800">
                        <div
                          className="bg-gradient-to-r from-red-600 to-[#E10600] h-full rounded-full transition-all duration-1000"
                          style={{ width: `${maxPoints > 0 ? (driver.points / maxPoints) * 100 : 0}%` }}
                        />
                      </div>
                    </div>

                    <div className="pt-2 flex justify-between items-center border-t border-zinc-900">
                      <span className={`text-[11px] font-mono font-bold px-3 py-1 rounded-full border shadow-sm ${driver.teamColor}`}>
                        {driver.team}
                      </span>
                      <span className="text-sm font-black italic font-mono text-zinc-500 group-hover:text-white transition-colors">
                        #{driver.number}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}

export default withAuth(DriversPage);
