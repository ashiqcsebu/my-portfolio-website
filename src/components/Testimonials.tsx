import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import review1 from '../assets/reviews/1.png';
import review2 from '../assets/reviews/2.png';
import review3 from '../assets/reviews/3.png';
import review4 from '../assets/reviews/4.png';
import review5 from '../assets/reviews/5.png';
import review6 from '../assets/reviews/6.png';
import review7 from '../assets/reviews/7.png';
import review8 from '../assets/reviews/8.png';
import review9 from '../assets/reviews/9.png';
import review10 from '../assets/reviews/10.png';
import review11 from '../assets/reviews/11.png';
import review12 from '../assets/reviews/12.png';

const screenshots = [
  review1, review2, review3, review4, review5, review6,
  review7, review8, review9, review10, review11, review12
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

const testimonials = [ 
  { 
    id: 1, 
    name: 'georgemamalls', 
    location: 'Los Angeles, USA', 
    screenshot: screenshots[0], 
    text: 'We built a complete Shopify store with dropshipping functionality, custom theme design, product upload automation, and payment gateway integration to ensure smooth operations and a professional, engaging customer shopping experience.' 
  },
  { 
    id: 2, 
    name: 'heitorcarv', 
    location: 'Toronto, Canada', 
    screenshot: screenshots[1], 
    text: 'The project involved setting up advanced dropshipping automation, connecting multiple suppliers, optimizing inventory synchronization, and implementing payment gateways to deliver a seamless e-commerce store with minimal manual involvement.' 
  },
  { 
    id: 3, 
    name: 'trammells24', 
    location: 'Madrid, Spain', 
    screenshot: screenshots[2], 
    text: 'We focused on improving store speed, mobile responsiveness, SEO performance, and checkout flow, making the Shopify store significantly faster, user-friendly, and optimized for both search engines and customer conversion.' 
  },
  { 
    id: 4, 
    name: 'wittwalls', 
    location: 'Berlin, Germany', 
    screenshot: screenshots[3], 
    text: 'The project included building a multi-vendor marketplace with vendor dashboards, commission management, order tracking, and storefront customization, allowing multiple sellers to operate efficiently within one centralized e-commerce platform.' 
  },
  { 
    id: 5, 
    name: 'thomiegroup', 
    location: 'New York, USA', 
    screenshot: screenshots[4], 
    text: 'We redesigned and overhauled an existing Shopify store, creating a modern layout, advanced theme customization, improved navigation, and integrated analytics to help the client scale their e-commerce business successfully.' 
  },
  { 
    id: 6, 
    name: 'ysappliences', 
    location: 'Zurich, Switzerland', 
    screenshot: screenshots[5], 
    text: 'This project centered around automating product uploads, managing large catalogs, enhancing store security, and integrating customer engagement tools to deliver a high-performing Shopify store tailored to Swiss market needs.' 
  },
  { 
    id: 7, 
    name: 'olorunfemiozomo', 
    location: 'Auckland, New Zealand', 
    screenshot: screenshots[6], 
    text: 'We developed a fully functional dropshipping store connected with local and international suppliers, streamlined logistics automation, optimized checkout, and implemented responsive design for customers shopping on mobile devices.' 
  },
  { 
    id: 8, 
    name: 'ffeg2324f', 
    location: 'Amsterdam, Netherlands', 
    screenshot: screenshots[7], 
    text: 'The project improved store performance by enhancing user experience, refining theme elements, reducing checkout friction, and integrating custom apps to optimize product recommendations and improve customer retention strategies.' 
  },
  { 
    id: 9, 
    name: 'cuallxre', 
    location: 'Sydney, Australia', 
    screenshot: screenshots[8], 
    text: 'We created a marketplace store supporting multiple vendors, subscription billing, advanced reporting, and responsive dashboards, ensuring seamless management for sellers and a smooth, professional shopping journey for buyers.' 
  },
  { 
    id: 10, 
    name: 'jnordstromse', 
    location: 'San Francisco, USA', 
    screenshot: screenshots[9], 
    text: 'This project involved a complete Shopify revamp with custom theme development, app integration, analytics setup, and checkout enhancements to boost customer engagement and overall e-commerce store performance.' 
  },
  { 
    id: 11, 
    name: 'blazepowerport', 
    location: 'Munich, Germany', 
    screenshot: screenshots[10], 
    text: 'We developed a wholesale-ready Shopify store with tiered pricing, B2B features, bulk product import, and secure checkout, ensuring the client could serve both retail and wholesale customers effectively.' 
  },
  { 
    id: 12, 
    name: 'ad_group1', 
    location: 'Vancouver, Canada', 
    screenshot: screenshots[11], 
    text: 'The store was built with dropshipping automation, supplier integration, product import customization, and inventory synchronization, ensuring the business could scale effectively with minimal manual intervention from the client.' 
  },
];


  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextTestimonial]);

  return (
    <section id='testimonials' className="section-padding bg-gradient-to-b from-secondary/30 to-background">
      <div className="container-luxury max-w-6xl mx-auto">
        {/* Testimonial Card */}
        <div
          className="glass-card p-8 md:p-12 space-y-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative overflow-hidden rounded-xl">
            {/* Slide wrapper */}
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((t) => (
                <div
                  key={t.id}
                  className="flex-shrink-0 w-full grid md:grid-cols-2 gap-8 items-center"
                >
                  <img
                    src={t.screenshot}
                    alt={`${t.name} testimonial`}
                    className="w-full h-64 md:h-80 object-cover rounded-xl shadow-2xl"
                  />
                  <div>
                    <h3 className="text-xl font-bold"> <span className='text-[#608FEC] text-lg'>Client Username: </span>{t.name}</h3>
                      <h4 className="text-md font-bold"><span className='text-[#608FEC] text-md'>Address: </span>{t.location}</h4>
                    <p className="text-muted-foreground mt-2  }} "style={{ textAlign: "justify"}} >
                      
                      <span className='text-[#608FEC] text-md font-semibold'>Project Details: </span> {t.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4 pt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 bg-card rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-accent' : 'bg-muted'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 bg-card rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
