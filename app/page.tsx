import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Why from "@/components/Why";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import BookingProvider from "@/components/BookingContext";

export default function Home() {
  return (
    <BookingProvider>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Why />
        <Process />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </BookingProvider>
  );
}
