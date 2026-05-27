import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MenuSection from "./components/MenuSection";
import AboutSection from "./components/AboutSection";
import PromoBanner from "./components/PromoBanner";
import GallerySection from "./components/GallerySection";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";

export default function Home() {
  return (
    <main className="bg-[#0B0B0B] overflow-hidden">
      <Navbar />
      <Hero />
      <MenuSection />
      <AboutSection />
      <PromoBanner />
      <GallerySection />
      <Footer />
      <SmoothScroll />
    </main>
  );
}