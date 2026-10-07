import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Reveal from "@/components/motion/Reveal";
import { premiumEase, staggerContainer, staggerItem } from "@/lib/motion";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Do you offer Jain and vegan options?",
      answer: "Yes, we offer Jain and vegan menu options as well. As of now, the selections are limited. Please check with our team for the day's availability."
    },
    {
      question: "Where are you located in Bangalore?",
      answer: "MOAI has two Bengaluru outlets: Jayanagar (790/43, 9th Main Rd, 4th Block, 560011) and Koramangala 5th Block (134, 17th Main Road, 560095). If you’re searching for a vegetarian restaurant near me or veg restaurants near me, MOAI is easy to reach from across Bangalore."
    },
    {
      question: "Where is MOAI in Koramangala?",
      answer: "MOAI Koramangala is at 134, 17th Main Road, Koramangala 5th Block, Bengaluru 560095. Call 080 472 82414. Open daily 12–4 PM and 6:30 PM–1 AM. Pure vegetarian fine dining with global cuisine, pizzas, pastas, North Indian favourites, and desserts."
    },
    {
      question: "Is MOAI a pure vegetarian restaurant?",
      answer: "Yes. MOAI is a pure vegetarian restaurant in Bangalore with vegan-friendly options, designed for a premium vegetarian fine dining experience."
    },
    {
      question: "Do you offer valet parking?",
      answer: "Yes, we provide complimentary valet parking service for all our guests. Our valet service is available during all dining hours and ensures a convenient parking experience."
    },
   
    {
      question: "Is MOAI pet-friendly?",
      answer: "While we love animals, we currently do not allow pets inside the restaurant due to food safety regulations and to ensure the comfort of all our guests."
    },
    {
      question: "Do you take large group bookings?",
      answer: "Absolutely! We welcome large group bookings and special events. For groups of 8 or more, we recommend making a reservation at least 48 hours in advance to ensure we can provide the best possible experience."
    },
    {
      question: "What are your operating hours?",
      answer: "Jayanagar is open all days from 12:00 PM–4:00 PM and 6:30 PM–11:00 PM. Koramangala is open all days from 12:00 PM–4:00 PM and 6:30 PM–1:00 AM."
    },
    {
      question: "Do you host birthdays, anniversaries, and romantic dinners?",
      answer: "Yes, MOAI is a great veg restaurant in Bangalore for birthdays, anniversaries, and date nights. Couples love our peaceful, aesthetic setting, and families and groups have room to celebrate. Tell us your occasion while booking and we’ll help plan the experience."
    },
    {
      question: "Do you support corporate dining and business lunches?",
      answer: "Yes. We’re a popular option for corporate dining in Bangalore, including business lunches, corporate dinners, and office team outings. Contact us for group dining and corporate event requirements."
    },
    {
      question: "Is MOAI open late at night?",
      answer: "Yes. MOAI Koramangala is open till 1 AM every day, making it an easy choice for late night dining in Koramangala. MOAI Jayanagar is open till 11 PM."
    },
    {
      question: "What cooking oil does MOAI use?",
      answer: "Every dish at MOAI is cooked in cold-pressed oils. It is part of our approach to healthy vegetarian food that never compromises on flavour."
    },
    {
      question: "Do you serve pizza and pasta?",
      answer: "Yes. Our global vegetarian menu includes vegetarian pizzas and pastas alongside North Indian favourites, small plates, desserts, and artisanal beverages."
    },
    {
      question: "Do you offer catering services?",
      answer: "Yes, we provide catering services for special events and corporate functions. Our catering menu features our signature vegetarian dishes and can be customized to meet your specific requirements."
    },
    {
      question: "Is advance reservation required?",
      answer: "While walk-ins are welcome, we highly recommend making a reservation, especially during peak hours and weekends, to ensure you have a table waiting for you."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <Reveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 shimmer-text">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about dining at MOAI. 
            If you don't see what you're looking for, feel free to contact us directly.
          </p>
        </Reveal>

        <motion.div
          className="max-w-4xl mx-auto space-y-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={staggerItem}>
              <Card 
                className="gradient-card border-border/50 hover:shadow-elegant transition-smooth royal-border overflow-hidden"
              >
                <CardContent className="p-0">
                  <motion.button
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={openIndex === index}
                    aria-controls={`faq-answer-${index}`}
                    className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-accent/5 transition-smooth"
                    whileTap={{ scale: 0.995 }}
                  >
                    <h3 className="text-lg font-semibold text-primary pr-4" id={`faq-question-${index}`}>
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.35, ease: premiumEase }}
                    >
                      <ChevronDown 
                        className="w-5 h-5 text-primary"
                        aria-hidden="true"
                      />
                    </motion.div>
                  </motion.button>
                  
                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.div
                        id={`faq-answer-${index}`}
                        role="region"
                        aria-labelledby={`faq-question-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: premiumEase }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          <p className="text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
              </motion.div>
            ))}
        </motion.div>

        <Reveal className="text-center mt-12" delay={0.1}>
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a 
              href="/contact"
              className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-medium hover:bg-accent/90 transition-smooth"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Us
            </motion.a>
            <motion.a 
              href="tel:08047363493"
              className="border border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-3 rounded-lg font-medium transition-smooth"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Call Now
            </motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default FAQ; 