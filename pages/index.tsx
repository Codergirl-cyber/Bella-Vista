import Head from "next/head";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SignatureDishes from "@/components/SignatureDishes";
import MenuPreview from "@/components/MenuPreview";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Reservation from "@/components/Reservation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bella Vista — Authentic Italian Fine Dining</title>
      </Head>
      <Navbar />
      <main>
        <Hero />
        <About />
        <SignatureDishes />
        <MenuPreview />
        <Testimonials />
        <Gallery />
        <Reservation />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
