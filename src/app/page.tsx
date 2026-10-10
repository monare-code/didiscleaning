import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import ImageGallery from "@/components/ImageGallery";
import ServiceAreas from "@/components/ServiceAreas";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ServicesOverview />
      <ImageGallery />
      <ServiceAreas />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
