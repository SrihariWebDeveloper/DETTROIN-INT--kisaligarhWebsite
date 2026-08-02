import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Sparkles, Play, ArrowRight, CheckCircle2, ShieldCheck, Trophy,
  Users, BookOpen, Trees, FlaskConical, Palette, UserCheck, CreditCard, UserPlus, Heart
} from "lucide-react";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { GlassCard } from "../components/ui/GlassCard";
import {
  KIS_INFO, KIS_STATS, KIS_PILLARS, CAMPUS_HIGHLIGHTS, LEADERSHIP_MESSAGES
} from "../data/kisData";

import Notification from "../components/ui/Notification.jsx";

export const HomePage = ({ onOpenFeeModal, onOpenEnrollModal, onOpenVideoModal }) => {
  const [activeLeader, setActiveLeader] = useState("chairman");

  const heroPhotos = [
    "https://kisaligarh.com/indextopphoto/2023/website%201.jpg",
    "https://kisaligarh.com/indextopphoto/2023/website%202.jpg",
    "https://kisaligarh.com/indextopphoto/2023/website%203.jpg",
    "https://kisaligarh.com/indextopphoto/2023/website%204.jpg",
    "https://kisaligarh.com/indextopphoto/2023/website%205.jpg"
  ];

  return (
    <div className="space-y-24 pb-20">

      {/* 1. Hero Section inspired by Apple, Vercel & Framer */}
      <section className="relative pt-12 md:pt-20 lg:pt-28 overflow-hidden">
        {/* Background Gradients & Ambient Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-emerald-500/15 via-cyan-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 left-10 w-72 h-72 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-10 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

          {/* Top Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <Badge variant="emerald" pulse>
              <Sparkles className="w-3.5 h-3.5" /> CBSE Affiliated Co-Ed School in Aligarh
            </Badge>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-heading text-white tracking-tight leading-[1.1] max-w-5xl mx-auto"
          >
            Let's explore the <br className="hidden sm:inline" />
            <span className="text-gradient-emerald">limitless possibilities</span> of knowledge
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            {KIS_INFO.description}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <Button
              variant="primary"
              size="lg"
              icon={UserPlus}
              onClick={onOpenEnrollModal}
            >
              Click to Enroll
            </Button>

            <Button
              variant="glass"
              size="lg"
              icon={Play}
              iconPosition="left"
              onClick={onOpenVideoModal}
            >
              Explore Campus Video
            </Button>

            <Button
              variant="outline"
              size="lg"
              icon={CreditCard}
              onClick={onOpenFeeModal}
            >
              Pay School Fee
            </Button>
          </motion.div>

          {/* Naotifaction */}
          <div className="mt-4 border-amber-50 shadow-2xl">
           <Notification/> 
          </div>
          

          {/* Hero Image Showcase Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-3 max-w-6xl mx-auto p-3 glass-panel rounded-3xl border border-white/10 shadow-2xl"
          >
            {heroPhotos.map((src, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-2xl group aspect-[4/5] ${index === 2 ? "col-span-2 md:col-span-1" : ""}`}
              >
                <img
                  src={src}
                  alt={`KIS Campus Life ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* 2. Key Stats Counter Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {KIS_STATS.map((stat, idx) => (
            <GlassCard key={stat.id} className="text-center p-6 border-slate-800" glow={idx === 0}>
              <div className="text-3xl sm:text-5xl font-extrabold font-heading text-gradient-emerald">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-white mt-2">{stat.label}</div>
              <div className="text-xs text-slate-400 mt-1">{stat.detail}</div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* 3. About KIS Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Text Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2">
              <Badge variant="cyan">About Krishna International School</Badge>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white leading-tight">
              A 5-Acre Sanctuary of <span className="text-gradient-emerald">Academic & Character Excellence</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Amongst the premier CBSE schools in Aligarh, Krishna International School is set amidst 5 acres of lush green land, far away from city noise and pollution. We provide an ideal ecosystem where intellectual curiosity meets sound moral grounding.
            </p>

            <div className="space-y-3 pt-2">
              {[
                "Modern Audio-Visual Classrooms & Digital Smart Boards",
                "Fully equipped Physics, Chemistry, Biology & Robotics Labs",
                "Extensive Athletic Sports Complex, Tracks & Indoor Arenas",
                "Personalized Student Career Guidance & Psychological Mentorship"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Link to="/about">
                <Button variant="primary" icon={ArrowRight}>
                  Discover Our School Heritage
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive Card Stack */}
          <div className="lg:col-span-6 relative">
            <GlassCard className="p-8 space-y-6 border-slate-700/80" glow>
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider font-bold text-emerald-400">School Core Motto</span>
                <span className="text-xs text-slate-400">Est. Aligarh</span>
              </div>
              <blockquote className="text-2xl font-bold font-heading text-white italic border-l-4 border-emerald-500 pl-4 py-1">
                "Dedicated to Excellence in Education & Culture"
              </blockquote>
              <p className="text-xs text-slate-300 leading-relaxed">
                Under the canopy of our school motto, staff and management endeavor to imbue students with social awareness, pride in rich cultural heritage, and a deep sense of national responsibility.
              </p>
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div className="text-xs text-slate-400">
                  Campus Address: <span className="text-white font-medium">Delhi G.T. Road, Aligarh</span>
                </div>
                <Badge variant="gold">CBSE Affiliated</Badge>
              </div>
            </GlassCard>
          </div>

        </div>
      </section>

      {/* 4. Core Pillars Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="emerald">How We Help Students Explore Their Talent</Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
            Four Pillars of Student Development
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Every aspect of life at Krishna International School is designed to foster critical thinking, physical vitality, and artistic expression.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {KIS_PILLARS.map((pillar) => (
            <GlassCard key={pillar.id} className="p-0 overflow-hidden group" glow>
              <div className="relative h-56 overflow-hidden">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute top-4 left-4">
                  <Badge variant="cyan">{pillar.badge}</Badge>
                </div>
              </div>
              <div className="p-6 sm:p-8 space-y-3">
                <h3 className="text-2xl font-bold font-heading text-white group-hover:text-emerald-300 transition-colors flex items-center justify-between">
                  {pillar.title}
                  <ArrowRight className="w-5 h-5 text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <h4 className="text-sm font-semibold text-emerald-400">{pillar.subtitle}</h4>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {pillar.description}
                </p>
                <div className="pt-3">
                  <Link to={pillar.link} className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300">
                    Explore {pillar.title} Section <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* 5. Campus Highlights Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-800 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <Badge variant="purple">Quintessential Facilities</Badge>
              <h2 className="text-3xl font-extrabold font-heading text-white mt-2">
                World-Class Infrastructure for Young Scholars
              </h2>
            </div>
            <Link to="/about">
              <Button variant="outline" size="sm" icon={ArrowRight}>
                View Campus Architecture
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAMPUS_HIGHLIGHTS.map((h, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/30 transition-colors space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">
                  {i + 1}
                </div>
                <h4 className="text-lg font-bold text-white font-heading">{h.title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{h.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Leadership Vision Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <Badge variant="gold">Visionary Guidance</Badge>
          <h2 className="text-3xl font-bold font-heading text-white mt-2">
            Leadership Messages
          </h2>
        </div>

        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveLeader("chairman")}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${activeLeader === "chairman"
              ? "bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20"
              : "bg-slate-900 text-slate-400 hover:text-white"
              }`}
          >
            Chairman's Vision
          </button>
          <button
            onClick={() => setActiveLeader("principal")}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${activeLeader === "principal"
              ? "bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20"
              : "bg-slate-900 text-slate-400 hover:text-white"
              }`}
          >
            Principal's Desk
          </button>
        </div>

        <GlassCard className="max-w-4xl mx-auto p-8 sm:p-12 border-slate-700/80" glow>
          <div className="space-y-6">
            <blockquote className="text-xl sm:text-2xl font-semibold font-heading text-emerald-300 italic">
              "{LEADERSHIP_MESSAGES[activeLeader].quote}"
            </blockquote>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {LEADERSHIP_MESSAGES[activeLeader].message}
            </p>
            <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
              <div>
                <h4 className="text-lg font-bold text-white">{LEADERSHIP_MESSAGES[activeLeader].name}</h4>
                <p className="text-xs text-emerald-400 font-medium">{LEADERSHIP_MESSAGES[activeLeader].role}</p>
              </div>
              <Badge variant="emerald">Krishna International School</Badge>
            </div>
          </div>
        </GlassCard>
      </section>

      {/* 7. Action Banner for Fee & Admissions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-950 via-slate-900 to-cyan-950 border border-emerald-500/30 p-8 sm:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left max-w-xl">
            <Badge variant="emerald" pulse>Admissions & Parent Services 2026-27</Badge>
            <h3 className="text-2xl sm:text-4xl font-extrabold font-heading text-white">
              Ready to Join the KIS Aligarh Family?
            </h3>
            <p className="text-slate-300 text-sm">
              Enroll online in minutes or pay school fees securely using our digital Accevate ICICI portal.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Button variant="primary" size="lg" icon={UserPlus} onClick={onOpenEnrollModal}>
              Online Admission Form
            </Button>
            <Button variant="glass" size="lg" icon={CreditCard} onClick={onOpenFeeModal}>
              Pay Fees Online
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};
