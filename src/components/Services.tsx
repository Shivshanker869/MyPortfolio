import { TestTube, Cog, Shield, Users, CheckCircle, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: TestTube,
      title: "Test Automation Services",
      description: "I help ensure your applications are bug-free and production-ready using automated testing frameworks.",
      features: [
        "Selenium WebDriver automation",
        "Cross-browser testing",
        "Regression test suites",
        "CI/CD integration",
        "Detailed test reporting"
      ],
      color: "primary"
    },
    {
      icon: Cog,
      title: "Manual Testing Services",
      description: "Comprehensive manual testing to catch issues that automated tests might miss.",
      features: [
        "Functional testing",
        "Usability testing",
        "Exploratory testing",
        "User acceptance testing",
        "Bug documentation"
      ],
      color: "secondary"
    },
    {
      icon: Shield,
      title: "API Testing",
      description: "Thorough testing of your APIs to ensure reliability and security.",
      features: [
        "RESTful API validation",
        "Postman automation",
        "Response validation",
        "Load testing",
        "Security testing"
      ],
      color: "accent"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Requirements Analysis",
      description: "Understanding your application requirements and defining testing scope"
    },
    {
      step: "02",
      title: "Test Planning",
      description: "Creating comprehensive test plans and strategies tailored to your needs"
    },
    {
      step: "03",
      title: "Test Execution",
      description: "Executing manual and automated tests with detailed documentation"
    },
    {
      step: "04",
      title: "Reporting & Delivery",
      description: "Providing detailed reports with actionable insights and recommendations"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What I <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Comprehensive QA services to ensure your applications meet the highest quality standards
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={service.title}
                className="p-8 bg-card/50 backdrop-blur-lg border-border/50 hover:border-primary/50 transition-all duration-300 group animate-scale-in text-center h-full flex flex-col"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`w-16 h-16 bg-${service.color}/20 rounded-full flex items-center justify-center mx-auto mb-6 glow-${service.color} group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`w-8 h-8 text-${service.color}`} />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed flex-1">
                  {service.description}
                </p>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                <Button 
                  variant="outline" 
                  className="w-full border-primary/50 hover:border-primary hover:bg-primary/10 group-hover:scale-105 transition-all duration-300"
                >
                  Learn More
                </Button>
              </Card>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="animate-slide-up">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 gradient-text-secondary">
              My Testing Process
            </h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A systematic approach to ensure comprehensive quality assurance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card
                key={step.step}
                className="p-6 bg-card/30 backdrop-blur-lg border-border/30 hover:border-primary/50 transition-all duration-300 group text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                  {step.step}
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <Card className="p-8 bg-gradient-primary/10 border-primary/30 max-w-3xl mx-auto animate-scale-in">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center glow-primary">
                <Users className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
              Let's discuss how I can help ensure your application delivers the best possible 
              user experience through comprehensive testing strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-tech">
                <Clock className="w-4 h-4 mr-2" />
                Schedule a Call
              </Button>
              <Button 
                variant="outline" 
                className="border-primary/50 hover:border-primary hover:bg-primary/10"
              >
                View My Work
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;