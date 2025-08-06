import { Download, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile-image.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen tech-bg flex items-center justify-center relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-pulse-glow"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-secondary rounded-full animate-pulse-glow" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-32 w-3 h-3 bg-accent rounded-full animate-pulse-glow" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-primary rounded-full animate-pulse-glow" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left animate-slide-up">
            <div className="mb-6">
              <p className="text-accent text-lg md:text-xl font-medium mb-2 tracking-wider">
                Hello 👋
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
                I'm{" "}
                <span className="gradient-text">
                  Shiv Shanker
                </span>
                <br />
                <span className="gradient-text-secondary">
                  Gupta
                </span>
              </h1>
              <div className="bg-secondary/20 text-secondary px-4 py-2 rounded-lg inline-block mb-6 border border-secondary/30">
                <span className="text-sm md:text-base font-medium tracking-wider">
                  PASSIONATE QA ENGINEER
                </span>
              </div>
            </div>

            <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              I am a QA Engineer driven by a deep passion for software testing and automation. 
              I believe in building high-quality, bug-free applications that stand the test of time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                className="btn-tech text-base px-8 py-3"
                onClick={() => scrollToSection("#projects")}
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                className="group px-8 py-3 border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                onClick={() => window.open('https://i.postimg.cc/JnWX7pcm/Shiv-Shanker-Gupta-Resume.png', '_blank')}
              >
                <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl glow-primary">
                <img
                  src={profileImage}
                  alt="Shiv Shanker Gupta"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              {/* Floating elements around profile */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-primary rounded-full animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-secondary rounded-full animate-float" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-gradient-accent rounded-full animate-float" style={{animationDelay: '2s'}}></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection("#about")}
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;