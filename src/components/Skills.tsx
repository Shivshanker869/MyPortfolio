import { Code, TestTube, Settings, Database, Globe, Smartphone } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Testing Tools",
      icon: TestTube,
      color: "primary",
      skills: [
        { name: "Selenium WebDriver", level: 85 },
        { name: "JUnit/TestNG", level: 80 },
        { name: "Postman", level: 90 },
        { name: "JIRA", level: 85 },
      ],
    },
    {
      title: "Manual Testing",
      icon: Code,
      color: "secondary",
      skills: [
        { name: "Test Case Design", level: 90 },
        { name: "Bug Reporting", level: 95 },
        { name: "Regression Testing", level: 85 },
        { name: "User Acceptance Testing", level: 80 },
      ],
    },
    {
      title: "Development Tools",
      icon: Settings,
      color: "accent",
      skills: [
        { name: "Git/GitHub", level: 85 },
        { name: "Java", level: 75 },
        { name: "JavaScript", level: 70 },
        { name: "SQL", level: 80 },
      ],
    },
  ];

  const technicalSkills = [
    "Manual Testing",
    "Selenium WebDriver",
    "Test Automation",
    "API Testing",
    "Regression Testing",
    "Bug Tracking",
    "Test Case Design",
    "Agile/Scrum",
    "Java",
    "JavaScript",
    "SQL",
    "Git/GitHub",
    "JIRA",
    "Postman",
    "TestNG",
    "JUnit",
  ];

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Comprehensive expertise in manual testing and automation tools
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card
                key={category.title}
                className="p-6 bg-card/50 backdrop-blur-lg border-border/50 hover:border-primary/50 transition-all duration-300 group animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-12 h-12 bg-${category.color}/20 rounded-lg flex items-center justify-center glow-${category.color} group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-6 h-6 text-${category.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted/30 rounded-full h-2">
                        <div
                          className={`bg-gradient-${category.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Technical Skills Tags */}
        <div className="animate-slide-up">
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text-secondary">
            Technical Proficiency
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {technicalSkills.map((skill, index) => (
              <Badge
                key={skill}
                variant="outline"
                className="px-4 py-2 text-sm border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Service Offerings */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="p-6 text-center bg-card/50 backdrop-blur-lg border-border/50 hover:border-primary/50 transition-all duration-300 group animate-scale-in">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 glow-primary group-hover:scale-110 transition-transform duration-300">
              <TestTube className="w-8 h-8 text-primary" />
            </div>
            <h4 className="text-xl font-semibold text-foreground mb-2">Manual Testing</h4>
            <p className="text-muted-foreground text-sm">
              Comprehensive manual testing services including functional, usability, and exploratory testing
            </p>
          </Card>

          <Card className="p-6 text-center bg-card/50 backdrop-blur-lg border-border/50 hover:border-secondary/50 transition-all duration-300 group animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4 glow-secondary group-hover:scale-110 transition-transform duration-300">
              <Code className="w-8 h-8 text-secondary" />
            </div>
            <h4 className="text-xl font-semibold text-foreground mb-2">Test Automation</h4>
            <p className="text-muted-foreground text-sm">
              Selenium-based automation frameworks for efficient regression and functional testing
            </p>
          </Card>

          <Card className="p-6 text-center bg-card/50 backdrop-blur-lg border-border/50 hover:border-accent/50 transition-all duration-300 group animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 glow-accent group-hover:scale-110 transition-transform duration-300">
              <Globe className="w-8 h-8 text-accent" />
            </div>
            <h4 className="text-xl font-semibold text-foreground mb-2">API Testing</h4>
            <p className="text-muted-foreground text-sm">
              RESTful API testing using Postman and automated API validation frameworks
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;