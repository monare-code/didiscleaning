import Link from "next/link";
import { CheckCircle2, Star, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background with abstract soft shapes */}
      <div className="absolute inset-0 bg-cream -z-20"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/20 rounded-l-[100px] -z-10 hidden md:block"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12 md:gap-8">
        
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange/10 text-orange text-sm font-medium mb-6">
            <Star className="w-4 h-4 fill-orange text-orange" />
            <span>Pretoria's Premium Cleaning Service</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
            Immaculate homes, <br />
            <span className="text-orange italic">zero hassle.</span>
          </h1>
          
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-lg">
            We provide all the premium supplies and equipment. You simply return to a beautifully clean, perfectly organized space.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link href="/quote" className="w-full sm:w-auto text-center bg-orange text-cream px-8 py-4 rounded-full text-base font-semibold hover:bg-orange/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
              Request a Quote
            </Link>
            <Link href="/services" className="w-full sm:w-auto text-center bg-transparent border-2 border-primary/20 text-primary px-8 py-4 rounded-full text-base font-semibold hover:border-primary/50 transition-all">
              View Services
            </Link>
          </div>
          
          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 opacity-80 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-orange" />
              <span>We bring all supplies</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-orange" />
              <span>Fully vetted staff</span>
            </div>
          </div>
        </div>
        
        {/* Right Image */}
        <div className="w-full md:w-1/2 relative z-10 mt-10 md:mt-0">
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5] md:aspect-square">
            <img 
              src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800&h=1000" 
              alt="Immaculate living space" 
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
          </div>
          
          {/* Floating Badge */}
          <div className="absolute -bottom-6 -left-6 md:-left-12 bg-cream p-4 rounded-2xl shadow-xl animate-bounce-slow flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-orange/10 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-orange" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider opacity-60">All-Inclusive</p>
              <p className="font-heading font-bold text-lg text-primary">Supplies Provided</p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
