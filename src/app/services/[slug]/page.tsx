import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowLeft } from "lucide-react";

const servicesData = {
  "standard-cleaning": {
    title: "Standard Cleaning",
    subtitle: "Maintain a pristine environment week after week.",
    description: "Our standard cleaning service is designed to keep your home looking its best consistently. We focus on the high-traffic areas and essential surfaces, ensuring your space remains welcoming and spotless.",
    image: "/images/standard-cleaning.jpg",
    features: [
      "Dusting of all accessible surfaces",
      "Wiping down exterior kitchen appliances",
      "Cleaning and sanitizing bathrooms",
      "Vacuuming carpets and rugs",
      "Mopping hard floors",
      "Emptying trash bins"
    ]
  },
  "deep-cleaning": {
    title: "Deep Cleaning",
    subtitle: "Intensive, top-to-bottom cleaning.",
    description: "A comprehensive cleaning service that reaches every hidden corner of your home. Perfect for spring cleaning or when your space needs a fresh reset, our deep clean covers areas often missed during regular upkeep.",
    image: "/images/deep-cleaning.jpg",
    features: [
      "Cleaning baseboards and door frames",
      "Deep scrubbing of bathroom grout and tiles",
      "Cleaning inside window sills and tracks",
      "Detailed dusting of blinds and ceiling fans",
      "Wiping down cabinet fronts",
      "Moving light furniture to clean underneath"
    ]
  },
  "move-in-move-out": {
    title: "Move-In / Move-Out",
    subtitle: "Flawless transitions for your new or old home.",
    description: "Make your move stress-free with our detailed restoration service. We ensure your old space is left spotless for the next occupants, or prepare your new home so it's perfectly clean before you unpack.",
    image: "/images/move-in-move-out.jpg",
    features: [
      "Cleaning inside all empty cabinets and drawers",
      "Cleaning inside refrigerators and ovens",
      "Thorough dusting of all surfaces and fixtures",
      "Deep cleaning of bathrooms and kitchens",
      "Vacuuming and mopping all floors",
      "Spot cleaning walls and doors"
    ]
  },
  "specialty-services": {
    title: "Specialty Services",
    subtitle: "Tailored solutions for specific needs.",
    description: "Go beyond standard cleaning with our specialty services. Whether you need your oven looking brand new, crystal-clear windows, or fresh upholstery, we have the specialized equipment and expertise required.",
    image: "/images/specialty-services.jpg",
    features: [
      "Interior oven and refrigerator cleaning",
      "Interior window washing",
      "Upholstery and carpet spot cleaning",
      "Organization and decluttering assistance",
      "Post-construction or renovation cleanup",
      "Holiday preparation and after-party cleanup"
    ]
  }
};

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData[slug as keyof typeof servicesData];

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen flex flex-col bg-cream pt-24">
      <Header />
      
      <div className="flex-grow">
        <div className="container mx-auto px-6 md:px-12 py-8">
          <Link href="/services" className="inline-flex items-center text-primary hover:text-orange transition-colors font-medium mb-8 group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-4">{service.title}</h1>
              <p className="text-xl text-primary/80 mb-6 font-medium">{service.subtitle}</p>
              <p className="text-primary/70 mb-8 leading-relaxed text-lg">
                {service.description}
              </p>
              
              <div className="space-y-4 mb-10">
                <h3 className="text-2xl font-semibold font-heading text-primary mb-4">What's Included:</h3>
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-orange mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-primary/80 text-lg">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Link href="/quote" className="bg-primary text-cream px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 transition-all shadow-lg hover:-translate-y-1 inline-block">
                Get a Custom Quote
              </Link>
            </div>
            
            <div className="relative h-[400px] lg:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl order-1 lg:order-2 group">
              <Image 
                src={service.image} 
                alt={service.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}

export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug: slug,
  }));
}
