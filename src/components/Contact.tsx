import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send, Download } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend service
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "shiv.shanker.gupta@email.com",
      href: "mailto:shiv.shanker.gupta@email.com",
      color: "primary"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/shiv-shanker-gupta",
      href: "https://linkedin.com/in/shiv-shanker-gupta",
      color: "secondary"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/shiv-shanker-gupta",
      href: "https://github.com/shiv-shanker-gupta",
      color: "accent"
    }
  ];

  return (
    <section id="contact" className="py-20 tech-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Ready to discuss your QA needs? I'm actively seeking opportunities and would love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="text-2xl font-bold mb-6 gradient-text-secondary">
                Let's Connect
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm currently seeking opportunities as a QA Engineer where I can apply my skills 
                in manual testing and test automation. Whether you're looking to improve your 
                testing processes or need help ensuring software quality, I'd love to discuss 
                how I can contribute to your team.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <Card
                    key={contact.label}
                    className="p-4 bg-card/50 backdrop-blur-lg border-border/50 hover:border-primary/50 transition-all duration-300 group animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <a
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4"
                    >
                      <div className={`w-12 h-12 bg-${contact.color}/20 rounded-lg flex items-center justify-center glow-${contact.color} group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className={`w-6 h-6 text-${contact.color}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                          {contact.label}
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {contact.value}
                        </p>
                      </div>
                    </a>
                  </Card>
                );
              })}
            </div>

            {/* Resume Download */}
            <Card className="p-6 bg-gradient-primary/10 border-primary/30 animate-scale-in">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center glow-primary">
                  <Download className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground mb-1">Resume</h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    Download my complete resume with detailed experience and skills
                  </p>
                  <Button className="btn-tech text-sm px-4 py-2">
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8 bg-card/50 backdrop-blur-lg border-border/50 animate-scale-in">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                    className="bg-input/50 border-border/50 focus:border-primary transition-colors duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    className="bg-input/50 border-border/50 focus:border-primary transition-colors duration-300"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="text-foreground">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What would you like to discuss?"
                  required
                  className="bg-input/50 border-border/50 focus:border-primary transition-colors duration-300"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me more about your project or opportunity..."
                  required
                  rows={5}
                  className="bg-input/50 border-border/50 focus:border-primary transition-colors duration-300 resize-none"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full btn-tech group"
              >
                <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-border/50 text-center animate-fade-in">
          <p className="text-muted-foreground">
            © 2024 Shiv Shanker Gupta. Built with passion for quality assurance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;