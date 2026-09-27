import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Credits from "@/components/Credits";
import PageHero from "@/components/motion/PageHero";
import Reveal from "@/components/motion/Reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import SEOHead from "@/components/SEOHead";
import { fadeLeft, fadeRight, premiumEase, staggerContainer, staggerItem } from "@/lib/motion";
import { RESERVATION_LINKS } from "@/lib/reservations";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [validation, setValidation] = useState({
    firstName: { isValid: false, message: '' },
    lastName: { isValid: false, message: '' },
    email: { isValid: false, message: '' },
    phone: { isValid: true, message: '' },
    subject: { isValid: false, message: '' },
    message: { isValid: false, message: '' }
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateField = (name: string, value: string) => {
    let isValid = false;
    let message = '';

    switch (name) {
      case 'firstName':
        isValid = value.length >= 2;
        message = isValid ? '' : 'First name must be at least 2 characters';
        break;
      case 'lastName':
        isValid = value.length >= 2;
        message = isValid ? '' : 'Last name must be at least 2 characters';
        break;
      case 'email': {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        isValid = emailRegex.test(value);
        message = isValid ? '' : 'Please enter a valid email address';
        break;
      }
      case 'phone': {
        if (value.trim()) {
          const digits = value.replace(/\D/g, '');
          const allowed = /^[+]?[\d\s()-]+$/.test(value.trim());
          isValid = allowed && digits.length >= 10 && digits.length <= 15;
          message = isValid ? '' : 'Please enter a valid phone number';
        } else {
          isValid = true;
          message = '';
        }
        break;
      }
      case 'subject':
        isValid = value.length >= 5;
        message = isValid ? '' : 'Subject must be at least 5 characters';
        break;
      case 'message':
        isValid = value.length >= 10;
        message = isValid ? '' : 'Message must be at least 10 characters';
        break;
      default:
        isValid = true;
    }

    return { isValid, message };
  };

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    const validationResult = validateField(name, value);
    setValidation(prev => ({ 
      ...prev, 
      [name]: validationResult 
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newValidation = { ...validation };
    let allValid = true;
    
    Object.keys(formData).forEach(key => {
      const result = validateField(key, formData[key as keyof typeof formData]);
      newValidation[key as keyof typeof validation] = result;
      if (!result.isValid) allValid = false;
    });
    
    setValidation(newValidation);
    
    if (allValid) {
      setIsSubmitted(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        setValidation({
          firstName: { isValid: false, message: '' },
          lastName: { isValid: false, message: '' },
          email: { isValid: false, message: '' },
          phone: { isValid: true, message: '' },
          subject: { isValid: false, message: '' },
          message: { isValid: false, message: '' }
        });
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Contact MOAI Restaurant | Reservations in Jayanagar & Koramangala, Bangalore"
        description="Contact MOAI for reservations in Jayanagar (08047363493) and Koramangala 5th Block (080 472 82414), Bangalore."
        canonical="https://www.moaiveg.com/contact"
        breadcrumbs={[
          { name: "Home", item: "https://www.moaiveg.com/" },
          { name: "Contact", item: "https://www.moaiveg.com/contact" },
        ]}
      />

      <header>
        <Navigation />
      </header>
      
      {/* Hero Section */}
      <main id="main-content">
        <PageHero
          title="Contact Us"
          description="We'd love to hear from you. Whether you have questions about our menu, want to book a table, or need help planning group dining, we're here to help you enjoy premium vegetarian dining at MOAI in Jayanagar and Koramangala, Bangalore."
        />

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <motion.div
              className="space-y-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              <motion.div variants={staggerItem}>
                <h2 className="text-3xl font-bold text-primary mb-6 shimmer-text">
                  Get in Touch
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our team is here to assist you with reservations, special requests, 
                  or any questions about our pure vegetarian and vegan-friendly fine dining experience in Bengaluru.
                </p>
              </motion.div>

              {/* Contact Cards */}
              <div className="space-y-6">
                {[
                  {
                    title: "Visit Us — Jayanagar",
                    content: (
                      <>
                        790/43, 9th Main Rd<br />
                        4th Block, Jayanagar<br />
                        Bengaluru, Karnataka 560011
                        <a
                          href={RESERVATION_LINKS.jayanagar}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 inline-flex text-sm font-semibold text-primary hover:underline"
                        >
                          Reserve a table →
                        </a>
                      </>
                    ),
                    icon: <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />,
                    fill: true,
                  },
                  {
                    title: "Visit Us — Koramangala",
                    content: (
                      <>
                        134, 17th Main Road<br />
                        Koramangala 5th Block<br />
                        Bengaluru, Karnataka 560095
                        <a
                          href={RESERVATION_LINKS.koramangala}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 inline-flex text-sm font-semibold text-primary hover:underline"
                        >
                          Reserve a table →
                        </a>
                      </>
                    ),
                    icon: <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />,
                    fill: true,
                  },
                  {
                    title: "Call Us",
                    content: (
                      <>
                        <a href="tel:08047363493" className="font-medium hover:text-foreground transition-smooth block">Jayanagar: 08047363493</a>
                        <a href="tel:08047282414" className="font-medium hover:text-foreground transition-smooth block mt-1">Koramangala: 080 472 82414</a>
                      </>
                    ),
                    icon: <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />,
                    fill: true,
                  },
                  {
                    title: "Email Us",
                    content: <a href="mailto:moai.eripl@gmail.com" className="font-medium hover:text-foreground transition-smooth">moai.eripl@gmail.com</a>,
                    icon: (
                      <>
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </>
                    ),
                    fill: true,
                  },
                ].map((card) => (
                  <motion.div key={card.title} variants={staggerItem} whileHover={{ x: 6 }} transition={{ duration: 0.35, ease: premiumEase }}>
                <Card className="gradient-card border-border/50 hover:shadow-elegant transition-smooth royal-border">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <svg className="w-6 h-6 text-primary" fill={card.fill ? "currentColor" : "none"} stroke={card.fill ? undefined : "currentColor"} viewBox="0 0 20 20">
                          {card.icon}
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">{card.title}</h3>
                        <div className="text-muted-foreground">{card.content}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                  </motion.div>
                ))}
              </div>

              {/* Hours */}
              <motion.div variants={staggerItem}>
              <Card className="gradient-card border-border/50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Opening Hours</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <div className="flex justify-between">
                      <span className="font-medium">
                        12–4 pm<br />
                        6:30–11 pm
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground pt-1">
                      Open all days
                    </p>
                  </div>
                </CardContent>
              </Card>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <Reveal variants={fadeRight} delay={0.1}>
              <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.4, ease: premiumEase }}>
              <Card className="gradient-card border-border/50 shadow-elegant royal-border">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-primary mb-6 shimmer-text">
                    Send Us a Message
                  </h2>
                  
                  <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="success"
                      className="text-center py-8"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.45, ease: premiumEase }}
                    >
                      <motion.div
                        className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.1 }}
                      >
                        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </motion.div>
                      <h3 className="text-xl font-bold text-green-600 mb-2">Message Sent!</h3>
                      <p className="text-muted-foreground">Thanks! We'll get back to you shortly.</p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      className="space-y-6"
                      onSubmit={handleSubmit}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <div className="relative">
                            <Input 
                              id="firstName" 
                              placeholder="Your first name"
                              value={formData.firstName}
                              onChange={(e) => handleInputChange('firstName', e.target.value)}
                              className={`border-border/50 focus:border-primary ${
                                validation.firstName.isValid && formData.firstName 
                                  ? 'form-input-valid' 
                                  : !validation.firstName.isValid && formData.firstName 
                                    ? 'form-input-invalid' 
                                    : ''
                              }`}
                            />
                            {validation.firstName.isValid && formData.firstName && (
                              <svg className="w-5 h-5 text-green-500 absolute right-3 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </div>
                          {!validation.firstName.isValid && formData.firstName && (
                            <p className="text-red-500 text-sm">{validation.firstName.message}</p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <div className="relative">
                            <Input 
                              id="lastName" 
                              placeholder="Your last name"
                              value={formData.lastName}
                              onChange={(e) => handleInputChange('lastName', e.target.value)}
                              className={`border-border/50 focus:border-primary ${
                                validation.lastName.isValid && formData.lastName 
                                  ? 'form-input-valid' 
                                  : !validation.lastName.isValid && formData.lastName 
                                    ? 'form-input-invalid' 
                                    : ''
                              }`}
                            />
                            {validation.lastName.isValid && formData.lastName && (
                              <svg className="w-5 h-5 text-green-500 absolute right-3 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </div>
                          {!validation.lastName.isValid && formData.lastName && (
                            <p className="text-red-500 text-sm">{validation.lastName.message}</p>
                          )}
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <div className="relative">
                          <Input 
                            id="email" 
                            type="email" 
                            placeholder="your.email@example.com"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            className={`border-border/50 focus:border-primary ${
                              validation.email.isValid && formData.email 
                                ? 'form-input-valid' 
                                : !validation.email.isValid && formData.email 
                                  ? 'form-input-invalid' 
                                  : ''
                            }`}
                          />
                          {validation.email.isValid && formData.email && (
                            <svg className="w-5 h-5 text-green-500 absolute right-3 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                        {!validation.email.isValid && formData.email && (
                          <p className="text-red-500 text-sm">{validation.email.message}</p>
                        )}
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone (Optional)</Label>
                        <div className="relative">
                          <Input 
                            id="phone" 
                            type="tel" 
                            placeholder="+91-9087432781"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            className={`border-border/50 focus:border-primary ${
                              validation.phone.isValid && formData.phone 
                                ? 'form-input-valid' 
                                : !validation.phone.isValid && formData.phone 
                                  ? 'form-input-invalid' 
                                  : ''
                            }`}
                          />
                          {validation.phone.isValid && formData.phone && (
                            <svg className="w-5 h-5 text-green-500 absolute right-3 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                        {!validation.phone.isValid && formData.phone && (
                          <p className="text-red-500 text-sm">{validation.phone.message}</p>
                        )}
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <div className="relative">
                          <Input 
                            id="subject" 
                            placeholder="What's this about?"
                            value={formData.subject}
                            onChange={(e) => handleInputChange('subject', e.target.value)}
                            className={`border-border/50 focus:border-primary ${
                              validation.subject.isValid && formData.subject 
                                ? 'form-input-valid' 
                                : !validation.subject.isValid && formData.subject 
                                  ? 'form-input-invalid' 
                                  : ''
                            }`}
                          />
                          {validation.subject.isValid && formData.subject && (
                            <svg className="w-5 h-5 text-green-500 absolute right-3 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                        {!validation.subject.isValid && formData.subject && (
                          <p className="text-red-500 text-sm">{validation.subject.message}</p>
                        )}
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <div className="relative">
                          <Textarea 
                            id="message" 
                            placeholder="Tell us how we can help you..."
                            rows={5}
                            value={formData.message}
                            onChange={(e) => handleInputChange('message', e.target.value)}
                            className={`border-border/50 focus:border-primary resize-none ${
                              validation.message.isValid && formData.message 
                                ? 'form-input-valid' 
                                : !validation.message.isValid && formData.message 
                                  ? 'form-input-invalid' 
                                  : ''
                            }`}
                          />
                          {validation.message.isValid && formData.message && (
                            <svg className="w-5 h-5 text-green-500 absolute right-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                        {!validation.message.isValid && formData.message && (
                          <p className="text-red-500 text-sm">{validation.message.message}</p>
                        )}
                      </div>
                      
                      <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full"
                      >
                        Send Message
                      </Button>
                      </motion.div>
                    </motion.form>
                  )}
                  </AnimatePresence>
                </CardContent>
              </Card>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-[#FED6AB]/5">
        <div className="container mx-auto px-6">
          <Reveal className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Find Us</h2>
            <p className="text-lg text-muted-foreground">
              Located in the heart of the culinary district, easily accessible by public transport
            </p>
          </Reveal>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              className="space-y-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
            >
              <motion.div variants={staggerItem} whileHover={{ y: -4 }} transition={{ duration: 0.4, ease: premiumEase }}>
              <Card className="gradient-card border-border/50 overflow-hidden">
                <div className="relative h-96 w-full">
                  <span className="absolute left-3 top-3 z-10 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white shadow-md">
                    Jayanagar · Open Now
                  </span>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.4399!2d77.5839511!3d12.9250249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae151bcbeb2d51:0xf4bad52596dbecf3!2sMoai%20-%20Redefined%20Vegetarian%20Dining!5e0!3m2!1sen!2sin!4v1700000000000"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="MOAI Restaurant Jayanagar Location"
                  />
                </div>
              </Card>
              </motion.div>

              <motion.div variants={staggerItem} whileHover={{ y: -4 }} transition={{ duration: 0.4, ease: premiumEase }}>
              <Card className="gradient-card border-border/50 overflow-hidden">
                <div className="relative h-96 w-full">
                  <span className="absolute left-3 top-3 z-10 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white shadow-md">
                    Koramangala · Open Now
                  </span>
                  <iframe
                    src="https://www.google.com/maps?q=134,+17th+Main+Road,+Koramangala+5th+Block,+Bengaluru+560095&z=17&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="MOAI Restaurant Koramangala Location"
                  />
                </div>
              </Card>
              </motion.div>
            </motion.div>
            
            <Reveal variants={fadeLeft} delay={0.15} className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Location Details</h3>
                <p className="text-muted-foreground mb-6">
                  MOAI Restaurant has two Bengaluru locations — our flagship in Jayanagar and our
                  new outlet in Koramangala 5th Block — both easy to reach for locals and visitors.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-accent mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-foreground">Jayanagar</h4>
                    <p className="text-muted-foreground">790/43, 9th Main Rd, 4th Block, Jayanagar, Bengaluru, Karnataka 560011</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      <a href="tel:08047363493" className="hover:text-foreground transition-smooth">08047363493</a>
                      {" · "}
                      <a href="/locations/jayanagar" className="text-primary hover:underline">Location page</a>
                      {" · "}
                      <a
                        href={RESERVATION_LINKS.jayanagar}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline font-medium"
                      >
                        Reserve a table
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-accent mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-foreground">Koramangala 5th Block</h4>
                    <p className="text-muted-foreground">134, 17th Main Road, Koramangala 5th Block, Bengaluru, Karnataka 560095</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      <a href="tel:08047282414" className="hover:text-foreground transition-smooth">080 472 82414</a>
                      {" · "}
                      <a href="/locations/koramangala" className="text-primary hover:underline">Location page</a>
                      {" · "}
                      <a
                        href={RESERVATION_LINKS.koramangala}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline font-medium"
                      >
                        Reserve a table
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-accent mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-foreground">Hours</h4>
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">Jayanagar:</span> 12–4 pm · 6:30–11 pm<br />
                      <span className="font-medium text-foreground">Koramangala:</span> 12–4 pm · 6:30 pm–12 midnight
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Open all days
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-accent mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-foreground">Phone</h4>
                    <p className="text-muted-foreground">
                      Jayanagar:{" "}
                      <a href="tel:08047363493" className="hover:text-foreground transition-smooth">
                        08047363493
                      </a>
                      <br />
                      Koramangala:{" "}
                      <a href="tel:08047282414" className="hover:text-foreground transition-smooth">
                        080 472 82414
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <motion.a 
                  href="https://maps.google.com/?q=12.9250249,77.5839511"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-medium hover:bg-accent/90 transition-smooth"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3" />
                  </svg>
                  Directions — Jayanagar
                </motion.a>
                <motion.a 
                  href="https://maps.google.com/?q=134,+17th+Main+Road,+Koramangala+5th+Block,+Bengaluru+560095"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary hover:text-white transition-smooth"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3" />
                  </svg>
                  Directions — Koramangala
                </motion.a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      </main>

      <footer>
        <Footer />
        <Credits />
      </footer>
    </div>
  );
};

export default Contact;