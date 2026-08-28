"use client";

import { useState } from "react";
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
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const categories = ["ALL", ...Array.from(new Set(F1_OFFICIAL_VIDEOS.map((v) => v.category)))];
  
  const filteredVideos = selectedCategory === "ALL" 
    ? F1_OFFICIAL_VIDEOS 
    : F1_OFFICIAL_VIDEOS.filter((v) => v.category === selectedCategory);

  const featuredVideo = F1_OFFICIAL_VIDEOS[0];

  return (
    <div className="relative min-h-screen bg-black text-white font-sans selection:bg-[#E10600] selection:text-white overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-[#E10600]/15 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[170px] pointer-events-none" />

      {/* Cyber Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f15_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Top Laser Accent */}
      <div className="w-full h-1.5 bg-[#E10600] shadow-[0_0_30px_#E10600]" />

      <Navigation />

      <main className="max-w-7xl mx-auto py-10 px-4 sm:px-6 relative z-10">
        {/* Header Section */}
        <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between border-b border-zinc-800/80 pb-8 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#E10600]/10 border border-[#E10600]/40 px-4 py-1.5 rounded-full backdrop-blur-md shadow-[0_0_20px_rgba(225,6,0,0.25)]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E10600] animate-ping" />
              <span className="text-xs font-mono font-bold text-[#E10600] tracking-widest uppercase">
                FORMULA1.COM OFFICIAL VIDEOS
              </span>
            </div>
            <h1 className="text-4xl sm:text-7xl font-black italic uppercase tracking-tighter mt-4 bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
              LATEST <span className="text-[#E10600] drop-shadow-[0_0_30px_rgba(225,6,0,0.6)]">HIGHLIGHTS & CLIPS</span>
            </h1>
            <p className="text-zinc-400 text-sm max-w-2xl mt-3 leading-relaxed">
              รับชมวิดีโอไฮไลท์การแข่งขันย้อนหลัง บทวิเคราะห์เจาะลึก วิทยุสื่อสารนักแข่ง และ Onboard จากสนาม F1 2026
            </p>
          </div>

          {/* Quick Counter Card */}
          <div className="bg-zinc-950/80 backdrop-blur-xl border border-zinc-800/80 p-4 rounded-2xl flex items-center gap-6 shadow-2xl self-start md:self-end">
            <div>
              <p className="text-[10px] font-mono uppercase text-zinc-500">Total Videos</p>
              <p className="text-2xl font-black font-mono text-white">{F1_OFFICIAL_VIDEOS.length}</p>
            </div>
            <div className="w-px h-8 bg-zinc-800" />
            <div>
              <p className="text-[10px] font-mono uppercase text-zinc-500">Quality</p>
              <p className="text-2xl font-black font-mono text-[#E10600]">4K / 60FPS</p>
            </div>
          </div>
        </header>

        {/* Featured Hero Video Section */}
        {featuredVideo && (
          <section className="mb-14">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-widest">
                🔥 FEATURED SHOWCASE
              </span>
            </div>
            <a
              href={featuredVideo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block w-full bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.9)] hover:border-[#E10600]/80 transition-all duration-500"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                <div className="relative lg:col-span-7 h-72 sm:h-96 overflow-hidden bg-zinc-900">
                  <img
                    src={featuredVideo.thumbnail}
                    alt={featuredVideo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1000&auto=format&fit=crop";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-zinc-950" />
                  
                  {/* Play Button Glow */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-[#E10600] text-white flex items-center justify-center shadow-[0_0_40px_#E10600] group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl ml-1">▶</span>
                    </div>
                  </div>

                  <span className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md text-white text-xs font-mono px-3 py-1 rounded-lg border border-zinc-700">
                    {featuredVideo.duration}
                  </span>
                </div>

                <div className="lg:col-span-5 p-8 flex flex-col justify-between bg-zinc-950/90 backdrop-blur-xl">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold text-[#E10600] uppercase tracking-wider bg-[#E10600]/10 px-3 py-1 rounded-md border border-[#E10600]/30">
                        {featuredVideo.category}
                      </span>
                      <span className="text-xs font-mono text-zinc-500">{featuredVideo.date}</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black italic uppercase text-white group-hover:text-[#E10600] transition-colors leading-tight mb-4">
                      {featuredVideo.title}
                    </h2>
                    <p className="text-sm text-zinc-400 font-sans leading-relaxed">
                      {featuredVideo.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono text-zinc-400 group-hover:text-white">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#E10600]" /> Watch Full Video on Formula1.com
                    </span>
                    <span className="text-lg group-hover:translate-x-2 transition-transform">&rarr;</span>
                  </div>
                </div>
              </div>
            </a>
          </section>
        )}

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase transition-all whitespace-nowrap border ${
                selectedCategory === cat
                  ? "bg-[#E10600] text-white border-[#E10600] shadow-[0_0_20px_rgba(225,6,0,0.4)]"
                  : "bg-zinc-900/80 text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Video Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((vid, idx) => (
            <a
              key={idx}
              href={vid.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-zinc-950/80 border border-zinc-800/80 hover:border-[#E10600]/80 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 shadow-[0_10px_30px_rgba(0,0,0,0.6)] flex flex-col justify-between backdrop-blur-md"
            >
              <div>
                {/* Thumbnail Header */}
                <div className="relative h-52 w-full bg-zinc-900 overflow-hidden">
                  <img
                    src={vid.thumbnail}
                    alt={vid.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-85"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1000&auto=format&fit=crop";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-90" />
                  
                  {/* Category Badge */}
                  <span className="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-[#E10600] text-[10px] font-mono font-bold px-2.5 py-1 rounded-md border border-zinc-800 uppercase">
                    {vid.category}
                  </span>

                  {/* Duration Tag */}
                  <span className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md text-white text-[10px] font-mono px-2 py-0.5 rounded border border-zinc-700">
                    {vid.duration}
                  </span>

                  {/* Play Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="w-14 h-14 rounded-full bg-[#E10600] text-white flex items-center justify-center shadow-[0_0_30px_#E10600] group-hover:scale-110 transition-transform">
                      ▶
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[10px] font-mono text-zinc-500">{vid.date}</span>
                  </div>
                  <h2 className="text-lg font-black italic uppercase line-clamp-2 text-zinc-100 group-hover:text-[#E10600] transition-colors leading-snug">
                    {vid.title}
                  </h2>
                  <p className="text-xs text-zinc-400 mt-2.5 line-clamp-2 font-sans leading-relaxed">
                    {vid.description}
                  </p>
                </div>
              </div>

              {/* Action Footer */}
              <div className="px-6 py-4 bg-zinc-900/40 border-t border-zinc-800/80 flex justify-between items-center text-xs font-mono text-zinc-400 group-hover:text-white transition-colors">
                <span className="font-bold">Watch on Formula1.com</span>
                <span className="text-base group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}

export default withAuth(VideoPage);