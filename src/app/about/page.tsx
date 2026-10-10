import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { ShieldCheck, Sparkles, Clock, HeartHandshake } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white pt-24">
      <Header />
      <div className="flex-grow">
        {/* Hero Section */}
        <div className="bg-cream py-20">
          <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-6">About Didi's Cleaning</h1>
            <p className="text-lg text-primary/80 leading-relaxed mb-8">
              Didi's Cleaning is a premium cleaning service dedicated to homes, estates, offices, and work parks in Mooikloof, Montana, and surrounding Pretoria areas. 
              We believe that a truly luxurious service means zero hassle for the client—which is why we arrive fully equipped with our own premium supplies and state-of-the-art cleaning equipment.
            </p>
            <p className="text-lg text-primary/80 leading-relaxed">
              Our staff is meticulously vetted and trained to deliver white-glove service, ensuring your privacy, security, and a flawlessly maintained home.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="py-24 container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-xl">
              <Image 
                src="/images/cleaning_values.jpg" 
                alt="Our core values - luxury and trust"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-12">Our Core Values</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-cream rounded-2xl flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-7 h-7 text-orange" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading text-primary mb-2">Unwavering Trust</h3>
                    <p className="text-primary/70 leading-relaxed">We meticulously vet our staff so you can have complete peace of mind, knowing your sanctuary is in safe hands.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-cream rounded-2xl flex items-center justify-center shrink-0">
                    <Sparkles className="w-7 h-7 text-orange" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading text-primary mb-2">Impeccable Quality</h3>
                    <p className="text-primary/70 leading-relaxed">From our state-of-the-art equipment to premium supplies, we leave no detail overlooked.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-cream rounded-2xl flex items-center justify-center shrink-0">
                    <Clock className="w-7 h-7 text-orange" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading text-primary mb-2">Zero Hassle</h3>
                    <p className="text-primary/70 leading-relaxed">We respect your time. Our team arrives fully equipped, requiring absolutely nothing from you.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-cream rounded-2xl flex items-center justify-center shrink-0">
                    <HeartHandshake className="w-7 h-7 text-orange" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading text-primary mb-2">Dedicated Care</h3>
                    <p className="text-primary/70 leading-relaxed">We treat your home with the utmost reverence, delivering a bespoke service tailored to your lifestyle.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
