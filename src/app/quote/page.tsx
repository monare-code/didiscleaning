"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function QuotePage() {
  const [selectedArea, setSelectedArea] = useState("");

  return (
    <main className="min-h-screen flex flex-col bg-cream pt-24">
      <Header />

      <section className="flex-grow py-16">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-4">Request a Quote</h1>
            <p className="text-primary/70">
              Provide us with a few details about your property, and we'll get back to you with a tailored estimate.
            </p>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-primary/5">
            <form action="https://formsubmit.co/info@didiscleaning.co.za" method="POST" className="space-y-6">
              {/* FormSubmit Configuration */}
              <input type="hidden" name="_subject" value="New Quote Request - Didi's Cleaning" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://didiscleaning.co.za/thank-you" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-primary">Full Name</label>
                  <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-cream/50 focus:bg-white focus:outline-none focus:border-orange/50 transition-colors text-primary" placeholder="Jane Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-primary">Phone Number</label>
                  <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-cream/50 focus:bg-white focus:outline-none focus:border-orange/50 transition-colors text-primary" placeholder="082 123 4567" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-primary">Email Address</label>
                <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-cream/50 focus:bg-white focus:outline-none focus:border-orange/50 transition-colors text-primary" placeholder="jane@example.com" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="area" className="text-sm font-semibold text-primary">Service Area</label>
                  <select
                    id="area"
                    name="area"
                    required
                    value={selectedArea}
                    onChange={(e) => setSelectedArea(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-cream/50 focus:bg-white focus:outline-none focus:border-orange/50 transition-colors text-primary"
                  >
                    <option value="">Select an area...</option>
                    <optgroup label="Pretoria North & Surrounds">
                      <option value="Montana Park">Montana Park</option>
                      <option value="Magalieskruin">Magalieskruin</option>
                      <option value="Sinoville">Sinoville</option>
                      <option value="Doornpoort">Doornpoort</option>
                      <option value="Rietfontein">Rietfontein</option>
                      <option value="Akasia">Akasia</option>
                      <option value="Montana">Montana</option>
                    </optgroup>
                    <optgroup label="Pretoria East & Surrounds">
                      <option value="Mooikloof">Mooikloof</option>
                      <option value="Garsfontein">Garsfontein</option>
                      <option value="Faerie Glen">Faerie Glen</option>
                      <option value="Moreleta Park">Moreleta Park</option>
                      <option value="Woodhill">Woodhill</option>
                      <option value="Zwavelpoort">Zwavelpoort</option>
                      <option value="Olympus">Olympus</option>
                    </optgroup>
                    <option value="Other">Other (Specify below)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="serviceType" className="text-sm font-semibold text-primary">Service Type</label>
                  <select id="serviceType" name="serviceType" required className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-cream/50 focus:bg-white focus:outline-none focus:border-orange/50 transition-colors text-primary">
                    <option value="">Select a service...</option>
                    <option value="Standard Cleaning">Standard Cleaning</option>
                    <option value="Deep Cleaning">Deep Cleaning</option>
                    <option value="Move-In / Move-Out">Move-In / Move-Out</option>
                    <option value="Specialty">Specialty Services</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {selectedArea === "Other" && (
                <div className="space-y-2">
                  <label htmlFor="otherArea" className="text-sm font-semibold text-primary">Please specify your area</label>
                  <input type="text" id="otherArea" name="otherArea" required className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-cream/50 focus:bg-white focus:outline-none focus:border-orange/50 transition-colors text-primary" placeholder="e.g. Centurion" />
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="bedrooms" className="text-sm font-semibold text-primary">Bedrooms</label>
                  <input type="number" id="bedrooms" name="bedrooms" min="1" max="10" required className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-cream/50 focus:bg-white focus:outline-none focus:border-orange/50 transition-colors text-primary" placeholder="e.g. 3" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="bathrooms" className="text-sm font-semibold text-primary">Bathrooms</label>
                  <input type="number" id="bathrooms" name="bathrooms" min="1" max="10" required className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-cream/50 focus:bg-white focus:outline-none focus:border-orange/50 transition-colors text-primary" placeholder="e.g. 2" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="date" className="text-sm font-semibold text-primary">Preferred Date / Time</label>
                <input type="text" id="date" name="date" className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-cream/50 focus:bg-white focus:outline-none focus:border-orange/50 transition-colors text-primary" placeholder="e.g. Next Tuesday morning" />
              </div>

              <div className="space-y-2">
                <label htmlFor="requirements" className="text-sm font-semibold text-primary">Special Requirements (Optional)</label>
                <textarea id="requirements" name="requirements" rows={4} className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-cream/50 focus:bg-white focus:outline-none focus:border-orange/50 transition-colors text-primary resize-none" placeholder="Any specific instructions or areas to focus on?"></textarea>
              </div>

              <button type="submit" className="w-full bg-orange text-cream py-4 rounded-xl font-bold text-lg hover:bg-orange/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                Submit Quote Request
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
