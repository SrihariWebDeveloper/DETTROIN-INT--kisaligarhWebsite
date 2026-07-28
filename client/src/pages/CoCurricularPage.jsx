import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Trophy, Palette, Music, Compass, Users, Sparkles, 
  CheckCircle2, ArrowRight, Heart
} from "lucide-react";
import { Badge } from "../components/ui/Badge";
import { GlassCard } from "../components/ui/GlassCard";
import { CO_CURRICULAR_ITEMS } from "../data/kisData";

export const CoCurricularPage = () => {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Athletics", "Culture", "Arts", "Exploration", "Social Action"];

  const filteredItems = filter === "All" 
    ? CO_CURRICULAR_ITEMS 
    : CO_CURRICULAR_ITEMS.filter((item) => item.category === filter);

  return (
    <div className="space-y-20 pb-20 pt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header Banner */}
      <div className="text-center max-w-4xl mx-auto space-y-4">
        <Badge variant="emerald" pulse>Holistic Child Growth</Badge>
        <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-white">
          Co-Curricular & <span className="text-gradient-emerald">Life Skills</span>
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          At Krishna International School, learning transcends textbooks. We foster physical agility, artistic finesse, teamwork, and social empathy across multi-faceted activities.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex justify-center flex-wrap gap-2 sm:gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
              filter === cat
                ? "bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20"
                : "bg-slate-900 text-slate-400 border border-slate-800 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Co-Curricular Showcase Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item, idx) => (
          <GlassCard key={idx} className="p-0 overflow-hidden group border-slate-800" glow>
            <div className="relative h-52 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
              <div className="absolute top-4 left-4">
                <Badge variant="cyan">{item.category}</Badge>
              </div>
            </div>
            <div className="p-6 space-y-3">
              <h3 className="text-xl font-bold font-heading text-white group-hover:text-emerald-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* House System Banner */}
      <GlassCard className="p-8 sm:p-12 border-slate-800 text-center space-y-6" glow>
        <Badge variant="gold">Inter-House Intra-Murals</Badge>
        <h2 className="text-3xl font-extrabold font-heading text-white">
          The KIS House Championship System
        </h2>
        <p className="text-slate-300 text-sm max-w-2xl mx-auto">
          Students are grouped into four vibrant house divisions fostering healthy camaraderie, leadership, and competitive spirit in athletics, academics, and cultural performances.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
          {[
            { house: "Ruby House", color: "text-red-400", bg: "bg-red-500/10 border-red-500/30" },
            { house: "Emerald House", color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/30" },
            { house: "Sapphire House", color: "text-blue-400", bg: "bg-blue-500/10 border-blue-500/30" },
            { house: "Topaz House", color: "text-amber-400", bg: "bg-amber-500/10 border-amber-500/30" }
          ].map((h, i) => (
            <div key={i} className={`p-4 rounded-2xl border ${h.bg} text-center space-y-1`}>
              <Trophy className={`w-8 h-8 ${h.color} mx-auto`} />
              <p className={`text-base font-bold font-heading ${h.color}`}>{h.house}</p>
              <p className="text-[11px] text-slate-400">Intra-Mural Division</p>
            </div>
          ))}
        </div>
      </GlassCard>

    </div>
  );
};
