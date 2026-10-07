import { RESERVATION_LINKS } from "@/lib/reservations";

const Footer = () => {
  // Mock Instagram posts - using local images for demo
  const instagramPosts = [
    { id: 1, image: "/food/1.jpg", likes: "234", comments: "12",a : "https://www.instagram.com/p/DLxJxqUyFbP/?hl=en" },
    { id: 2, image: "/post/post2.jpg", likes: "189", comments: "8", a:"https://www.instagram.com/p/DLeg12DvTub/?hl=en&img_index=1" },
    { id: 3, image: "/food/2.jpg", likes: "312", comments: "15", a:"https://www.instagram.com/p/DLh8fDxSOiA/?hl=en" },
    { id: 4, image: "/post/post4.jpg", likes: "322", comments: "22", a:"https://www.instagram.com/p/DLmpRXFSZLp/?hl=en" },
  ];

  return (
    <footer className="bg-gradient-to-b from-primary to-primary-glow text-white py-16">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12">
          {/* Logo & About */}
          <div className="lg:col-span-2 space-y-6">
            <div className="text-center">
              <img 
                src="/lovable-uploads/34d5174a-8590-49de-90e8-a10dd651ed5a.png" 
                alt="MOAI Restaurant"
                width="160"
                height="80"
                className="h-20 w-auto mb-2"
                loading="lazy"
              />
            </div>
            <p className="text-white/90 leading-relaxed max-w-md">
              Where culinary artistry meets sustainable dining. MOAI is a luxury veg restaurant in Jayanagar and Koramangala, Bangalore. We offer premium vegetarian fine dining with vegan-friendly, multi-cuisine flavors, ideal for family meals, date nights, celebrations, and corporate group dining.
            </p>
            <div className="flex space-x-4">
              <a
                href={RESERVATION_LINKS.jayanagar}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary bg-[#FED6AB] hover:bg-[#ffe3c2] px-3 py-2 rounded-md text-sm font-medium transition-smooth inline-flex items-center"
              >
                Reserve Jayanagar
              </a>
              <a
                href={RESERVATION_LINKS.koramangala}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary bg-[#FED6AB] hover:bg-[#ffe3c2] px-3 py-2 rounded-md text-sm font-medium transition-smooth inline-flex items-center"
              >
                Reserve Koramangala
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white">Quick Links</h4>
            <nav className="space-y-3">
              <a href="/" className="block text-white/80 hover:text-white transition-smooth">Home</a>
              <a href="/menu" className="block text-white/80 hover:text-white transition-smooth">Our Menu</a>
              <a href="/gallery" className="block text-white/80 hover:text-white transition-smooth">Gallery</a>
              <a href="/press" className="block text-white/80 hover:text-white transition-smooth">Press</a>
              <a href="/locations/jayanagar" className="block text-white/80 hover:text-white transition-smooth">Jayanagar</a>
              <a href="/locations/koramangala" className="block text-white/80 hover:text-white transition-smooth">Koramangala</a>
              <a href="/contact" className="block text-white/80 hover:text-white transition-smooth">Contact</a>
              <a
                href={RESERVATION_LINKS.jayanagar}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white/80 hover:text-white transition-smooth"
              >
                Reserve Jayanagar
              </a>
              <a
                href={RESERVATION_LINKS.koramangala}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white/80 hover:text-white transition-smooth"
              >
                Reserve Koramangala
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white">Contact</h4>
            <div className="space-y-4 text-white/90">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="font-medium">Jayanagar</p>
                  <p className="text-sm">790/43, 9th Main Rd, 4th Block, Bengaluru 560011</p>
                  <p className="font-medium mt-3">Koramangala 5th Block</p>
                  <p className="text-sm">134, 17th Main Road, Bengaluru 560095</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.502 1.21l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <div className="space-y-1">
                  <a href="tel:08047363493" className="block hover:text-white transition-smooth">
                    Jayanagar: 08047363493
                  </a>
                  <a href="tel:08047282414" className="block hover:text-white transition-smooth">
                    Koramangala: 080 472 82414
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a
                  href="mailto:moai.eripl@gmail.com"
                  className="hover:text-white transition-smooth"
                >
                  moai.eripl@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Replace the keyword stuffing section with meaningful dining occasions content */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <h4 className="text-lg font-bold text-white mb-4">Perfect For Every Occasion</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-white/80">
            <div className="space-y-2">
              <h5 className="font-semibold text-white">Celebrations</h5>
              <ul className="space-y-1">
                <li><a href="/contact" className="hover:text-white transition-smooth">Birthday Dinners</a></li>
                <li><a href="/contact" className="hover:text-white transition-smooth">Anniversaries</a></li>
                <li><a href="/contact" className="hover:text-white transition-smooth">Romantic Dates</a></li>
              </ul>
            </div>
            <div className="space-y-2">
              <h5 className="font-semibold text-white">Corporate</h5>
              <ul className="space-y-1">
                <li><a href="/contact" className="hover:text-white transition-smooth">Business Lunches</a></li>
                <li><a href="/contact" className="hover:text-white transition-smooth">Team Outings</a></li>
                <li><a href="/contact" className="hover:text-white transition-smooth">Corporate Events</a></li>
              </ul>
            </div>
            <div className="space-y-2">
              <h5 className="font-semibold text-white">Group Dining</h5>
              <ul className="space-y-1">
                <li><a href="/contact" className="hover:text-white transition-smooth">Family Gatherings</a></li>
                <li><a href="/contact" className="hover:text-white transition-smooth">Large Groups</a></li>
                <li><a href="/contact" className="hover:text-white transition-smooth">Catering</a></li>
              </ul>
            </div>
            <div className="space-y-2">
              <h5 className="font-semibold text-white">Cuisine</h5>
              <ul className="space-y-1">
                <li>Pure Vegetarian</li>
                <li>Vegan-Friendly</li>
                <li>Jain Options</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Hours & Social */}
        <div className="border-t border-white/20 pt-8 grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Dining Hours
            </h4>
            <div className="bg-white/10 rounded-lg p-4 space-y-3 text-white/90">
              <div>
                <p className="font-medium mb-1">Jayanagar</p>
                <div className="flex justify-between items-start text-sm">
                  <span>All Days</span>
                  <span className="text-right">12–4 pm<br />6:30–11 pm</span>
                </div>
              </div>
              <div className="border-t border-white/20 pt-3">
                <p className="font-medium mb-1">Koramangala</p>
                <div className="flex justify-between items-start text-sm">
                  <span>All Days</span>
                  <span className="text-right">12–4 pm<br />6:30 pm–1 am</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end md:items-end md:justify-end">
            <h4 className="text-lg font-bold text-white mb-4 text-right">Follow Us</h4>
            <div className="flex space-x-4">
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/moai.jayanagar/?hl=en" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit MOAI Restaurant on Instagram"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-smooth group"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              
              {/* Facebook */}
              <a 
                href="https://www.facebook.com/people/MoaiJayanagar/61575343161492/#" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit MOAI on Facebook"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-smooth group"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              
              {/* Zomato */}
              <a 
                href="https://www.zomato.com/bangalore/moai-1-jayanagar-bangalore" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="View MOAI on Zomato"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-smooth group"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </a>
              
              {/* Google */}
              <a 
                href="https://www.google.com/maps/place/Moai+-+Redefined+Vegetarian+Dining/@12.9250249,77.5839511,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae151bcbeb2d51:0xf4bad52596dbecf3!8m2!3d12.9250249!4d77.5839511!16s%2Fg%2F11x18j5thq?entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="See MOAI on Google Maps"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-smooth group"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Instagram Preview */}
        <div className="border-t border-white/20 pt-8 mt-8">
          <h4 className="text-lg font-bold text-white mb-6 text-center">Latest from Instagram</h4>
          <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
            {instagramPosts.map((post) => (
              <div key={post.id} className="relative group cursor-pointer">
                <a href={post.a} target="_blank" rel="noopener noreferrer">
                  <img 
                    src={post.image} 
                    alt="MOAI Restaurant food and ambience photo"
                    width="96"
                    height="96"
                    className="w-full h-24 object-cover rounded-lg group-hover:scale-105 transition-smooth"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-smooth rounded-lg flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="flex items-center justify-center gap-2 text-sm">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                        {post.likes}
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-white/70 text-sm">
            © {new Date().getFullYear()} MOAI Restaurant. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-white/70">
            <a href="/contact" className="hover:text-white transition-smooth">Contact</a>
            <a
              href={RESERVATION_LINKS.jayanagar}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-smooth"
            >
              Reserve Jayanagar
            </a>
            <a
              href={RESERVATION_LINKS.koramangala}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-smooth"
            >
              Reserve Koramangala
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;