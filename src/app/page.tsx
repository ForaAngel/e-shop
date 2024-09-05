import Image from "next/image";
import Nav from "./components/navBar";
import HeroSection from "./components/heroSection";
import FeaturedCategories from "./components/collections";
import FeaturesSection from "./components/featuresSection";
import CtaSection from "./components/ctaSection";
import Footer from "./components/footer";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <main>
        <Nav />
        <HeroSection />
        <FeaturedCategories />
        <FeaturesSection />
        <CtaSection />
        <Footer />
      </main>
    </>
  );
}
