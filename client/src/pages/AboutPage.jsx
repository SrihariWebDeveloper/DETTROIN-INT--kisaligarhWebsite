import React from "react";
import { motion } from "framer-motion";
import { 
  Award, ShieldCheck, Trees, FlaskConical, BookOpen, Trophy, 
  Heart, Sparkles, CheckCircle2, ArrowRight
} from "lucide-react";
import { Badge } from "../components/ui/Badge";
import { GlassCard } from "../components/ui/GlassCard";
import { KIS_INFO, LEADERSHIP_MESSAGES, CAMPUS_HIGHLIGHTS } from "../data/kisData";

export const AboutPage = () => {
  return (
    <div className="space-y-20 pb-20 pt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header Banner */}
      <div className="text-center max-w-4xl mx-auto space-y-4">
        <Badge variant="emerald" pulse>About Krishna International School</Badge>
        <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-white">
          Dedicated to <span className="text-gradient-emerald">Excellence</span> & Character
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          Set amidst 5 acres of green, pollution-free land on Delhi G.T. Road, Aligarh, Krishna International School provides an ideal environment for academic mastery, scientific temperament, and co-curricular leadership.
        </p>
      </div>

      {/* 1. School Overview Card */}
      <GlassCard className="p-8 sm:p-12 border-slate-800" glow id="overview">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <Badge variant="cyan">Campus Ecosystem</Badge>
            <h2 className="text-3xl font-extrabold font-heading text-white">
              An Ideal Environment Away From City Pollution
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Amongst the best CBSE schools in Aligarh, the school is set amidst 5 acres of land, away from the city's noise and pollution. The school provides an ideal environment for academic and co-curricular excellence.
            </p>
            <p className="text-slate-300 text-sm leading-relaxed">
              The school has all facilities required for the overall development of children. Facilities such as an equipped digital library, theatre, modern science laboratories, and sports arenas for students enable them to excel in academics and enhance their co-curricular skills and talents.
            </p>
            <p className="text-slate-300 text-sm leading-relaxed">
              Under the canopy of the school motto, "Dedicated to Excellence," the staff and management of K.I.S. endeavor not only to excel in academics but also to imbue students with social awareness, pride in their rich cultural heritage, and a sense of responsibility towards the nation.
            </p>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-3">
            {[
              "https://kisaligarh.com/Other_images/about_con/new/A%202.jpg",
              "https://kisaligarh.com/Other_images/about_con/new/A3.jpg",
              "https://kisaligarh.com/Other_images/about_con/new/A%204..jpg",
              "	https://kisaligarh.com/Other_images/about_con/new/A%205.jpg"
            ].map((img, idx) => (
              <div key={idx} className="rounded-2xl overflow-hidden aspect-square border border-slate-700">
                <img src={img} alt={`KIS Facility ${idx + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </GlassCard>

      {/* 2. Chairman & Principal Messages */}
      <div className="space-y-10" id="chairman">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <Badge variant="purple">Institutional Leadership</Badge>
          <h2 className="text-3xl font-extrabold font-heading text-white">
            Messages from Our Leadership
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <GlassCard className="p-8 space-y-4 border-emerald-500/20" glow>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center text-lg font-heading">
                CM
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-heading">{LEADERSHIP_MESSAGES.chairman.name}</h3>
                <p className="text-xs text-emerald-400 font-medium">{LEADERSHIP_MESSAGES.chairman.role}</p>
              </div>
            </div>
            <blockquote className="text-sm font-semibold text-emerald-300 italic">
              "{LEADERSHIP_MESSAGES.chairman.quote}"
            </blockquote>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {LEADERSHIP_MESSAGES.chairman.message}
            </p>
          </GlassCard>

          <GlassCard className="p-8 space-y-4 border-cyan-500/20" glow id="principal">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-cyan-500/20 text-cyan-400 font-bold flex items-center justify-center text-lg font-heading">
                PM
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-heading">{LEADERSHIP_MESSAGES.principal.name}</h3>
                <p className="text-xs text-cyan-400 font-medium">{LEADERSHIP_MESSAGES.principal.role}</p>
              </div>
            </div>
            <blockquote className="text-sm font-semibold text-cyan-300 italic">
              "{LEADERSHIP_MESSAGES.principal.quote}"
            </blockquote>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {LEADERSHIP_MESSAGES.principal.message}
            </p>
          </GlassCard>
        </div>
      </div>

      {/* 3. Why Krishna International School */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <Badge variant="gold">Key Differentiators</Badge>
          <h2 className="text-3xl font-extrabold font-heading text-white">
            Why Choose Krishna International School?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Scientific Temperament",
              desc: "Encouraging curiosity, logical reasoning, and active experimentation through regular science fairs and robotics projects."
            },
            {
              title: "Competitive Counseling",
              desc: "Regular workshops and external expert counseling sessions to prepare students for national competitive examinations."
            },
            {
              title: "Sound Moral Foundation",
              desc: "Instilling deep respect for cultural heritage, ethical values, and social responsibility alongside academic learning."
            }
          ].map((item, i) => (
            <GlassCard key={i} className="p-6 border-slate-800 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 font-bold flex items-center justify-center text-sm">
                0{i + 1}
              </div>
              <h3 className="text-lg font-bold text-white font-heading">{item.title}</h3>
              <p className="text-slate-300 text-xs leading-relaxed">{item.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* 4. Recognition and Awards */}
      <GlassCard className="p-8 sm:p-12 border-slate-800 text-center space-y-6" glow id="awards">
        <Badge variant="emerald" pulse>60+ Accolades</Badge>
        <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
          Recognition & National Awards
        </h2>
        <p className="text-slate-300 text-sm max-w-2xl mx-auto">
          Krishna International School has been honored with over 60 national and international awards for academic innovation, sports championships, and institutional leadership.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
            <Trophy className="w-8 h-8 text-amber-400 mx-auto mb-2" />
            <p className="text-xs font-bold text-white">Best CBSE School Aligarh</p>
            <p className="text-[11px] text-slate-400">Education Leadership Award</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
            <Award className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
            <p className="text-xs font-bold text-white">Green Campus Award</p>
            <p className="text-[11px] text-slate-400">5-Acre Eco Initiative</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
            <Trophy className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
            <p className="text-xs font-bold text-white">Athletic Championship</p>
            <p className="text-[11px] text-slate-400">Regional CBSE Sports</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
            <ShieldCheck className="w-8 h-8 text-purple-400 mx-auto mb-2" />
            <p className="text-xs font-bold text-white">100% CBSE Results</p>
            <p className="text-[11px] text-slate-400">Consistent Distinction Rate</p>
          </div>
        </div>
      </GlassCard>

    </div>
  );
};
