import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Calendar, MapPin, Tag, Bell, Sparkles, ChevronRight, Clock 
} from "lucide-react";
import { Badge } from "../components/ui/Badge";
import { GlassCard } from "../components/ui/GlassCard";
import { UPCOMING_EVENTS } from "../data/kisData";

export const EventsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Sports", "Academics", "Guidance", "Arts"];

  const filteredEvents = selectedCategory === "All"
    ? UPCOMING_EVENTS
    : UPCOMING_EVENTS.filter((e) => e.category === selectedCategory);

  return (
    <div className="space-y-20 pb-20 pt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header Banner */}
      <div className="text-center max-w-4xl mx-auto space-y-4">
        <Badge variant="emerald" pulse>School Calendar 2026-27</Badge>
        <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-white">
          School Events & <span className="text-gradient-emerald">Notice Board</span>
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          Stay updated with upcoming academic competitions, sports championships, workshops, and official school announcements.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex justify-center flex-wrap gap-2 sm:gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
              selectedCategory === cat
                ? "bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20"
                : "bg-slate-900 text-slate-400 border border-slate-800 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Events List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredEvents.map((evt) => (
          <GlassCard key={evt.id} className="p-8 space-y-4 border-slate-800" glow>
            <div className="flex items-center justify-between">
              <Badge variant="cyan">{evt.category}</Badge>
              <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
                <Calendar className="w-3.5 h-3.5" /> {evt.date}
              </div>
            </div>

            <h3 className="text-xl font-bold font-heading text-white">{evt.title}</h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{evt.summary}</p>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" /> {evt.location}
              </span>
              <span className="text-emerald-400 font-medium">Official Event</span>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Noticeboard Section */}
      <GlassCard className="p-8 sm:p-12 border-slate-800 space-y-6" glow>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
            <Bell className="w-6 h-6" />
          </div>
          <div>
            <Badge variant="gold">Important Notices</Badge>
            <h2 className="text-2xl font-bold font-heading text-white mt-1">Official Parent Notice Board</h2>
          </div>
        </div>

        <div className="space-y-3">
          {[
            { title: "Quarter 2 Fee Submission Deadline", date: "August 10, 2026", desc: "Parents are requested to submit Quarter 2 fees via Accevate Portal to avoid late charges." },
            { title: "Parent Teacher Meeting (PTM) for Grades IX to XII", date: "August 22, 2026", desc: "Interactive session regarding upcoming Board Examination preparations." },
            { title: "Independence Day Celebration Rehearsals", date: "August 12, 2026", desc: "Special sports and cultural practice sessions for enrolled house participants." }
          ].map((notice, i) => (
            <div key={i} className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-white">{notice.title}</h4>
                <span className="text-[11px] text-emerald-400 font-semibold">{notice.date}</span>
              </div>
              <p className="text-xs text-slate-400">{notice.desc}</p>
            </div>
          ))}
        </div>
      </GlassCard>

    </div>
  );
};
