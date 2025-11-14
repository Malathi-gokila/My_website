import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] bg-background flex items-center justify-center">
      {/* Animated background dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary/30 rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-2 h-2 bg-primary/20 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-40 left-40 w-2 h-2 bg-primary/30 rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-primary/20 rounded-full animate-float" style={{ animationDelay: "0.5s" }}></div>
      </div>

      <div className="text-center space-y-8 w-full max-w-md px-4">
        {/* Name in coding tags */}
        <h1 className="text-5xl md:text-6xl font-bold animate-pulse">
          <span className="font-mono text-primary animate-glow">&lt;</span>
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Malathi
          </span>
          <span className="font-mono text-primary animate-glow">/&gt;</span>
        </h1>

        {/* Loading text */}
        <p className="text-muted-foreground text-lg">Loading Portfolio...</p>

        {/* Progress bar */}
        <div className="space-y-2">
          <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-accent rounded-full transition-all duration-200 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-primary font-mono text-sm">{progress}%</p>
        </div>

        {/* Animated dots */}
        <div className="flex justify-center gap-2">
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
