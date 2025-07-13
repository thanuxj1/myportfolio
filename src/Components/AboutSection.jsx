import { Briefcase, Code, User, Palette, Settings, Megaphone } from "lucide-react";
import { motion } from "framer-motion";

export const AboutSection = () => {
  // Add your CV file in the public folder of your project
  // For example: public/files/your-cv.pdf
  const handleDownloadCV = () => {
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = './cv.pdf'; // Update this path to match your CV file location
    link.download = 'THANUJA-CV.pdf'; // This will be the downloaded filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const skillCards = [
    {
      title: "Web Development",
      icon: <Code className="h-6 w-6 text-primary" />,
      description: "Creating responsive websites and web applications with modern frameworks."
    },
    {
      title: "UI/UX Design", 
      icon: <User className="h-6 w-6 text-primary" />,
      description: "Designing intuitive user interfaces and seamless user experiences."
    },
    {
      title: "Project Management",
      icon: <Briefcase className="h-6 w-6 text-primary" />,
      description: "Leading projects from conception to completion with agile methodologies."
    },
    {
      title: "Digital Marketing",
      icon: <Megaphone className="h-6 w-6 text-primary" />,
      description: "End-to-end digital marketing services including SEO, ad campaigns, and social media strategy."
    },
    {
      title: "IT Consulting",
      icon: <Settings className="h-6 w-6 text-primary" />,
      description: "Providing IT consulting to optimize technology use and drive business growth."
    },
    {
      title: "Brand Development",
      icon: <Palette className="h-6 w-6 text-primary" />,
      description: "Creating cohesive brand identities and visual strategies that resonate with target audiences."
    }
  ];

  return (
    <section id="about" className="py-18 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About <span className="text-primary text-glow">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-4xl mx-auto mb-8">
            I design and develop websites, SaaS platforms, software, and IT solutions tailored to business needs. 
            I also manage end-to-end digital marketing services including SEO, ad campaigns, content creation, 
            social media strategy, and brand development.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="cosmic-button">
              Get In Touch
            </a>
            <button
              onClick={handleDownloadCV}
              className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
            >
              Download CV
            </button>
          </div>
        </div>

        {/* Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {skillCards.map((card, index) => (
            <motion.div
              key={index}
              className="gradient-border p-6 card-hover relative h-full min-h-[160px] flex flex-col bg-card border border-border/50 shadow-sm hover:shadow-md transition-shadow duration-300"
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-start gap-4 h-full">
                <motion.div 
                  className="p-3 rounded-full bg-primary/10 flex-shrink-0 animate-pulse-subtle"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 360,
                    backgroundColor: "hsl(var(--primary) / 0.2)",
                    transition: { duration: 0.6 }
                  }}
                >
                  {card.icon}
                </motion.div>
                <div className="text-left flex-1">
                  <motion.h4 
                    className="font-medium text-lg mb-2 text-glow"
                    whileHover={{ 
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {card.title}
                  </motion.h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
              
              {/* Hover Gradient Effect */}
              <motion.div
                className="absolute inset-0 rounded-md opacity-0 pointer-events-none"
                style={{
                  background: "linear-gradient(135deg, hsl(var(--primary) / 0.05), hsl(var(--primary) / 0.02))",
                }}
                whileHover={{ 
                  opacity: 1,
                  transition: { duration: 0.3 }
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};