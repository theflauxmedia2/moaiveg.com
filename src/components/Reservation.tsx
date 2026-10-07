import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Reveal from "@/components/motion/Reveal";
import { fadeLeft, fadeRight, premiumEase } from "@/lib/motion";
import { RESERVATION_LINKS } from "@/lib/reservations";

const Reservation = () => {
  return (
    <section id="contact" className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <Reveal variants={fadeLeft} className="text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Us for an 
              <span className="block mb-2 bg-gradient-to-r from-[#FED6AB] to-[#FFE3C2] text-transparent bg-clip-text">Unforgettable Meal</span>
            </h2>
            
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Ready to embark on a culinary journey? Reserve your table at MOAI, a premium vegetarian fine dining experience in Koramangala and Jayanagar, Bangalore. Perfect for family lunches, date nights, birthday celebrations, weekend dining, and corporate group dining.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-stretch sm:items-center mb-6">
              <Button
                asChild
                variant="reservation"
                size="lg"
                className="text-lg px-8 py-4"
              >
                <a
                  href={RESERVATION_LINKS.jayanagar}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Reserve — Jayanagar
                </a>
              </Button>
              <Button
                asChild
                variant="reservation"
                size="lg"
                className="text-lg px-8 py-4"
              >
                <a
                  href={RESERVATION_LINKS.koramangala}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Reserve — Koramangala
                </a>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center text-primary-foreground/80 text-sm sm:text-base">
              <span>
                Or call Jayanagar:{" "}
                <a href="tel:08047363493" className="hover:text-primary-foreground transition-smooth underline-offset-2 hover:underline">
                  08047363493
                </a>
              </span>
              <span className="hidden sm:inline opacity-40">·</span>
              <span>
                Koramangala:{" "}
                <a href="tel:08047282414" className="hover:text-primary-foreground transition-smooth underline-offset-2 hover:underline">
                  080 472 82414
                </a>
              </span>
            </div>
          </Reveal>

          <Reveal variants={fadeRight} delay={0.15}>
            <div className="space-y-5">
              <motion.div
                className="bg-white rounded-xl overflow-hidden shadow-elegant"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4, ease: premiumEase }}
              >
                <div className="h-56 w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.4399!2d77.5839511!3d12.9250249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae151bcbeb2d51:0xf4bad52596dbecf3!2sMoai%20-%20Redefined%20Vegetarian%20Dining!5e0!3m2!1sen!2sin!4v1700000000000"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="MOAI Restaurant Jayanagar"
                  />
                </div>
                <div className="p-4 bg-white">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="font-semibold text-primary">MOAI Jayanagar</h3>
                      <p className="text-sm text-muted-foreground">790/43, 9th Main Rd, 4th Block</p>
                      <a
                        href="tel:08047363493"
                        className="mt-1 inline-block text-sm font-medium text-accent-foreground/80 hover:underline"
                      >
                        Call: 08047363493
                      </a>
                    </div>
                    <a
                      href="https://maps.google.com/?q=12.9250249,77.5839511"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-accent text-accent-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-accent/90 transition-smooth flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3" />
                      </svg>
                      Get Directions
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-white rounded-xl overflow-hidden shadow-elegant"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4, ease: premiumEase }}
              >
                <div className="h-56 w-full">
                  <iframe
                    src="https://www.google.com/maps?q=134,+17th+Main+Road,+Koramangala+5th+Block,+Bengaluru+560095&z=17&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="MOAI Restaurant Koramangala"
                  />
                </div>
                <div className="p-4 bg-white">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="font-semibold text-primary">MOAI Koramangala</h3>
                      <p className="text-sm text-muted-foreground">134, 17th Main Road, 5th Block</p>
                      <a
                        href="tel:08047282414"
                        className="mt-1 inline-block text-sm font-medium text-accent-foreground/80 hover:underline"
                      >
                        Call: 080 472 82414
                      </a>
                    </div>
                    <a
                      href="https://maps.google.com/?q=134,+17th+Main+Road,+Koramangala+5th+Block,+Bengaluru+560095"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-accent text-accent-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-accent/90 transition-smooth flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3" />
                      </svg>
                      Get Directions
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
