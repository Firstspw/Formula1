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
    cardBg: "bg-[#00c4a4]",
    borderColor: "border-[#00c4a4]/60",
    accentColor: "from-[#00c4a4] to-teal-300",
    points: 242,
    image:
      "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/mercedes/andant01/2026mercedesandant01right.webp",
  },
  {
    number: "63",
    code: "RUS",
    name: "George Russell",
    country: "Great Britain",
    flag: "🇬🇧",
    team: "Mercedes",
    cardBg: "bg-[#00c4a4]",
    borderColor: "border-[#00c4a4]/60",
    accentColor: "from-[#00c4a4] to-teal-300",
    points: 183,
    image:
      "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/mercedes/georus01/2026mercedesgeorus01right.webp",
  },
  {
    number: "44",
    code: "HAM",
    name: "Lewis Hamilton",
    country: "Great Britain",
    flag: "🇬🇧",
    team: "Ferrari",
    cardBg: "bg-[#d0001a]",
    borderColor: "border-[#d0001a]/60",
    accentColor: "from-[#d0001a] to-red-400",
    points: 183,
    image:
      "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/ferrari/lewham01/2026ferrarilewham01right.webp",
  },
  {
    number: "1",
    code: "NOR",
    name: "Lando Norris",
    country: "Great Britain",
    flag: "🇬🇧",
    team: "McLaren",
    cardBg: "bg-[#ff7a00]",
    borderColor: "border-[#ff7a00]/60",
    accentColor: "from-[#ff7a00] to-amber-400",
    points: 159,
    image:
      "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/mclaren/lannor01/2026mclarenlannor01right.webp",
  },
  {
    number: "16",
    code: "LEC",
    name: "Charles Leclerc",
    country: "Monaco",
    flag: "🇲🇨",
    team: "Ferrari",
    cardBg: "bg-[#d0001a]",
    borderColor: "border-[#d0001a]/60",
    accentColor: "from-[#d0001a] to-red-400",
    points: 155,
    image:
      "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/ferrari/chalec01/2026ferrarichalec01right.webp",
  },
  {
    number: "3",
    code: "VER",
    name: "Max Verstappen",
    country: "Netherlands",
    flag: "🇳🇱",
    team: "Red Bull Racing",
    cardBg: "bg-[#1848cc]",
    borderColor: "border-[#1848cc]/60",
    accentColor: "from-[#1848cc] to-blue-400",
    points: 112,
    image:
      "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/redbullracing/maxver01/2026redbullracingmaxver01right.webp",
  },
  {
    number: "81",
    code: "PIA",
    name: "Oscar Piastri",
    country: "Australia",
    flag: "🇦🇺",
    team: "McLaren",
    cardBg: "bg-[#ff7a00]",
    borderColor: "border-[#ff7a00]/60",
    accentColor: "from-[#ff7a00] to-amber-400",
    points: 104,
    image:
      "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/mclaren/oscpia01/2026mclarenoscpia01right.webp",
  },
  {
    number: "6",
    code: "HAD",
    name: "Isack Hadjar",
    country: "France",
    flag: "🇫🇷",
    team: "Red Bull Racing",
    cardBg: "bg-[#1848cc]",
    borderColor: "border-[#1848cc]/60",
    accentColor: "from-[#1848cc] to-blue-400",
    points: 68,
    image:
      "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/redbullracing/isahad01/2026redbullracingisahad01right.webp",
  },
  {
    number: "30",
    code: "LAW",
    name: "Liam Lawson",
    country: "New Zealand",
    flag: "🇳🇿",
    team: "Red Bull Racing",
    cardBg: "bg-[#1848cc]",
    borderColor: "border-[#1848cc]/60",
    accentColor: "from-[#1848cc] to-blue-400",
    points: 49,
    image:
      "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/redbullracing/lialaw01/2026redbullracinglialaw01right.webp",
  },
  {
    number: "10",
    code: "GAS",
    name: "Pierre Gasly",
    country: "France",
    flag: "🇫🇷",
    team: "Alpine",
    cardBg: "bg-[#0092d0]",
    borderColor: "border-[#0092d0]/60",
    accentColor: "from-[#0092d0] to-pink-400",
    points: 44,
    image:
      "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/alpine/piegas01/2026alpinepiegas01right.webp",
  },
  {
    number: "41",
    code: "LIN",
    name: "Arvid Lindblad",
    country: "Great Britain",
    flag: "🇬🇧",
    team: "Racing Bulls",
    cardBg: "bg-[#356cee]",
    borderColor: "border-[#356cee]/60",
    accentColor: "from-[#356cee] to-sky-300",
    points: 23,
    image:
      "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/racingbulls/arvlin01/2026racingbullsarvlin01right.webp",
  },
  {
    number: "43",
    code: "COL",
    name: "Franco Colapinto",
    country: "Argentina",
    flag: "🇦🇷",
    team: "Alpine",
    cardBg: "bg-[#0092d0]",
    borderColor: "border-[#0092d0]/60",
    accentColor: "from-[#0092d0] to-pink-400",
    points: 19,
    image:
      "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/alpine/fracol01/2026alpinefracol01right.webp",
  },
  {
    number: "87",
    code: "BEA",
    name: "Oliver Bearman",
    country: "Great Britain",
    flag: "🇬🇧",
    team: "Haas F1 Team",
    cardBg: "bg-[#a2a8ad]",
    borderColor: "border-[#a2a8ad]/60",
    accentColor: "from-[#a2a8ad] to-zinc-200",
    points: 18,
    image:
      "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/haasf1team/olibea01/2026haasf1teamolibea01right.webp",
  },
  {
    number: "5",
    code: "BOR",
    name: "Gabriel Bortoleto",
    country: "Brazil",
    flag: "🇧🇷",
    team: "Audi",
    cardBg: "bg-[#f20500]",
    borderColor: "border-[#f20500]/60",
    accentColor: "from-[#f20500] to-orange-500",
    points: 10,
    image:
      "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/audi/gabbor01/2026audigabbor01right.webp",
  },
  {
    number: "27",
    code: "HUL",
    name: "Nico Hülkenberg",
    country: "Germany",
    flag: "🇩🇪",
    team: "Audi",
    cardBg: "bg-[#f20500]",
    borderColor: "border-[#f20500]/60",
    accentColor: "from-[#f20500] to-orange-500",
    points: 6,
    image:
      "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/audi/nichul01/2026audinichul01right.webp",
  },
  {
    number: "55",
    code: "SAI",
    name: "Carlos Sainz",
    country: "Spain",
    flag: "🇪🇸",
    team: "Williams",
    cardBg: "bg-[#1065f0]",
    borderColor: "border-[#1065f0]/60",
    accentColor: "from-[#1065f0] to-blue-300",
    points: 6,
    image:
      "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/williams/carsai01/2026williamscarsai01right.webp",
  },
  {
    number: "23",
    code: "ALB",
    name: "Alexander Albon",
    country: "Thailand",
    flag: "🇹🇭",
    team: "Williams",
    cardBg: "bg-[#1065f0]",
    borderColor: "border-[#1065f0]/60",
    accentColor: "from-[#1065f0] to-blue-300",
    points: 5,
    image:
      "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/williams/alealb01/2026williamsalealb01right.webp",
  },
  {
    number: "31",
    code: "OCO",
    name: "Esteban Ocon",
    country: "France",
    flag: "🇫🇷",
    team: "Haas F1 Team",
    cardBg: "bg-[#a2a8ad]",
    borderColor: "border-[#a2a8ad]/60",
    accentColor: "from-[#a2a8ad] to-zinc-200",
    points: 3,
    image:
      "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/haasf1team/estoco01/2026haasf1teamestoco01right.webp",
  },
  {
    number: "14",
    code: "ALO",
    name: "Fernando Alonso",
    country: "Spain",
    flag: "🇪🇸",
    team: "Aston Martin",
    cardBg: "bg-[#20966e]",
    borderColor: "border-[#20966e]/60",
    accentColor: "from-[#20966e] to-emerald-300",
    points: 3,
    image:
      "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/astonmartin/feralo01/2026astonmartinferalo01right.webp",
  },
  {
    number: "22",
    code: "TSU",
    name: "Yuki Tsunoda",
    country: "Japan",
    flag: "🇯🇵",
    team: "Racing Bulls",
    cardBg: "bg-[#356cee]",
    borderColor: "border-[#356cee]/60",
    accentColor: "from-[#356cee] to-sky-300",
    points: 0,
    image:
      "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/racingbulls/yuktsu01/2026racingbullsyuktsu01right.webp",
  },
  {
    number: "18",
    code: "STR",
    name: "Lance Stroll",
    country: "Canada",
    flag: "🇨🇦",
    team: "Aston Martin",
    cardBg: "bg-[#20966e]",
    borderColor: "border-[#20966e]/60",
    accentColor: "from-[#20966e] to-emerald-300",
    points: 0,
    image:
      "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/astonmartin/lanstr01/2026astonmartinlanstr01right.webp",
  },
  {
    number: "77",
    code: "BOT",
    name: "Valtteri Bottas",
    country: "Finland",
    flag: "🇫🇮",
    team: "Cadillac",
    cardBg: "bg-[#8a9095]",
    borderColor: "border-[#8a9095]/60",
    accentColor: "from-[#8a9095] to-zinc-300",
    points: 0,
    image:
      "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/cadillac/valbot01/2026cadillacvalbot01right.webp",
  },
  {
    number: "11",
    code: "PER",
    name: "Sergio Pérez",
    country: "Mexico",
    flag: "🇲🇽",
    team: "Cadillac",
    cardBg: "bg-[#8a9095]",
    borderColor: "border-[#8a9095]/60",
    accentColor: "from-[#8a9095] to-zinc-300",
    points: 0,
    image:
      "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/cadillac/serper01/2026cadillacserper01right.webp",
  },
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
              F1{" "}
              <span className="text-[#E10600] drop-shadow-[0_0_25px_rgba(225,6,0,0.6)]">
                DRIVERS
              </span>{" "}
              CHAMPIONSHIP
            </h1>
          </div>
          <div className="bg-zinc-900/60 backdrop-blur-md border border-zinc-800 p-4 rounded-2xl flex items-center gap-6 justify-around sm:justify-end">
            <div>
              <p className="text-[10px] font-mono uppercase text-zinc-400">
                Total Drivers
              </p>
              <p className="text-2xl font-black font-mono text-white">
                {F1_2026_DRIVERS.length}
              </p>
            </div>
            <div className="w-px h-8 bg-zinc-800" />
            <div>
              <p className="text-[10px] font-mono uppercase text-zinc-400">
                Leader
              </p>
              <p className="text-2xl font-black font-mono text-[#E10600]">
                {p1.code}
              </p>
            </div>
          </div>
        </header>

        {/* 🏆 PODIUM SECTION (TOP 1, 2, 3) 🏆 */}
        <section className="mb-16">
          <h2 className="text-xl font-black italic uppercase tracking-widest text-zinc-400 mb-8 flex items-center gap-2">
            <span className="text-amber-400">🏆</span> Championship Leaders
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end pt-6">
            {/* P2 - Silver */}
            <div
              className={`order-2 md:order-1 ${p2.cardBg} border-2 ${p2.borderColor} rounded-3xl p-5 relative backdrop-blur-xl shadow-2xl hover:border-white transition-all overflow-hidden group`}
            >
              <div className="flex justify-between items-center mb-3">
                <span className="bg-slate-200 text-black font-black font-mono text-xs px-3 py-1 rounded-full shadow-md whitespace-nowrap">
                  🥈 P2 - SECOND PLACE
                </span>
                <span className="text-xs font-mono font-bold text-white/80">
                  #{p2.number}
                </span>
              </div>
              <div className="relative h-64 w-full overflow-hidden rounded-2xl mb-4 bg-black/20 border border-white/20">
                <img
                  src={p2.image}
                  alt={p2.name}
                  className="w-full h-full object-cover object-[center_0%] scale-105 group-hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute bottom-2 right-2 text-2xl z-20">
                  {p2.flag}
                </span>
              </div>
              <div className="flex justify-between items-end relative z-20">
                <div>
                  <span className="text-[10px] font-mono font-bold px-3 py-1 rounded-full bg-black/30 border border-white/20 text-white uppercase tracking-widest">
                    {p2.team}
                  </span>
                  <h3 className="text-2xl font-black italic uppercase text-white mt-2 drop-shadow-md">
                    {p2.name}
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-black italic font-mono text-white drop-shadow-md">
                    {p2.points}
                  </span>
                  <span className="text-[10px] font-mono text-white/80 block">
                    PTS
                  </span>
                </div>
              </div>
            </div>

            {/* P1 - Gold */}
            <div
              className={`order-1 md:order-2 ${p1.cardBg} border-4 ${p1.borderColor} rounded-3xl p-5 relative backdrop-blur-xl shadow-[0_0_50px_rgba(245,158,11,0.35)] hover:border-white transition-all md:-translate-y-6 overflow-hidden group z-20`}
            >
              <div className="flex justify-between items-center mb-3">
                <span className="bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-black font-mono text-xs px-4 py-1 rounded-full shadow-md whitespace-nowrap tracking-wider">
                  👑 P1 - LEADER
                </span>
                <span className="text-xs font-mono font-bold text-yellow-300">
                  #{p1.number}
                </span>
              </div>
              <div className="relative h-72 w-full overflow-hidden rounded-2xl mb-4 bg-black/20 border border-white/30">
                <img
                  src={p1.image}
                  alt={p1.name}
                  className="w-full h-full object-cover object-[center_0%] scale-105 group-hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute bottom-2 right-2 text-3xl z-20">
                  {p1.flag}
                </span>
              </div>
              <div className="flex justify-between items-end relative z-20">
                <div>
                  <span className="text-[11px] font-mono font-bold px-3.5 py-1 rounded-full bg-black/40 border border-white/30 text-white uppercase tracking-widest">
                    {p1.team}
                  </span>
                  <h3 className="text-3xl font-black italic uppercase text-white mt-2 drop-shadow-lg">
                    {p1.name}
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-4xl font-black italic font-mono text-yellow-300 drop-shadow-md">
                    {p1.points}
                  </span>
                  <span className="text-[10px] font-mono text-white/80 block">
                    PTS
                  </span>
                </div>
              </div>
            </div>

            {/* P3 - Bronze */}
            <div
              className={`order-3 ${p3.cardBg} border-2 ${p3.borderColor} rounded-3xl p-5 relative backdrop-blur-xl shadow-2xl hover:border-white transition-all overflow-hidden group`}
            >
              <div className="flex justify-between items-center mb-3">
                <span className="bg-amber-800 text-white font-black font-mono text-xs px-3 py-1 rounded-full shadow-md whitespace-nowrap">
                  🥉 P3 - THIRD PLACE
                </span>
                <span className="text-xs font-mono font-bold text-white/80">
                  #{p3.number}
                </span>
              </div>
              <div className="relative h-64 w-full overflow-hidden rounded-2xl mb-4 bg-black/20 border border-white/20">
                <img
                  src={p3.image}
                  alt={p3.name}
                  className="w-full h-full object-cover object-[center_0%] scale-105 group-hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute bottom-2 right-2 text-2xl z-20">
                  {p3.flag}
                </span>
              </div>
              <div className="flex justify-between items-end relative z-20">
                <div>
                  <span className="text-[10px] font-mono font-bold px-3 py-1 rounded-full bg-black/30 border border-white/20 text-white uppercase tracking-widest">
                    {p3.team}
                  </span>
                  <h3 className="text-2xl font-black italic uppercase text-white mt-2 drop-shadow-md">
                    {p3.name}
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-black italic font-mono text-white drop-shadow-md">
                    {p3.points}
                  </span>
                  <span className="text-[10px] font-mono text-white/80 block">
                    PTS
                  </span>
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
                  className={`relative ${driver.cardBg} border ${driver.borderColor} rounded-3xl overflow-hidden backdrop-blur-xl transition-all duration-500 group flex flex-col justify-between hover:-translate-y-2 hover:border-white/80 shadow-lg`}
                >
                  {/* Top Light Accent Bar */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${driver.accentColor} opacity-90 group-hover:opacity-100 transition-all duration-300 z-30`}
                  />

                  {/* Card Header & Portrait Area */}
                  <div className="relative h-64 w-full bg-black/20 overflow-hidden">
                    <span className="absolute -top-3 right-2 text-7xl font-black italic font-mono text-white/15 group-hover:text-white/25 transition-colors z-0 select-none">
                      P{index + 1}
                    </span>

                    <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                      <span className="text-xl bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-2xl border border-white/20 shadow-lg">
                        {driver.flag}
                      </span>
                      {isTop3 && (
                        <span className="text-xs bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-black px-2.5 py-1 rounded-xl shadow-md">
                          {rankBadges[index]}
                        </span>
                      )}
                    </div>

                    <span className="absolute top-4 right-4 z-20 text-xs font-mono font-bold tracking-widest text-white bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/20">
                      {driver.code}
                    </span>

                    {/* Driver Portrait Image */}
                    <img
                      src={driver.image}
                      alt={driver.name}
                      className="w-full h-full object-cover object-[center_0%] scale-105 z-10 group-hover:scale-115 transition-transform duration-500 ease-out"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />

                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-15" />
                  </div>

                  {/* Card Body Info */}
                  <div className="p-5 bg-black/30 backdrop-blur-md relative z-20 border-t border-white/15 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-end mb-2">
                        <div>
                          <span className="text-[10px] font-mono text-white/80 uppercase tracking-widest block">
                            {driver.country}
                          </span>
                          <h3 className="text-xl font-black italic uppercase text-white transition-colors leading-tight drop-shadow-sm">
                            {driver.name}
                          </h3>
                        </div>
                        <div className="text-right">
                          <span className="text-2xl font-black italic font-mono text-white transition-colors drop-shadow-sm">
                            {driver.points}
                          </span>
                          <span className="text-[10px] font-mono text-white/70 block -mt-1">
                            PTS
                          </span>
                        </div>
                      </div>

                      {/* Points Progress Bar */}
                      <div className="w-full bg-black/40 h-1.5 rounded-full overflow-hidden my-3 border border-white/20">
                        <div
                          className="bg-white h-full rounded-full transition-all duration-1000 shadow-sm"
                          style={{
                            width: `${maxPoints > 0 ? (driver.points / maxPoints) * 100 : 0}%`,
                          }}
                        />
                      </div>
                    </div>

                    <div className="pt-2 flex justify-between items-center border-t border-white/15">
                      <span className="text-[11px] font-mono font-bold px-3 py-1 rounded-full bg-black/30 border border-white/20 text-white uppercase tracking-wider shadow-sm">
                        {driver.team}
                      </span>
                      <span className="text-sm font-black italic font-mono text-white/90">
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