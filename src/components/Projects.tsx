import { ExternalLink, Github, Play } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Test Turtles - Masai Hackathon",
      description: "Led comprehensive testing efforts for a hackathon project, implementing both manual and automated testing strategies to ensure high-quality deliverables under tight deadlines.",
      role: "Lead QA Engineer",
      team: "Test Turtles Team",
      technologies: ["Selenium WebDriver", "Manual Testing", "Test Case Design", "Bug Reporting", "Regression Testing"],
      highlights: [
        "Designed comprehensive test cases covering functional and edge scenarios",
        "Implemented Selenium automation framework for critical user flows",
        "Conducted thorough manual testing across multiple browsers and devices",
        "Managed bug tracking and resolution process using structured methodologies",
        "Achieved 95% test coverage with zero critical bugs in production"
      ],
      type: "Hackathon Project",
      status: "Completed",
      duration: "3 Days",
    },
    {
      title: "E-Commerce Platform Testing",
      description: "Comprehensive testing of a full-stack e-commerce application including user authentication, product catalog, shopping cart, and payment gateway integration.",
      role: "QA Engineer",
      technologies: ["Selenium", "API Testing", "Postman", "TestNG", "JIRA"],
      highlights: [
        "Created automated test suites for critical e-commerce workflows",
        "Performed extensive API testing for payment gateway integration",
        "Executed cross-browser compatibility testing",
        "Documented and tracked 50+ bugs with detailed reproduction steps",
        "Collaborated with development team for timely bug resolution"
      ],
      type: "Practice Project",
      status: "Completed",
      duration: "2 Weeks",
    },
    {
      title: "Banking Application Testing",
      description: "Security-focused testing of a banking application with emphasis on transaction processing, user data protection, and regulatory compliance.",
      role: "QA Engineer",
      technologies: ["Manual Testing", "Security Testing", "Data Validation", "TestNG"],
      highlights: [
        "Conducted security testing for sensitive financial data",
        "Validated transaction accuracy and data integrity",
        "Performed user acceptance testing with different user personas",
        "Created detailed test documentation and reports",
        "Ensured compliance with banking industry standards"
      ],
      type: "Academic Project",
      status: "Completed",
      duration: "1 Week",
    }
  ];

  return (
    <section id="projects" className="py-20 tech-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Highlighted <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Real-world testing experience across different domains and technologies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="p-6 bg-card/50 backdrop-blur-lg border-border/50 hover:border-primary/50 transition-all duration-300 group animate-scale-in h-full flex flex-col"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Header */}
              <div className="mb-6">
                <div className="flex items-start justify-between mb-4">
                  <Badge variant="outline" className="border-secondary/50 text-secondary">
                    {project.type}
                  </Badge>
                  <Badge variant="outline" className="border-accent/50 text-accent">
                    {project.status}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                  <span className="font-medium text-primary">{project.role}</span>
                  {project.team && <span>• {project.team}</span>}
                  <span>• {project.duration}</span>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs bg-primary/10 text-primary border-primary/30"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Key Highlights */}
              <div className="flex-1 mb-6">
                <h4 className="text-sm font-semibold text-foreground mb-3">Key Highlights</h4>
                <ul className="space-y-2">
                  {project.highlights.slice(0, 3).map((highlight, idx) => (
                    <li key={idx} className="text-muted-foreground text-xs flex items-start">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 group/btn border-primary/50 hover:border-primary hover:bg-primary/10"
                >
                  <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform duration-200" />
                  View Code
                </Button>
                
                {project.title.includes("Test Turtles") && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 group/btn border-secondary/50 hover:border-secondary hover:bg-secondary/10"
                  >
                    <Play className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform duration-200" />
                    Demo
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <Card className="p-8 bg-gradient-primary/10 border-primary/30 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Want to see more of my work?
            </h3>
            <p className="text-muted-foreground mb-6">
              Check out my GitHub profile for additional projects and contributions
            </p>
            <Button className="btn-tech">
              <Github className="w-4 h-4 mr-2" />
              Visit GitHub Profile
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;