import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-cream/80 pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-6 group">
              <Image src="/logo.png" alt="Didi's Cleaning Logo" width={220} height={80} style={{ width: "auto" }} className="h-16 md:h-20 w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity" />
            </Link>
            <p className="text-sm mb-6 max-w-xs">
              Premium, hassle-free cleaning for discerning clients. We bring the supplies, you enjoy the pristine results.
            </p>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold text-lg text-cream mb-6">Services</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/services" className="hover:text-accent transition-colors">Standard Cleaning</Link></li>
              <li><Link href="/services" className="hover:text-accent transition-colors">Deep Cleaning</Link></li>
              <li><Link href="/services" className="hover:text-accent transition-colors">Move-In / Move-Out</Link></li>
              <li><Link href="/services" className="hover:text-accent transition-colors">Specialty Services</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold text-lg text-cream mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
              <li><Link href="/quote" className="hover:text-accent transition-colors">Request a Quote</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold text-lg text-cream mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a href="tel:0614480406" className="hover:text-accent transition-colors">061 448 0406</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a href="mailto:info@didiscleaning.co.za" className="hover:text-accent transition-colors">info@didiscleaning.co.za</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0" />
                <span>Mooikloof, Montana, & surrounding Pretoria areas</span>
              </li>
              <li className="flex items-start gap-3 mt-2">
                <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <span>Mon-Fri: 08:00 am to 06:00 pm</span>
                  <span>Sat: 09:00 am to 02:00 pm</span>
                </div>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs opacity-60">
          <p>&copy; {new Date().getFullYear()} Didi's Cleaning Service. All rights reserved.</p>
          <p>Designed for premium spaces.</p>
        </div>
      </div>
    </footer>
  );
}
