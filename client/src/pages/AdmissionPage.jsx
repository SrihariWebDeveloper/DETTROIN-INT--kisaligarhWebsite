import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  UserPlus, CreditCard, FileCheck, ShieldCheck, ArrowRight, 
  CheckCircle2, Search, Download, HelpCircle, Phone
} from "lucide-react";
import { Badge } from "../components/ui/Badge";
import { GlassCard } from "../components/ui/GlassCard";
import { Button } from "../components/ui/Button";
import { KIS_INFO } from "../data/kisData";

export const AdmissionPage = ({ onOpenFeeModal, onOpenEnrollModal }) => {
  const [tcSearch, setTcSearch] = useState("");
  const [tcResult, setTcResult] = useState(null);

  const handleTcSearch = (e) => {
    e.preventDefault();
    if (tcSearch.trim()) {
      setTcResult({
        tcNumber: `KIS/TC/2026/${Math.floor(1000 + Math.random() * 9000)}`,
        studentName: "Verified KIS Student",
        issueDate: "15 April 2026",
        status: "Verified Record Active"
      });
    }
  };

  const admissionSteps = [
    {
      step: "01",
      title: "Online Registration Inquiry",
      desc: "Fill the quick online enrollment form or visit our campus admissions desk on Delhi G.T. Road."
    },
    {
      step: "02",
      title: "Document Verification",
      desc: "Submit Birth Certificate, Transfer Certificate (if applicable), previous report card, and passport photos."
    },
    {
      step: "03",
      title: "Student Interaction",
      desc: "Friendly informal interaction for early foundation grades or standard diagnostic assessment for middle/senior grades."
    },
    {
      step: "04",
      title: "Fee Payment & Enrollment",
      desc: "Complete fee payment online via Accevate ICICI gateway to finalize registration and uniform/book allotment."
    }
  ];

  const feeStructureMock = [
    { grade: "Pre-Nursery to KG", tuitionFee: "₹ 2,400 / month", labFee: "Included", devFee: "₹ 3,000 / annum" },
    { grade: "Class I to Class V", tuitionFee: "₹ 2,800 / month", labFee: "Included", devFee: "₹ 3,500 / annum" },
    { grade: "Class VI to Class VIII", tuitionFee: "₹ 3,200 / month", labFee: "₹ 400 / month", devFee: "₹ 4,000 / annum" },
    { grade: "Class IX & Class X", tuitionFee: "₹ 3,800 / month", labFee: "₹ 600 / month", devFee: "₹ 4,500 / annum" },
    { grade: "Class XI & XII (Science)", tuitionFee: "₹ 4,500 / month", labFee: "₹ 800 / month", devFee: "₹ 5,000 / annum" },
    { grade: "Class XI & XII (Commerce)", tuitionFee: "₹ 4,200 / month", labFee: "₹ 500 / month", devFee: "₹ 5,000 / annum" }
  ];

  return (
    <div className="space-y-20 pb-20 pt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Page Header */}
      <div className="text-center max-w-4xl mx-auto space-y-4">
        <Badge variant="emerald" pulse>Admissions Open 2026-27</Badge>
        <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-white">
          Join Krishna International <span className="text-gradient-emerald">Family</span>
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          Krishna International School seeks students from diverse social and cultural backgrounds who demonstrate a desire to learn, explore, and excel.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Button variant="primary" size="lg" icon={UserPlus} onClick={onOpenEnrollModal}>
            Fill Online Admission Form
          </Button>
          <Button variant="glass" size="lg" icon={CreditCard} onClick={onOpenFeeModal}>
            Pay School Fees Online
          </Button>
        </div>
      </div>

      {/* 1. Admission Steps */}
      <div className="space-y-8" id="process">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <Badge variant="cyan">Transparent Process</Badge>
          <h2 className="text-3xl font-extrabold font-heading text-white">
            Simple 4-Step Admission Journey
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {admissionSteps.map((s, i) => (
            <GlassCard key={i} className="p-6 space-y-3 border-slate-800" glow>
              <div className="text-3xl font-extrabold font-heading text-gradient-emerald">
                {s.step}
              </div>
              <h3 className="text-lg font-bold text-white font-heading">{s.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{s.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* 2. Fee Structure Table */}
      <GlassCard className="p-8 sm:p-12 border-slate-800 space-y-6" glow>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <Badge variant="gold">Academic Session 2026-27</Badge>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white mt-2">
              Fee Structure Overview
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              Transparent & competitive fee schedule aligned with school facilities and CBSE standards.
            </p>
          </div>
          <Button variant="primary" size="sm" icon={CreditCard} onClick={onOpenFeeModal}>
            Pay Fee Online
          </Button>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950/60">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-900 text-emerald-400 font-heading uppercase text-[11px] tracking-wider border-b border-slate-800">
              <tr>
                <th className="p-4">Grade / Class Level</th>
                <th className="p-4">Tuition Fee</th>
                <th className="p-4">Laboratory / Computer Fee</th>
                <th className="p-4">Development Charge</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 text-slate-200">
              {feeStructureMock.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-900/50 transition-colors">
                  <td className="p-4 font-bold text-white">{row.grade}</td>
                  <td className="p-4 text-emerald-300 font-semibold">{row.tuitionFee}</td>
                  <td className="p-4 text-slate-300">{row.labFee}</td>
                  <td className="p-4 text-slate-300">{row.devFee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 text-xs text-slate-400 border-t border-slate-800">
          <p>* Fees can be paid monthly, quarterly, or annually via Accevate ICICI digital portal.</p>
          <a href={KIS_INFO.portalUrls.feePayment} target="_blank" rel="noreferrer" className="text-emerald-400 font-semibold hover:underline">
            Open External Accevate Gateway →
          </a>
        </div>
      </GlassCard>

      {/* 3. Transfer Certificate Search Widget */}
      <GlassCard className="p-8 sm:p-12 border-slate-800 space-y-6" glow id="tc">
        <div className="max-w-2xl">
          <Badge variant="purple">Student Records</Badge>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white mt-2">
            Transfer Certificate (TC) Verification
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            Search and verify official Transfer Certificates issued by Krishna International School.
          </p>
        </div>

        <form onSubmit={handleTcSearch} className="flex flex-col sm:flex-row gap-3 max-w-xl">
          <input
            type="text"
            required
            placeholder="Enter Student Reg No. or TC No."
            value={tcSearch}
            onChange={(e) => setTcSearch(e.target.value)}
            className="flex-1 px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 text-sm"
          />
          <Button type="submit" variant="primary" icon={Search}>
            Search TC
          </Button>
        </form>

        {tcResult && (
          <div className="p-6 rounded-2xl bg-slate-900 border border-emerald-500/30 space-y-3 max-w-xl">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">{tcResult.status}</span>
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="text-xs text-slate-200 space-y-1">
              <p><strong>TC Number:</strong> {tcResult.tcNumber}</p>
              <p><strong>Student Name:</strong> {tcResult.studentName}</p>
              <p><strong>Issue Date:</strong> {tcResult.issueDate}</p>
            </div>
            <Button variant="outline" size="sm" icon={Download} className="w-full mt-2">
              Download Verified Copy
            </Button>
          </div>
        )}
      </GlassCard>

    </div>
  );
};
