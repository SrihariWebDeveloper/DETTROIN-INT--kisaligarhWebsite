import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  GraduationCap, MapPin, Phone, Mail, ExternalLink, QrCode, 
  ChevronRight, Heart, Shield, Award, ArrowUpRight
} from "lucide-react";
import { KIS_INFO } from "../../data/kisData";
import { Modal } from "../ui/Modal";

export const Footer = () => {
  const [qrModalOpen, setQrModalOpen] = useState(false);

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800 text-slate-400 text-sm overflow-hidden pt-16 pb-12">
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand & Address Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 p-0.5 shadow-lg shadow-emerald-500/20">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-emerald-400" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-xl tracking-tight text-white">
                  Krishna International
                </span>
                <span className="text-xs text-slate-400 font-medium">Aligarh (CBSE Affiliated)</span>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              {KIS_INFO.description}
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <address className="not-italic text-slate-300 text-xs leading-snug">
                  {KIS_INFO.address}
                </address>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <div className="flex gap-3 text-xs text-slate-300 font-medium">
                  {KIS_INFO.phones.map((phone) => (
                    <a key={phone} href={`tel:${phone}`} className="hover:text-emerald-400 transition-colors">
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`mailto:${KIS_INFO.emails[0]}`} className="text-xs text-slate-300 hover:text-emerald-400 transition-colors">
                  {KIS_INFO.emails[0]}
                </a>
              </div>
            </div>

            <a
              href={KIS_INFO.portalUrls.maps}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              View Google Maps Direction <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Quick Links: About & Admission */}
          <div className="space-y-4">
            <h4 className="text-white font-heading font-bold text-base tracking-wide uppercase text-xs text-emerald-400">
              About & Admission
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/about" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-600" /> School Overview
                </Link>
              </li>
              <li>
                <Link to="/about#chairman" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-600" /> Chairman's Message
                </Link>
              </li>
              <li>
                <Link to="/about#principal" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-600" /> Principal's Message
                </Link>
              </li>
              <li>
                <Link to="/about#awards" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-600" /> Recognition & Awards
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-600" /> Admission Process
                </Link>
              </li>
              <li>
                <a href={KIS_INFO.portalUrls.enrollment} target="_blank" rel="noreferrer" className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1.5 font-semibold">
                  <ChevronRight className="w-3 h-3 text-emerald-400" /> Online Registration <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links: Academics & Life */}
          <div className="space-y-4">
            <h4 className="text-white font-heading font-bold text-base tracking-wide uppercase text-xs text-emerald-400">
              Academics & Life
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/academics" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-600" /> Academic Structure
                </Link>
              </li>
              <li>
                <Link to="/academics#subjects" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-600" /> Subjects Taught
                </Link>
              </li>
              <li>
                <Link to="/co-curricular" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-600" /> Sports & Life Skills
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-600" /> Upcoming School Events
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-600" /> Media & Photo Gallery
                </Link>
              </li>
              <li>
                <Link to="/join-us" className="hover:text-white transition-colors flex items-center gap-1.5 text-cyan-400 font-semibold">
                  <ChevronRight className="w-3 h-3 text-cyan-400" /> Faculty Careers / Vacancies
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Portals & QR Code Card */}
          <div className="space-y-4">
            <h4 className="text-white font-heading font-bold text-base tracking-wide uppercase text-xs text-emerald-400">
              Quick Portals & QR
            </h4>
            <div className="glass-card p-4 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQrModalOpen(true)}
                  className="w-16 h-16 bg-white p-1 rounded-xl shrink-0 border border-slate-700 hover:scale-105 transition-transform"
                >
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://krishnaintf.accevate.com/online/main"
                    alt="KIS Accevate QR Code"
                    className="w-full h-full object-contain"
                  />
                </button>
                <div className="text-xs">
                  <p className="font-semibold text-white">Scan to Pay Fee</p>
                  <p className="text-slate-400 text-[11px] mt-0.5">Instant mobile access to school portal</p>
                  <button
                    onClick={() => setQrModalOpen(true)}
                    className="text-emerald-400 hover:underline text-[11px] font-medium mt-1 block"
                  >
                    Expand QR
                  </button>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800/80 flex flex-col gap-1.5">
                <a
                  href={KIS_INFO.portalUrls.feePayment}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full text-center py-2 px-3 bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 rounded-xl text-xs font-semibold hover:bg-emerald-500/20 transition-colors flex items-center justify-center gap-1"
                >
                  Online Fee Portal <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href={KIS_INFO.portalUrls.alumni}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full text-center py-2 px-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-medium transition-colors flex items-center justify-center gap-1"
                >
                  Alumni Portal <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Krishna International School, Aligarh. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1 text-slate-400">
              <Shield className="w-3.5 h-3.5 text-emerald-400" /> CBSE Code: 202001
            </span>
            <Link to="/academics#mandatory" className="hover:text-emerald-400 transition-colors">
              Mandatory Disclosures
            </Link>
          </div>
        </div>
      </div>

      {/* QR Zoom Modal */}
      <Modal
        isOpen={qrModalOpen}
        onClose={() => setQrModalOpen(false)}
        title="KIS Mobile Quick Access QR"
        maxWidth="max-w-md"
      >
        <div className="flex flex-col items-center text-center p-4 space-y-4">
          <div className="p-4 bg-white rounded-2xl shadow-xl">
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://krishnaintf.accevate.com/online/main"
              alt="Accevate Portal QR Code"
              className="w-56 h-56 object-contain"
            />
          </div>
          <div className="space-y-1">
            <h4 className="font-bold text-white text-base">Krishna International School Portal</h4>
            <p className="text-xs text-slate-400">Scan with your smartphone camera to quickly pay school fees or access registration forms.</p>
          </div>
        </div>
      </Modal>
    </footer>
  );
};
