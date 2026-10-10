import { Sparkles, Home, Box, Droplets, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Standard Cleaning",
    slug: "standard-cleaning",
    description: "Regular upkeep to maintain a pristine environment week after week. We focus on the high-traffic areas and essential surfaces, ensuring your space remains welcoming and spotless.",
    icon: Home,
    image: "/images/standard-cleaning.jpg",
  },
  {
    title: "Deep Cleaning",
    slug: "deep-cleaning",
    description: "Intensive, top-to-bottom cleaning that reaches every hidden corner. Perfect for a seasonal refresh or a thorough reset, covering areas often missed during regular upkeep.",
    icon: Droplets,
    image: "/images/deep-cleaning.jpg",
  },
  {
    title: "Move-In / Move-Out",
    slug: "move-in-move-out",
    description: "Detailed restoration of spaces for flawless transitions. We ensure your old space is left spotless for the next occupants, or prepare your new home so it's perfectly clean.",
    icon: Box,
    image: "/images/move-in-move-out.jpg",
  },
  {
    title: "Specialty Services",
    slug: "specialty-services",
    description: "Tailored solutions including oven, window, and upholstery care. For when you need specific, specialized attention with dedicated equipment.",
    icon: Sparkles,
    image: "/images/specialty-services.jpg",
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cream rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange/5 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-x-1/2 translate-y-1/4"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-primary">Uncompromising Quality</h2>
          <p className="text-primary/70 text-lg md:text-xl">
            Every service tier includes our premium supplies, specialized equipment, and white-glove attention to detail.
          </p>
        </div>
        
        <div className="flex flex-col space-y-32">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20 group`}>
                <div className="w-full lg:w-1/2 relative h-[350px] md:h-[450px] lg:h-[550px] rounded-[2rem] overflow-hidden shadow-2xl">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                
                <div className="w-full lg:w-1/2 flex flex-col items-start">
                  <div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center mb-8 shadow-sm border border-primary/5 group-hover:-translate-y-2 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-orange" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-primary">{service.title}</h3>
                  <p className="text-lg opacity-80 leading-relaxed text-primary/80 mb-10 max-w-xl">{service.description}</p>
                  
                  <Link href={`/services/${service.slug}`} className="inline-flex items-center bg-primary text-cream px-8 py-4 rounded-full text-lg font-medium hover:bg-primary/90 transition-all shadow-lg hover:-translate-y-1 group/btn">
                    <span>Explore details</span>
                    <ArrowRight className="w-5 h-5 ml-3 group-hover/btn:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
