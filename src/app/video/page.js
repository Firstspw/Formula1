"use client";

import Navigation from "@/components/navigation";
import withAuth from "@/components/withAuth";

const F1_OFFICIAL_VIDEOS = [
  {
    title: "Race Highlights | 2026 Dutch Grand Prix",
    category: "RACE HIGHLIGHTS",
    duration: "07:59",
    date: "AUG 23, 2026",
    thumbnail: "https://ssl.gstatic.com/onebox/media/sports/videos/vita/uxdeYAjxdK9XmHOV_768x432.jpg",
    url: "https://www.formula1.com/en/video/race-highlights-2026-dutch-grand-prix.1874330787952311699",
    description: "Watch highlights from the 2026 Formula 1 Dutch Grand Prix at Zandvoort."
  },
  {
    title: "Jolyon Palmer's Analysis: Home hero exits early",
    category: "ANALYSIS",
    duration: "20:15",
    date: "AUG 25, 2026",
    thumbnail: "https://media.formula1.com/image/upload/f_auto/q_auto/v1677244975/content/dam/fom-website/manual/Misc/2026/Zandvoort/PalmerZandvoort.png",
    url: "https://www.formula1.com/en/video",
    description: "F1TV analyst Jolyon Palmer looks at Zandvoort where Lando Norris continued his streak."
  },
  {
    title: "Top 10 Onboard Moments: 2026 Dutch GP",
    category: "ONBOARD",
    duration: "08:51",
    date: "AUG 25, 2026",
    thumbnail: "https://ssl.gstatic.com/onebox/media/sports/videos/vita/0GF2y8meWHAaIDml_768x432.jpg",
    url: "https://www.formula1.com/en/video",
    description: "The best onboard action from Zandvoort circuit."
  },
  {
    title: "Radio Rewind: 2026 Dutch Grand Prix",
    category: "RADIO REWIND",
    duration: "17:56",
    date: "AUG 24, 2026",
    thumbnail: "https://ssl.gstatic.com/onebox/media/sports/videos/vita/gGZLVR4bJyzX7pNf_768x432.jpg",
    url: "https://www.formula1.com/en/video",
    description: "Tune in to the driver airwaves as they battle it out at Zandvoort."
  },
  {
    title: "Race Highlights | 2026 British Grand Prix",
    category: "RACE HIGHLIGHTS",
    duration: "08:12",
    date: "JUL 05, 2026",
    thumbnail: "https://ssl.gstatic.com/onebox/media/sports/videos/vita/0GF2y8meWHAaIDml_768x432.jpg",
    url: "https://www.formula1.com/en/video/race-highlights-2026-british-grand-prix.1869893362466065062",
    description: "Recap all the action at Silverstone as Charles Leclerc claims victory."
  },
  {
    title: "Race Highlights | 2026 Monaco Grand Prix",
    category: "RACE HIGHLIGHTS",
    duration: "07:45",
    date: "JUN 07, 2026",
    thumbnail: "https://ssl.gstatic.com/onebox/media/sports/videos/vita/gGZLVR4bJyzX7pNf_768x432.jpg",
    url: "https://www.formula1.com/en/video/Race-Highlights-2026-Monaco-Grand-Prix.1867355748376897082",
    description: "Action-packed streets of Monte Carlo with Kimi Antonelli dominating."
  }
];

function VideoPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-[#E10600]">
      <div className="w-full h-1.5 bg-[#E10600] shadow-[0_0_20px_#E10600]" />
      <Navigation />

      <main className="max-w-7xl mx-auto py-10 px-6">
        <header className="mb-10">
          <span className="text-xs font-mono font-bold text-[#E10600] tracking-widest uppercase bg-[#E10600]/10 px-3 py-1 rounded-full border border-[#E10600]/30">
            FORMULA1.COM OFFICIAL VIDEOS
          </span>
          <h1 className="text-4xl sm:text-6xl font-black italic uppercase tracking-tight mt-3 mb-2">
            LATEST <span className="text-[#E10600]">HIGHLIGHTS & CLIPS</span>
          </h1>
          <p className="text-zinc-400 text-sm max-w-2xl">
            รับชมวิดีโอไฮไลท์การแข่งขันย้อนหลัง บทวิเคราะห์เจาะลึก วิทยุสื่อสารนักแข่ง และ Onboard จากสนาม F1 2026
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {F1_OFFICIAL_VIDEOS.map((vid, idx) => (
            <a
              key={idx}
              href={vid.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-zinc-900/60 border border-zinc-800/80 hover:border-[#E10600]/60 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 w-full bg-zinc-950 overflow-hidden">
                  <img
                    src={vid.thumbnail}
                    alt={vid.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1000&auto=format&fit=crop";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
                  <span className="absolute bottom-3 right-3 bg-black/80 text-white text-[10px] font-mono px-2 py-0.5 rounded border border-zinc-700">
                    {vid.duration}
                  </span>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="w-12 h-12 rounded-full bg-[#E10600] text-white flex items-center justify-center shadow-[0_0_20px_#E10600]">
                      ▶
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] font-mono font-bold text-[#E10600] uppercase tracking-wider">
                      {vid.category}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500">{vid.date}</span>
                  </div>
                  <h2 className="text-lg font-black italic uppercase line-clamp-2 text-zinc-100 group-hover:text-[#E10600] transition-colors">
                    {vid.title}
                  </h2>
                  <p className="text-xs text-zinc-400 mt-2 line-clamp-2 font-sans">
                    {vid.description}
                  </p>
                </div>
              </div>

              <div className="px-5 py-3 bg-zinc-950/70 border-t border-zinc-800/60 flex justify-between items-center text-xs font-mono text-zinc-400 group-hover:text-white">
                <span>Watch on Formula1.com</span>
                <span>&rarr;</span>
              </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
export default withAuth(VideoPage);