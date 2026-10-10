import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah van der Merwe",
    location: "Mooikloof Estate",
    text: "Didi's team is incredibly thorough. I love that they bring their own premium supplies—it's one less thing for me to worry about. My home has never looked better.",
    rating: 5,
  },
  {
    name: "James Naidoo",
    location: "Montana",
    text: "The move-in clean they did for our new property was flawless. Every cupboard and corner was spotless. Highly recommend their professional service.",
    rating: 5,
  },
  {
    name: "Elize Botha",
    location: "Pretoria East",
    text: "Reliable, discreet, and very detail-oriented. The fact that the staff is fully vetted gives us great peace of mind having them in our home.",
    rating: 5,
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-primary">Trusted by Our Clients</h2>
          <p className="text-primary/70">
            Don't just take our word for it. Here's what our clients have to say about the Didi's Cleaning experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-cream p-8 rounded-3xl border border-primary/5 shadow-sm">
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-primary/80 text-sm leading-relaxed mb-6 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-heading font-semibold text-primary">{testimonial.name}</p>
                <p className="text-xs text-primary/60">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
