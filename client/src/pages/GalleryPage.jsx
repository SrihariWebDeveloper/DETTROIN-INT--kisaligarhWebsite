import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Camera, Image as ImageIcon, ExternalLink, Sparkles 
} from "lucide-react";
import { Badge } from "../components/ui/Badge";
import { GlassCard } from "../components/ui/GlassCard";
import { KIS_INFO } from "../data/kisData";

const FacebookIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const YoutubeIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const galleryItems = [
    { title: "5-Acre Eco Campus", category: "Campus", src: "https://kisaligarh.com/com%20art/3.png" },
    { title: "Advanced STEM Robotics Lab", category: "Labs", src: "https://kisaligarh.com/com%20art/1.png" },
    { title: "Annual Athletic Meet", category: "Sports", src: "https://kisaligarh.com/gallery/new-images/sports-facilities/Badminton.jpg" },
    { title: "Inter-House Drama Showcase", category: "Arts", src: "	https://kisaligarh.com/programming%20arts/dance.png" },
    { title: "Digital Audio Visual Library", category: "Campus", src: "https://kisaligarh.com/com%20art/6.png" },
    { title: "Student Fine Arts Exhibition", category: "Arts", src: "	https://kisaligarh.com/fineart/5.jpg" }
  ];

  const categories = ["All", "Campus", "Labs", "Sports", "Arts"];

  const filtered = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter((i) => i.category === activeCategory);

  return (
    <div className="space-y-20 pb-20 pt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header Banner */}
      <div className="text-center max-w-4xl mx-auto space-y-4">
        <Badge variant="emerald" pulse>Campus Visual Showcase</Badge>
        <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-white">
          Life & Moments at <span className="text-gradient-emerald">KIS Aligarh</span>
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          Explore captured memories of academic triumphs, athletic achievements, cultural festivals, and daily life on our 5-acre campus.
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex justify-center flex-wrap gap-2 sm:gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
              activeCategory === cat
                ? "bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20"
                : "bg-slate-900 text-slate-400 border border-slate-800 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item, idx) => (
          <GlassCard key={idx} className="p-0 overflow-hidden group border-slate-800" glow>
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <Badge variant="cyan">{item.category}</Badge>
                  <h4 className="text-lg font-bold text-white font-heading mt-2">{item.title}</h4>
                </div>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Social Links Bar */}
      <GlassCard className="p-8 sm:p-12 border-slate-800 text-center space-y-6" glow>
        <Badge variant="purple">Connect With Us</Badge>
        <h2 className="text-3xl font-extrabold font-heading text-white">
          Follow KIS Aligarh Social Channels
        </h2>
        <p className="text-slate-300 text-sm max-w-xl mx-auto">
          Get real-time photo updates, video highlights, and live event broadcasts on our social media handles.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href={KIS_INFO.portalUrls.facebook}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-400 text-sm font-semibold hover:bg-blue-600/30 transition-colors"
          >
            <FacebookIcon className="w-4 h-4" /> Facebook Page <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <a
            href={KIS_INFO.portalUrls.instagram}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-pink-600/20 border border-pink-500/40 text-pink-400 text-sm font-semibold hover:bg-pink-600/30 transition-colors"
          >
            <InstagramIcon className="w-4 h-4" /> Instagram Handle <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <a
            href={KIS_INFO.portalUrls.youtube}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-red-600/20 border border-red-500/40 text-red-400 text-sm font-semibold hover:bg-red-600/30 transition-colors"
          >
            <YoutubeIcon className="w-4 h-4" /> YouTube Channel <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </GlassCard>

    </div>
  );
};
