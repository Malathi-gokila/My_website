// import { Card } from "./ui/card";
// import { Badge } from "./ui/badge";
// import { Brain, Github, Lightbulb } from "lucide-react";
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
// import { Button } from "./ui/button";
// import { useState } from "react";
// import RevealOnScroll from "./RevealOnScroll";
// import SectionHeading from "./SectionHeading";
// import storyNarrationImg from "@/assets/story-narration.jpg";
// import logisticsAnalyzerImg from "@/assets/logistics-analyzer.jpg";
// import weatherPredictionImg from "@/assets/weather-prediction.jpg";

// interface Project {
//   title: string;
//   description: string;
//   detailedDescription: string;
//   tags: string[];
//   category: string;
//   image: string;
//   github?: string;
//   demo?: string;
//   features: string[];
// }

// const Projects = () => {
//   const [selectedProject, setSelectedProject] = useState<Project | null>(null);

//   const featuredProjects: Project[] = [
//     {
//       title: "Story Narration Generator",
//       description: "Created a fully automated storytelling platform that turns user prompts into narrated videos. Integrated advanced AI for text, image, and audio generation.",
//       detailedDescription: "A comprehensive AI-powered platform that transforms simple text prompts into fully narrated video stories. The system uses Cohere for natural language generation, Stable Diffusion for creating unique visual content, and advanced text-to-speech synthesis for narration. MoviePy handles video composition and editing, while Gradio provides an intuitive web interface for users.",
//       tags: ["Python", "Gradio", "Cohere", "Stable Diffusion", "MoviePy"],
//       category: "AI & ML",
//       image: storyNarrationImg,
//       github: "https://github.com/Malathi-gokila/story-narration",
//       features: [
//         "AI-powered story generation using Cohere API",
//         "Dynamic image generation with Stable Diffusion",
//         "Text-to-speech narration synthesis",
//         "Automated video composition and editing",
//         "User-friendly Gradio web interface"
//       ]
//     },
//     {
//       title: "Truck Delivery Logistics Analyzer",
//       description: "Built a desktop tool to analyze logistics data and trends with ML models. Provided real-time visualization of supplier performance and trip predictions.",
//       detailedDescription: "An intelligent desktop application designed to optimize delivery logistics through machine learning. The tool analyzes historical delivery data, identifies patterns, and predicts future trends. Features interactive visualizations of supplier performance metrics, route optimization suggestions, and predictive analytics for trip planning.",
//       tags: ["Python", "Tkinter", "Pandas", "Scikit-Learn", "Matplotlib"],
//       category: "AI & ML",
//       image: logisticsAnalyzerImg,
//       github: "https://github.com/Malathi-gokila/logistics-analyzer",
//       features: [
//         "ML-based trip prediction algorithms",
//         "Real-time supplier performance tracking",
//         "Interactive data visualizations",
//         "Trend analysis and forecasting",
//         "Export reports in multiple formats"
//       ]
//     },
//     {
//       title: "Weather Prediction",
//       description: "Developed a web-based app for real-time weather updates and future trend prediction using OpenWeatherMap API with linear regression.",
//       detailedDescription: "A modern weather forecasting application that combines real-time data from OpenWeatherMap API with machine learning predictions. Uses linear regression models trained on historical weather patterns to forecast future conditions. The Streamlit interface provides an intuitive dashboard for viewing current conditions and predicted trends.",
//       tags: ["Python", "Streamlit", "Scikit-learn"],
//       category: "AI & ML",
//       image: weatherPredictionImg,
//       github: "https://github.com/Malathi-gokila/weather-prediction",
//       features: [
//         "Real-time weather data integration",
//         "ML-powered trend prediction",
//         "Historical data analysis",
//         "Interactive forecast visualizations",
//         "Location-based weather tracking"
//       ]
//     },
//   ];

//   const getCategoryIcon = (category: string) => {
//     return <Brain className="text-primary" size={24} />;
//   };

//   const ProjectCard = ({ project }: { project: Project }) => (
//     <Card
//       className="flex flex-col justify-between p-6 bg-gray-900 border-2 border-cyan-400 rounded-lg transition-transform transform hover:scale-105 hover:shadow-[0_0_20px_cyan] hover:border-cyan-500 cursor-pointer h-full"
//       onClick={() => setSelectedProject(project)}
//     >
//       <div>
//         <div className="flex items-start gap-3 mb-4">
//           {getCategoryIcon(project.category)}
//           <div className="flex-1">
//             <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
//             <p className="text-sm text-gray-400 mb-4">{project.description}</p>
//           </div>
//         </div>
//         <div className="flex flex-wrap gap-2 mb-4">
//           {project.tags.map((tag, index) => (
//             <Badge
//               key={index}
//               variant="secondary"
//               className="bg-purple-600 text-white rounded-full px-3 py-1 text-xs font-semibold"
//             >
//               {tag}
//             </Badge>
//           ))}
//         </div>
//       </div>
//       <button
//         className="w-full border-2 border-cyan-400 text-cyan-400 rounded-full py-2 text-center font-semibold hover:bg-cyan-500 hover:text-white transition-colors mt-auto"
//         onClick={() => setSelectedProject(project)}
//       >
//         View Details
//       </button>
//     </Card>
//   );

//   return (
//     <section id="projects" className="py-20 bg-gray-950 text-white">
//       <div className="container mx-auto px-4">
//         <RevealOnScroll direction="fade">
//           <SectionHeading
//             icon={<Lightbulb size={32} />}
//             subtitle="Showcasing innovative solutions that demonstrate my passion for AI, web development, and problem-solving."
//           >
//             Featured Projects
//           </SectionHeading>
//         </RevealOnScroll>

//         {/* Projects Grid */}
//         <div className="max-w-6xl mx-auto mt-10">
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
//             {featuredProjects.map((project, index) => (
//               <RevealOnScroll
//                 key={`${project.title}-${index}`}
//                 direction="fade"
//                 delay={index * 150}
//               >
//                 <ProjectCard project={project} />
//               </RevealOnScroll>
//             ))}
//           </div>

//           {/* Centered "View All Projects on GitHub" Box */}
//           <div className="flex justify-center mt-12">
//             <Button
//               className="flex items-center gap-3 bg-gray-900 border-2 border-cyan-400 text-cyan-400 rounded-lg px-6 py-4 hover:bg-cyan-500 hover:text-white transition-colors"
//               onClick={() => window.open('https://github.com/Malathi-gokila', '_blank')}
//             >
//               <Github size={24} />
//               View All Projects on GitHub
//             </Button>
//           </div>
//         </div>

//         {/* Project Detail Modal */}
//         <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
//           <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gray-950 text-white p-6 rounded-lg shadow-lg">
//             {selectedProject && (
//               <>
//                 <DialogHeader>
//                   <div className="flex items-center gap-3 mb-2">
//                     {getCategoryIcon(selectedProject.category)}
//                     <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
//                   </div>
//                   <DialogDescription className="text-base">
//                     {selectedProject.detailedDescription}
//                   </DialogDescription>
//                 </DialogHeader>

//                 {/* Screenshot */}
//                 <div className="rounded-lg overflow-hidden border border-cyan-400 my-4">
//                   <img
//                     src={selectedProject.image}
//                     alt={selectedProject.title}
//                     className="w-full h-auto object-cover"
//                   />
//                 </div>

//                 {/* Features */}
//                 <div>
//                   <h4 className="text-lg font-semibold mb-3">Key Features</h4>
//                   <ul className="space-y-2 list-disc list-inside text-gray-300">
//                     {selectedProject.features.map((feature, index) => (
//                       <li key={index}>{feature}</li>
//                     ))}
//                   </ul>
//                 </div>

//                 {/* Technologies */}
//                 <div className="mt-4">
//                   <h4 className="text-lg font-semibold mb-3">Technologies Used</h4>
//                   <div className="flex flex-wrap gap-2">
//                     {selectedProject.tags.map((tag, index) => (
//                       <Badge
//                         key={index}
//                         variant="secondary"
//                         className="bg-purple-600 text-white rounded-full px-3 py-1 text-xs font-semibold"
//                       >
//                         {tag}
//                       </Badge>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Links */}
//                 <div className="flex gap-3 pt-4 flex-wrap">
//                   {selectedProject.github && (
//                     <Button
//                       variant="outline"
//                       className="flex items-center gap-2"
//                       onClick={() => window.open(selectedProject.github, '_blank')}
//                     >
//                       <Github size={18} />
//                       View on GitHub
//                     </Button>
//                   )}
//                   {selectedProject.demo && (
//                     <Button
//                       className="flex items-center gap-2"
//                       onClick={() => window.open(selectedProject.demo, '_blank')}
//                     >
//                       View Demo
//                     </Button>
//                   )}
//                 </div>
//               </>
//             )}
//           </DialogContent>
//         </Dialog>
//       </div>
//     </section>
//   );
// };

// export default Projects;


import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Github, Lightbulb } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Button } from "./ui/button";
import { useState } from "react";
import RevealOnScroll from "./RevealOnScroll";
import SectionHeading from "./SectionHeading";
import habitTrackerImg from "@/assets/habit_tracker.png";
import jobSearchImg from "@/assets/Job_platform.png";
import musicMoodImg from "@/assets/music_mood.png";

interface Project {
  title: string;
  description: string;
  detailedDescription: string;
  tags: string[];
  category: string;
  image: string;
  github?: string;
  demo?: string;
  features: string[];
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const featuredProjects: Project[] = [
    {
      title: "Job Search Platform",
      description:
        "Smart job portal with semantic resume-job matching using BERT and cosine similarity. Role-based access, job tracking, and secure login with JWT.",
      detailedDescription:
        "Built a modern job search platform using MERN stack with semantic matching powered by BERT. Implemented secure login using JWT, role-based access control, automated email alerts, and intuitive dashboard for job seekers and recruiters.",
      tags: ["MongoDB", "Express", "React", "Node.js", "BERT", "JWT"],
      category: "Web Development",
      image: jobSearchImg,
      github: "https://github.com/Malathi-gokila/Job_search_platform",
      features: [
        "Semantic resume-job matching using BERT",
        "Role-based access and secure login with JWT",
        "Automated email alerts for job updates",
        "Interactive dashboard for recruiters and job seekers",
      ],
    },
    {
      title: "Gamified Habit Tracker",
      description:
        "Habit tracking platform with gamified XP, leveling, and streaks. Secure authentication and responsive UX for continuous engagement.",
      detailedDescription:
        "Designed a habit tracker that gamifies user habits with XP, levels, and streak tracking. Users can create custom challenges, earn rewards, and track progress. Built with React, Node.js, and MongoDB.",
      tags: ["React", "Node.js", "MongoDB"],
      category: "Web Development",
      image: habitTrackerImg,
      github: "https://github.com/Malathi-gokila/Habit_tracker",
      features: [
        "Gamified habit tracking with XP and levels",
        "Custom challenges and reward system",
        "Secure authentication and user management",
        "Responsive and interactive UI",
      ],
    },
    {
      title: "Music Mood Playlist Generator",
      description:
        "Real-time emotion-based playlist generator using facial recognition and Spark streaming for dynamic, privacy-aware recommendations.",
      detailedDescription:
        "Built a music recommendation system that analyzes facial expressions in real time using DeepFace, processes data with Kafka and Spark, and provides personalized playlist suggestions via YouTube API and Streamlit frontend.",
      tags: ["Python", "DeepFace", "Kafka", "Spark", "Streamlit", "YouTube API"],
      category: "AI / ML",
      image: musicMoodImg,
      github: "https://github.com/Malathi-gokila/Music_Mood_Playlist_generator",
      features: [
        "Real-time emotion detection using DeepFace",
        "Spark streaming for dynamic playlist recommendations",
        "Privacy-aware recommendations",
        "Streamlit-based interactive frontend",
        "YouTube API integration for playlists",
      ],
    },
  ];

  const getCategoryBadge = (category: string) => {
    let textColor = "text-green-400"; // default for Web Development
    if (category === "AI / ML") textColor = "text-purple-400";

    return (
      <span className={`block ${textColor} text-sm font-semibold tracking-wide mb-3`}>
        {category}
      </span>
    );
  };

  const ProjectCard = ({ project }: { project: Project }) => (
    <Card
      className="flex flex-col justify-between p-6 bg-gray-900 border-2 border-cyan-400 rounded-lg transition-transform transform hover:scale-105 hover:shadow-[0_0_20px_cyan] hover:border-cyan-500 cursor-pointer h-full"
      onClick={() => setSelectedProject(project)}
    >
      <div>
        {/* Category */}
        {getCategoryBadge(project.category)}

        {/* Title and description */}
        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-sm text-gray-400 mb-4">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-purple-600 text-white rounded-full px-3 py-1 text-xs font-semibold"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* View Details Button */}
      <button
        className="w-full border-2 border-cyan-400 text-cyan-400 rounded-full py-2 text-center font-semibold hover:bg-cyan-500 hover:text-white transition-colors mt-auto"
        onClick={() => setSelectedProject(project)}
      >
        View Details
      </button>
    </Card>
  );

  return (
    <section id="projects" className="py-20 bg-gray-950 text-white">
      <div className="container mx-auto px-4">
        <RevealOnScroll direction="fade">
          <SectionHeading
            icon={<Lightbulb size={32} />}
            subtitle="Showcasing innovative solutions that demonstrate my passion for AI, web development, and problem-solving."
          >
            Featured Projects
          </SectionHeading>
        </RevealOnScroll>

        {/* Project Grid */}
        <div className="max-w-6xl mx-auto mt-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {featuredProjects.map((project, index) => (
              <RevealOnScroll
                key={`${project.title}-${index}`}
                direction="fade"
                delay={index * 150}
              >
                <ProjectCard project={project} />
              </RevealOnScroll>
            ))}
          </div>

          {/* Centered GitHub Button */}
          <div className="flex justify-center mt-12">
            <Button
              className="flex items-center gap-3 bg-gray-900 border-2 border-cyan-400 text-cyan-400 rounded-lg px-6 py-4 hover:bg-cyan-500 hover:text-white transition-colors"
              onClick={() =>
                window.open("https://github.com/Malathi-gokila?tab=repositories", "_blank")
              }
            >
              <Github size={24} />
              View All Projects on GitHub
            </Button>
          </div>
        </div>

        {/* Project Detail Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gray-950 text-white p-6 rounded-lg shadow-lg">
            {selectedProject && (
              <>
                <DialogHeader>
                  <div className="flex items-center gap-3 mb-2">
                    {getCategoryBadge(selectedProject.category)}
                    <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
                  </div>
                  <DialogDescription className="text-base">
                    {selectedProject.detailedDescription}
                  </DialogDescription>
                </DialogHeader>

                {/* Project Image */}
                <div className="rounded-lg overflow-hidden border border-cyan-400 my-4">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Features */}
                <div className="mt-4">
                  <h4 className="text-lg font-semibold mb-3">Key Features</h4>
                  <ul className="space-y-2 list-disc list-inside text-gray-300">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mt-4">
                  <h4 className="text-lg font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-purple-600 text-white rounded-full px-3 py-1 text-xs font-semibold"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* GitHub Link */}
                {selectedProject.github && (
                  <div className="flex gap-3 pt-4">
                    <Button
                      variant="outline"
                      className="flex items-center gap-2"
                      onClick={() => window.open(selectedProject.github, "_blank")}
                    >
                      <Github size={18} />
                      View on GitHub
                    </Button>
                  </div>
                )}
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Projects;
