import React, { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import GoldMarquee from "./components/GoldMarquee";
import Collections from "./components/Collections";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import WhatsAppBooking from "./components/WhatsAppBooking";
import InstagramGrid from "./components/InstagramGrid";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (loaded) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [loaded]);

  return (
    <div className="App relative bg-[#0A0908] text-white min-h-screen" data-testid="landing-root">
      <Loader onComplete={() => setLoaded(true)} />
      <Navigation />
      <main>
        <Hero />
        <GoldMarquee />
        <Collections />
        <HowItWorks />
        <Testimonials />
        <WhatsAppBooking />
        <InstagramGrid />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
