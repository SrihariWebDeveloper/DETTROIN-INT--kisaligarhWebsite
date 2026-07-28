import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Briefcase, GraduationCap, CheckCircle2, Send, Upload, Sparkles, Mail, Phone 
} from "lucide-react";
import { Badge } from "../components/ui/Badge";
import { GlassCard } from "../components/ui/GlassCard";
import { Button } from "../components/ui/Button";
import { CAREER_OPENINGS, KIS_INFO } from "../data/kisData";

export const JoinUsPage = () => {
  const [applicantName, setApplicantName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [position, setPosition] = useState("PGT - Physics / Mathematics");
  const [experience, setExperience] = useState("3-5 Years");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-20 pb-20 pt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header Banner */}
      <div className="text-center max-w-4xl mx-auto space-y-4">
        <Badge variant="emerald" pulse>Career Opportunities</Badge>
        <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-white">
          Join Our <span className="text-gradient-emerald">Educator</span> Team
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          At Krishna International School, we empower passionate teachers and administrative professionals to shape the leaders of tomorrow. Explore active vacancies below.
        </p>
      </div>

      {/* Active Vacancies List */}
      <div className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <Badge variant="cyan">Current Openings 2026-27</Badge>
          <h2 className="text-3xl font-extrabold font-heading text-white">
            Available Positions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CAREER_OPENINGS.map((job) => (
            <GlassCard key={job.id} className="p-8 space-y-4 border-slate-800" glow>
              <div className="flex items-center justify-between">
                <Badge variant="emerald">{job.type}</Badge>
                <span className="text-xs text-slate-400 font-medium">{job.department}</span>
              </div>

              <h3 className="text-xl font-bold font-heading text-white">{job.title}</h3>
              <p className="text-xs text-slate-300"><strong>Qualification Required:</strong> {job.qualification}</p>

              <div className="pt-2">
                <button
                  onClick={() => setPosition(job.title)}
                  className="text-xs font-bold text-emerald-400 hover:underline"
                >
                  Apply for this position ↓
                </button>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Application Form */}
      <GlassCard className="p-8 sm:p-12 border-slate-800 max-w-3xl mx-auto space-y-6" glow id="apply">
        <div className="space-y-2 text-center">
          <Badge variant="purple">Submit Application</Badge>
          <h2 className="text-3xl font-extrabold font-heading text-white">
            Faculty Application Form
          </h2>
          <p className="text-xs text-slate-400">
            Interested candidates can also email their detailed CV to <span className="text-emerald-400">{KIS_INFO.emails[0]}</span>
          </p>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-white font-heading">Application Submitted!</h3>
            <p className="text-xs text-slate-300 max-w-md mx-auto">
              Thank you for applying to Krishna International School. Our HR team will review your profile and contact shortlisted candidates for interviews.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Full Name"
                  value={applicantName}
                  onChange={(e) => setApplicantName(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-slate-100 text-sm focus:outline-none focus:border-emerald-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-slate-100 text-sm focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 9876543210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-slate-100 text-sm focus:outline-none focus:border-emerald-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Position Applied For
                </label>
                <select
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-slate-100 text-sm focus:outline-none focus:border-emerald-500"
                >
                  {CAREER_OPENINGS.map((j) => (
                    <option key={j.id} value={j.title}>{j.title}</option>
                  ))}
                  <option value="Other Administrative Staff">Other Administrative Staff</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Total Teaching Experience
              </label>
              <select
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-slate-100 text-sm focus:outline-none focus:border-emerald-500"
              >
                <option value="Fresher / < 1 Year">Fresher / &lt; 1 Year</option>
                <option value="1-3 Years">1-3 Years</option>
                <option value="3-5 Years">3-5 Years</option>
                <option value="5+ Years CBSE Experience">5+ Years CBSE Experience</option>
              </select>
            </div>

            <div className="pt-2">
              <Button type="submit" variant="primary" size="lg" className="w-full" icon={Send}>
                Submit Application Dossier
              </Button>
            </div>
          </form>
        )}
      </GlassCard>

    </div>
  );
};
