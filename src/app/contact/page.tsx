import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col bg-cream pt-24">
      <Header />
      <div className="flex-grow py-16">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-6">Contact Us</h1>
          <p className="text-lg text-primary/80 leading-relaxed mb-12">
            Have a question or need assistance? Reach out to us.
          </p>
          
          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-primary/5 mb-12">
            <h2 className="text-2xl font-bold font-heading text-primary mb-6">Get In Touch</h2>
            <div className="space-y-4 text-primary/80">
              <p><strong>Phone:</strong> <a href="tel:0614480406" className="text-accent hover:underline">061 448 0406</a></p>
              <p><strong>Email:</strong> <a href="mailto:info@didiscleaning.co.za" className="text-accent hover:underline">info@didiscleaning.co.za</a></p>
              <div className="pt-6 mt-6 border-t border-primary/5">
                <h3 className="font-bold text-primary mb-2">Working Hours</h3>
                <p>Mon-Fri: 08:00 am to 06:00 pm</p>
                <p>Sat: 09:00 am to 02:00 pm</p>
              </div>
            </div>
          </div>

          <div className="bg-orange/5 p-8 md:p-12 rounded-[2rem] border border-orange/20 flex flex-col items-center justify-center">
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-primary mb-4">Ready for a spotless space?</h2>
            <p className="text-primary/70 mb-8 max-w-md text-lg">
              Get a customized cleaning plan tailored exactly to your needs.
            </p>
            <Link href="/quote" className="bg-orange text-cream px-10 py-4 rounded-full text-lg font-bold hover:bg-orange/90 transition-all shadow-lg hover:-translate-y-1 w-full md:w-auto inline-block">
              Request a Custom Quote
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
