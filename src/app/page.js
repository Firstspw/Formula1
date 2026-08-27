"use client";

import { useState } from "react";
import Navigation from "@/components/navigation";

// ข้อมูลสนามแข่ง F1 ฤดูกาล 2026 พร้อม Podium Graphic Data (เวลารวม และ Time Gap)
const F1_2026_CALENDAR = [
  {
    round: "ROUND 01",
    country: "Australia",
    flag: "🇦🇺",
    grandPrix: "Australian Grand Prix 2026",
    circuit: "Albert Park Circuit",
    circuitImage: "https://media.formula1.com/image/upload/f_auto/q_auto/v1677244975/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Australia_Circuit.png",
    date: "06 - 08 MAR",
    localTime: "15:00 AEST",
    thaiTime: "11:00 น. (เวลาไทย)",
    completed: true,
    top3: [
      { pos: "1ST", code: "RUS", driver: "George Russell", team: "Mercedes", time: "1:24:12.420", isWinner: true },
      { pos: "2ND", code: "ANT", driver: "Kimi Antonelli", team: "Mercedes", time: "+3.210", isWinner: false },
      { pos: "3RD", code: "LEC", driver: "Charles Leclerc", team: "Ferrari", time: "+12.450", isWinner: false },
    ]
  },
  {
    round: "ROUND 02",
    country: "China",
    flag: "🇨🇳",
    grandPrix: "Chinese Grand Prix 2026",
    circuit: "Shanghai International Circuit",
    circuitImage: "https://media.formula1.com/image/upload/f_auto/q_auto/v1677244975/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/China_Circuit.png",
    date: "13 - 15 MAR",
    localTime: "15:00 CST",
    thaiTime: "14:00 น. (เวลาไทย)",
    completed: true,
    top3: [
      { pos: "1ST", code: "ANT", driver: "Kimi Antonelli", team: "Mercedes", time: "1:33:15.607", isWinner: true },
      { pos: "2ND", code: "RUS", driver: "George Russell", team: "Mercedes", time: "+5.515", isWinner: false },
      { pos: "3RD", code: "HAM", driver: "Lewis Hamilton", team: "Ferrari", time: "+25.267", isWinner: false },
    ]
  },
  {
    round: "ROUND 03",
    country: "Japan",
    flag: "🇯🇵",
    grandPrix: "Japanese Grand Prix 2026",
    circuit: "Suzuka Circuit",
    circuitImage: "https://media.formula1.com/image/upload/f_auto/q_auto/v1677244975/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Japan_Circuit.png",
    date: "27 - 29 MAR",
    localTime: "14:00 JST",
    thaiTime: "12:00 น. (เวลาไทย)",
    completed: true,
    top3: [
      { pos: "1ST", code: "ANT", driver: "Kimi Antonelli", team: "Mercedes", time: "1:28:44.112", isWinner: true },
      { pos: "2ND", code: "PIA", driver: "Oscar Piastri", team: "McLaren", time: "+1.890", isWinner: false },
      { pos: "3RD", code: "LEC", driver: "Charles Leclerc", team: "Ferrari", time: "+8.330", isWinner: false },
    ]
  },
  {
    round: "ROUND 04",
    country: "Miami",
    flag: "🇺🇸",
    grandPrix: "Miami Grand Prix 2026",
    circuit: "Miami International Autodrome",
    circuitImage: "https://media.formula1.com/image/upload/f_auto/q_auto/v1677244975/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Miami_Circuit.png",
    date: "01 - 03 MAY",
    localTime: "16:00 EDT",
    thaiTime: "03:00 น. (+1 วัน / เวลาไทย)",
    completed: true,
    top3: [
      { pos: "1ST", code: "ANT", driver: "Kimi Antonelli", team: "Mercedes", time: "1:30:22.500", isWinner: true },
      { pos: "2ND", code: "NOR", driver: "Lando Norris", team: "McLaren", time: "+4.120", isWinner: false },
      { pos: "3RD", code: "PIA", driver: "Oscar Piastri", team: "McLaren", time: "+11.050", isWinner: false },
    ]
  },
  {
    round: "ROUND 05",
    country: "Canada",
    flag: "🇨🇦",
    grandPrix: "Canadian Grand Prix 2026",
    circuit: "Circuit Gilles-Villeneuve",
    circuitImage: "https://media.formula1.com/image/upload/f_auto/q_auto/v1677244975/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Canada_Circuit.png",
    date: "22 - 24 MAY",
    localTime: "16:00 EDT",
    thaiTime: "03:00 น. (+1 วัน / เวลาไทย)",
    completed: true,
    top3: [
      { pos: "1ST", code: "ANT", driver: "Kimi Antonelli", team: "Mercedes", time: "1:35:01.880", isWinner: true },
      { pos: "2ND", code: "HAM", driver: "Lewis Hamilton", team: "Ferrari", time: "+0.845", isWinner: false },
      { pos: "3RD", code: "VER", driver: "Max Verstappen", team: "Red Bull", time: "+6.402", isWinner: false },
    ]
  },
  {
    round: "ROUND 06",
    country: "Monaco",
    flag: "🇲🇨",
    grandPrix: "Monaco Grand Prix 2026",
    circuit: "Circuit de Monaco",
    circuitImage: "https://media.formula1.com/image/upload/f_auto/q_auto/v1677244975/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Monaco_Circuit.png",
    date: "05 - 07 JUN",
    localTime: "15:00 CEST",
    thaiTime: "20:00 น. (เวลาไทย)",
    completed: true,
    top3: [
      { pos: "1ST", code: "ANT", driver: "Kimi Antonelli", team: "Mercedes", time: "1:41:16.230", isWinner: true },
      { pos: "2ND", code: "HAM", driver: "Lewis Hamilton", team: "Ferrari", time: "+2.110", isWinner: false },
      { pos: "3RD", code: "GAS", driver: "Pierre Gasly", team: "Alpine", time: "+18.990", isWinner: false },
    ]
  },
  {
    round: "ROUND 07",
    country: "Spain",
    flag: "🇪🇸",
    grandPrix: "Spanish Grand Prix 2026",
    circuit: "Circuit de Barcelona-Catalunya",
    circuitImage: "https://media.formula1.com/image/upload/f_auto/q_auto/v1677244975/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Spain_Circuit.png",
    date: "12 - 14 JUN",
    localTime: "15:00 CEST",
    thaiTime: "20:00 น. (เวลาไทย)",
    completed: true,
    top3: [
      { pos: "1ST", code: "HAM", driver: "Lewis Hamilton", team: "Ferrari", time: "1:29:08.777", isWinner: true },
      { pos: "2ND", code: "RUS", driver: "George Russell", team: "Mercedes", time: "+3.901", isWinner: false },
      { pos: "3RD", code: "NOR", driver: "Lando Norris", team: "McLaren", time: "+14.520", isWinner: false },
    ]
  },
  {
    round: "ROUND 08",
    country: "Austria",
    flag: "🇦🇹",
    grandPrix: "Austrian Grand Prix 2026",
    circuit: "Red Bull Ring",
    circuitImage: "https://media.formula1.com/image/upload/f_auto/q_auto/v1677244975/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Austria_Circuit.png",
    date: "26 - 28 JUN",
    localTime: "15:00 CEST",
    thaiTime: "20:00 น. (เวลาไทย)",
    completed: true,
    top3: [
      { pos: "1ST", code: "RUS", driver: "George Russell", team: "Mercedes", time: "1:24:22.990", isWinner: true },
      { pos: "2ND", code: "VER", driver: "Max Verstappen", team: "Red Bull", time: "+1.988", isWinner: false },
      { pos: "3RD", code: "ANT", driver: "Kimi Antonelli", team: "Mercedes", time: "+7.610", isWinner: false },
    ]
  },
  {
    round: "ROUND 09",
    country: "Great Britain",
    flag: "🇬🇧",
    grandPrix: "British Grand Prix 2026",
    circuit: "Silverstone Circuit",
    circuitImage: "https://media.formula1.com/image/upload/f_auto/q_auto/v1677244975/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Great_Britain_Circuit.png",
    date: "03 - 05 JUL",
    localTime: "15:00 BST",
    thaiTime: "21:00 น. (เวลาไทย)",
    completed: true,
    top3: [
      { pos: "1ST", code: "LEC", driver: "Charles Leclerc", team: "Ferrari", time: "1:22:39.005", isWinner: true },
      { pos: "2ND", code: "RUS", driver: "George Russell", team: "Mercedes", time: "+4.410", isWinner: false },
      { pos: "3RD", code: "HAM", driver: "Lewis Hamilton", team: "Ferrari", time: "+9.120", isWinner: false },
    ]
  },
  {
    round: "ROUND 10",
    country: "Belgium",
    flag: "🇧🇪",
    grandPrix: "Belgian Grand Prix 2026",
    circuit: "Circuit de Spa-Francorchamps",
    circuitImage: "https://media.formula1.com/image/upload/f_auto/q_auto/v1677244975/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Belgium_Circuit.png",
    date: "17 - 19 JUL",
    localTime: "15:00 CEST",
    thaiTime: "20:00 น. (เวลาไทย)",
    completed: true,
    top3: [
      { pos: "1ST", code: "ANT", driver: "Kimi Antonelli", team: "Mercedes", time: "1:25:56.300", isWinner: true },
      { pos: "2ND", code: "LEC", driver: "Charles Leclerc", team: "Ferrari", time: "+2.890", isWinner: false },
      { pos: "3RD", code: "VER", driver: "Max Verstappen", team: "Red Bull", time: "+11.450", isWinner: false },
    ]
  },
  {
    round: "ROUND 11",
    country: "Hungary",
    flag: "🇭🇺",
    grandPrix: "Hungarian Grand Prix 2026",
    circuit: "Hungaroring",
    circuitImage: "https://media.formula1.com/image/upload/f_auto/q_auto/v1677244975/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Hungary_Circuit.png",
    date: "24 - 26 JUL",
    localTime: "15:00 CEST",
    thaiTime: "20:00 น. (เวลาไทย)",
    completed: true,
    top3: [
      { pos: "1ST", code: "NOR", driver: "Lando Norris", team: "McLaren", time: "1:35:40.110", isWinner: true },
      { pos: "2ND", code: "VER", driver: "Max Verstappen", team: "Red Bull", time: "+6.220", isWinner: false },
      { pos: "3RD", code: "ANT", driver: "Kimi Antonelli", team: "Mercedes", time: "+13.080", isWinner: false },
    ]
  },
  {
    round: "ROUND 12",
    country: "Netherlands",
    flag: "🇳🇱",
    grandPrix: "Dutch Grand Prix 2026",
    circuit: "Circuit Zandvoort",
    circuitImage: "https://media.formula1.com/image/upload/f_auto/q_auto/v1677244975/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Netherlands_Circuit.png",
    date: "21 - 23 AUG",
    localTime: "15:00 CEST",
    thaiTime: "20:00 น. (เวลาไทย)",
    completed: true,
    top3: [
      { pos: "1ST", code: "NOR", driver: "Lando Norris", team: "McLaren", time: "1:30:45.519", isWinner: true },
      { pos: "2ND", code: "ANT", driver: "Kimi Antonelli", team: "Mercedes", time: "+2.412", isWinner: false },
      { pos: "3RD", code: "RUS", driver: "George Russell", team: "Mercedes", time: "+8.995", isWinner: false },
    ]
  },
  {
    round: "ROUND 13",
    country: "Italy",
    flag: "🇮🇹",
    grandPrix: "Italian Grand Prix 2026",
    circuit: "Autodromo Nazionale Monza",
    circuitImage: "https://media.formula1.com/image/upload/f_auto/q_auto/v1677244975/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Italy_Circuit.png",
    date: "04 - 06 SEP",
    localTime: "15:00 CEST",
    thaiTime: "20:00 น. (เวลาไทย)",
    completed: false,
    isCurrentUpcoming: true,
    top3: null
  },
  {
    round: "ROUND 14",
    country: "Azerbaijan",
    flag: "🇦🇿",
    grandPrix: "Azerbaijan Grand Prix 2026",
    circuit: "Baku City Circuit",
    circuitImage: "https://media.formula1.com/image/upload/f_auto/q_auto/v1677244975/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Baku_Circuit.png",
    date: "18 - 20 SEP",
    localTime: "15:00 AZT",
    thaiTime: "18:00 น. (เวลาไทย)",
    completed: false,
    top3: null
  },
  {
    round: "ROUND 15",
    country: "Singapore",
    flag: "🇸🇬",
    grandPrix: "Singapore Grand Prix 2026",
    circuit: "Marina Bay Street Circuit",
    circuitImage: "https://media.formula1.com/image/upload/f_auto/q_auto/v1677244975/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Singapore_Circuit.png",
    date: "02 - 04 OCT",
    localTime: "20:00 SGT",
    thaiTime: "19:00 น. (เวลาไทย)",
    completed: false,
    top3: null
  },
  {
    round: "ROUND 16",
    country: "United States",
    flag: "🇺🇸",
    grandPrix: "United States Grand Prix 2026",
    circuit: "Circuit of The Americas",
    circuitImage: "https://media.formula1.com/image/upload/f_auto/q_auto/v1677244975/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/USA_Circuit.png",
    date: "16 - 18 OCT",
    localTime: "14:00 CDT",
    thaiTime: "02:00 น. (+1 วัน / เวลาไทย)",
    completed: false,
    top3: null
  },
  {
    round: "ROUND 17",
    country: "Mexico",
    flag: "🇲🇽",
    grandPrix: "Mexico City Grand Prix 2026",
    circuit: "Autódromo Hermanos Rodríguez",
    circuitImage: "https://media.formula1.com/image/upload/f_auto/q_auto/v1677244975/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Mexico_Circuit.png",
    date: "23 - 25 OCT",
    localTime: "14:00 CST",
    thaiTime: "03:00 น. (+1 วัน / เวลาไทย)",
    completed: false,
    top3: null
  },
  {
    round: "ROUND 18",
    country: "Brazil",
    flag: "🇧🇷",
    grandPrix: "São Paulo Grand Prix 2026",
    circuit: "Autódromo José Carlos Pace",
    circuitImage: "https://media.formula1.com/image/upload/f_auto/q_auto/v1677244975/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Brazil_Circuit.png",
    date: "06 - 08 NOV",
    localTime: "14:00 BRT",
    thaiTime: "23:00 น. (เวลาไทย)",
    completed: false,
    top3: null
  },
  {
    round: "ROUND 19",
    country: "Las Vegas",
    flag: "🇺🇸",
    grandPrix: "Las Vegas Grand Prix 2026",
    circuit: "Las Vegas Strip Circuit",
    circuitImage: "https://media.formula1.com/image/upload/f_auto/q_auto/v1677244975/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Las_Vegas_Circuit.png",
    date: "19 - 21 NOV",
    localTime: "22:00 PST",
    thaiTime: "13:00 น. (เวลาไทย)",
    completed: false,
    top3: null
  },
  {
    round: "ROUND 20",
    country: "Qatar",
    flag: "🇶🇦",
    grandPrix: "Qatar Grand Prix 2026",
    circuit: "Lusail International Circuit",
    circuitImage: "https://media.formula1.com/image/upload/f_auto/q_auto/v1677244975/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Qatar_Circuit.png",
    date: "27 - 29 NOV",
    localTime: "20:00 AST",
    thaiTime: "00:00 น. (+1 วัน / เวลาไทย)",
    completed: false,
    top3: null
  },
  {
    round: "ROUND 21",
    country: "Abu Dhabi",
    flag: "🇦🇪",
    grandPrix: "Abu Dhabi Grand Prix 2026",
    circuit: "Yas Marina Circuit",
    circuitImage: "https://media.formula1.com/image/upload/f_auto/q_auto/v1677244975/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Abu_Dhabi_Circuit.png",
    date: "04 - 06 DEC",
    localTime: "17:00 GST",
    thaiTime: "20:00 น. (เวลาไทย)",
    completed: false,
    top3: null
  }
];

// Helper ฟังก์ชันสำหรับคืนค่าสัญลักษณ์ย่อและสีประจำทีม
const getTeamColor = (team) => {
  switch (team) {
    case "Mercedes": return "border-emerald-400 text-emerald-400 bg-emerald-950/40";
    case "Ferrari": return "border-red-500 text-red-500 bg-red-950/40";
    case "McLaren": return "border-orange-500 text-orange-500 bg-orange-950/40";
    case "Red Bull": return "border-blue-600 text-blue-400 bg-blue-950/40";
    default: return "border-zinc-500 text-zinc-300 bg-zinc-900";
  }
};

export default function F1CalendarApp() {
  const [searchQuery, setSearchQuery] = useState("");

  const currentRace = F1_2026_CALENDAR.find((r) => r.isCurrentUpcoming);

  const filteredSchedule = F1_2026_CALENDAR.filter(
    (race) =>
      race.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      race.grandPrix.toLowerCase().includes(searchQuery.toLowerCase()) ||
      race.circuit.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative min-h-screen bg-zinc-950 text-white font-sans selection:bg-[#E10600]">
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-15 scale-105 pointer-events-none"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2070&auto=format&fit=crop')`,
        }}
      />
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/90 to-zinc-950 pointer-events-none" />

      <div className="relative z-10">
        <div className="w-full h-1.5 bg-[#E10600] shadow-[0_0_20px_#E10600]" />

        <Navigation searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        <main className="max-w-7xl mx-auto py-10 px-6">
          <header className="mb-10 text-center sm:text-left">
            <span className="text-xs font-mono font-bold text-[#E10600] tracking-widest uppercase bg-[#E10600]/10 px-3.5 py-1 rounded-full border border-[#E10600]/30 shadow-[0_0_15px_rgba(225,6,0,0.2)]">
              FIA FORMULA ONE WORLD CHAMPIONSHIP™ 2026
            </span>
            <h1 className="text-4xl sm:text-6xl font-black italic uppercase tracking-tight mt-3 mb-2 bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              F1 SCHEDULE <span className="text-[#E10600]">2026</span>
            </h1>
            <p className="text-zinc-400 text-sm max-w-2xl font-mono">
              ตารางสนามแข่งขันประจำฤดูกาล ผลการแข่งขัน Podium 3 อันดับแรก เวลาการแข่ง และช่องว่างเวลา (Time Gap)
            </p>
          </header>

          {/* Featured Next Race Banner */}
          {currentRace && (
            <div className="relative bg-gradient-to-br from-red-950/40 via-zinc-900/90 to-zinc-950 border-2 border-[#E10600] p-6 sm:p-8 rounded-3xl shadow-[0_0_35px_rgba(225,6,0,0.3)] mb-12 backdrop-blur-md overflow-hidden flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="relative z-10">
                <span className="bg-[#E10600] text-white text-[10px] font-mono font-black tracking-widest px-3 py-1 rounded-full uppercase inline-flex items-center gap-1.5 shadow-[0_0_10px_#E10600] mb-3">
                  <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                  NEXT GRAND PRIX (สนามถัดไป)
                </span>
                <h2 className="text-3xl sm:text-5xl font-black italic uppercase text-white flex items-center gap-3">
                  <span>{currentRace.flag}</span> {currentRace.country}
                </h2>
                <p className="text-sm font-bold text-zinc-300 uppercase mt-1">{currentRace.grandPrix}</p>
                <p className="text-xs text-zinc-400 font-mono mt-0.5">{currentRace.circuit}</p>

                <div className="mt-4 flex gap-4 font-mono text-xs">
                  <div className="bg-zinc-950/80 px-4 py-2 rounded-xl border border-zinc-800">
                    <span className="text-zinc-500 block text-[10px]">เวลาไทย (TH)</span>
                    <span className="text-[#E10600] font-black">{currentRace.thaiTime}</span>
                  </div>
                  <div className="bg-zinc-950/80 px-4 py-2 rounded-xl border border-zinc-800">
                    <span className="text-zinc-500 block text-[10px]">เวลาสนาม (LOCAL)</span>
                    <span className="text-zinc-200 font-bold">{currentRace.localTime}</span>
                  </div>
                </div>
              </div>

              <div className="w-48 h-36 bg-zinc-950/80 rounded-2xl p-3 border border-zinc-800 flex items-center justify-center relative z-10 flex-shrink-0">
                <img 
                  src={currentRace.circuitImage} 
                  alt={currentRace.circuit} 
                  className="max-h-full max-w-full object-contain invert opacity-90" 
                />
              </div>
            </div>
          )}

          {/* All 2026 Grands Prix Grid */}
          <h3 className="text-xl font-black italic uppercase tracking-wider mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#E10600]" />
            ALL 2026 GRANDS PRIX (สนามทั้งหมด)
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSchedule.map((race) => (
              <div
                key={race.round}
                className={`bg-zinc-900/70 border rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 backdrop-blur-md flex flex-col justify-between ${
                  race.isCurrentUpcoming
                    ? "border-[#E10600] shadow-[0_0_20px_rgba(225,6,0,0.2)]"
                    : "border-zinc-800/80 hover:border-zinc-700"
                }`}
              >
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-mono font-black text-[#E10600]">{race.round}</span>
                    <span className="text-xs font-mono bg-zinc-950 text-zinc-400 px-3 py-1 rounded-full border border-zinc-800">
                      {race.date}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-3xl">{race.flag}</span>
                    <h4 className="text-2xl font-black italic uppercase text-white">{race.country}</h4>
                  </div>
                  <p className="text-xs font-bold text-zinc-300 uppercase mb-3 line-clamp-1">{race.grandPrix}</p>

                  <div className="h-28 w-full bg-zinc-950/80 rounded-2xl border border-zinc-800/80 flex items-center justify-center p-3 mb-4">
                    <img
                      src={race.circuitImage}
                      alt={race.circuit}
                      className="max-h-full max-w-full object-contain invert opacity-80"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                  </div>

                  <div className="space-y-1.5 bg-zinc-950/60 p-3 rounded-xl border border-zinc-800/60 text-xs font-mono mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-zinc-500">เวลาไทย:</span>
                      <span className="font-bold text-[#E10600]">{race.thaiTime}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-zinc-500">เวลาสนาม:</span>
                      <span className="text-zinc-300">{race.localTime}</span>
                    </div>
                  </div>
                </div>

                {/* F1 BROADCAST STYLE PODIUM CARDS (1st, 2nd, 3rd) */}
                {race.completed && race.top3 && (
                  <div className="pt-3 border-t border-zinc-800/80">
                    <div className="flex justify-between items-center mb-2.5">
                      <p className="text-[10px] font-mono text-zinc-400 font-bold uppercase tracking-wider flex items-center gap-1">
                        🏆 TOP 3 PODIUM RESULTS
                      </p>
                      <span className="text-[9px] font-mono text-zinc-500 bg-zinc-950 px-2 py-0.5 rounded border border-zinc-800">
                        TIME / GAP
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      {race.top3.map((res) => (
                        <div
                          key={res.pos}
                          className="bg-zinc-950/90 border border-zinc-800 rounded-xl p-2.5 flex flex-col items-center text-center relative overflow-hidden shadow-inner group hover:border-zinc-700 transition-colors"
                        >
                          {/* Indicator Line ชี้ประเภทอันดับ */}
                          <div
                            className={`absolute top-0 left-0 right-0 h-0.5 ${
                              res.pos === "1ST"
                                ? "bg-amber-400 shadow-[0_0_8px_#f59e0b]"
                                : res.pos === "2ND"
                                ? "bg-slate-300"
                                : "bg-amber-700"
                            }`}
                          />

                          {/* Pos Label */}
                          <div className="flex items-center gap-0.5 mb-1">
                            <span
                              className={`text-[10px] font-black italic font-mono ${
                                res.pos === "1ST"
                                  ? "text-amber-400"
                                  : res.pos === "2ND"
                                  ? "text-slate-300"
                                  : "text-amber-600"
                              }`}
                            >
                              {res.pos}
                            </span>
                          </div>

                          {/* Avatar Circle with Team Color Border */}
                          <div
                            className={`w-9 h-9 rounded-full border-2 flex items-center justify-center font-black font-mono text-xs my-0.5 shadow-md ${getTeamColor(
                              res.team
                            )}`}
                          >
                            {res.code}
                          </div>

                          {/* Driver Name & Time / Gap */}
                          <span className="text-[11px] font-black tracking-wider text-white uppercase mt-1 line-clamp-1">
                            {res.code}
                          </span>
                          <span
                            className={`text-[9px] font-mono font-bold mt-0.5 ${
                              res.isWinner ? "text-emerald-400" : "text-zinc-400"
                            }`}
                          >
                            {res.time}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}