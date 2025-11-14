import { Mail, MapPin, GraduationCap, Github, Linkedin, User } from "lucide-react";
import { Card } from "./ui/card";
import RevealOnScroll from "./RevealOnScroll";
import SectionHeading from "./SectionHeading";
import { useCounterAnimation } from "@/hooks/useCounterAnimation";

const About = () => {
  const cgpa = useCounterAnimation({ end: 8.16, duration: 2000, decimals: 2 });
  const projects = useCounterAnimation({ end: 6, duration: 2000 });
  const languages = useCounterAnimation({ end: 2, duration: 2000 });
  const awards = useCounterAnimation({ end: 4, duration: 2000 });

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* ---- Section Heading ---- */}
        <RevealOnScroll direction="fade">
          <SectionHeading
            icon={<User size={32} />}
            subtitle="A passionate AI & Data Science student dedicated to building intelligent solutions and solving real-world challenges."
          >
            About Me
          </SectionHeading>
        </RevealOnScroll>

        {/* ---- Top Row: Image (Left) + Content (Right) ---- */}
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          
          {/* 🖼️ Left Side - Professional Styled Photo */}
          <RevealOnScroll direction="left">
            <div className="flex justify-center">
              <div className="relative group">
                {/* Gradient border glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/60 via-primary/30 to-transparent blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Profile image */}
                <img
                  src="/photo.jpg"
                  alt="Malathi"
                  className="relative z-10 w-90 h-90 md:w-96 md:h-96 rounded-full object-cover border-4 border-primary/30 shadow-lg shadow-primary/20 
                  transition-transform duration-500 group-hover:scale-105 group-hover:shadow-primary/40"
                />

                {/* Subtle overlay highlight */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </RevealOnScroll>

          {/* 🧠 Right Side - Content */}
          <RevealOnScroll direction="right" delay={200}>
            <div className="space-y-6 text-lg">
              <h3 className="text-4xl font-semibold bg-gradient-to-r from-[#b2f5ea] to-[#81e6d9] bg-clip-text text-transparent">
                Hello! I'm Malathi
              </h3>
              <p className="text-[#ccfff4] leading-relaxed text-lg">
                As a dedicated student in Artificial Intelligence and Data Science at Mepco Schlenk Engineering College,
                I aim to apply my technical knowledge and creative thinking to build intelligent and scalable solutions.
                I am enthusiastic about solving real-world challenges through data-driven decision making and continuous learning.
              </p>

              <div className="space-y-4 text-lg">
                <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Mail size={20} className="text-primary" />
                  <a href="mailto:gmalathi2005@gmail.com">gmalathi2005@gmail.com</a>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin size={20} className="text-primary" />
                  <span>Tamil Nadu, India</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <GraduationCap size={20} className="text-primary" />
                  <span className="text-[#d3baff]">Available for Opportunities</span>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <a
                  href="https://github.com/Malathi-gokila"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card border border-border rounded-lg hover:border-primary hover:shadow-glow transition-all duration-300"
                >
                  <Github size={24} className="text-foreground hover:text-primary transition-colors" />
                </a>
                <a
                  href="https://www.linkedin.com/in/malathi-gokila13/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card border border-border rounded-lg hover:border-primary hover:shadow-glow transition-all duration-300"
                >
                  <Linkedin size={24} className="text-foreground hover:text-primary transition-colors" />
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* ---- Stats Section Below ---- */}
        <RevealOnScroll direction="up" delay={300}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            <Card
              ref={cgpa.ref}
              className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-glow text-center"
            >
              <div className="text-3xl font-bold text-cyan-300 mb-2">
                {cgpa.displayValue}
              </div>
              <div className="text-sm text-muted-foreground">CGPA</div>
            </Card>

            <Card
              ref={projects.ref}
              className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-glow text-center"
            >
              <div className="text-3xl font-bold text-pink-400 mb-2">
                {projects.displayValue}+
              </div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </Card>

            <Card
              ref={languages.ref}
              className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-glow text-center"
            >
              <div className="text-3xl font-bold text-emerald-300 mb-2">
                {languages.displayValue}+
              </div>
              <div className="text-sm text-muted-foreground">Languages</div>
            </Card>

            <Card
              ref={awards.ref}
              className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-glow text-center"
            >
              <div className="text-3xl font-bold text-violet-300 mb-2">
                {awards.displayValue}+
              </div>
              <div className="text-sm text-muted-foreground">Awards</div>
            </Card>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default About;
