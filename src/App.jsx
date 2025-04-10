import { useEffect } from "react";
import Navber from "./components/Navber";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Reviews from "./components/Reviews";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

const App = () => {
  useEffect(() => {
    const audio = document.getElementById("bg-music");

    const playAudio = () => {
      audio.muted = false;
      audio.play().catch((err) => {
        console.log("Autoplay diblokir, menunggu interaksi user...");
      });
    };

    playAudio(); // coba play langsung
    window.addEventListener("click", playAudio); // play jika autoplay diblokir

    return () => {
      window.removeEventListener("click", playAudio);
    };
  }, []);

  return (
    <main className="overflow-x-hidden antialiased text-neutral-800">
      {/* Audio disembunyikan & looping */}
      <audio
        id="bg-music"
        src="/instrumental-undertone-music-275398.mp3"
        autoPlay
        loop
        muted
        hidden
      />

      <Navber />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Reviews />
      <ContactUs />
      <Footer />
    </main>
  );
};

export default App;
