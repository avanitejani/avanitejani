








// "use client";

// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { useTheme } from "../../../../ThemeContext";
// // import { useTheme } from "@/context/ThemeContext"; // Global Theme Hook import kiya

// const Contact = () => {
//     // Global Theme Connection
//     const { isDarkMode } = useTheme();

//     const svgRef = useRef(null);
//     const dizzyIsPlaying = useRef(false);

//     useEffect(() => {
//         const dom = {
//             me: svgRef.current.querySelector(".me"),
//             head: svgRef.current.querySelector(".head"), // Pura head group
//             face: svgRef.current.querySelector(".face"),
//             neck: svgRef.current.querySelector(".neck"), // Neck to bridge the gap
//             eyes: svgRef.current.querySelector(".eyes"),
//             eyeMain: svgRef.current.querySelectorAll(".eye-left, .eye-right"),
//             eyeBlink: svgRef.current.querySelectorAll(".eye-left-2, .eye-right-2"),
//             innerFace: svgRef.current.querySelector(".inner-face"),
//             hairFront: svgRef.current.querySelector(".hair-front"),
//             hairBack: svgRef.current.querySelector(".hair-back"),
//             shadows: svgRef.current.querySelectorAll(".shadow"),
//             ears: svgRef.current.querySelectorAll(".ear"),
//             eyebrows: svgRef.current.querySelectorAll(".eyebrow-left, .eyebrow-right"),
//             mouth: svgRef.current.querySelector(".mouth"),
//             oh: svgRef.current.querySelector(".oh"),
//             dizzy: svgRef.current.querySelectorAll(".dizzy"),
//             glasses: svgRef.current.querySelector(".glasses"),
//         };

//         gsap.set(".bg", { transformOrigin: "50% 50%" });
//         gsap.set(dom.ears[0], { transformOrigin: "100% 50%" });
//         gsap.set(dom.ears[1], { transformOrigin: "0% 50%" });
//         gsap.set(dom.me, { opacity: 1 });

//         const introTl = gsap.timeline({
//             delay: 0.5,
//             onComplete: () => {
//                 window.addEventListener("mousemove", handleMouseMove);
//                 blinkTl.play();
//             }
//         });

//         introTl
//             .from(dom.me, { duration: 1, yPercent: 100, ease: "elastic.out(0.5, 0.4)" })
//             .from([dom.head, dom.hairBack, ...dom.shadows], { duration: 0.9, yPercent: 10, ease: "elastic.out(0.58, 0.25)" }, 0.1);

//         const blinkTl = gsap.timeline({ repeat: -1, repeatDelay: 5, paused: true });
//         blinkTl
//             .to(dom.eyeMain, { duration: 0.01, opacity: 0 }, 0)
//             .to(dom.eyeBlink, { duration: 0.01, opacity: 1 }, 0)
//             .to(dom.eyeMain, { duration: 0.01, opacity: 1 }, 0.15)
//             .to(dom.eyeBlink, { duration: 0.01, opacity: 0 }, 0.15);

//         let mouseX = 0, mouseY = 0;
//         const handleMouseMove = (e) => {
//             if (dizzyIsPlaying.current) return;

//             mouseX = (e.clientX / window.innerWidth) - 0.5;
//             mouseY = (e.clientY / window.innerHeight) - 0.5;


//             gsap.to(dom.head, { duration: 0.6, x: mouseX * 10, y: mouseY * 5, ease: "power2.out" });

//             gsap.to(dom.neck, { duration: 0.1, x: mouseX * 0, ease: "power2.out" });

//             gsap.to(dom.innerFace, { duration: 0.5, x: mouseX * 8, y: mouseY * 4, ease: "power2.out" });

//             gsap.to(dom.ears, { duration: 0.5, x: -mouseX * 3, y: -mouseY * 2, ease: "power2.out" });

//             gsap.to(dom.hairFront, { duration: 0.7, x: mouseX * 3, y: mouseY * 2, ease: "power2.out" });
//             gsap.to([dom.hairBack, ...dom.shadows], { duration: 0.6, x: -mouseX * 5, y: -mouseY * 3, ease: "power2.out" });

//             gsap.to(dom.eyeMain, { duration: 0.6, x: mouseX * 2, y: mouseY * 4, ease: "power2.out" });
//             gsap.to(dom.eyebrows, { duration: 0.4, y: mouseY * 8, ease: "power2.out" });
//         };

//         return () => {
//             window.removeEventListener("mousemove", handleMouseMove);
//             introTl.kill();
//             blinkTl.kill();
//         };
//     }, []);

//     return (
//         <div id="contact" className={`min-h-screen transition-colors duration-1000 flex items-center justify-center p-6 font-sans overflow-hidden ${isDarkMode ? "bg-[#1a0f21]" : "bg-[#94E1D4]"}`}>
//             <div className={`w-full max-w-6xl h-[580px] relative flex shadow-sm rounded-sm overflow-visible transition-colors duration-1000 ${isDarkMode ? "bg-[#2d1b36]" : "bg-white"}`}>

//                 {/* Left Side Content */}
//                 <div className="flex-[1.2] p-20 z-20 flex flex-col justify-start select-none">
//                     <h2 className={`text-[2.6rem] font-bold mb-8 leading-tight transition-colors duration-1000 ${isDarkMode ? "text-white" : "text-[#333]"}`}>I’m always up for a chat.</h2>
//                     <div className="space-y-4 mb-10">
//                         <p className={`text-[1.3rem] transition-colors duration-1000 ${isDarkMode ? "text-purple-100/70" : "text-[#333]"}`}>
//                             <span className={`font-bold border-b-[5px] pb-1 cursor-pointer hover:opacity-70 transition-all duration-1000 ${isDarkMode ? "border-purple-500" : "border-[#94E1D4]"}`}>Pop me an email</span> at hi@avani.codes
//                         </p>
//                     </div>
//                     <div className="absolute bottom-[-30px] left-16">
//                         <h1 className={`text-[9.5rem] font-black leading-none tracking-tighter transition-colors duration-1000 ${isDarkMode ? "text-white/10" : "text-[#333]"}`}>Hey there!</h1>
//                     </div>
//                 </div>

//                 {/* Right Side Animation */}
//                 <div className="flex-1 relative flex items-center justify-center overflow-visible">
//                     <div className={`absolute w-[460px] h-[360px] transition-all duration-1000 blur-3xl opacity-40 ${isDarkMode ? "bg-purple-600" : "bg-[#94E1D4]"}`}
//                         style={{ borderRadius: "40% 60% 70% 30% / 40% 50% 60% 70%" }}>
//                     </div>

//                     <svg ref={svgRef} viewBox="0 10 211.73 180" className="w-[450px] h-full z-10 overflow-visible drop-shadow-2xl">
//                         <defs>
//                             <clipPath id="background-clip">
//                                 <path d="M39 153.73s31.57 19.71 77.26 15.21 90.18-37.23 90.36-72.33-8.82-80.28-33.59-86.29C136.84-6.57 114.13-5.82 88-2.82S34.73 11.45 16.71 48.24C-1.5 66.64-4.88 125.2 39 153.73z" fill="none" />
//                             </clipPath>

//                             {/* Dark Espresso Hair Gradient */}
//                             <linearGradient id="hair-shared-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
//                                 <stop offset="0%" stopColor="#413129" />
//                                 <stop offset="100%" stopColor="#221814" />
//                             </linearGradient>

//                             {/* Soft Blush Radial Gradient */}
//                             <radialGradient id="blush-gradient">
//                                 <stop offset="0%" stopColor="#f4a7a7" stopOpacity="0.6" />
//                                 <stop offset="100%" stopColor="#f4a7a7" stopOpacity="0" />
//                             </radialGradient>
//                         </defs>

//                         <path className="bg transition-all duration-1000" d="M39 153.73s31.57 19.71 77.26 15.21 90.18-37.23 90.36-72.33-10.51-57-35.28-63-50.22 17-76.31 20-60.12-15.88-78.32 2.51S-4.88 125.2 39 153.73z" fill={isDarkMode ? "#ae8fdb" : "#6FDCC1"} />

//                         <g clipPath="url(#background-clip)">
//                             <g className="me" opacity="0">
//                                 <g className="body">
//                                     <path className="shadow" d="M129.86,48.47s6.76,4.91,10,12.07,7,29.06,11.71,39.82,9.06,22.5,9.91,26.42,1.57,5-2.52,10.2-14.63,12-14.63,12l-11.47,6.8s14.87,9.67,17.68,19.32a71.16,71.16,0,0,1,4.34,18.79l-21.39,4.54L113.2,164.85l-13-11.1L90.31,75.37Z" opacity="0.09" />
//                                     <path className="shadow" d="M69.44,54A23.64,23.64,0,0,0,58.91,64.27c-4.39,7.87-4.1,30.52-7.61,41.23S40.76,124.26,41.93,135s2.64,12.27,2.64,12.27a66.65,66.65,0,0,1,14.93,1.88c7,1.89,18.42,5.48,18.42,5.48S63.6,166.53,61.84,176a67.23,67.23,0,0,0-2.34,18.26l20.89,1.9,16.19-34,11.42-12L109.91,75Z" opacity="0.09" />
//                                     <path className="hair-back" d="M127.63,45.17c2.65,1.35,11.15,4.2,16.07,23.12,2.88,20.58,3.79,26.07,4.68,30.6s1.2,11.6,6.3,21.15.85,14.65.85,14.65l-7.63,7.08s3.45-12.65-2.63-18.13c0,0,2,14,0,17s-8.75,6.92-8.75,6.92-2.48-4.53-5.06-9.64,2.78,11,.08,12.09-18.82,6.25-30.6,3.86-21.53-5-24-5.79c0,0,2.75-1.37.77-7.62s-1-7.59-1.52-7-2.1,3-1,7.49a7.45,7.45,0,0,1-1.92,7.18s-7.11-4.65-12.77-5.21A51.35,51.35,0,0,1,51,141.14s-5-11.43-.4-23.56S58,104.1,58.32,88.87s2.41-34.66,20.41-45S116.87,35.4,127.63,45.17Z" fill="url(#hair-shared-gradient)" />
//                                     <path className="neck" d="M114.26 143.16v-14a9.22 9.22 0 10-18.43 0v14c-15.27 2.84-24.74 15.08-24.74 27.33H139c0-12.24-9.5-24.49-24.74-27.33z" fill="#ede3d1" />
//                                     <path className="top" d="M105.61 167c-30.17 0-25.36-40-25.36 15.84h25.35l25-2.14c-.05-55.79 5.17-13.7-24.99-13.7z" fill="#fff" stroke="#404040" strokeWidth=".5" />
//                                     <path className="shoulder" d="M95.82 142.87c-16 1.84-29.37 19.5-29.37 40h29.37z" fill="#404040" />
//                                     <path className="shoulder" d="M114.23 142.67c15.76 1.85 29 19.6 29 40.2h-29z" fill="#404040" />
//                                 </g>

//                                 <g className="head">
//                                     <ellipse cx="104.76" cy="128" rx="14" ry="7" fill="#000" opacity="0.08" />
//                                     <g className="ear-left ear"><path d="M63.52 105.14A8.21 8.21 0 0072 113.2a8.36 8.36 0 008.51-8.1A8.21 8.21 0 0072 97a8.36 8.36 0 00-8.48 8.14z" fill="#ede3d1" /></g>
//                                     <g className="ear-right ear"><path d="M144.37 105.24a8.2 8.2 0 01-8.37 8.06 8.35 8.35 0 01-8.51-8.1 8.21 8.21 0 018.42-8.06 8.35 8.35 0 018.46 8.1z" fill="#ede3d1" /></g>

//                                     <g className="face">
//                                         <rect x="73.99" y="48.26" width="61.54" height="80.49" rx="26.08" transform="rotate(180 104.76 88.5)" fill="#ede3d1" />
//                                         <g className="inner-face">
//                                             <circle cx="91" cy="98" r="6" fill="url(#blush-gradient)" />
//                                             <circle cx="119" cy="98" r="6" fill="url(#blush-gradient)" />

//                                             <path className="eyebrow-right" d="M120.73 79a9 9 0 00-4-1.22 9.8 9.8 0 00-4.19.87" fill="none" stroke="#b5aa9a" strokeWidth="1" />
//                                             <path className="eyebrow-left" d="M97.12 79.41a9.53 9.53 0 00-4-1.11 10.58 10.58 0 00-4.2.76" fill="none" stroke="#b5aa9a" strokeWidth="1" />
//                                             <path className="mouth" d="M97 107.52s7.06 4.62 14 1.59" fill="none" stroke="#b5aa9a" strokeWidth="1" />
//                                             {/* <path
//                                                 className="chin-dimple"
//                                                 d="M100.5 123 Q102.5 127.5 104.76 125.5 Q107 127.5 109 123"
//                                                 fill="none"
//                                                 stroke="#7a6d61"
//                                                 strokeWidth="0.7"
//                                                 strokeLinecap="round"
//                                                 opacity="0.15"
//                                             /> */}
//                                             <path
//                                                 d="M98 122 Q102 129 104.76 126 Q108 129 112 122"
//                                                 fill="none"
//                                                 stroke="#7a6d61"
//                                                 strokeWidth="0.7"
//                                                 strokeLinecap="round"
//                                                 opacity="0.15"
//                                             />

//                                             <g className="eyes">
//                                                 <path className="eye-left" d="M89.48 87.37c-.07 2.08 1.25 3.8 2.94 3.85s3.1-1.59 3.16-3.67-1.25-3.8-2.94-3.85-3.1 1.59-3.16 3.67z" fill="#2b343b" />
//                                                 <path className="eye-right" d="M113.67 87.37c-.07 2.08 1.25 3.8 2.94 3.85s3.1-1.59 3.16-3.67-1.25-3.8-2.94-3.85-3.1 1.59-3.16 3.67z" fill="#2b343b" />
//                                                 <path className="eye-right-2" d="M114.11 88a5.72 5.72 0 002.48.72 6.46 6.46 0 002.59-.45" opacity="0" fill="none" stroke="#282828" strokeWidth="1" />
//                                                 <path className="eye-left-2" d="M89.85 88a5.77 5.77 0 002.56.3 6.48 6.48 0 002.49-.87" fill="none" opacity="0" stroke="#282828" strokeWidth="1" />
//                                             </g>
//                                             <path className="glasses" d="M133.54 81.76c-4.7-1.42-15.29-2.42-19.83-.45-5.82 2.17-3.18 1.57-8.55 1.17-5.36.4-2.74 1-8.55-1.18-7.3-2.55-15.58-.24-22.25.72v2.75c2.46.24 1.26 6.78 3.06 10.32 2.13 7.23 12.69 9.55 18.19 5.49 3.9-2 7.08-10.32 7.21-12.86 0-1.64 4.15-2.57 4.61.24.11 2.53 3.42 10.69 7.28 12.62 5.5 4 16 1.74 18.17-5.49 1.8-3.54 1.69-9.92 2.88-10.32s.74-2.67 0-2.75-1.02-.1-2.22-.26zM97.25 97.49C90.94 104.81 79 101.2 78 92.3c-.7-2.62-1-7.3 1.27-9.12s6.88-1.87 9.23-2c11.14-.26 16.62 5.6 8.75 16.31zm35.12-5.19c-3.71 17.2-27.26 7.42-22.09-7.36 1.87-3.11 9.09-3.84 11.55-3.73 8.07-.04 12.7 1.79 10.54 11.09z" fill="#c6c6c6" opacity=".48" />
//                                         </g>

//                                         <path className="hair-front" d="M134.1,57.61C129.22,51.79,118,45,115.33,44.84s-13-1.87-20.65,0-16,4.51-18.77,8.26-6.17,18-4.77,24.41c0,0,3-3.09,10.46-5.73h0s.74-6.33,1.45-7.18a32.29,32.29,0,0,0-.1,6.73,59.67,59.67,0,0,1,8.22-2,37,37,0,0,1,.25-8.11,67.11,67.11,0,0,0,.54,8c2-.32,4.18-.59,6.52-.78h0s.18-2.82.61-5.5c0,0,.28,3.33.6,5.42,1.78-.12,3.64-.19,5.62-.21a76.76,76.76,0,0,1,9.11.45c-.05-2.15,0-6.82-.22-7.36s1.07,2.06,1.54,7.52a51.14,51.14,0,0,1,8.84,1.92c.23-2.37.41-5.93-.3-7.88,0,0,2.1,5,1.9,8.42h0c8.36,3,11.06,7.25,11.06,7.25S139,63.43,134.1,57.61Z" fill="url(#hair-shared-gradient)" />
//                                     </g>


//                                 </g>
//                             </g>
//                         </g>
//                     </svg>
//                 </div>


//             </div>
//         </div>
//     );
// };

// export default Contact;

"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useTheme } from "../../../../ThemeContext";
// import { SlSocialFacebook, SlSocialInstagram, SlSocialLinkedin, SlSocialTwitter } from "react-icons/sl";
import { motion } from "framer-motion";

import { SlSocialFacebook, SlSocialGithub, SlSocialInstagram, SlSocialLinkedin, SlSocialTwitter } from "react-icons/sl";
import Link from "next/link";
const SocialLink = ({ href, icon, index, isDarkMode }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        whileHover={{ y: -5 }}
    >
        <Link
            href={href}
            target="_blank"
            className={`
                flex items-center justify-center w-12 h-12 rounded-xl border-2 transition-all duration-300
                ${isDarkMode
                    ? "bg-purple-900/10 border-purple-500/20 text-purple-400 hover:bg-purple-500 hover:text-white hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                    : "bg-white border-gray-200 text-gray-600 hover:bg-[#56af96] hover:text-white hover:border-[#56af96] hover:shadow-[0_10px_20px_rgba(86,175,150,0.2)]"}
            `}
        >
            <span className="text-xl">{icon}</span>
        </Link>
    </motion.div>
);


const Contact = () => {
    const { isDarkMode } = useTheme();
    const svgRef = useRef(null);
    const dizzyIsPlaying = useRef(false);

    useEffect(() => {
        const dom = {
            me: svgRef.current.querySelector(".me"),
            head: svgRef.current.querySelector(".head"),
            face: svgRef.current.querySelector(".face"),
            neck: svgRef.current.querySelector(".neck"),
            eyes: svgRef.current.querySelector(".eyes"),
            eyeMain: svgRef.current.querySelectorAll(".eye-left, .eye-right"),
            eyeBlink: svgRef.current.querySelectorAll(".eye-left-2, .eye-right-2"),
            innerFace: svgRef.current.querySelector(".inner-face"),
            hairFront: svgRef.current.querySelector(".hair-front"),
            hairBack: svgRef.current.querySelector(".hair-back"),
            shadows: svgRef.current.querySelectorAll(".shadow"),
            ears: svgRef.current.querySelectorAll(".ear"),
            eyebrows: svgRef.current.querySelectorAll(".eyebrow-left, .eyebrow-right"),
            mouth: svgRef.current.querySelector(".mouth"),
            oh: svgRef.current.querySelector(".oh"),
            dizzy: svgRef.current.querySelectorAll(".dizzy"),
            glasses: svgRef.current.querySelector(".glasses"),
        };

        gsap.set(".bg", { transformOrigin: "50% 50%" });
        gsap.set(dom.ears[0], { transformOrigin: "100% 50%" });
        gsap.set(dom.ears[1], { transformOrigin: "0% 50%" });
        gsap.set(dom.me, { opacity: 1 });

        const introTl = gsap.timeline({
            delay: 0.5,
            onComplete: () => {
                window.addEventListener("mousemove", handleMouseMove);
                blinkTl.play();
            }
        });

        introTl
            .from(dom.me, { duration: 1, yPercent: 100, ease: "elastic.out(0.5, 0.4)" })
            .from([dom.head, dom.hairBack, ...dom.shadows], { duration: 0.9, yPercent: 10, ease: "elastic.out(0.58, 0.25)" }, 0.1);

        const blinkTl = gsap.timeline({ repeat: -1, repeatDelay: 5, paused: true });
        blinkTl
            .to(dom.eyeMain, { duration: 0.01, opacity: 0 }, 0)
            .to(dom.eyeBlink, { duration: 0.01, opacity: 1 }, 0)
            .to(dom.eyeMain, { duration: 0.01, opacity: 1 }, 0.15)
            .to(dom.eyeBlink, { duration: 0.01, opacity: 0 }, 0.15);

        let mouseX = 0, mouseY = 0;
        const handleMouseMove = (e) => {
            if (dizzyIsPlaying.current) return;
            mouseX = (e.clientX / window.innerWidth) - 0.5;
            mouseY = (e.clientY / window.innerHeight) - 0.5;

            gsap.to(dom.head, { duration: 0.6, x: mouseX * 10, y: mouseY * 5, ease: "power2.out" });
            gsap.to(dom.neck, { duration: 0.1, x: mouseX * 0, ease: "power2.out" });
            gsap.to(dom.innerFace, { duration: 0.5, x: mouseX * 8, y: mouseY * 4, ease: "power2.out" });
            gsap.to(dom.ears, { duration: 0.5, x: -mouseX * 3, y: -mouseY * 2, ease: "power2.out" });
            gsap.to(dom.hairFront, { duration: 0.7, x: mouseX * 3, y: mouseY * 2, ease: "power2.out" });
            gsap.to([dom.hairBack, ...dom.shadows], { duration: 0.6, x: -mouseX * 5, y: -mouseY * 3, ease: "power2.out" });
            gsap.to(dom.eyeMain, { duration: 0.6, x: mouseX * 2, y: mouseY * 4, ease: "power2.out" });
            gsap.to(dom.eyebrows, { duration: 0.4, y: mouseY * 8, ease: "power2.out" });
        };

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            introTl.kill();
            blinkTl.kill();
        };
    }, []);

    return (
        <div id="contact" className={`min-h-screen transition-colors duration-1000 flex items-center justify-center p-4 md:p-6 font-sans overflow-hidden ${isDarkMode ? "bg-[#1a0f21]" : "bg-[#94E1D4]"}`}>
            {/* Main Card: flex-col on mobile, flex-row on desktop. h-auto on mobile, fixed h on desktop */}
            <div className={`w-full max-w-6xl min-h-[600px] lg:h-[580px] relative flex flex-col lg:flex-row shadow-sm rounded-sm overflow-visible transition-colors duration-1000 ${isDarkMode ? "bg-[#2d1b36]" : "bg-white"}`}>

                {/* Left Side Content: Center text on mobile, Left align on desktop */}
                <div className="flex-[1.2] p-8 md:p-12 lg:p-20 z-20 flex flex-col justify-center lg:justify-start select-none">
                    <h2 className={`text-3xl md:text-[2.6rem] font-bold mb-6 md:mb-8 leading-tight transition-colors duration-1000 ${isDarkMode ? "text-white" : "text-[#333]"}`}>
                        I’m always up for a chat.
                    </h2>
                    <div className="space-y-4 mb-6 md:mb-10">
                        <p className={`text-lg md:text-[1.3rem] transition-colors duration-1000 ${isDarkMode ? "text-purple-100/70" : "text-[#333]"}`}>
                            <span className={`font-bold border-b-[4px] md:border-b-[5px] pb-1 cursor-pointer hover:opacity-70 transition-all duration-1000 ${isDarkMode ? "border-purple-500" : "border-[#94E1D4]"}`}>Pop me an email</span> at hi@avani.codes
                            <br />
                            <br />
                            <span>or give me a shout on social media.</span>
                        </p>
                        {/* <div className="flex gap-5">
                            <span><SlSocialLinkedin /></span>
                            <span><SlSocialInstagram /></span>
                            <span><SlSocialFacebook /></span>
                            <span><SlSocialGithub /></span>
                            <span><SlSocialTwitter /></span>

                        </div> */}
                        <div className="flex flex-wrap gap-4 md:gap-6">
                            {[
                                { icon: <SlSocialLinkedin />, href: "https://linkedin.com", label: "LinkedIn" },
                                { icon: <SlSocialGithub />, href: "https://github.com", label: "Github" },
                                { icon: <SlSocialInstagram />, href: "https://instagram.com", label: "Instagram" },
                                { icon: <SlSocialTwitter />, href: "https://twitter.com", label: "Twitter" },
                                { icon: <SlSocialFacebook />, href: "https://facebook.com", label: "Facebook" },
                            ].map((social, idx) => (
                                <SocialLink
                                    key={idx}
                                    {...social}
                                    index={idx}
                                    isDarkMode={isDarkMode}
                                />
                            ))}
                        </div>
                    </div>
                    {/* Background Text: Smaller and relative on mobile, Absolute on desktop */}
                    <div className="relative lg:absolute bottom-0 lg:bottom-[-30px] left-0 lg:left-16 mt-4 lg:mt-0">
                        <h1 className={`text-5xl md:text-7xl lg:text-[9.5rem] font-black leading-none tracking-tighter transition-colors duration-1000 ${isDarkMode ? "text-white/10" : "text-[#333]"}`}>
                            Hey there!
                        </h1>
                    </div>
                </div>

                {/* Right Side Animation: Responsive scaling for SVG and Blob */}
                <div className="flex-1 relative flex items-center justify-center overflow-visible py-10 lg:py-0">
                    {/* Background Blob: Smaller on mobile */}
                    <div className={`absolute w-[280px] h-[220px] md:w-[400px] md:h-[300px] lg:w-[460px] lg:h-[360px] transition-all duration-1000 blur-3xl opacity-40 ${isDarkMode ? "bg-purple-600" : "bg-[#94E1D4]"}`}
                        style={{ borderRadius: "40% 60% 70% 30% / 40% 50% 60% 70%" }}>
                    </div>

                    {/* SVG: Scaled via max-width to stay within container */}
                    <svg ref={svgRef} viewBox="0 10 211.73 180" className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-[450px] h-auto z-10 overflow-visible drop-shadow-2xl" style={{ colorScheme: "light" }}>
                        <defs>
                            <clipPath id="background-clip">
                                <path d="M39 153.73s31.57 19.71 77.26 15.21 90.18-37.23 90.36-72.33-8.82-80.28-33.59-86.29C136.84-6.57 114.13-5.82 88-2.82S34.73 11.45 16.71 48.24C-1.5 66.64-4.88 125.2 39 153.73z" fill="none" />
                            </clipPath>
                            <linearGradient id="hair-shared-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#413129" />
                                <stop offset="100%" stopColor="#221814" />
                            </linearGradient>
                            <radialGradient id="blush-gradient">
                                <stop offset="0%" stopColor="#f4a7a7" stopOpacity="0.6" />
                                <stop offset="100%" stopColor="#f4a7a7" stopOpacity="0" />
                            </radialGradient>
                        </defs>

                        <path className="bg transition-all duration-1000" d="M39 153.73s31.57 19.71 77.26 15.21 90.18-37.23 90.36-72.33-10.51-57-35.28-63-50.22 17-76.31 20-60.12-15.88-78.32 2.51S-4.88 125.2 39 153.73z" fill={isDarkMode ? "#ae8fdb" : "#6FDCC1"} />

                        <g clipPath="url(#background-clip)">
                            <g className="me" opacity="0">
                                <g className="body">
                                    <path className="shadow" d="M129.86,48.47s6.76,4.91,10,12.07,7,29.06,11.71,39.82,9.06,22.5,9.91,26.42,1.57,5-2.52,10.2-14.63,12-14.63,12l-11.47,6.8s14.87,9.67,17.68,19.32a71.16,71.16,0,0,1,4.34,18.79l-21.39,4.54L113.2,164.85l-13-11.1L90.31,75.37Z" opacity="0.09" />
                                    <path className="shadow" d="M69.44,54A23.64,23.64,0,0,0,58.91,64.27c-4.39,7.87-4.1,30.52-7.61,41.23S40.76,124.26,41.93,135s2.64,12.27,2.64,12.27a66.65,66.65,0,0,1,14.93,1.88c7,1.89,18.42,5.48,18.42,5.48S63.6,166.53,61.84,176a67.23,67.23,0,0,0-2.34,18.26l20.89,1.9,16.19-34,11.42-12L109.91,75Z" opacity="0.09" />
                                    <path className="hair-back" d="M127.63,45.17c2.65,1.35,11.15,4.2,16.07,23.12,2.88,20.58,3.79,26.07,4.68,30.6s1.2,11.6,6.3,21.15.85,14.65.85,14.65l-7.63,7.08s3.45-12.65-2.63-18.13c0,0,2,14,0,17s-8.75,6.92-8.75,6.92-2.48-4.53-5.06-9.64,2.78,11,.08,12.09-18.82,6.25-30.6,3.86-21.53-5-24-5.79c0,0,2.75-1.37.77-7.62s-1-7.59-1.52-7-2.1,3-1,7.49a7.45,7.45,0,0,1-1.92,7.18s-7.11-4.65-12.77-5.21A51.35,51.35,0,0,1,51,141.14s-5-11.43-.4-23.56S58,104.1,58.32,88.87s2.41-34.66,20.41-45S116.87,35.4,127.63,45.17Z" fill="url(#hair-shared-gradient)" />
                                    <path className="neck" d="M114.26 143.16v-14a9.22 9.22 0 10-18.43 0v14c-15.27 2.84-24.74 15.08-24.74 27.33H139c0-12.24-9.5-24.49-24.74-27.33z" fill="#ede3d1" />
                                    <path className="top" d="M105.61 167c-30.17 0-25.36-40-25.36 15.84h25.35l25-2.14c-.05-55.79 5.17-13.7-24.99-13.7z" fill="#fff" stroke="#404040" strokeWidth=".5" />
                                    <path className="shoulder" d="M95.82 142.87c-16 1.84-29.37 19.5-29.37 40h29.37z" fill="#404040" />
                                    <path className="shoulder" d="M114.23 142.67c15.76 1.85 29 19.6 29 40.2h-29z" fill="#404040" />
                                </g>

                                <g className="head">
                                    <ellipse cx="104.76" cy="128" rx="14" ry="7" fill="#000" opacity="0.08" />
                                    <g className="ear-left ear"><path d="M63.52 105.14A8.21 8.21 0 0072 113.2a8.36 8.36 0 008.51-8.1A8.21 8.21 0 0072 97a8.36 8.36 0 00-8.48 8.14z" fill="#ede3d1" /></g>
                                    <g className="ear-right ear"><path d="M144.37 105.24a8.2 8.2 0 01-8.37 8.06 8.35 8.35 0 01-8.51-8.1 8.21 8.21 0 018.42-8.06 8.35 8.35 0 018.46 8.1z" fill="#ede3d1" /></g>

                                    <g className="face">
                                        <rect x="73.99" y="48.26" width="61.54" height="80.49" rx="26.08" transform="rotate(180 104.76 88.5)" fill="#ede3d1" />
                                        <g className="inner-face">
                                            <circle cx="91" cy="98" r="6" fill="url(#blush-gradient)" />
                                            <circle cx="119" cy="98" r="6" fill="url(#blush-gradient)" />
                                            <path className="eyebrow-right" d="M120.73 79a9 9 0 00-4-1.22 9.8 9.8 0 00-4.19.87" fill="none" stroke="#b5aa9a" strokeWidth="1" />
                                            <path className="eyebrow-left" d="M97.12 79.41a9.53 9.53 0 00-4-1.11 10.58 10.58 0 00-4.2.76" fill="none" stroke="#b5aa9a" strokeWidth="1" />
                                            <path className="mouth" d="M97 107.52s7.06 4.62 14 1.59" fill="none" stroke="#b5aa9a" strokeWidth="1" />
                                            <path d="M98 122 Q102 129 104.76 126 Q108 129 112 122" fill="none" stroke="#7a6d61" strokeWidth="0.7" strokeLinecap="round" opacity="0.15" />
                                            <g className="eyes">
                                                <path className="eye-left" d="M89.48 87.37c-.07 2.08 1.25 3.8 2.94 3.85s3.1-1.59 3.16-3.67-1.25-3.8-2.94-3.85-3.1 1.59-3.16 3.67z" fill="#2b343b" />
                                                <path className="eye-right" d="M113.67 87.37c-.07 2.08 1.25 3.8 2.94 3.85s3.1-1.59 3.16-3.67-1.25-3.8-2.94-3.85-3.1 1.59-3.16 3.67z" fill="#2b343b" />
                                                <path className="eye-right-2" d="M114.11 88a5.72 5.72 0 002.48.72 6.46 6.46 0 002.59-.45" opacity="0" fill="none" stroke="#282828" strokeWidth="1" />
                                                <path className="eye-left-2" d="M89.85 88a5.77 5.77 0 002.56.3 6.48 6.48 0 002.49-.87" fill="none" opacity="0" stroke="#282828" strokeWidth="1" />
                                            </g>
                                            <path className="glasses" d="M133.54 81.76c-4.7-1.42-15.29-2.42-19.83-.45-5.82 2.17-3.18 1.57-8.55 1.17-5.36.4-2.74 1-8.55-1.18-7.3-2.55-15.58-.24-22.25.72v2.75c2.46.24 1.26 6.78 3.06 10.32 2.13 7.23 12.69 9.55 18.19 5.49 3.9-2 7.08-10.32 7.21-12.86 0-1.64 4.15-2.57 4.61.24.11 2.53 3.42 10.69 7.28 12.62 5.5 4 16 1.74 18.17-5.49 1.8-3.54 1.69-9.92 2.88-10.32s.74-2.67 0-2.75-1.02-.1-2.22-.26zM97.25 97.49C90.94 104.81 79 101.2 78 92.3c-.7-2.62-1-7.3 1.27-9.12s6.88-1.87 9.23-2c11.14-.26 16.62 5.6 8.75 16.31zm35.12-5.19c-3.71 17.2-27.26 7.42-22.09-7.36 1.87-3.11 9.09-3.84 11.55-3.73 8.07-.04 12.7 1.79 10.54 11.09z" fill="#c6c6c6" opacity=".48" />
                                        </g>
                                        <path className="hair-front" d="M134.1,57.61C129.22,51.79,118,45,115.33,44.84s-13-1.87-20.65,0-16,4.51-18.77,8.26-6.17,18-4.77,24.41c0,0,3-3.09,10.46-5.73h0s.74-6.33,1.45-7.18a32.29,32.29,0,0,0-.1,6.73,59.67,59.67,0,0,1,8.22-2,37,37,0,0,1,.25-8.11,67.11,67.11,0,0,0,.54,8c2-.32,4.18-.59,6.52-.78h0s.18-2.82.61-5.5c0,0,.28,3.33.6,5.42,1.78-.12,3.64-.19,5.62-.21a76.76,76.76,0,0,1,9.11.45c-.05-2.15,0-6.82-.22-7.36s1.07,2.06,1.54,7.52a51.14,51.14,0,0,1,8.84,1.92c.23-2.37.41-5.93-.3-7.88,0,0,2.1,5,1.9,8.42h0c8.36,3,11.06,7.25,11.06,7.25S139,63.43,134.1,57.61Z" fill="url(#hair-shared-gradient)" />
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>

            </div>
        </div>
    );
};

export default Contact;