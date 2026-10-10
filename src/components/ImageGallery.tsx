import Image from "next/image";

const images = [
  { src: "/images/gallery_1.jpg", alt: "Premium marble countertop cleaning" },
  { src: "/images/gallery_2.jpg", alt: "Pristine luxury bedroom" },
  { src: "/images/gallery_3.jpg", alt: "Gleaming luxury bathroom" },
];

export default function ImageGallery() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-primary">The Didi's Standard</h2>
          <p className="text-primary/70">
            A glimpse into the pristine spaces we meticulously maintain for our clients.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <div key={idx} className="relative h-80 rounded-3xl overflow-hidden group shadow-md border border-black/5">
              <Image 
                src={img.src} 
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
