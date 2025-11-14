// import { Card } from "./ui/card";
// import { GraduationCap, Award, BookOpen } from "lucide-react";
// import RevealOnScroll from "./RevealOnScroll";
// import SectionHeading from "./SectionHeading";
// import { motion } from "framer-motion";

// const Education = () => {
//   // 🎓 Education timeline
//   const education = [
//     {
//       year: "2025 (Present)",
//       degree: "B.Tech in Artificial Intelligence and Data Science",
//       institution: "MEPCO Schlenk Engineering College",
//       achievement: "8.16 CGPA (Till 6th semester)",
//     },
//     {
//       year: "2022",
//       degree: "Higher Secondary Certificate (HSC)",
//       institution: "S.H.N.V Higher Secondary School, Sivakasi",
//       achievement: "91.67%",
//     },
//     {
//       year: "2020",
//       degree: "Secondary School Certificate (SSLC)",
//       institution: "S.H.N.V Higher Secondary School, Sivakasi",
//       achievement: "93.2%",
//     },
//   ];

//   // 🪪 Certifications & Awards timeline
//   const mergedTimeline = [
//     {
//       year: "2024",
//       type: "Certifications",
//       title: "NPTEL Certifications: Large Language Models, Python, Java",
//       icon: "🎓",
//     },
//     {
//       year: "2024",
//       type: "Award",
//       title: "Best Outstanding Student Award – Grade 12",
//       icon: "🏆",
//     },
//     {
//       year: "2023",
//       type: "Certifications",
//       title: "UDEMY Certifications: Web Development Course, Mastering AWS Serverless: Hands-on With Core AWS Services",
//       icon: "💻",
//     },
//     {
//       year: "2024",
//       type: "Certification",
//       title: "INFOSYS SPRINGBOARD – Associate in IT Foundation Skills (Java, DBMS, NoSQL, Software Engineering, Agile)",
//       icon: "💼",
//     },
//     {
//       year: "2024",
//       type: "Certifications",
//       title: "IEEE ENGLISH FOR TECHNICAL PROFESSIONALS",
//       icon: "📝",
//     },
//     {
//       year: "2022",
//       type: "Award",
//       title: "Academic Scholarship for CGPA above 8.0",
//       icon: "🏅",
//     },
//     {
//       year: "2018",
//       type: "Award",
//       title: "Best Guide Award – Scouts",
//       icon: "🎖️",
//     },
//     {
//       year: "2017",
//       type: "Award",
//       title: "Scout Completion Certificate",
//       icon: "🏕️",
//     },
//   ];

//   return (
//     <section id="education" className="py-20 bg-gray-950 text-white">
//       <div className="container mx-auto px-4">
//         {/* === Section Heading === */}
//         <RevealOnScroll direction="fade">
//           <SectionHeading
//             icon={<BookOpen size={32} />}
//             subtitle="Academic journey, certifications, and recognitions that shaped my expertise."
//           >
//             Education & Achievements
//           </SectionHeading>
//         </RevealOnScroll>

//         <div className="max-w-6xl mx-auto space-y-20 mt-12">
//           {/* === Education Timeline === */}
//           <RevealOnScroll direction="up">
//             <h3 className="text-3xl font-semibold mb-10 flex items-center gap-3 justify-center">
//               <GraduationCap className="text-purple-400" size={28} />
//               <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
//                   Education Timeline
//               </span>
//             </h3>

//             <motion.div
//               className="relative border-l-2 border-cyan-400/50 ml-6 space-y-10"
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               transition={{ staggerChildren: 0.25 }}
//             >
//               {education.map((edu, index) => (
//                 <motion.div
//                   key={index}
//                   className="ml-6 relative"
//                   variants={{
//                     hidden: { opacity: 0, y: 40 },
//                     visible: { opacity: 1, y: 0 },
//                   }}
//                   transition={{ duration: 0.6, delay: index * 0.2 }}
//                 >
//                   {/* Dot */}
//                   <span className="absolute -left-[13px] top-2 w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_10px_#06b6d4]" />
//                   {/* Content */}
//                   <Card className="bg-gray-900 border border-cyan-400/30 p-6 rounded-lg hover:border-cyan-400 transition-all duration-300">
//                     <div className="flex justify-between items-center mb-2">
//                       <h4 className="text-xl font-semibold text-cyan-300">
//                         {edu.degree}
//                       </h4>
//                       <span className="text-sm text-gray-400">{edu.year}</span>
//                     </div>
//                     <p className="text-gray-300">{edu.institution}</p>
//                     <p className="text-gray-400 mt-2">{edu.achievement}</p>
//                   </Card>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </RevealOnScroll>

//           {/* === Certifications & Awards Timeline === */}
//           <RevealOnScroll direction="up" delay={200}>
//             <h3 className="text-3xl font-semibold mb-10 flex items-center gap-3 justify-center">
//               <Award className="text-purple-400" size={28} />
//               <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
//                    Certifications & Awards
//               </span>
//             </h3>

//             <motion.div
//               className="relative max-w-6xl mx-auto"
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               transition={{ staggerChildren: 0.25 }}
//             >
//               {/* Glowing vertical line */}
//               <div className="absolute left-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 rounded-full transform -translate-x-1/2 shadow-[0_0_20px_#d946ef] animate-pulse"></div>

//               {mergedTimeline.map((item, index) => {
//                 const isLeft = index % 2 === 0;
//                 return (
//                   <motion.div
//                     key={index}
//                     className={`relative mb-12 flex ${
//                       isLeft ? "justify-start" : "justify-end"
//                     } w-full`}
//                     variants={{
//                       hidden: { opacity: 0, y: 50 },
//                       visible: { opacity: 1, y: 0 },
//                     }}
//                     transition={{ duration: 0.6, delay: index * 0.25 }}
//                   >
//                     <div
//                       className={`w-full md:w-[45%] ${
//                         isLeft ? "pr-8 text-left" : "pl-8 text-left"
//                       }`}
//                     >
//                       <Card className="bg-gray-900 border border-cyan-400/40 p-6 rounded-xl shadow-[0_0_20px_#06b6d4] hover:shadow-[0_0_35px_#06b6d4] transition-all">
//                         <div className="flex justify-between items-center mb-2">
//                           <div className="flex items-center gap-2 text-cyan-300 font-semibold">
//                             <span className="text-xl">{item.icon}</span>
//                             <span>{item.type}</span>
//                           </div>
//                           <span className="text-gray-400 text-sm">{item.year}</span>
//                         </div>
//                         <p className="text-white font-medium">{item.title}</p>
//                       </Card>
//                     </div>

//                     {/* Connector Dot */}
//                     <div className="absolute left-1/2 top-6 w-4 h-4 bg-cyan-400 rounded-full transform -translate-x-1/2 shadow-[0_0_12px_#06b6d4]" />
//                   </motion.div>
//                 );
//               })}
//             </motion.div>
//           </RevealOnScroll>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Education;



import { Card } from "./ui/card";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

const Education = () => {
  // 🎓 Education timeline
  const education = [
    {
      degree: "B.Tech in Artificial Intelligence and Data Science",
      institution: "MEPCO Schlenk Engineering College",
      achievement: "8.16 CGPA (Till 6th semester)",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "S.H.N.V Higher Secondary School, Sivakasi",
      achievement: "91.67%",
    },
    {
      degree: "Secondary School Certificate (SSLC)",
      institution: "S.H.N.V Higher Secondary School, Sivakasi",
      achievement: "93.2%",
    },
  ];

  // 🪪 Certifications & Awards timeline
  const mergedTimeline = [
    {
      type: "Certifications",
      title: "NPTEL Certifications: Large Language Models, Python, Java",
      icon: "🎓",
    },
    {
      type: "Certifications",
      title: "UDEMY Certifications: Web Development Course, Mastering AWS Serverless",
      icon: "💻",
    },
    {
      type: "Certifications",
      title:
        "INFOSYS SPRINGBOARD – Associate in IT Foundation Skills (Java, DBMS, NoSQL, Software Engineering, Agile)",
      icon: "💼",
    },
    {
      type: "Certifications",
      title: "IEEE ENGLISH FOR TECHNICAL PROFESSIONALS",
      icon: "📝",
    },
    {
      type: "Certification",
      title: "Spoken Tutorial (IIT Bombay) — Certificate of Completion: HTML Training",
      icon: "📜",
    },
    {
      type: "Certificate of Participation",
      title: "KREATIV' 24 - Participation Certificate by Department of Computer Science and Engineering, Kamaraj College of Engineering & Technology",
      icon: "🎨",
    },
    {
      type: "Certificate of Appreciation",
      title: "FIESTA '25 SENIORS - Appreciation Certificate for active participation by Mepco Schlenk Engineering College, Sivakasi (30 August 2025)",
      icon: "🌟",
    },
    {
      type: "Certificate of Participation",
      title: "FIESTA '25 SENIORS - Participation Certificate for event Sherlock Holmes by Mepco Schlenk Engineering College, Sivakasi (30 August 2025)",
      icon: "🕵️‍♂️",
    },
    {
      type: "Certificate of Appreciation",
      title: "MEPEXPO'24 - Certificate of Appreciation for demonstration of Model/Project Story Narration System by Mepco Schlenk Engineering College, Sivakasi (29-30 August 2024)",
      icon: "🔧",
    },
    {
      type: "Award",
      title: "Best Outstanding Student Award – Grade 12",
      icon: "🏆",
    },
    {
      type: "Award",
      title: "Academic Scholarship for CGPA above 8.0",
      icon: "🏅",
    },
    {
      type: "Award",
      title: "Best Guide Award – Scouts",
      icon: "🎖️",
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-950 text-white">
      <div className="container mx-auto px-4">
        {/* === Section Heading === */}
        <RevealOnScroll direction="fade">
          <SectionHeading
            icon={<BookOpen size={32} />}
            subtitle="Academic journey, certifications, and recognitions that shaped my expertise."
          >
            Education & Achievements
          </SectionHeading>
        </RevealOnScroll>

        <div className="max-w-6xl mx-auto space-y-20 mt-12">
          {/* === Education Timeline === */}
          <RevealOnScroll direction="up">
            <h3 className="text-3xl font-semibold mb-10 flex items-center gap-3 justify-center">
              <GraduationCap className="text-purple-400" size={28} />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Education Timeline
              </span>
            </h3>

            <motion.div
              className="relative border-l-2 border-cyan-400/50 ml-6 space-y-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.25 }}
            >
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="ml-6 relative"
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {/* Dot */}
                  <span className="absolute -left-[13px] top-2 w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_10px_#06b6d4]" />
                  {/* Content */}
                  <Card className="bg-gray-900 border border-cyan-400/30 p-6 rounded-lg hover:border-cyan-400 transition-all duration-300">
                    <h4 className="text-xl font-semibold text-cyan-300">
                      {edu.degree}
                    </h4>
                    <p className="text-gray-300">{edu.institution}</p>
                    <p className="text-gray-400 mt-2">{edu.achievement}</p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </RevealOnScroll>

          {/* === Certifications & Awards Timeline === */}
          <RevealOnScroll direction="up" delay={200}>
            <h3 className="text-3xl font-semibold mb-10 flex items-center gap-3 justify-center">
              <Award className="text-purple-400" size={28} />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Certifications & Awards
              </span>
            </h3>

            <motion.div
              className="relative max-w-6xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.25 }}
            >
              {/* Glowing vertical line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 rounded-full transform -translate-x-1/2 shadow-[0_0_20px_#d946ef] animate-pulse"></div>

              {mergedTimeline.map((item, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <motion.div
                    key={index}
                    className={`relative mb-12 flex ${
                      isLeft ? "justify-start" : "justify-end"
                    } w-full`}
                    variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.6, delay: index * 0.25 }}
                  >
                    <div
                      className={`w-full md:w-[45%] ${
                        isLeft ? "pr-8" : "pl-8"
                      } text-left`}
                    >
                      <Card className="bg-gray-900 border border-cyan-400/40 p-6 rounded-xl shadow-[0_0_20px_#06b6d4] hover:shadow-[0_0_35px_#06b6d4] transition-all">
                        <div className="flex items-center gap-2 text-cyan-300 font-semibold mb-2">
                          <span className="text-xl">{item.icon}</span>
                          <span>{item.type}</span>
                        </div>
                        <p className="text-white font-medium">{item.title}</p>
                      </Card>
                    </div>

                    {/* Connector Dot */}
                    <div className="absolute left-1/2 top-6 w-4 h-4 bg-cyan-400 rounded-full transform -translate-x-1/2 shadow-[0_0_12px_#06b6d4]" />
                  </motion.div>
                );
              })}
            </motion.div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Education;
