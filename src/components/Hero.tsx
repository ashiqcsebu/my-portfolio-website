import { ArrowRight, Code, TestTube } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const handleDone = () => console.log("Done after 5 loops!");
  const handleType = () => console.log("Typing...");

  return (
    <>
      <section
        id="home"
        className="min-h-screen md:min-h-[90vh] flex items-center justify-center relative overflow-hidden"
      >
        {/* Floating Background Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/5 rounded-full blur-2xl animate-float delay-300"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-secondary/20 rounded-full blur-lg animate-tilt"></div>

        <div className="container-luxury section-padding relative z-10">
          {/* Hero Text */}
          <div className="text-center space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium backdrop-blur-sm">
              ✨ Web Developer & Shopify Expert
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="bg-stellar-gradient bg-clip-text text-transparent">
                  Ashiqul Islam
                </span>
              </h1>

              <h4 className="text-2xl md:text-3xl lg:text-3xl font-semibold monoster-fonts mt-4 flex flex-col lg:flex-row lg:items-center justify-center lg:justify-start text-center lg:text-left">
                <span className="flex items-center justify-center lg:justify-start">
                  A{" "}
                  <span className="bg-stellar-gradient bg-clip-text text-transparent ml-2">
                    Shopify Expert
                  </span>
                </span>
                <span className="text-xl md:text-xl lg:text-3xl font-semibold monoster-fonts lg:ml-5 mt-2 lg:mt-0 inline-block lg:w-auto w-full text-accent">
                  & provide{" "}
                  <Typewriter
                    words={[
                      "Complete Store Setup.",
                      "Theme Customization.",
                      "Dropshipping Solutions",
                      "App Integration.",
                      "Advanced SEO Services.",
                      "Custom Liquid coding.",
                      "Performance Optimization.",
                      "30 Days Free Support.",
                    ]}
                    loop
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1500}
                    onLoopDone={handleDone}
                    onType={handleType}
                  />
                </span>
              </h4>
            </div>

            {/* Description */}
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto" style={{ textAlign: "justify" }}>
              Skilled in Shopify store setup, domain & payment integration,
              shipping & tax configuration, dropshipping (AliExpress, Oberlo,
              DSers, Spocket, CJ Dropshipping), theme customization, Liquid
              development, bulk product upload, data management, app
              integration, SEO, performance optimization, and store maintenance.
              I deliver fully functional, responsive, and high-converting
              Shopify stores tailored to client needs.
            </p>
          </div>

          {/* Stats Section */}
          <section>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 max-w-4xl mx-auto">
              {[
                { value: "53+", label: "Projects Delivered" },
                { value: "1.5+", label: "Years Experience" },
                { value: "95%", label: "Customer Satisfaction" },
                { value: "24/7", label: "Quick Response" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#projects"
              className="group bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center"
            >
              <Code className="mr-2 w-5 h-5" />
              View My Work
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>

            <a
              href="#contact"
              className="group border-2 border-accent text-accent px-8 py-4 rounded-xl font-semibold hover:bg-accent hover:text-accent-foreground transition-all duration-300 flex items-center"
            >
              <TestTube className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              Let's Work Together
            </a>
          </div>

          {/* Quick Links */}
          <div className="flex justify-center items-center space-x-8 pt-8">
            <a
              href="#about"
              className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Learn More About Me
            </a>
          </div>
        </div>

        {/* Floating Achievement Cards (Desktop) */}
        {[
          { pos: "top-1/4 left-8", text: "Shopify Expert" },
          { pos: "top-2/5 left-24", text: "Liquid Coding" },
          { pos: "top-2/3 left-8", text: "Product Upload" },
          { pos: "top-2/5 right-12", text: "Dropshipping" },
          { pos: "top-1/4 right-12", text: "HTML, CSS, Javascript" },
          { pos: "top-2/3 right-12", text: "Theme Customization" },
        ].map((card, index) => (
          <div
            key={index}
            className={`absolute ${card.pos} glass-card p-4 animate-float delay-500 hidden lg:block`}
          >
            <div className="text-primary font-bold">{card.text}</div>
            <div className="text-xs text-muted-foreground">Advanced Level</div>
          </div>
        ))}
      </section>

      {/* Floating Achievement Cards - Mobile/Tablet Marquee */}
      <div className="block lg:hidden w-full overflow-hidden mt-10">
        <div className="marquee">
          {[
            "Shopify Expert",
            "Liquid Coding",
            "Product Upload",
            "Dropshipping",
            "HTML, CSS, Javascript",
            "Theme Customization",
          ].map((item, index) => (
            <div key={index} className="glass-card p-4">
              <div className="text-primary font-bold">{item}</div>
              <div className="text-xs text-muted-foreground">
                Advanced Level
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hero;
