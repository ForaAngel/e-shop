import Image from "next/image";
import Nav from "./components/navBar";
import HeroSection from "./components/heroSection";
import FeaturedCategories from "./components/collections";
import FeaturesSection from "./components/featuresSection";
import CtaSection from "./components/ctaSection";
import Footer from "./components/footer";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <head>
        <title>Luxe</title>
        <meta
          name="description"
          content="Descubre nuestra colección exclusiva de joyería de lujo: anillos, collares y pendientes diseñados para resaltar tu estilo y elegancia."
        />
        <meta
          name="keywords"
          content="joyería, anillos, collares, pendientes, lujo, exclusividad"
        />
        <meta name="author" content="Tu Nombre o Empresa" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Nav />
        <HeroSection />
        <FeaturedCategories />
        <FeaturesSection />
        <CtaSection />
        <Footer />
      </body>
    </>
  );
}
