"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do I need to provide any cleaning supplies?",
    answer: "Absolutely not. We bring all premium, eco-friendly cleaning supplies and professional-grade equipment needed for the job."
  },
  {
    question: "Which areas do you service?",
    answer: "We primarily service Mooikloof, Montana, and surrounding premium areas and neighborhoods in Pretoria."
  },
  {
    question: "How do you calculate your quotes?",
    answer: "Our quotes are personalized based on the square footage of your home, the number of bedrooms and bathrooms, and the specific type of service requested. Requesting a quote online is the fastest way to get an accurate estimate."
  },
  {
    question: "Are your staff members vetted?",
    answer: "Yes, every member of our team undergoes a rigorous background check and comprehensive training to ensure the highest standards of safety, privacy, and quality."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-primary">Frequently Asked Questions</h2>
          <p className="text-primary/70">Everything you need to know about our services.</p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border border-primary/10 rounded-2xl overflow-hidden transition-colors ${openIndex === index ? 'bg-white' : 'bg-transparent hover:bg-white/50'}`}
            >
              <button 
                className="w-full text-left px-6 py-5 flex items-center justify-between font-heading font-semibold text-lg text-primary focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq.question}
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-orange' : 'text-primary/50'}`} />
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-primary/70 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
