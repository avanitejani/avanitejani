


// "use client";
// import React, { useRef } from "react";
// import { motion, useScroll, useSpring } from "framer-motion";
// import { Briefcase, Activity, Cpu, Database, Layout } from "lucide-react";

// const Experience = ({ isDarkMode }) => {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"],
//   });

//   const scaleY = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//   });

//   const projectMilestones = [
//     {
//       title: "Medical Management Ecosystem",
//       period: "Project Alpha",
//       icon: <Activity size={20} />,
//       details: "Architected a full-scale medical portal. Integrated DICOM imaging viewers and high-performance data tables for patient records and invoice tracking.",
//       tech: ["Next.js", "DICOM.js", "Data Tables", "API Integration"],
//       color: "#6fdcbf"
//     },
//     {
//       title: "AI Conversational Interfaces",
//       period: "Project Beta",
//       icon: <Cpu size={20} />,
//       details: "Developed sleek, real-time chatbot UIs with specialized message actions and instant response streaming. Focused on ultra-low latency frontend performance.",
//       tech: ["Framer Motion", "Socket.io", "GSAP", "AI-UX"],
//       color: "#ae8fdb"
//     },
//     {
//       title: "Web3 & Blockchain Dashboards",
//       period: "Project Gamma",
//       icon: <Database size={20} />,
//       details: "Built decentralized finance (DeFi) interfaces. Engineered reusable component libraries that reduced development time by 40% across internal projects.",
//       tech: ["React", "Tailwind CSS", "Ant Design", "Web3.js"],
//       color: "#ff9f43"
//     },
//     {
//       title: "Enterprise Core Library",
//       period: "Architecture",
//       icon: <Layout size={20} />,
//       details: "Designed and maintained the company's internal UI framework. Standardized design tokens and implemented global state management patterns.",
//       tech: ["Context API", "TypeScript", "Clean Architecture"],
//       color: "#56af96"
//     }
//   ];

//   return (
//     <section
//       id="experience"
//       ref={containerRef}
//       className={`relative py-32 px-6 transition-colors duration-1000 overflow-hidden ${isDarkMode ? "bg-[#0b0612]" : "bg-[#f8fafc]"}`}
//     >
//       {/* --- BACKGROUND ACCENTS --- */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className={`absolute top-0 left-0 w-full h-full opacity-10 ${isDarkMode ? "bg-[radial-gradient(#ae8fdb_1px,transparent_1px)]" : "bg-[radial-gradient(#467b6c_1px,transparent_1px)]"}`} style={{ backgroundSize: '40px 40px' }} />
//       </div>

//       <div className="max-w-6xl mx-auto relative z-10">
//         {/* --- HEADER --- */}
//         <div className="mb-24 flex flex-col items-center md:items-start">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//           >
//             <div className="flex items-center gap-4 mb-4">
//               <span className={`px-4 py-1 rounded-full text-[10px] font-black tracking-widest uppercase border
//                                 ${isDarkMode ? "text-[#6fdcbf] border-[#6fdcbf]/30 bg-[#6fdcbf]/5" : "text-[#467b6c] border-[#467b6c]/30 bg-[#467b6c]/5"}`}>
//                 1.0_Company_Tenure
//               </span>
//               <div className={`h-[1px] w-24 ${isDarkMode ? "bg-white/20" : "bg-black/10"}`} />
//             </div>
//             <h2 className={`text-6xl md:text-8xl font-black tracking-tighter ${isDarkMode ? "text-white" : "text-[#1a1a1a]"}`}>
//               Blockchain<span className={isDarkMode ? "text-[#ae8fdb]" : "text-[#56af96]"}>Dev.</span>
//             </h2>
//             <p className={`text-xl mt-4 font-mono opacity-50 ${isDarkMode ? "text-white" : "text-black"}`}>
//               &gt; Senior Frontend Developer | 2024 - Present
//             </p>
//           </motion.div>
//         </div>

//         {/* --- THE PROJECT RAIL --- */}
//         <div className="relative">
//           {/* The Rail Line */}
//           <div className="absolute left-[24px] md:left-[30px] top-0 bottom-0 w-[2px] bg-gray-500/10">
//             <motion.div
//               style={{ scaleY }}
//               className={`w-full h-full origin-top rounded-full ${isDarkMode ? "bg-[#ae8fdb]" : "bg-[#467b6c]"}`}
//             />
//           </div>

//           <div className="space-y-16">
//             {projectMilestones.map((project, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, x: -30 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true, margin: "-100px" }}
//                 transition={{ duration: 0.8, delay: index * 0.1 }}
//                 className="relative pl-16 md:pl-24"
//               >
//                 {/* THE NODE */}
//                 <div className="absolute left-0 top-0 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center z-20">
//                   <div className={`absolute inset-0 rounded-2xl rotate-45 border-2 transition-transform duration-500 group-hover:rotate-90
//                                         ${isDarkMode ? "bg-[#160d1d] border-[#ae8fdb]/50" : "bg-white border-[#467b6c]/50"}`} />
//                   <div className={`relative z-10 ${isDarkMode ? "text-[#6fdcbf]" : "text-[#467b6c]"}`}>
//                     {project.icon}
//                   </div>
//                 </div>

//                 {/* THE PROJECT CARD */}
//                 <div className={`p-8 rounded-[2rem] border backdrop-blur-xl transition-all duration-500 group max-w-3xl
//                                     ${isDarkMode
//                     ? "bg-white/5 border-white/5 hover:border-purple-500/30 shadow-2xl"
//                     : "bg-white border-black/5 hover:border-teal-500/30 shadow-xl"}`}>

//                   <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
//                     <h3 className={`text-2xl md:text-3xl font-black tracking-tight ${isDarkMode ? "text-white" : "text-gray-900"}`}>
//                       {project.title}
//                     </h3>
//                     <span className={`font-mono text-[10px] font-bold px-3 py-1 rounded-lg border
//                                             ${isDarkMode ? "border-purple-500/30 text-purple-400" : "border-teal-500/30 text-teal-700"}`}>
//                       {project.period}
//                     </span>
//                   </div>

//                   <p className={`text-lg leading-relaxed mb-8 opacity-70 ${isDarkMode ? "text-purple-100" : "text-gray-600"}`}>
//                     {project.details}
//                   </p>

//                   {/* TECH HUB */}
//                   <div className="flex flex-wrap gap-2">
//                     {project.tech.map((t, i) => (
//                       <span
//                         key={i}
//                         className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest border transition-all
//                                                     ${isDarkMode
//                             ? "bg-white/5 border-white/10 text-white/50 group-hover:text-[#6fdcbf]"
//                             : "bg-black/5 border-black/5 text-black/50 group-hover:text-[#467b6c]"}`}
//                       >
//                         {t}
//                       </span>
//                     ))}
//                   </div>

//                   {/* Ghost Numbering */}
//                   <div className={`absolute -bottom-4 -right-2 text-9xl font-black opacity-[0.03] pointer-events-none ${isDarkMode ? "text-white" : "text-black"}`}>
//                     {index + 1}
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* --- TERMINAL FOOTER --- */}
//       <div className="max-w-6xl mx-auto mt-24 px-6 opacity-30">
//         <div className={`h-[1px] w-full mb-8 ${isDarkMode ? "bg-white/10" : "bg-black/10"}`} />
//         <div className="flex flex-col md:flex-row justify-between font-mono text-[10px] gap-4">
//           <p>&gt; TOTAL_DEPLOYMENTS: 42</p>
//           <p>&gt; REPOSITORY: GITHUB.COM/AVANITEJANI</p>
//           <p>&gt; STATUS: CONTINUOUS_GROWTH</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;


"use client";
import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Briefcase, Activity, Cpu, Database, Layout } from "lucide-react";
import { useTheme } from "../../../../ThemeContext";
// import { useTheme } from "@/context/ThemeContext"; // Global Theme Hook import kiya

const Experience = () => { // Prop se isDarkMode hata diya gaya hai

  // Global Theme Connection
  const { isDarkMode } = useTheme();

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const projectMilestones = [
    {
      title: "Medical Management Ecosystem",
      period: "Project Alpha",
      icon: <Activity size={20} />,
      details: "Architected a full-scale medical portal. Integrated DICOM imaging viewers and high-performance data tables for patient records and invoice tracking.",
      tech: ["Next.js", "DICOM.js", "Data Tables", "API Integration"],
      color: "#6fdcbf"
    },
    {
      title: "AI Conversational Interfaces",
      period: "Project Beta",
      icon: <Cpu size={20} />,
      details: "Developed sleek, real-time chatbot UIs with specialized message actions and instant response streaming. Focused on ultra-low latency frontend performance.",
      tech: ["Framer Motion", "Socket.io", "GSAP", "AI-UX"],
      color: "#ae8fdb"
    },
    {
      title: "Web3 & Blockchain Dashboards",
      period: "Project Gamma",
      icon: <Database size={20} />,
      details: "Built decentralized finance (DeFi) interfaces. Engineered reusable component libraries that reduced development time by 40% across internal projects.",
      tech: ["React", "Tailwind CSS", "Ant Design", "Web3.js"],
      color: "#ff9f43"
    },
    {
      title: "Enterprise Core Library",
      period: "Architecture",
      icon: <Layout size={20} />,
      details: "Designed and maintained the company's internal UI framework. Standardized design tokens and implemented global state management patterns.",
      tech: ["Context API", "TypeScript", "Clean Architecture"],
      color: "#56af96"
    }
  ];

  return (
    <section
      id="experience"
      ref={containerRef}
      className={`relative py-32 px-6 transition-colors duration-1000 overflow-hidden ${isDarkMode ? "bg-[#0b0612]" : "bg-[#f8fafc]"}`}
    >
      {/* --- BACKGROUND ACCENTS --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-0 left-0 w-full h-full opacity-10 ${isDarkMode ? "bg-[radial-gradient(#ae8fdb_1px,transparent_1px)]" : "bg-[radial-gradient(#467b6c_1px,transparent_1px)]"}`} style={{ backgroundSize: '40px 40px' }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* --- HEADER --- */}
        <div className="mb-24 flex flex-col items-center md:items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-4">
              <span className={`px-4 py-1 rounded-full text-[10px] font-black tracking-widest uppercase border
                                ${isDarkMode ? "text-[#6fdcbf] border-[#6fdcbf]/30 bg-[#6fdcbf]/5" : "text-[#467b6c] border-[#467b6c]/30 bg-[#467b6c]/5"}`}>
                1.0_Company_Tenure
              </span>
              <div className={`h-[1px] w-24 ${isDarkMode ? "bg-white/20" : "bg-black/10"}`} />
            </div>
            <h2 className={`text-6xl md:text-8xl font-black tracking-tighter ${isDarkMode ? "text-white" : "text-[#1a1a1a]"}`}>
              Blockchain<span className={isDarkMode ? "text-[#ae8fdb]" : "text-[#56af96]"}>Dev.</span>
            </h2>
            <p className={`text-xl mt-4 font-mono opacity-50 ${isDarkMode ? "text-white" : "text-black"}`}>
              &gt; Frontend Developer | 2024 - Present
            </p>
          </motion.div>
        </div>

        {/* --- THE PROJECT RAIL --- */}
        <div className="relative">
          {/* The Rail Line */}
          <div className="absolute left-[24px] md:left-[30px] top-0 bottom-0 w-[2px] bg-gray-500/10">
            <motion.div
              style={{ scaleY }}
              className={`w-full h-full origin-top rounded-full ${isDarkMode ? "bg-[#ae8fdb]" : "bg-[#467b6c]"}`}
            />
          </div>

          <div className="space-y-16">
            {projectMilestones.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative pl-16 md:pl-24"
              >
                {/* THE NODE */}
                <div className="absolute left-0 top-0 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center z-20">
                  <div className={`absolute inset-0 rounded-2xl rotate-45 border-2 transition-transform duration-500 group-hover:rotate-90
                                        ${isDarkMode ? "bg-[#160d1d] border-[#ae8fdb]/50" : "bg-white border-[#467b6c]/50"}`} />
                  <div className={`relative z-10 ${isDarkMode ? "text-[#6fdcbf]" : "text-[#467b6c]"}`}>
                    {project.icon}
                  </div>
                </div>

                {/* THE PROJECT CARD */}
                <div className={`p-8 rounded-[2rem] border backdrop-blur-xl transition-all duration-500 group max-w-3xl
                                    ${isDarkMode
                    ? "bg-white/5 border-white/5 hover:border-purple-500/30 shadow-2xl"
                    : "bg-white border-black/5 hover:border-teal-500/30 shadow-xl"}`}>

                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <h3 className={`text-2xl md:text-3xl font-black tracking-tight ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                      {project.title}
                    </h3>
                    <span className={`font-mono text-[10px] font-bold px-3 py-1 rounded-lg border
                                            ${isDarkMode ? "border-purple-500/30 text-purple-400" : "border-teal-500/30 text-teal-700"}`}>
                      {project.period}
                    </span>
                  </div>

                  <p className={`text-lg leading-relaxed mb-8 opacity-70 ${isDarkMode ? "text-purple-100" : "text-gray-600"}`}>
                    {project.details}
                  </p>

                  {/* TECH HUB */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest border transition-all
                                                    ${isDarkMode
                            ? "bg-white/5 border-white/10 text-white/50 group-hover:text-[#6fdcbf]"
                            : "bg-black/5 border-black/5 text-black/50 group-hover:text-[#467b6c]"}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Ghost Numbering */}
                  <div className={`absolute -bottom-4 -right-2 text-9xl font-black opacity-[0.03] pointer-events-none ${isDarkMode ? "text-white" : "text-black"}`}>
                    {index + 1}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* --- TERMINAL FOOTER --- */}
      <div className="max-w-6xl mx-auto mt-24 px-6 opacity-30">
        <div className={`h-[1px] w-full mb-8 ${isDarkMode ? "bg-white/10" : "bg-black/10"}`} />
        <div className="flex flex-col md:flex-row justify-between font-mono text-[10px] gap-4">
          <p>&gt; TOTAL_DEPLOYMENTS: 42</p>
          <p>&gt; REPOSITORY: GITHUB.COM/AVANITEJANI</p>
          <p>&gt; STATUS: CONTINUOUS_GROWTH</p>
        </div>
      </div>
    </section>
  );
};

export default Experience;