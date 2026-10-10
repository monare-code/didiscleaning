import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesOverview from "@/components/ServicesOverview";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="min-h-screen flex flex-col bg-cream pt-24">
      <Header />
      <div className="flex-grow">
        <section className="pt-16 pb-8 text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-4">Our Services</h1>
          <p className="text-primary/70 max-w-2xl mx-auto">Explore our tailored cleaning solutions designed for premium spaces.</p>
        </section>
        <ServicesOverview />
        <section className="py-16 text-center">
          <Link href="/quote" className="bg-primary text-cream px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 transition-all shadow-lg hover:-translate-y-1 inline-block">
            Get a Custom Quote
          </Link>
        </section>
      </div>
      <Footer />
    </main>
  );
}
