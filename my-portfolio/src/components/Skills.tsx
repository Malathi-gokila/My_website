import { Card } from "./ui/card";
import {
  Code2,
  MessageSquare,
  Lightbulb,
  Users,
  Clock,
  Zap,
} from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";
import SectionHeading from "./SectionHeading";

const Skills = () => {
  const technicalSkills = [
    "Java",
    "Python",
    "HTML / CSS",
    "MySQL",
    "Cloud",
    "Machine Learning",
    "Web Development",
  ];

  const softSkills = [
    { name: "Communication", icon: <MessageSquare size={16} /> },
    { name: "Creativity", icon: <Lightbulb size={16} /> },
    { name: "Time Management", icon: <Clock size={16} /> },
    { name: "Team Work", icon: <Users size={16} /> },
    { name: "Critical Thinking", icon: <Lightbulb size={16} /> },
    { name: "Leadership", icon: <Users size={16} /> },
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">

        {/* Section Heading */}
        <RevealOnScroll>
          <SectionHeading
            icon={<Zap size={32} />}
            subtitle="Technical skills and soft skills I’ve mastered along my journey."
          >
            Skills & Expertise
          </SectionHeading>
        </RevealOnScroll>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">

          {/* Technical Skills */}
          <RevealOnScroll direction="left">
            <Card className="p-8 bg-card/40 backdrop-blur-xl border border-white/10 shadow-xl rounded-2xl hover:shadow-purple-500/20 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <Code2 className="text-primary" size={28} />
                <h3 className="text-2xl font-semibold">Technical Skills</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {technicalSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 rounded-full text-sm font-medium text-white shadow-lg bg-gradient-to-r from-violet-500 via-fuchsia-400 to-pink-400 animate-hoverGlow cursor-pointer transition-all duration-300 hover:scale-[1.05] hover:shadow-xl"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </Card>
          </RevealOnScroll>

          {/* Soft Skills */}
          <RevealOnScroll direction="right" delay={150}>
            <Card className="p-8 bg-card/40 backdrop-blur-xl border border-white/10 shadow-xl rounded-2xl hover:shadow-purple-500/20 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <Users className="text-primary" size={28} />
                <h3 className="text-2xl font-semibold">Soft Skills</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.05]"
                  >
                    <span className="text-primary">{skill.icon}</span>
                    <span className="text-foreground text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </Card>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
};

export default Skills;
