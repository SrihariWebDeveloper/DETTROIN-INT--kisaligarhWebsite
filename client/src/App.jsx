import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { InteractiveModals } from "./components/layout/InteractiveModals";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { AcademicsPage } from "./pages/AcademicsPage";
import { AdmissionPage } from "./pages/AdmissionPage";
import { CoCurricularPage } from "./pages/CoCurricularPage";
import { EventsPage } from "./pages/EventsPage";
import { GalleryPage } from "./pages/GalleryPage";
import { JoinUsPage } from "./pages/JoinUsPage";

// Helper component to scroll to top on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export function App() {
  const [feeModalOpen, setFeeModalOpen] = useState(false);
  const [enrollModalOpen, setEnrollModalOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#070a0f] text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-300">
        
        {/* Navigation Bar */}
        <Navbar
          onOpenFeeModal={() => setFeeModalOpen(true)}
          onOpenEnrollModal={() => setEnrollModalOpen(true)}
        />

        {/* Main Content View */}
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  onOpenFeeModal={() => setFeeModalOpen(true)}
                  onOpenEnrollModal={() => setEnrollModalOpen(true)}
                  onOpenVideoModal={() => setVideoModalOpen(true)}
                />
              }
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/academics" element={<AcademicsPage />} />
            <Route
              path="/admissions"
              element={
                <AdmissionPage
                  onOpenFeeModal={() => setFeeModalOpen(true)}
                  onOpenEnrollModal={() => setEnrollModalOpen(true)}
                />
              }
            />
            <Route path="/co-curricular" element={<CoCurricularPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/join-us" element={<JoinUsPage />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Global Interactive Modals */}
        <InteractiveModals
          feeModalOpen={feeModalOpen}
          setFeeModalOpen={setFeeModalOpen}
          enrollModalOpen={enrollModalOpen}
          setEnrollModalOpen={setEnrollModalOpen}
          videoModalOpen={videoModalOpen}
          setVideoModalOpen={setVideoModalOpen}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
