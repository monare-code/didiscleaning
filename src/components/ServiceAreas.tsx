import { MapPin, Navigation } from "lucide-react";
import Link from "next/link";

const areas = {
  "Pretoria North & Surrounds": [
    "Montana Park", "Magalieskruin", "Sinoville", 
    "Doornpoort", "Rietfontein", "Akasia", "Montana"
  ],
  "Pretoria East & Surrounds": [
    "Mooikloof", "Garsfontein", "Faerie Glen", 
    "Moreleta Park", "Woodhill", "Zwavelpoort", "Olympus"
  ]
};

export default function ServiceAreas() {
  return (
    <section className="py-24 bg-cream relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl mb-6 shadow-sm border border-primary/5">
            <MapPin className="w-8 h-8 text-orange" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-primary">Where We Shine</h2>
          <p className="text-lg text-primary/80 leading-relaxed">
            We proudly cater to premium homes, estates, offices, and work parks across Pretoria. Discover if you're in our primary service zones.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {Object.entries(areas).map(([region, locations]) => (
            <div key={region} className="bg-white p-8 md:p-10 rounded-[2rem] shadow-sm border border-primary/5 hover:shadow-md transition-shadow group">
              <div className="flex items-center gap-3 mb-8 border-b border-primary/5 pb-6">
                <Navigation className="w-6 h-6 text-orange group-hover:-translate-y-1 transition-transform" />
                <h3 className="text-2xl font-bold font-heading text-primary">{region}</h3>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {locations.map((location, idx) => (
                  <li key={idx} className="flex items-center text-primary/80 font-medium">
                    <span className="w-2 h-2 rounded-full bg-orange/30 mr-3 group-hover:bg-orange transition-colors"></span>
                    {location}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-block bg-white px-8 py-5 rounded-full shadow-sm border border-orange/20 text-primary font-medium max-w-2xl transition-transform hover:-translate-y-1">
            <span className="text-orange mr-2">✦</span>
            Don't see your area? Our services are not exclusive-<Link href="/contact" className="text-orange hover:underline font-bold">contact us</Link> if you reside nearby!
          </div>
        </div>
      </div>
    </section>
  );
}
