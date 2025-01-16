import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navigation } from "@/components/ui/navigation-menu";
import { ArrowRight, Building2, Users2, Rocket, Mail, Phone, MapPin, ChevronRight, ArrowUpRight, Sparkles, Globe2, Shield, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 transition-all duration-300 ${scrolled ? 'border-b shadow-sm' : ''}`}>
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-accent" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">InnovateTech</span>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 hover:bg-accent/10 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-sm font-medium hover:text-primary transition-colors">Home</a>
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Services</a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">About</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
            <Button className="bg-accent hover:bg-accent/90">Get Started</Button>
          </div>

          {/* Mobile Navigation */}
          <div 
            className={`fixed inset-x-0 top-16 p-4 bg-background/95 backdrop-blur border-b md:hidden transform transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
            }`}
          >
            <div className="container flex flex-col space-y-4">
              <a 
                href="#home" 
                className="text-lg font-medium hover:text-primary transition-colors p-2 rounded-lg hover:bg-accent/5 active:bg-accent/10"
                onClick={closeMenu}
              >
                Home
              </a>
              <a 
                href="#services" 
                className="text-lg font-medium hover:text-primary transition-colors p-2 rounded-lg hover:bg-accent/5 active:bg-accent/10"
                onClick={closeMenu}
              >
                Services
              </a>
              <a 
                href="#about" 
                className="text-lg font-medium hover:text-primary transition-colors p-2 rounded-lg hover:bg-accent/5 active:bg-accent/10"
                onClick={closeMenu}
              >
                About
              </a>
              <a 
                href="#contact" 
                className="text-lg font-medium hover:text-primary transition-colors p-2 rounded-lg hover:bg-accent/5 active:bg-accent/10"
                onClick={closeMenu}
              >
                Contact
              </a>
              <Button 
                className="bg-accent hover:bg-accent/90 w-full text-lg py-6"
                onClick={closeMenu}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-background to-primary/5">
        <div className="container px-4 sm:px-6">
          <div className="grid gap-12 md:gap-8 md:grid-cols-2 items-center">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium mb-6 bg-background">
                <span className="text-accent">New</span>
                <span className="mx-2">•</span>
                <span>Launching Our AI Solutions</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
                Transform Your Business Future
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-lg mx-auto md:mx-0">
                Empowering businesses with cutting-edge technology solutions and innovative strategies for the digital age.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-lg py-6 px-8">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg py-6 px-8">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative mt-8 md:mt-0">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur-3xl -z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
                alt="Innovation"
                className="rounded-lg shadow-2xl w-full object-cover aspect-[4/3] sm:aspect-[16/9] md:aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-to-b from-background to-primary/5">
        <div className="container px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground">Comprehensive solutions tailored to your business needs</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                title: "AI Solutions",
                description: "Harness the power of artificial intelligence for your business growth.",
                icon: <Sparkles className="h-10 w-10 text-accent" />,
              },
              {
                title: "Global Reach",
                description: "Expand your business globally with our international expertise.",
                icon: <Globe2 className="h-10 w-10 text-accent" />,
              },
              {
                title: "Secure Systems",
                description: "Enterprise-grade security for your digital infrastructure.",
                icon: <Shield className="h-10 w-10 text-accent" />,
              },
            ].map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all hover:-translate-y-1 bg-card/50 backdrop-blur group">
                <div className="mb-6 bg-accent/10 w-20 h-20 rounded-2xl flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground text-lg mb-6">{service.description}</p>
                <Button variant="ghost" className="text-accent hover:text-accent/90 group-hover:translate-x-1 transition-transform text-lg">
                  Learn More <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24">
        <div className="container px-4 sm:px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="relative order-2 md:order-1">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur-3xl -z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                alt="Team"
                className="rounded-lg shadow-xl w-full object-cover aspect-[4/3]"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">About Us</h2>
              <p className="text-lg text-muted-foreground mb-8">
                With over a decade of experience, we've been at the forefront of technological innovation, 
                helping businesses transform and thrive in the digital age. Our team of experts is 
                passionate about delivering excellence and driving real business results.
              </p>
              <div className="grid gap-8 sm:grid-cols-2">
                <div className="flex items-center gap-6 group">
                  <div className="h-16 w-16 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Users2 className="h-8 w-8 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-1">Expert Team</h4>
                    <p className="text-muted-foreground">Industry professionals</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="h-16 w-16 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Rocket className="h-8 w-8 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-1">Innovation</h4>
                    <p className="text-muted-foreground">Cutting-edge solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-background to-primary/5">
        <div className="container px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">Get in Touch</h2>
            <p className="text-lg text-muted-foreground">Let's discuss how we can help transform your business</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                title: "Email Us",
                info: "contact@innovatetech.com",
                icon: <Mail className="h-8 w-8 text-accent" />,
              },
              {
                title: "Call Us",
                info: "+1 (555) 123-4567",
                icon: <Phone className="h-8 w-8 text-accent" />,
              },
              {
                title: "Visit Us",
                info: "123 Innovation Ave, Tech Valley",
                icon: <MapPin className="h-8 w-8 text-accent" />,
              },
            ].map((contact, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all hover:-translate-y-1 bg-card/50 backdrop-blur group">
                <div className="bg-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  {contact.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{contact.title}</h3>
                <p className="text-lg text-muted-foreground">{contact.info}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t">
        <div className="container py-12 px-4 sm:px-6">
          <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="h-6 w-6 text-accent" />
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">InnovateTech</span>
              </div>
              <p className="text-muted-foreground">
                Transforming businesses through innovation and technology.
              </p>
            </div>
            {[
              {
                title: "Company",
                links: [
                  { name: "About", href: "#about" },
                  { name: "Services", href: "#services" },
                  { name: "Careers", href: "#" },
                ],
              },
              {
                title: "Resources",
                links: [
                  { name: "Blog", href: "#" },
                  { name: "Case Studies", href: "#" },
                  { name: "Documentation", href: "#" },
                ],
              },
              {
                title: "Legal",
                links: [
                  { name: "Privacy Policy", href: "#" },
                  { name: "Terms of Service", href: "#" },
                  { name: "Cookie Policy", href: "#" },
                ],
              },
            ].map((section, index) => (
              <div key={index}>
                <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href={link.href} 
                        className="text-muted-foreground hover:text-accent transition-colors inline-flex items-center group"
                      >
                        {link.name}
                        <ArrowUpRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
            © 2024 InnovateTech. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;