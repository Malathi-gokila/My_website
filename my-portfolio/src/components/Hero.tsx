import { ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const roles = [
    "AI & Data Science Student",
    "Machine Learning Enthusiast",
    "Full Stack Developer",
    "Problem Solver",
    "Creative Thinker",
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.substring(0, displayedText.length + 1));
          setTypingSpeed(150);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentRole.substring(0, displayedText.length - 1));
          setTypingSpeed(100);
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex, typingSpeed, roles]);

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden -mt-10"
    >
      {/* ✨ Animated background dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary/30 rounded-full animate-float"></div>
        <div
          className="absolute top-40 right-32 w-2 h-2 bg-primary/20 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-40 w-2 h-2 bg-primary/30 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-20 w-2 h-2 bg-primary/20 rounded-full animate-float"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      {/* 🌟 Main content */}
      <div className="container mx-auto px-4 py-16 text-center animate-fade-in">
        {/* ✨ Unified gradient header line */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up bg-gradient-to-r from-[#ffffff] via-[#7ecbff] to-[#001233] bg-clip-text text-transparent drop-shadow-md"
          style={{ animationDelay: "0.3s" }}
        >
          Hi, I’m Malathi
        </h1>

        {/* 💡 Enlarged Typing Role Text */}
        <div
          className="text-1xl sm:text-2xl md:text-3xl lg:text-4xl text-[#cce6ff] mb-6 animate-slide-up h-10 flex items-center justify-center tracking-wide"
          style={{ animationDelay: "0.4s" }}
        >
          <span className="font-semibold">{displayedText}</span>
          <span className="inline-block w-1 h-8 bg-primary ml-2 animate-pulse"></span>
        </div>

        {/* 📝 Short description */}
        <p
          className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-slide-up"
          style={{ animationDelay: "0.5s" }}
        >
          A dedicated student passionate about building intelligent and scalable
          solutions through data-driven decision making and continuous learning.
        </p>

        {/* 🎯 Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up"
          style={{ animationDelay: "0.6s" }}
        >
          <button
            onClick={scrollToAbout}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-accent transition-all duration-300 font-medium hover:shadow-glow"
          >
            Explore My Work
          </button>
          <button
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/MALATHI.pdf";
              link.download = "MALATHI.pdf";
              link.click();
            }}
            className="px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium"
          >
            Download Resume
          </button>
        </div>

        {/* ⬇️ Scroll indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer text-primary hover:text-[#4fa3ff] transition-colors"
          aria-label="Scroll to about section"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
