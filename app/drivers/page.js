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
    teamColor: "border-emerald-500 text-emerald-400 bg-emerald-950/40",
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
    teamColor: "border-emerald-500 text-emerald-400 bg-emerald-950/40",
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
    teamColor: "border-red-500 text-red-500 bg-red-950/40",
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
    teamColor: "border-orange-500 text-orange-400 bg-orange-950/40",
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
    teamColor: "border-red-500 text-red-500 bg-red-950/40",
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
    teamColor: "border-blue-600 text-blue-400 bg-blue-950/40",
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
    teamColor: "border-orange-500 text-orange-400 bg-orange-950/40",
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
    teamColor: "border-blue-600 text-blue-400 bg-blue-950/40",
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
    teamColor: "border-blue-500 text-blue-400 bg-blue-950/40",
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
    teamColor: "border-sky-400 text-sky-400 bg-sky-950/40",
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
    teamColor: "border-blue-500 text-blue-400 bg-blue-950/40",
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
    teamColor: "border-sky-400 text-sky-400 bg-sky-950/40",
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
    teamColor: "border-zinc-400 text-zinc-300 bg-zinc-900/40",
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
    teamColor: "border-red-600 text-red-500 bg-red-950/40",
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
    teamColor: "border-red-600 text-red-500 bg-red-950/40",
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
    teamColor: "border-blue-500 text-blue-400 bg-blue-950/40",
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
    teamColor: "border-blue-500 text-blue-400 bg-blue-950/40",
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
    teamColor: "border-zinc-400 text-zinc-300 bg-zinc-900/40",
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
    teamColor: "border-emerald-600 text-emerald-400 bg-emerald-950/40",
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
    teamColor: "border-blue-500 text-blue-400 bg-blue-950/40",
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
    teamColor: "border-emerald-600 text-emerald-400 bg-emerald-950/40",
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
    teamColor: "border-zinc-500 text-zinc-300 bg-zinc-900/40",
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
    teamColor: "border-zinc-500 text-zinc-300 bg-zinc-900/40",
    points: 0,
    image: "https://media.formula1.com/image/upload/c_lfill,w_440/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000001/common/f1/2026/cadillac/serper01/2026cadillacserper01right.webp"
  }
];

function DriversPage() {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-white font-sans selection:bg-[#E10600]">
      <Navigation />

      <main className="max-w-7xl mx-auto py-10 px-6">
        <header className="mb-10">
          <span className="text-xs font-mono font-bold text-[#E10600] tracking-widest uppercase bg-[#E10600]/10 px-3.5 py-1 rounded-full border border-[#E10600]/30">
            2026 OFFICIAL STANDINGS
          </span>
          <h1 className="text-4xl sm:text-6xl font-black italic uppercase tracking-tight mt-3">
            F1 <span className="text-[#E10600]">DRIVERS STANDINGS</span>
          </h1>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {F1_2026_DRIVERS.map((driver, index) => (
            <div
              key={driver.code}
              className="bg-zinc-900/80 border border-zinc-800 rounded-3xl overflow-hidden hover:border-zinc-600 transition-all duration-300 group shadow-xl flex flex-col justify-between"
            >
              {/* Image & Rank Header Container */}
              <div className="relative h-72 w-full bg-gradient-to-b from-zinc-800/40 to-zinc-950 flex items-start justify-center overflow-hidden">
                {/* Position Rank Watermark */}
                <span className="absolute top-2 right-4 text-6xl font-black italic font-mono text-zinc-800/40 group-hover:text-[#E10600]/20 transition-colors">
                  P{index + 1}
                </span>

                {/* Driver Portrait */}
                <img
                  src={driver.image}
                  alt={driver.name}
                  className="w-full h-full object-cover object-top z-10 group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />

                {/* Country Flag Badge */}
                <span className="absolute top-4 left-4 text-2xl bg-zinc-950/80 p-2 rounded-2xl border border-zinc-800 backdrop-blur-md z-20">
                  {driver.flag}
                </span>
              </div>

              {/* Driver Details Card Bottom */}
              <div className="p-5 bg-zinc-950 border-t border-zinc-800/80 relative z-20">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                      {driver.country}
                    </span>
                    <h3 className="text-xl font-black italic uppercase text-white group-hover:text-[#E10600] transition-colors">
                      {driver.name}
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-black italic font-mono text-[#E10600] block">
                      {driver.points} <span className="text-xs font-mono text-zinc-400">PTS</span>
                    </span>
                  </div>
                </div>

                <div className="mt-3 flex justify-between items-center">
                  <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full border inline-block ${driver.teamColor}`}>
                    {driver.team}
                  </span>
                  <span className="text-xs font-mono text-zinc-400">
                    #{driver.number}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default withAuth(DriversPage);