import React, { useState } from "react";
import { Modal } from "../ui/Modal";
import { Button } from "../ui/Button";
import { CreditCard, UserPlus, ArrowRight, ShieldCheck, CheckCircle2, Building, Play } from "lucide-react";
import { KIS_INFO } from "../../data/kisData";

export const InteractiveModals = ({ 
  feeModalOpen, setFeeModalOpen, 
  enrollModalOpen, setEnrollModalOpen,
  videoModalOpen, setVideoModalOpen 
}) => {
  // Fee State
  const [studentId, setStudentId] = useState("");
  const [selectedClass, setSelectedClass] = useState("Class I");

  // Enroll State
  const [parentName, setParentName] = useState("");
  const [childName, setChildName] = useState("");
  const [phone, setPhone] = useState("");
  const [grade, setGrade] = useState("Pre-Nursery");
  const [enrollSubmitted, setEnrollSubmitted] = useState(false);

  const handleEnrollSubmit = (e) => {
    e.preventDefault();
    setEnrollSubmitted(true);
    setTimeout(() => {
      window.open(KIS_INFO.portalUrls.enrollment, "_blank");
    }, 1500);
  };

  const handleFeeRedirect = (e) => {
    e.preventDefault();
    window.open(`${KIS_INFO.portalUrls.feePayment}?student_id=${encodeURIComponent(studentId)}`, "_blank");
  };

  return (
    <>
      {/* 1. Fee Payment Modal */}
      <Modal
        isOpen={feeModalOpen}
        onClose={() => setFeeModalOpen(false)}
        title="Online Fee Submission Portal"
      >
        <div className="space-y-6">
          <div className="flex items-center gap-3 p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs">
            <ShieldCheck className="w-5 h-5 shrink-0 text-emerald-400" />
            <p>Secure ICICI & Accevate Payment Gateway Integration for Krishna International School parents.</p>
          </div>

          <form onSubmit={handleFeeRedirect} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Student Registration ID / Roll Number *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. KIS/2026/1042"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Current Class / Grade
              </label>
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-slate-100 focus:outline-none focus:border-emerald-500 transition-colors"
              >
                {["Pre-Nursery", "Nursery", "KG", "Class I", "Class II", "Class III", "Class IV", "Class V", "Class VI", "Class VII", "Class VIII", "Class IX", "Class X", "Class XI", "Class XII"].map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <Button type="submit" variant="primary" size="lg" className="w-full" icon={CreditCard}>
                Proceed to Payment Gateway
              </Button>
            </div>
          </form>

          <div className="text-center text-xs text-slate-400 pt-2 border-t border-slate-800">
            For fee receipts or query support, email <span className="text-emerald-400">info@kisaligarh.com</span> or call <span className="text-emerald-400">+91 98370 50000</span>
          </div>
        </div>
      </Modal>

      {/* 2. Enrollment Inquiry Modal */}
      <Modal
        isOpen={enrollModalOpen}
        onClose={() => {
          setEnrollModalOpen(false);
          setEnrollSubmitted(false);
        }}
        title="Admission Inquiry & Enrollment 2026-27"
      >
        {enrollSubmitted ? (
          <div className="flex flex-col items-center justify-center text-center p-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-xl font-bold text-white font-heading">Inquiry Registered Successfully!</h4>
            <p className="text-xs text-slate-300 max-w-md">
              Redirecting to official Accevate registration form to complete document upload and seat selection...
            </p>
          </div>
        ) : (
          <form onSubmit={handleEnrollSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Parent / Guardian Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-slate-100 focus:outline-none focus:border-emerald-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Child's Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Child Name"
                  value={childName}
                  onChange={(e) => setChildName(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-slate-100 focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 9876543210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-slate-100 focus:outline-none focus:border-emerald-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Target Grade
                </label>
                <select
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-slate-100 focus:outline-none focus:border-emerald-500"
                >
                  {["Pre-Nursery", "Nursery", "KG", "Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5", "Grade 6", "Grade 7", "Grade 8", "Grade 9", "Grade 10", "Grade 11 (Science)", "Grade 11 (Commerce)", "Grade 11 (Humanities)"].map((g) => (
                    <option key={g} value={g}>{g}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="pt-2">
              <Button type="submit" variant="primary" size="lg" className="w-full" icon={ArrowRight}>
                Submit Inquiry & Open Registration Form
              </Button>
            </div>
          </form>
        )}
      </Modal>

      {/* 3. Video Showcase Modal */}
      <Modal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        title="Krishna International School - Virtual Tour"
        maxWidth="max-w-4xl"
      >
        <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/UCfAsGL009vpBCbLDxP9fQsw?autoplay=1"
            title="KIS Aligarh Virtual Tour"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </Modal>
    </>
  );
};
