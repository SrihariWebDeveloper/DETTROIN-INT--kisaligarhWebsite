import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, X, ChevronDown, GraduationCap, CreditCard, UserPlus, 
  Sparkles, Award, BookOpen, ShieldCheck, HeartHandshake, Phone, ArrowUpRight
} from "lucide-react";
import { Button } from "../ui/Button";
import { KIS_INFO } from "../../data/kisData";

export const Navbar = ({ onOpenFeeModal, onOpenEnrollModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { 
      name: "About KIS", 
      path: "/about",
      submenu: [
        { title: "School Overview", desc: "Our 5-acre eco-friendly campus & philosophy", href: "/about#overview" },
        { title: "Chairman's Message", desc: "Vision from Founder Chairman", href: "/about#chairman" },
        { title: "Principal's Message", desc: "Academic excellence & student development", href: "/about#principal" },
        { title: "Recognition & Awards", desc: "60+ National & International accolades", href: "/about#awards" }
      ]
    },
    { 
      name: "Academics", 
      path: "/academics",
      submenu: [
        { title: "Curriculum & Streams", desc: "CBSE aligned Primary, Middle & Senior Secondary", href: "/academics#curriculum" },
        { title: "Teaching Methodology", desc: "Interactive STEM & enquiry based learning", href: "/academics#methodology" },
        { title: "Student Council", desc: "Leadership roles & Roll of Honour", href: "/academics#council" }
      ]
    },
    { 
      name: "Admissions", 
      path: "/admissions",
      submenu: [
        { title: "Admission Process", desc: "Step-by-step registration & guidelines", href: "/admissions#process" },
        { title: "Online Fee Submission", desc: "Quick ICICI / Accevate payment portal", href: "#fee-modal", action: onOpenFeeModal },
        { title: "Transfer Certificate", desc: "Download & verify TC records online", href: "/admissions#tc" }
      ]
    },
    { name: "Co-Curricular", path: "/co-curricular" },
    { name: "Events", path: "/events" },
    { name: "Gallery", path: "/gallery" },
    { name: "Join Us", path: "/join-us" }
  ];

  return (
    <>
      {/* Top Banner Notice */}
      <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-cyan-950 border-b border-emerald-500/20 py-2 px-4 text-xs font-medium text-slate-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider font-bold shrink-0">Admissions Open 2026-27</span>
            <p className="truncate">Admissions open for Pre-Nursery to Grade XI. Experience CBSE Excellence on a 5-Acre Green Campus.</p>
          </div>
          <div className="hidden md:flex items-center gap-4 text-xs shrink-0">
            <a href={`tel:${KIS_INFO.phones[0]}`} className="flex items-center gap-1 hover:text-emerald-400 transition-colors">
              <Phone className="w-3 h-3" /> {KIS_INFO.phones[0]}
            </a>
            <span className="text-slate-700">|</span>
            <a href={KIS_INFO.portalUrls.feePayment} target="_blank" rel="noreferrer" className="hover:text-emerald-400 flex items-center gap-1 transition-colors">
              Accevate Portal <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Floating Main Navbar */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${isScrolled ? "py-3 bg-slate-950/95 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl shadow-slate-950/50" : "py-4 bg-slate-950/90 backdrop-blur-lg border-b border-slate-800/50 shadow-md shadow-slate-950/30"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group shrink-0">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 p-0.5 shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-emerald-400" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-lg sm:text-xl tracking-tight text-white group-hover:text-emerald-300 transition-colors whitespace-nowrap">
                  Krishna International
                </span>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold flex items-center gap-1 whitespace-nowrap">
                  Aligarh <span className="w-1 h-1 rounded-full bg-emerald-400"></span> CBSE Affiliated
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
              {navLinks.map((link) => (
                <div 
                  key={link.name} 
                  className="relative shrink-0"
                  onMouseEnter={() => link.submenu && setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={link.path}
                    className={`px-2.5 xl:px-3.5 py-2 text-xs xl:text-sm font-medium rounded-full transition-colors flex items-center gap-1 whitespace-nowrap ${
                      location.pathname === link.path 
                        ? "text-emerald-400 bg-emerald-500/10 font-semibold" 
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                    {link.submenu && <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === link.name ? "rotate-180 text-emerald-400" : "text-slate-500"}`} />}
                  </Link>

                  {/* Dropdown Menu */}
                  {link.submenu && (
                    <AnimatePresence>
                      {activeDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 5, scale: 0.98 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-72 p-2.5 glass-dropdown rounded-2xl border border-slate-700/80 shadow-2xl shadow-slate-950/90 z-50 bg-slate-950/98"
                        >
                          {link.submenu.map((sub) => (
                            sub.action ? (
                              <button
                                key={sub.title}
                                onClick={() => {
                                  sub.action();
                                  setActiveDropdown(null);
                                }}
                                className="w-full text-left p-3 rounded-xl hover:bg-slate-800/90 transition-colors group block"
                              >
                                <div className="text-sm font-semibold text-slate-100 group-hover:text-emerald-400 transition-colors flex items-center justify-between">
                                  {sub.title}
                                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-emerald-400" />
                                </div>
                                <div className="text-xs text-slate-300/90 mt-0.5">{sub.desc}</div>
                              </button>
                            ) : (
                              <Link
                                key={sub.title}
                                to={sub.href}
                                onClick={() => setActiveDropdown(null)}
                                className="p-3 rounded-xl hover:bg-slate-800/90 transition-colors group block"
                              >
                                <div className="text-sm font-semibold text-slate-100 group-hover:text-emerald-400 transition-colors">
                                  {sub.title}
                                </div>
                                <div className="text-xs text-slate-300/90 mt-0.5">{sub.desc}</div>
                              </Link>
                            )
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
              <Button 
                variant="glass" 
                size="sm" 
                icon={CreditCard}
                onClick={onOpenFeeModal}
                className="whitespace-nowrap"
              >
                Pay Fee
              </Button>
              <Button 
                variant="primary" 
                size="sm" 
                icon={UserPlus}
                onClick={onOpenEnrollModal}
                className="whitespace-nowrap"
              >
                Enroll Now
              </Button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-emerald-400" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed top-[108px] left-0 right-0 z-50 bg-slate-950/98 backdrop-blur-2xl border-b border-slate-800/90 p-6 overflow-y-auto max-h-[calc(100vh-120px)] shadow-2xl"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col gap-1">
                  <Link
                    to={link.path}
                    className={`py-2.5 px-4 text-base font-semibold rounded-xl transition-colors ${
                      location.pathname === link.path
                        ? "text-emerald-400 bg-emerald-500/10"
                        : "text-slate-200 hover:bg-slate-900"
                    }`}
                  >
                    {link.name}
                  </Link>

                  {link.submenu && (
                    <div className="pl-6 flex flex-col gap-2 my-1 border-l border-slate-800">
                      {link.submenu.map((sub) => (
                        sub.action ? (
                          <button
                            key={sub.title}
                            onClick={() => {
                              sub.action();
                              setMobileMenuOpen(false);
                            }}
                            className="text-left text-sm text-slate-400 hover:text-emerald-400 py-1"
                          >
                            • {sub.title}
                          </button>
                        ) : (
                          <Link
                            key={sub.title}
                            to={sub.href}
                            className="text-sm text-slate-400 hover:text-emerald-400 py-1"
                          >
                            • {sub.title}
                          </Link>
                        )
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
                <Button 
                  variant="glass" 
                  size="md" 
                  icon={CreditCard}
                  className="w-full justify-center"
                  onClick={() => {
                    onOpenFeeModal();
                    setMobileMenuOpen(false);
                  }}
                >
                  Pay Fee Online
                </Button>
                <Button 
                  variant="primary" 
                  size="md" 
                  icon={UserPlus}
                  className="w-full justify-center"
                  onClick={() => {
                    onOpenEnrollModal();
                    setMobileMenuOpen(false);
                  }}
                >
                  Click to Enroll
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
