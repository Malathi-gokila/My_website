import { useEffect, useRef, useState } from "react";
import { Card } from "./ui/card";

interface TimelineItemProps {
  year: string;
  title: string;
  institution: string;
  achievement: string;
  isLast?: boolean;
  index: number;
}

const TimelineItem = ({ year, title, institution, achievement, isLast, index }: TimelineItemProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className="relative flex gap-8 group">
      {/* Timeline Line and Dot */}
      <div className="relative flex flex-col items-center">
        {/* Animated Dot */}
        <div
          className={`w-5 h-5 rounded-full border-4 border-primary bg-background z-10 transition-all duration-700 ${
            isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
          style={{
            transitionDelay: `${index * 150}ms`,
          }}
        >
          <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping"></div>
        </div>

        {/* Connecting Line */}
        {!isLast && (
          <div className="w-0.5 h-full bg-border relative overflow-hidden">
            <div
              className={`w-full bg-primary transition-all duration-1000 ease-out ${
                isVisible ? "h-full" : "h-0"
              }`}
              style={{
                transitionDelay: `${index * 150 + 300}ms`,
              }}
            ></div>
          </div>
        )}
      </div>

      {/* Content Card */}
      <div
        className={`flex-1 pb-12 transition-all duration-700 ease-out ${
          isVisible
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-8"
        }`}
        style={{
          transitionDelay: `${index * 150 + 200}ms`,
        }}
      >
        <Card className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-glow relative overflow-hidden">
          {/* Year Badge */}
          <div className="absolute top-4 right-4 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-mono font-semibold">
            {year}
          </div>

          <div className="pr-24">
            <h4 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
              {title}
            </h4>
            <p className="text-muted-foreground mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
              {institution}
            </p>
            <div className="flex items-center gap-2 mt-4">
              <div className="h-1 w-12 bg-primary/30 rounded"></div>
              <p className="text-primary font-semibold">{achievement}</p>
            </div>
          </div>

          {/* Decorative gradient */}
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-primary/5 to-transparent rounded-tl-full"></div>
        </Card>
      </div>
    </div>
  );
};

export default TimelineItem;
