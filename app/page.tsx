import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LeadForm from "@/components/LeadForm";
import TrustStrip from "@/components/TrustStrip";
import Services from "@/components/Services";
import Work from "@/components/Work";
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
        <LeadForm />
        <TrustStrip />
        <Services />
        <Work />
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
