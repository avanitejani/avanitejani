


// "use client";
// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaCode, FaRocket, FaLightbulb, FaCoffee } from "react-icons/fa";
// const About = ({ isDarkMode }) => {
//     const skills = ["Next.js", "React.js", "TypeScript", "Tailwind", "Django", "Python", "API", "GSAP"];

//     // SVG Circuit Path for the background
//     const circuitPath = "M0,100 L50,100 L70,80 L120,80 L140,100 L200,100";

//     const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

//     useEffect(() => {
//         const handleMouseMove = (e) => {
//             setMousePos({
//                 x: (e.clientX / window.innerWidth - 0.5) * 15,
//                 y: (e.clientY / window.innerHeight - 0.5) * 15,
//             });
//         };
//         window.addEventListener("mousemove", handleMouseMove);
//         return () => window.removeEventListener("mousemove", handleMouseMove);
//     }, []);

//     const stats = [
//         { label: "Years Exp.", value: "5+", icon: <FaCode /> },
//         { label: "Solutions", value: "40+", icon: <FaRocket /> },
//         { label: "Cups of Coffee", value: "∞", icon: <FaCoffee /> },
//         { label: "Happy Clients", value: "100%", icon: <FaLightbulb /> },
//     ];

//     const dnaSkills = [
//         { name: "Frontend", level: "95%", color: "#6fdcbf" },
//         { name: "Backend", level: "85%", color: "#ae8fdb" },
//         { name: "Architecture", level: "90%", color: "#56af96" },
//         { name: "Animation", level: "80%", color: "#f1c40f" },
//     ];



//     return (
//         <section id="about" className={`relative py-32 px-6 overflow-hidden transition-colors duration-1000 ${isDarkMode ? "bg-[#0f0a15]" : "bg-[#f0f9f7]"}`}>

//             {/* --- 1. DYNAMIC BLUEPRINT GRID BACKGROUND --- */}
//             <div className="absolute inset-0 opacity-[0.15] pointer-events-none"
//                 style={{
//                     backgroundImage: isDarkMode
//                         ? `linear-gradient(#ae8fdb 1px, transparent 1px), linear-gradient(90deg, #ae8fdb 1px, transparent 1px)`
//                         : `linear-gradient(#467b6c 1px, transparent 1px), linear-gradient(90deg, #467b6c 1px, transparent 1px)`,
//                     backgroundSize: '40px 40px'
//                 }}
//             />

//             {/* --- 2. MOVING SVG CIRCUIT LINES --- */}
//             <div className="absolute inset-0 pointer-events-none opacity-40">
//                 {[...Array(5)].map((_, i) => (
//                     <motion.svg
//                         key={i}
//                         viewBox="0 0 200 200"
//                         className="absolute w-full h-64"
//                         style={{ top: `${i * 20}%`, left: i % 2 === 0 ? '-10%' : '10%' }}
//                     >
//                         <motion.path
//                             d={circuitPath}
//                             fill="none"
//                             stroke={isDarkMode ? "#6fdcbf" : "#467b6c"}
//                             strokeWidth="0.5"
//                             initial={{ pathLength: 0, opacity: 0 }}
//                             whileInView={{ pathLength: 1, opacity: 1 }}
//                             transition={{ duration: 3, delay: i * 0.5, repeat: Infinity, repeatDelay: 2 }}
//                         />
//                         <motion.circle
//                             r="2"
//                             fill={isDarkMode ? "#ae8fdb" : "#56af96"}
//                             animate={{ x: [0, 50, 70, 120, 140, 200], y: [100, 100, 80, 80, 100, 100] }}
//                             transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
//                         />
//                     </motion.svg>
//                 ))}
//             </div>

//             <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">

//                 {/* --- LEFT SIDE: THE TECH CONSOLE (TEXT) --- */}
//                 <motion.div
//                     initial={{ opacity: 0, x: -100 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 1 }}
//                     className={`p-8 md:p-12 rounded-3xl   `}
//                 >
//                     <div className="inline-block px-4 py-1 rounded-full border border-emerald-500/30 mb-6">
//                         <span className={`text-xs font-mono tracking-widest uppercase ${isDarkMode ? "text-[#6fdcbf]" : "text-[#467b6c]"}`}>
//                             System.Identity_Module.v2
//                         </span>
//                     </div>

//                     <h2 className={`text-5xl md:text-7xl font-black mb-8 tracking-tighter ${isDarkMode ? "text-white" : "text-[#2d2d2d]"}`}>
//                         The <span className={isDarkMode ? "text-[#ae8fdb]" : "text-[#56af96]"}>Architect.</span>
//                     </h2>

//                     <div className={`space-y-6 text-lg leading-relaxed font-medium ${isDarkMode ? "text-purple-100/70" : "text-gray-600"}`}>
//                         <p>
//                             I don&apos;t just write code. I engineer digital ecosystems.
//                             My name is <span className={`font-bold ${isDarkMode ? "text-white" : "text-black"}`}>Avani Tejani</span>,
//                             and I thrive at the intersection of logical complexity and creative elegance.
//                         </p>

//                         <p>
//                             Currently architecting scalable solutions at <span className="italic font-bold text-emerald-500">BlockchainDev</span>,
//                             where I leverage the full power of <span className="underline decoration-indigo-500">React & Next.js</span> to build
//                             high-frequency web applications.
//                         </p>

//                         <p>
//                             I specialize in bridging the gap between design and functionality. From <span className={`underline decoration-2 ${isDarkMode ? "decoration-purple-500 text-purple-200" : "decoration-[#467b6c] text-gray-800"}`}>Medical Management Systems</span> to AI-integrated dashboards, I ensure every line of code adds value to the user experience.
//                         </p>

                       
//                     </div>

//                     <div className={`space-y-6 text-lg font-medium leading-relaxed ${isDarkMode ? "text-purple-100/60" : "text-gray-600"}`}>
                       
//                         <div className="pt-4">
//                             <p className={`text-sm font-mono uppercase tracking-widest mb-4 ${isDarkMode ? "text-purple-300" : "text-gray-500"}`}>
//                                 My Core Stack:
//                             </p>
//                             <ul className="grid grid-cols-2 gap-x-4 gap-y-2 font-mono text-sm">
//                                 {skills.map((skill, i) => (
//                                     <motion.li
//                                         key={skill}
//                                         whileHover={{ x: 5 }}
//                                         className="flex items-center gap-2 transition-colors hover:text-emerald-500"
//                                     >
//                                         <span className={isDarkMode ? "text-[#6fdcbf]" : "text-[#467b6c]"}>▹</span> {skill}
//                                     </motion.li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </div>
//                 </motion.div>
                

//                 {/* --- RIGHT SIDE: LIQUID MASK SVG & ORBITING NODES --- */}
//                 <div className="relative flex justify-center items-center h-[500px]">

//                     {/* SVG Blobs behind the photo */}
//                     <motion.div
//                         animate={{
//                             rotate: 360,
//                             scale: [1, 1.1, 1]
//                         }}
//                         transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//                         className="absolute w-[350px] h-[350px] md:w-[450px] md:h-[450px]"
//                     >
//                         <svg viewBox="0 0 200 200" className={`w-full h-full opacity-30 ${isDarkMode ? "fill-purple-600" : "fill-[#94E1D4]"}`}>
//                             <path d="M45,-78.1C58.3,-71.4,69.1,-58.5,76.5,-44.2C83.9,-29.9,87.9,-14.2,86.5,1.2C85,16.6,78.1,31.7,68.9,44.7C59.6,57.7,48,68.6,34.4,75.4C20.7,82.3,5.1,85,-10,83.2C-25.1,81.3,-39.7,75,-52.1,65.6C-64.5,56.2,-74.8,43.6,-80.7,29.4C-86.7,15.2,-88.3,-0.6,-84.9,-15.1C-81.5,-29.6,-73,-42.8,-61.7,-50C-50.4,-57.2,-36.3,-58.5,-23.7,-65.7C-11,-72.9,0.3,-86.1,14.5,-87.3C28.7,-88.5,31.7,-84.8,45,-78.1Z" transform="translate(100 100)" />
//                         </svg>
//                     </motion.div>

//                     {/* THE LIQUID IMAGE CONTAINER */}
//                     <motion.div
//                         whileHover={{ scale: 1.05 }}
//                         className="relative w-64 h-64 md:w-80 md:h-80 z-20"
//                     >
//                         <div className="w-full h-full relative">
//                             {/* Animated SVG Border */}
//                             <svg className="absolute inset-0 w-full h-full animate-spin-slow">
//                                 <rect x="5" y="5" width="95%" height="95%" rx="30" fill="none"
//                                     stroke={isDarkMode ? "#6fdcbf" : "#467b6c"} strokeWidth="2" strokeDasharray="20 10" />
//                             </svg>

//                             {/* The Photo with a custom Clip Path */}
//                             <div className={`w-full h-full overflow-hidden transition-all duration-700
//                                 ${isDarkMode ? "bg-purple-900/20" : "bg-teal-100"}`}
//                                 style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }} // Organic Shape
//                             >
//                                 <img
//                                     src="/img/image.png"
//                                     alt="Avani"
//                                     className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-80"
//                                 />
//                             </div>
//                         </div>

//                         {/* Floating Status Indicator */}
//                         <div className={`absolute -top-4 -right-4 px-4 py-2 rounded-2xl shadow-2xl flex items-center gap-2 border
//                             ${isDarkMode ? "bg-[#1a0f21] border-purple-500/50" : "bg-white border-teal-500/50"}`}>
//                             <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
//                             <span className={`text-[10px] font-bold font-mono ${isDarkMode ? "text-white" : "text-black"}`}>AVAILABLE FOR HIRE</span>
//                         </div>
//                     </motion.div>

//                     {/* Orbiting SVG Nodes (Code Snippets) */}
//                     {[
//                         { label: "{JSON}", top: "10%", left: "80%" },
//                         { label: "<JSX />", top: "80%", left: "10%" },
//                         { label: "0x1BF", top: "70%", left: "90%" }
//                     ].map((node, i) => (
//                         <motion.div
//                             key={i}
//                             animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
//                             transition={{ duration: 4, repeat: Infinity, delay: i * 1.5 }}
//                             className={`absolute font-mono text-[10px] font-bold p-2 border rounded-full
//                             ${isDarkMode ? "border-purple-500/20 text-purple-400 bg-purple-900/10" : "border-teal-500/20 text-teal-600 bg-teal-50/50"}`}
//                             style={{ top: node.top, left: node.left }}
//                         >
//                             {node.label}
//                         </motion.div>
//                     ))}

//                     {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                         {stats.map((stat, i) => (
//                             <motion.div
//                                 key={i}
//                                 whileHover={{ y: -5 }}
//                                 className={`p-6 rounded-2xl border text-center transition-all
//                                     ${isDarkMode ? "bg-purple-900/10 border-purple-500/20" : "bg-teal-50 border-teal-500/20"}`}
//                             >
//                                 <div className={`text-2xl mb-2 flex justify-center ${isDarkMode ? "text-purple-400" : "text-teal-600"}`}>
//                                     {stat.icon}
//                                 </div>
//                                 <div className={`text-3xl font-black ${isDarkMode ? "text-white" : "text-gray-800"}`}>
//                                     {stat.value}
//                                 </div>
//                                 <div className="text-[10px] uppercase tracking-widest opacity-50 font-bold">
//                                     {stat.label}
//                                 </div>
//                             </motion.div>
//                         ))}
//                     </div> */}
//                 </div>

//                   {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                             {stats.map((stat, i) => (
//                                 <motion.div
//                                     key={i}
//                                     whileHover={{ y: -5 }}
//                                     className={`p-6 rounded-2xl border text-center transition-all
//                                     ${isDarkMode ? "bg-purple-900/10 border-purple-500/20" : "bg-teal-50 border-teal-500/20"}`}
//                                 >
//                                     <div className={`text-2xl mb-2 flex justify-center ${isDarkMode ? "text-purple-400" : "text-teal-600"}`}>
//                                         {stat.icon}
//                                     </div>
//                                     <div className={`text-3xl font-black ${isDarkMode ? "text-white" : "text-gray-800"}`}>
//                                         {stat.value}
//                                     </div>
//                                     <div className="text-[10px] uppercase tracking-widest opacity-50 font-bold">
//                                         {stat.label}
//                                     </div>
//                                 </motion.div>
//                             ))}
//                 </div> */}
                
//                 {/* <div className={`p-8 rounded-3xl border ${isDarkMode ? "bg-black/40 border-white/10" : "bg-gray-50 border-black/5"}`}>
//                     <h4 className="text-sm font-bold uppercase tracking-widest mb-6 opacity-60">Technical DNA</h4>
//                     <div className="space-y-5">
//                         {dnaSkills.map((skill, i) => (
//                             <div key={i}>
//                                 <div className="flex justify-between text-xs font-mono mb-2">
//                                     <span>{skill.name}</span>
//                                     <span>{skill.level}</span>
//                                 </div>
//                                 <div className="h-[2px] w-full bg-gray-500/20 rounded-full overflow-hidden">
//                                     <motion.div
//                                         initial={{ width: 0 }}
//                                         whileInView={{ width: skill.level }}
//                                         transition={{ duration: 1.5, delay: i * 0.2 }}
//                                         className="h-full"
//                                         style={{ backgroundColor: skill.color }}
//                                     />
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div> */}


            
//             </div>

//             {/* --- FOOTER: TERMINAL QUOTE --- */}
//             {/* <motion.div
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 className="mt-20 border-t border-gray-500/20 pt-10 flex flex-col md:flex-row justify-between items-center gap-6"
//             >
//                 <div className="font-mono text-xs opacity-40">
//                     &gt; status: looking_for_challenges <br />
//                     &gt; location: ahmedabad_india
//                 </div>
//                 <div className={`text-center font-serif italic text-2xl max-w-md ${isDarkMode ? "text-purple-200" : "text-teal-900"}`}>
//                     "Great architecture is not about building the biggest wall, but the smartest bridge."
//                 </div>
//             </motion.div> */}

//             <style jsx>{`
//                 .animate-spin-slow {
//                     animation: spin 30s linear infinite;
//                 }
//                 @keyframes spin {
//                     from { transform: rotate(0deg); }
//                     to { transform: rotate(360deg); }
//                 }
//             `}</style>
//         </section>
//     );
// };

// export default About;






"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCode, FaRocket, FaLightbulb, FaCoffee } from "react-icons/fa";
import { useTheme } from "../../../../ThemeContext";
// import { useTheme } from "@/context/ThemeContext"; // Global Theme Hook import kiya

const About = () => { // Prop se isDarkMode hata diya kyunki ab context use ho raha hai

    // Global Theme Connection
    const { isDarkMode } = useTheme();

    const skills = ["Next.js", "React.js", "TypeScript", "Tailwind", "Django", "Python", "API", "GSAP"];

    // SVG Circuit Path for the background
    const circuitPath = "M0,100 L50,100 L70,80 L120,80 L140,100 L200,100";

    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({
                x: (e.clientX / window.innerWidth - 0.5) * 15,
                y: (e.clientY / window.innerHeight - 0.5) * 15,
            });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const stats = [
        { label: "Years Exp.", value: "5+", icon: <FaCode /> },
        { label: "Solutions", value: "40+", icon: <FaRocket /> },
        { label: "Cups of Coffee", value: "∞", icon: <FaCoffee /> },
        { label: "Happy Clients", value: "100%", icon: <FaLightbulb /> },
    ];

    const dnaSkills = [
        { name: "Frontend", level: "95%", color: "#6fdcbf" },
        { name: "Backend", level: "85%", color: "#ae8fdb" },
        { name: "Architecture", level: "90%", color: "#56af96" },
        { name: "Animation", level: "80%", color: "#f1c40f" },
    ];



    return (
        <section id="about" className={`relative py-32 px-6 overflow-hidden transition-colors duration-1000 ${isDarkMode ? "bg-[#0f0a15]" : "bg-[#f0f9f7]"}`}>

            {/* --- 1. DYNAMIC BLUEPRINT GRID BACKGROUND --- */}
            <div className="absolute inset-0 opacity-[0.15] pointer-events-none"
                style={{
                    backgroundImage: isDarkMode
                        ? `linear-gradient(#ae8fdb 1px, transparent 1px), linear-gradient(90deg, #ae8fdb 1px, transparent 1px)`
                        : `linear-gradient(#467b6c 1px, transparent 1px), linear-gradient(90deg, #467b6c 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            {/* --- 2. MOVING SVG CIRCUIT LINES --- */}
            <div className="absolute inset-0 pointer-events-none opacity-40">
                {[...Array(5)].map((_, i) => (
                    <motion.svg
                        key={i}
                        viewBox="0 0 200 200"
                        className="absolute w-full h-64"
                        style={{ top: `${i * 20}%`, left: i % 2 === 0 ? '-10%' : '10%' }}
                    >
                        <motion.path
                            d={circuitPath}
                            fill="none"
                            stroke={isDarkMode ? "#6fdcbf" : "#467b6c"}
                            strokeWidth="0.5"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 3, delay: i * 0.5, repeat: Infinity, repeatDelay: 2 }}
                        />
                        <motion.circle
                            r="2"
                            fill={isDarkMode ? "#ae8fdb" : "#56af96"}
                            animate={{ x: [0, 50, 70, 120, 140, 200], y: [100, 100, 80, 80, 100, 100] }}
                            transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                        />
                    </motion.svg>
                ))}
            </div>

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-3 items-center relative z-10">

                {/* --- LEFT SIDE: THE TECH CONSOLE (TEXT) --- */}
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className={`p-8 md:p-12 rounded-3xl   `}
                >
                    <div className="inline-block px-4 py-1 rounded-full border border-emerald-500/30 mb-6">
                        <span className={`text-xs font-mono tracking-widest uppercase ${isDarkMode ? "text-[#6fdcbf]" : "text-[#467b6c]"}`}>
                            System.Identity_Module.v2
                        </span>
                    </div>

                    <h2 className={`text-5xl md:text-7xl font-black mb-8 tracking-tighter ${isDarkMode ? "text-white" : "text-[#2d2d2d]"}`}>
                        The <span className={isDarkMode ? "text-[#ae8fdb]" : "text-[#56af96]"}>Architect.</span>
                    </h2>

                    <div className={`text-justify space-y-6 text-lg leading-relaxed font-medium ${isDarkMode ? "text-purple-100/70" : "text-gray-600"}`}>
                        <p>
                            I don&apos;t just write code. I engineer digital ecosystems.
                            My name is <span className={`font-bold ${isDarkMode ? "text-white" : "text-black"}`}>Avani Tejani</span>,
                            and I thrive at the intersection of logical complexity and creative elegance.
                        </p>

                        <p>
                            Currently architecting scalable solutions at <span className={`italic font-bold ${isDarkMode ? "text-[#ae8fdb]" : "text-[#56af96]"} `}>BlockchainDev</span>,
                            where I leverage the full power of <span className={`underline decoration-2 ${isDarkMode ? "decoration-purple-500 text-purple-200" : "decoration-[#467b6c] text-gray-800"}`}>React & Next.js</span> to build
                            high-frequency web applications.
                        </p>

                        <p>
                            I specialize in bridging the gap between design and functionality. From <span className={`underline decoration-2 ${isDarkMode ? "decoration-purple-500 text-purple-200" : "decoration-[#467b6c] text-gray-800"}`}>Medical Management Systems</span> to AI-integrated dashboards, I ensure every line of code adds value to the user experience.
                        </p>


                    </div>

                    <div className={`space-y-6 text-lg font-medium leading-relaxed ${isDarkMode ? "text-purple-100/60" : "text-gray-600"}`}>

                        <div className="pt-4">
                            <p className={`text-sm font-mono uppercase tracking-widest mb-4 ${isDarkMode ? "text-purple-300" : "text-gray-500"}`}>
                                My Core Stack:
                            </p>
                            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 font-mono text-sm">
                                {skills.map((skill, i) => (
                                    <motion.li
                                        key={skill}
                                        whileHover={{ x: 5 }}
                                        className="flex items-center gap-2 transition-colors hover:text-emerald-500"
                                    >
                                        <span className={isDarkMode ? "text-[#6fdcbf]" : "text-[#467b6c]"}>▹</span> {skill}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.div>


                {/* --- RIGHT SIDE: LIQUID MASK SVG & ORBITING NODES --- */}
                <div className="relative flex justify-center items-center h-[500px]">

                    {/* SVG Blobs behind the photo */}
                    <motion.div
                        animate={{
                            rotate: 360,
                            scale: [1, 1.1, 1]
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute w-[350px] h-[350px] md:w-[450px] md:h-[450px]"
                    >
                        <svg viewBox="0 0 200 200" className={`w-full h-full opacity-30 ${isDarkMode ? "fill-purple-600" : "fill-[#94E1D4]"}`}>
                            <path d="M45,-78.1C58.3,-71.4,69.1,-58.5,76.5,-44.2C83.9,-29.9,87.9,-14.2,86.5,1.2C85,16.6,78.1,31.7,68.9,44.7C59.6,57.7,48,68.6,34.4,75.4C20.7,82.3,5.1,85,-10,83.2C-25.1,81.3,-39.7,75,-52.1,65.6C-64.5,56.2,-74.8,43.6,-80.7,29.4C-86.7,15.2,-88.3,-0.6,-84.9,-15.1C-81.5,-29.6,-73,-42.8,-61.7,-50C-50.4,-57.2,-36.3,-58.5,-23.7,-65.7C-11,-72.9,0.3,-86.1,14.5,-87.3C28.7,-88.5,31.7,-84.8,45,-78.1Z" transform="translate(100 100)" />
                        </svg>
                    </motion.div>

                    {/* THE LIQUID IMAGE CONTAINER */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="relative w-64 h-64 md:w-80 md:h-80 z-20"
                    >
                        <div className="w-full h-full relative">
                            {/* Animated SVG Border */}
                            <svg className="absolute inset-0 w-full h-full animate-spin-slow">
                                <rect x="5" y="5" width="95%" height="95%" rx="30" fill="none"
                                    stroke={isDarkMode ? "#6fdcbf" : "#467b6c"} strokeWidth="2" strokeDasharray="20 10" />
                            </svg>

                            {/* The Photo with a custom Clip Path */}
                            <div className={`w-full h-full overflow-hidden transition-all duration-700
                                ${isDarkMode ? "bg-purple-900/20" : "bg-teal-100"}`}
                                style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }} // Organic Shape
                            >
                                <img
                                    src="/img/image.png"
                                    alt="Avani"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-80"
                                />
                            </div>
                        </div>

                        {/* Floating Status Indicator */}
                        <div className={`absolute -top-4 -right-4 px-4 py-2 rounded-2xl shadow-2xl flex items-center gap-2 border
                            ${isDarkMode ? "bg-[#1a0f21] border-purple-500/50" : "bg-white border-teal-500/50"}`}>
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className={`text-[10px] font-bold font-mono ${isDarkMode ? "text-white" : "text-black"}`}>AVAILABLE FOR HIRE</span>
                        </div>
                    </motion.div>

                    {/* Orbiting SVG Nodes (Code Snippets) */}
                    {[
                        { label: "{JSON}", top: "10%", left: "80%" },
                        { label: "<JSX />", top: "80%", left: "10%" },
                        { label: "0x1BF", top: "70%", left: "90%" }
                    ].map((node, i) => (
                        <motion.div
                            key={i}
                            animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
                            transition={{ duration: 4, repeat: Infinity, delay: i * 1.5 }}
                            className={`absolute font-mono text-[10px] font-bold p-2 border rounded-full
                            ${isDarkMode ? "border-purple-500/20 text-purple-400 bg-purple-900/10" : "border-teal-500/20 text-teal-600 bg-teal-50/50"}`}
                            style={{ top: node.top, left: node.left }}
                        >
                            {node.label}
                        </motion.div>
                    ))}

                    {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className={`p-6 rounded-2xl border text-center transition-all
                                    ${isDarkMode ? "bg-purple-900/10 border-purple-500/20" : "bg-teal-50 border-teal-500/20"}`}
                            >
                                <div className={`text-2xl mb-2 flex justify-center ${isDarkMode ? "text-purple-400" : "text-teal-600"}`}>
                                    {stat.icon}
                                </div>
                                <div className={`text-3xl font-black ${isDarkMode ? "text-white" : "text-gray-800"}`}>
                                    {stat.value}
                                </div>
                                <div className="text-[10px] uppercase tracking-widest opacity-50 font-bold">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div> */}
                </div>

                {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -5 }}
                                    className={`p-6 rounded-2xl border text-center transition-all
                                    ${isDarkMode ? "bg-purple-900/10 border-purple-500/20" : "bg-teal-50 border-teal-500/20"}`}
                                >
                                    <div className={`text-2xl mb-2 flex justify-center ${isDarkMode ? "text-purple-400" : "text-teal-600"}`}>
                                        {stat.icon}
                                    </div>
                                    <div className={`text-3xl font-black ${isDarkMode ? "text-white" : "text-gray-800"}`}>
                                        {stat.value}
                                    </div>
                                    <div className="text-[10px] uppercase tracking-widest opacity-50 font-bold">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                </div> */}

                {/* <div className={`p-8 rounded-3xl border ${isDarkMode ? "bg-black/40 border-white/10" : "bg-gray-50 border-black/5"}`}>
                    <h4 className="text-sm font-bold uppercase tracking-widest mb-6 opacity-60">Technical DNA</h4>
                    <div className="space-y-5">
                        {dnaSkills.map((skill, i) => (
                            <div key={i}>
                                <div className="flex justify-between text-xs font-mono mb-2">
                                    <span>{skill.name}</span>
                                    <span>{skill.level}</span>
                                </div>
                                <div className="h-[2px] w-full bg-gray-500/20 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: skill.level }}
                                        transition={{ duration: 1.5, delay: i * 0.2 }}
                                        className="h-full"
                                        style={{ backgroundColor: skill.color }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div> */}



            </div>

            {/* --- FOOTER: TERMINAL QUOTE --- */}
            {/* <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="mt-20 border-t border-gray-500/20 pt-10 flex flex-col md:flex-row justify-between items-center gap-6"
            >
                <div className="font-mono text-xs opacity-40">
                    &gt; status: looking_for_challenges <br />
                    &gt; location: ahmedabad_india
                </div>
                <div className={`text-center font-serif italic text-2xl max-w-md ${isDarkMode ? "text-purple-200" : "text-teal-900"}`}>
                    "Great architecture is not about building the biggest wall, but the smartest bridge."
                </div>
            </motion.div> */}

            <style jsx>{`
                .animate-spin-slow {
                    animation: spin 30s linear infinite;
                }
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </section>
    );
};

export default About;