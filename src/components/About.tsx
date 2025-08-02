import { GraduationCap, Target, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 tech-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Passionate about quality assurance and driven by continuous learning
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 gradient-text-secondary">
                Who I Am
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                I'm a dedicated QA Engineer with a strong foundation in both manual testing 
                and test automation. My journey began with a passion for ensuring software 
                quality and has evolved into expertise in creating robust testing frameworks 
                using modern tools like Selenium.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I believe that quality assurance is not just about finding bugs, but about 
                understanding the user experience and ensuring that every application delivers 
                value and reliability to its users.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center glow-primary">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Mission</h4>
                  <p className="text-muted-foreground text-sm">
                    To deliver bug-free, high-quality software that exceeds user expectations
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center glow-secondary">
                  <Heart className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Passion</h4>
                  <p className="text-muted-foreground text-sm">
                    Continuous learning and staying updated with latest QA methodologies
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Education & Status Cards */}
          <div className="space-y-6 animate-scale-in">
            <Card className="p-6 bg-card/50 backdrop-blur-lg border-border/50 hover:border-primary/50 transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center glow-accent group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-foreground mb-2">Education</h4>
                  <p className="text-primary font-medium mb-1">
                    SDET (Software Development Engineer in Testing)
                  </p>
                  <p className="text-muted-foreground text-sm">Masai School</p>
                  <p className="text-muted-foreground text-sm mt-2">
                    Comprehensive training in manual testing, automation frameworks, 
                    and modern QA practices
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-lg border-border/50 hover:border-secondary/50 transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center glow-secondary group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-6 h-6 text-secondary" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-foreground mb-2">Current Status</h4>
                  <p className="text-secondary font-medium mb-1">
                    Actively Seeking QA Opportunities
                  </p>
                  <p className="text-muted-foreground text-sm">Fresher - Ready to Start</p>
                  <p className="text-muted-foreground text-sm mt-2">
                    Eager to apply my skills in a dynamic team environment and contribute 
                    to delivering exceptional software quality
                  </p>
                </div>
              </div>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 text-center bg-primary/10 border-primary/30 hover:bg-primary/20 transition-all duration-300">
                <h5 className="text-2xl font-bold text-primary mb-1">2+</h5>
                <p className="text-muted-foreground text-sm">Years Learning</p>
              </Card>
              <Card className="p-4 text-center bg-secondary/10 border-secondary/30 hover:bg-secondary/20 transition-all duration-300">
                <h5 className="text-2xl font-bold text-secondary mb-1">5+</h5>
                <p className="text-muted-foreground text-sm">Projects Tested</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;