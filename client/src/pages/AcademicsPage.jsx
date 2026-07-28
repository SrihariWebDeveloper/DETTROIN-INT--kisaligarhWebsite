import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  BookOpen, GraduationCap, Award, ShieldCheck, CheckCircle2, 
  ChevronRight, FileText, Users, Sparkles, Download
} from "lucide-react";
import { Badge } from "../components/ui/Badge";
import { GlassCard } from "../components/ui/GlassCard";
import { Button } from "../components/ui/Button";
import { ACADEMIC_SECTIONS } from "../data/kisData";

export const AcademicsPage = () => {
  const [activeTab, setActiveTab] = useState("primary");

  const subjects = {
    primary: ["English Language & Literature", "Hindi", "Mathematics", "Environmental Studies (EVS)", "Computer Basics", "Art & Craft", "General Knowledge"],
    middle: ["English", "Hindi / Sanskrit", "Mathematics", "Integrated Science (Physics, Chem, Bio)", "Social Science (History, Geo, Civics)", "Computer Applications & Coding", "Physical Education"],
    secondary: ["English Core", "Mathematics (Standard / Basic)", "Physics", "Chemistry", "Biology", "Accountancy", "Business Studies", "Economics", "Computer Science (Python)", "Physical Education"]
  };

  const councilMembers = [
    { role: "Head Boy", name: "Master Aditya Sharma", grade: "Grade XII - Science" },
    { role: "Head Girl", name: "Miss Ananya Verma", grade: "Grade XII - Commerce" },
    { role: "Sports Captain", name: "Master Rohan Singh", grade: "Grade XII - Physical Ed" },
    { role: "Cultural Secretary", name: "Miss Priya Agarwal", grade: "Grade XI - Humanities" }
  ];

  return (
    <div className="space-y-20 pb-20 pt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Page Header */}
      <div className="text-center max-w-4xl mx-auto space-y-4">
        <Badge variant="emerald" pulse>CBSE Aligned Excellence</Badge>
        <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-white">
          Academic Structure & <span className="text-gradient-emerald">Curriculum</span>
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          At Krishna International School, our academic framework nurtures critical thinking, conceptual clarity, and competitive readiness through state-of-the-art CBSE curriculum standards.
        </p>
      </div>

      {/* 1. Interactive Academic Stages */}
      <div className="space-y-8" id="curriculum">
        <div className="flex justify-center gap-2 sm:gap-4 overflow-x-auto pb-2">
          {ACADEMIC_SECTIONS.map((sec) => (
            <button
              key={sec.id}
              onClick={() => setActiveTab(sec.id)}
              className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all shrink-0 ${
                activeTab === sec.id
                  ? "bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20"
                  : "bg-slate-900 text-slate-400 border border-slate-800 hover:text-white"
              }`}
            >
              {sec.name.split("(")[0]}
            </button>
          ))}
        </div>

        {ACADEMIC_SECTIONS.filter((s) => s.id === activeTab).map((sec) => (
          <GlassCard key={sec.id} className="p-8 sm:p-12 border-slate-800 space-y-6" glow>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <Badge variant="cyan">{sec.name}</Badge>
                <h3 className="text-2xl font-bold font-heading text-white mt-2">Key Learning Objectives</h3>
              </div>
              <Badge variant="gold">CBSE Standardized</Badge>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">{sec.focus}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
              {sec.highlights.map((h, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-900 border border-slate-800/80 text-xs font-semibold text-emerald-300 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-slate-800 space-y-3" id="subjects">
              <h4 className="text-base font-bold text-white font-heading">Subjects Taught in this Stage:</h4>
              <div className="flex flex-wrap gap-2">
                {subjects[activeTab].map((sub, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-full bg-slate-800 text-xs text-slate-200 border border-slate-700">
                    {sub}
                  </span>
                ))}
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* 2. Teaching Methodology & Examination */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="methodology">
        <GlassCard className="p-8 space-y-4 border-slate-800">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
            <BookOpen className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-white font-heading">Teaching Methodology</h3>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            Our teaching methodology moves away from rote learning towards inquiry-driven understanding. Classrooms are equipped with interactive smart boards, digital simulation tools, and hands-on laboratory experiments.
          </p>
          <ul className="space-y-2 text-xs text-slate-300 pt-2">
            <li className="flex items-center gap-2">• Regular diagnostic tests and individual feedback</li>
            <li className="flex items-center gap-2">• Remedial assistance for developing learners</li>
            <li className="flex items-center gap-2">• Advanced problem solving for competitive exams</li>
          </ul>
        </GlassCard>

        <GlassCard className="p-8 space-y-4 border-slate-800">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-white font-heading">Examination & Promotion</h3>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            Evaluation is continuous and comprehensive, strictly aligned with CBSE bylaws. Assessments include Periodic Tests, Mid-Term Examinations, Practical Projects, and Annual Board Assessments.
          </p>
          <ul className="space-y-2 text-xs text-slate-300 pt-2">
            <li className="flex items-center gap-2">• Periodic Progress Reports provided at PTMs</li>
            <li className="flex items-center gap-2">• Minimum 75% attendance policy for annual promotion</li>
            <li className="flex items-center gap-2">• Recognition of Academic Roll of Honour scholars</li>
          </ul>
        </GlassCard>
      </div>

      {/* 3. Student Council & Roll of Honour */}
      <div className="space-y-8" id="council">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <Badge variant="purple">Student Leadership</Badge>
          <h2 className="text-3xl font-extrabold font-heading text-white">
            Student Council & Leaders
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {councilMembers.map((member, i) => (
            <GlassCard key={i} className="p-6 text-center space-y-3 border-slate-800">
              <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 text-slate-950 font-bold flex items-center justify-center mx-auto text-xl font-heading shadow-lg shadow-emerald-500/20">
                {member.name.split(" ")[1]?.[0] || "S"}
              </div>
              <div>
                <h4 className="text-base font-bold text-white">{member.name}</h4>
                <p className="text-xs text-emerald-400 font-semibold">{member.role}</p>
                <p className="text-[11px] text-slate-400 mt-0.5">{member.grade}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* 4. Mandatory Disclosures Document Section */}
      <GlassCard className="p-8 sm:p-12 border-slate-800 space-y-6" glow id="mandatory">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <Badge variant="gold">CBSE Compliance</Badge>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white mt-2">
              Mandatory Public Disclosures
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              In accordance with CBSE guidelines, all statutory certificates, building safety documents, NOC, and SMC lists are publicly accessible.
            </p>
          </div>
          <Button variant="outline" size="sm" icon={Download}>
            Download Compliance Dossier
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-xs">
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
            <p className="font-bold text-white">CBSE Affiliation Status</p>
            <p className="text-slate-400 mt-1">Affiliated till Senior Secondary Level</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
            <p className="font-bold text-white">Fire & Building Safety</p>
            <p className="text-slate-400 mt-1">Certified by UP Fire Department & PWD</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
            <p className="font-bold text-white">Sanitation & Water</p>
            <p className="text-slate-400 mt-1">Municipal Water Quality Passed</p>
          </div>
        </div>
      </GlassCard>

    </div>
  );
};
