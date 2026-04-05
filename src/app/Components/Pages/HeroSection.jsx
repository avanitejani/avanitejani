
"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, User, Briefcase, Mail, Home  } from "lucide-react";
import { useTheme } from "../../../../ThemeContext";
import Image from "next/image";
import Link from "next/link";
// import { HiSun, HiMoon, HiHome, HiUser, HiBriefcase, HiEnvelope } from "react-icons/hi2";

// --- Sub-component for Floating Symbols ---
const FloatingSymbol = ({ delay, children, x, y, size }) => (
    <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{
            opacity: [0.1, 0.4, 0.1],
            y: [0, -40, 0],
            rotate: [0, 10, -10, 0],
            x: [0, 15, -15, 0]
        }}
        transition={{
            duration: 8,
            repeat: Infinity,
            delay,
            ease: "easeInOut"
        }}
        className="absolute pointer-events-none font-mono font-bold select-none"
        style={{ left: x, top: y, fontSize: size, color: 'white' }}
    >
        {children}
    </motion.span>
);

const Herosection = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    const colors = {
        bg: isDarkMode ? "#2d1b36" : "#56af96",
        shelf: isDarkMode ? "#1a0f21" : "#404040",
        text: isDarkMode ? "#ffffff" : "#2d2d2d",
        mug: isDarkMode ? "#4a355a" : "#f0f0f2",
        steam: isDarkMode ? "rgba(255, 244, 197, 0.6)" : "rgba(200, 200, 200, 0.4)"
    };


    const logoLetters = "avani".split("");

    // Data for extra elements
    const clouds = [
        { size: 'w-6 h-2', top: '20%', left: '10%', duration: 3 },
        { size: 'w-8 h-3', top: '50%', left: '40%', duration: 5 },
        { size: 'w-5 h-2', top: '30%', left: '70%', duration: 4 },
        { size: 'w-7 h-2.5', top: '15%', left: '50%', duration: 6 },
        { size: 'w-4 h-1.5', top: '65%', left: '20%', duration: 3.5 },
    ];

    const stars = [
        { top: '20%', left: '15%', size: 'w-1 h-1' },
        { top: '50%', left: '30%', size: 'w-0.5 h-0.5' },
        { top: '75%', left: '10%', size: 'w-1 h-1' },
        { top: '30%', left: '50%', size: 'w-0.5 h-0.5' },
        { top: '60%', left: '70%', size: 'w-1 h-1' },
        { top: '25%', left: '80%', size: 'w-0.5 h-0.5' },
        { top: '80%', left: '50%', size: 'w-1 h-1' },
        { top: '45%', left: '85%', size: 'w-0.5 h-0.5' },
    ];



    return (
        <div
            className="min-h-screen transition-colors duration-1000 ease-in-out relative overflow-hidden flex flex-col"
            style={{ backgroundColor: colors.bg }}
        >
            {/* 1. Left Sidebar Split - Responsive height/width */}
            <div className={`absolute inset-0 w-full h-[40%] md:h-full md:w-1/3 transition-colors duration-1000 ${isDarkMode ? "bg-[#1f1226]" : "bg-white"}`} />

            {/* --- Navigation --- */}
            <nav className="relative z-50 flex gap-8 justify-between items-center px-6 md:px-12 py-6 md:py-8 max-w-[1600px] w-full mx-auto">
                {/* <motion.h1
                    whileHover={{ scale: 1.05 }}
                    className="text-4xl font-[900] tracking-tighter cursor-pointer relative group"
                    style={{
                        color: isDarkMode ? "#ae8fdb" : "#56af96",
                        fontFamily: "'Outfit', sans-serif" // Ek modern geometric font use karein
                    }}
                >
                    avanitejani
                    <motion.span
                        animate={{
                            scale: [1, 1.5, 1],
                            opacity: [1, 0.5, 1]
                        }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="inline-block ml-0.5"
                        style={{ color: isDarkMode ? "#6fdcbf" : "#ae8fdb" }}
                    >
                        .
                    </motion.span>

                    <span className={`absolute -bottom-1 left-0 w-0 h-1 transition-all duration-500 group-hover:w-full rounded-full 
        ${isDarkMode ? 'bg-purple-400' : 'bg-[#56af96]'}`}
                    />
                </motion.h1> */}

                <span
                    className="text-4xl font-[900] tracking-tighter cursor-pointer relative group"
                    style={{
                        color: isDarkMode ? "#ae8fdb" : "#56af96",
                        fontFamily: "'Outfit', sans-serif" // Ek modern geometric font use karein
                    }}
                >
                    <Link href="/" >
                        <Image
                            width={300}
                            height={90}
                            src="/img/Aavanitejani2.png"
                            alt="MDx Logo"
                            unoptimized
                            className="object-contain"
                        />
                    </Link>
                </span>
                

                <div className="flex items-center gap-10">
                    {/* <ul className={`hidden md:flex gap-8 font-bold text-sm tracking-widest uppercase ${isDarkMode ? "text-purple-300" : "text-gray-500"}`}>
                        {["About", "Experience", "Work", "Contact"].map((item) => (
                            <li key={item} className="cursor-pointer hover:text-white transition-colors">{item}</li>
                        ))}
                    </ul> */}
                    <ul className={`hidden md:flex gap-8 font-bold text-sm tracking-widest uppercase ${isDarkMode ? "text-purple-300" : "text-gray-500"}`}>
                        {[
                            { name: "About", href: "#about" },
                            { name: "Experience", href: "#experience" },
                            { name: "Contact", href: "#contact" }
                        ].map((item) => (
                            <li key={item.name}>
                                <a href={item.href} className="cursor-pointer hover:text-white transition-colors">
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* --- MOBILE BOTTOM STICKY NAVIGATION --- */}
                    <motion.div
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-[400px]"
                    >
                        <nav className={`
                    flex justify-around items-center py-3 px-6 rounded-2xl border backdrop-blur-lg shadow-2xl
                    transition-all duration-500
                    ${isDarkMode
                                ? "bg-[#1a0f21]/80 border-purple-500/30 shadow-purple-900/20"
                            : "bg-white/80 border-[#7e8d7a] shadow-[#7e8d7a]"}
                `}>
                            {[
                                // { name: "Home", href: "#", icon: <Home size={20} /> },
                                { name: "About", href: "#about", icon: <User size={20} /> },
                                { name: "Work", href: "#experience", icon: <Briefcase size={20} /> },
                                { name: "Mail", href: "#contact", icon: <Mail size={20} /> }
                            ].map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="flex flex-col items-center gap-1 group relative"
                                >
                                    <span className={`
                                transition-colors duration-300
                                ${isDarkMode ? "text-purple-400 group-hover:text-white" : "text-[#7e8d7a] group-hover:text-[#467b6c]"}
                            `}>
                                        {item.icon}
                                    </span>
                                    <span className={`
                                text-[10px] font-bold uppercase tracking-tighter
                                ${isDarkMode ? "text-purple-300/60" : "text-[#7e8d7aeb]"}
                            `}>
                                        {item.name}
                                    </span>

                                    {/* Hover/Active Indicator */}
                                    <motion.span
                                        className={`absolute -bottom-1 w-0 h-0.5 rounded-full transition-all group-hover:w-full
                                ${isDarkMode ? "bg-purple-400" : "bg-[#467b6c]"}`}
                                    />
                                </a>
                            ))}
                        </nav>
                    </motion.div>

                    <div className="flex items-center justify-center p-4">
                        <button
                            onClick={toggleTheme} // Now using global toggle
                            className={`relative w-[90px] h-10 rounded-full transition-colors duration-1000 ease-in-out overflow-hidden outline-none border-none
                ${isDarkMode ? 'bg-[#1e1e2e]' : 'bg-[#4facfe]'}
                /* Inner Shadow creates the "Natural Well" effect */
                shadow-[inset_0_2px_10px_rgba(0,0,0,0.3),0_1px_2px_rgba(255,255,255,0.1)]`}
                        >
                            {/* --- ☀️ LIGHT MODE: SCROLLING SKY --- */}
                            <AnimatePresence>
                                {!isDarkMode && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="absolute inset-0"
                                    >
                                        {/* Moving Clouds Layer 1 */}
                                        <motion.div
                                            animate={{ x: [-100, 0] }}
                                            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                                            className="absolute top-2 flex gap-4 opacity-60"
                                        >
                                            {[...Array(4)].map((_, i) => (
                                                <div key={i} className="w-8 h-3 bg-white rounded-full blur-[2px]" />
                                            ))}
                                        </motion.div>
                                        {/* Moving Clouds Layer 2 (Faster) */}
                                        <motion.div
                                            animate={{ x: [0, -100] }}
                                            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                                            className="absolute bottom-2 flex gap-6 opacity-40"
                                        >
                                            {[...Array(4)].map((_, i) => (
                                                <div key={i} className="w-10 h-4 bg-white rounded-full blur-[3px]" />
                                            ))}
                                        </motion.div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* --- 🌙 DARK MODE: TWINKLING SPACE --- */}
                            <AnimatePresence>
                                {isDarkMode && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="absolute inset-0"
                                    >
                                        {/* Static Stars */}
                                        {[...Array(10)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                animate={{ opacity: [0.2, 1, 0.2] }}
                                                transition={{ repeat: Infinity, duration: 2 + Math.random() * 2, delay: Math.random() }}
                                                className="absolute w-0.5 h-0.5 bg-white rounded-full"
                                                style={{
                                                    top: `${Math.random() * 100}%`,
                                                    left: `${Math.random() * 100}%`,
                                                    boxShadow: '0 0 3px white'
                                                }}
                                            />
                                        ))}
                                        {/* Shooting Star */}
                                        <motion.div
                                            animate={{ x: [-20, 120], y: [0, 50], opacity: [0, 1, 0] }}
                                            transition={{ repeat: Infinity, duration: 4, repeatDelay: 5 }}
                                            className="absolute w-8 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent -rotate-[25deg] top-1"
                                        />
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* --- THE ORB (Knob) --- */}
                            <motion.div
                                layout
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 25
                                }}
                                className={`relative z-10 w-8 h-8 mx-1 rounded-full flex items-center justify-center
                    /* Orb 3D Lighting */
                    ${isDarkMode
                                        ? 'bg-gradient-to-b from-[#f1f2f6] to-[#bdc3c7] shadow-[0_2px_5px_rgba(0,0,0,0.5),inset_-1px_-2px_3px_rgba(0,0,0,0.2)]'
                                        : 'bg-gradient-to-b from-[#fff200] to-[#ff9f43] shadow-[0_2px_8px_rgba(255,159,67,0.5),inset_-1px_-2px_3px_rgba(0,0,0,0.1)]'
                                    }`}
                            >
                                {/* Atmospheric Glow around the orb */}
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                                    transition={{ repeat: Infinity, duration: 3 }}
                                    className={`absolute inset-0 rounded-full blur-md 
                        ${isDarkMode ? 'bg-blue-300' : 'bg-yellow-200'}`}
                                />

                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={isDarkMode ? "moon" : "sun"}
                                        initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                        exit={{ opacity: 0, scale: 0.5, rotate: 45 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        {isDarkMode ? (
                                            <Moon size={16} fill="#2c3e50" className="text-[#2c3e50]" />
                                        ) : (
                                            <Sun size={16} fill="#ff9f43" className="text-[#d35400]" />
                                        )}
                                    </motion.div>
                                </AnimatePresence>
                            </motion.div>

                            {/* Track Reflection (Light hitting the bottom of the well) */}
                            <div className={`absolute bottom-0 inset-x-0 h-1/2 opacity-20 pointer-events-none
                ${isDarkMode ? 'bg-gradient-to-t from-blue-900 to-transparent' : 'bg-gradient-to-t from-white to-transparent'}`} />
                        </button>
                    </div>
                </div>
            </nav>

            {/* --- Main Content --- */}
            <main className="relative z-10 w-[95%] max-w-[1600px] mx-auto px-4 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 md:gap-10 items-center flex-grow pb-1 md:pb-0">

                {/* LEFT: THE INTERACTIVE ILLUSTRATION */}
                <div className="relative h-[300px] sm:h-[400px] md:h-[500px] flex items-end justify-center order-2 md:order-1 scale-[0.8] sm:scale-90 md:scale-100 transition-transform origin-bottom">

                    {/* Floating Code Particle System */}
                    <FloatingSymbol x="10%" y="20%" size="2rem" delay={0}>{'< />'}</FloatingSymbol>
                    <FloatingSymbol x="80%" y="15%" size="1.5rem" delay={2}>{'{ }'}</FloatingSymbol>
                    <FloatingSymbol x="50%" y="50%" size="3rem" delay={4}>#</FloatingSymbol>
                    <FloatingSymbol x="30%" y="50%" size="1.2rem" delay={1}>&</FloatingSymbol>
                    <FloatingSymbol x="20%" y="70%" size="1.2rem" delay={1}>()</FloatingSymbol>
                    <FloatingSymbol x="50%" y="30%" size="1.8rem" delay={5}>*</FloatingSymbol>
                    <FloatingSymbol x="80%" y="40%" size="2.5rem" delay={3}>;</FloatingSymbol>
                    <FloatingSymbol x="100%" y="30%" size="2.5rem" delay={3}>""</FloatingSymbol>
                    <FloatingSymbol x="90%" y="65%" size="1.7rem" delay={1}>$</FloatingSymbol>


                    {/* --- THE CINEMATIC LAMP SYSTEM --- */}
                    <div className="absolute top-[-100px] md:top-[-150px] left-1/2 -translate-x-1/2 flex flex-col items-center z-30">
                        
                        {/* 1. The Wire */}
                        <div className="w-[1.5px] h-20 md:h-30 bg-gray-500/40" />
                        

                        {/* 2. The Lamp Head (Swaying) */}
                        <motion.div
                            animate={{ rotate: isDarkMode ? [-1.5, 1.5, -1.5] : 0 }}
                            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                            className="relative flex flex-col items-center"
                        >
                            {/* Lamp Shade with Rim Highlight */}
                            <svg width="80" height="80" viewBox="0 0 100 60" className="drop-shadow-2xl">
                                <defs>
                                    <linearGradient id="shadeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor={isDarkMode ? "#3e274a" : "#b2b2d8"} />
                                        <stop offset="100%" stopColor={isDarkMode ? "#ae8fdb" : "#9b83f5"} />
                                    </linearGradient>
                                </defs>
                                <path d="M5,60 C5,0 95,0 95,60" fill="url(#shadeGrad)" />
                                {/* Top Cap */}
                                <rect x="40" y="-2" width="20" height="8" rx="2" fill="#333" />
                            </svg>

                            {/* 3. THE LIGHT BEAM (Volumetric) */}
                            <AnimatePresence>
                                {isDarkMode && (
                                    <>
                                        {/* A. The Glowing Bulb Source */}
                                        <motion.div
                                            initial={{ scale: 0, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            className="absolute top-[45px] w-12 h-6 bg-yellow-100 rounded-full blur-md z-10"
                                        />

                                        {/* B. The Core Volumetric Beam */}
                                        <motion.div
                                            initial={{ opacity: 0, scaleY: 0 }}
                                            animate={{
                                                opacity: [0, 1, 0.8, 1], // Realistic "Flicker" start
                                                scaleY: 1
                                            }}
                                            exit={{ opacity: 0, scaleY: 0 }}
                                            transition={{ duration: 0.4, times: [0, 0.2, 0.4, 1] }}
                                            className="absolute top-[55px] origin-top pointer-events-none"
                                            style={{
                                                width: "600px",
                                                height: "600px",
                                                // Multi-layered conic gradient for depth
                                                background: "conic-gradient(from 160deg at 50% 0%, transparent, rgba(255,244,197,0.15) 10deg, rgba(255,244,197,0.2) 20deg, rgba(255,244,197,0.15) 30deg, transparent 40deg)",
                                                filter: "blur(15px)",
                                                mixBlendMode: "screen",
                                                clipPath: "polygon(40% 0%, 60% 0%, 100% 100%, 0% 100%)"
                                            }}
                                        />

                                        {/* C. Soft Atmospheric Haze (Wider) */}
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 0.3 }}
                                            className="absolute top-[55px] w-[800px] h-[600px] pointer-events-none blur-[60px]"
                                            style={{
                                                background: "radial-gradient(circle at top, rgba(255,244,197,0.15), transparent 70%)",
                                                mixBlendMode: "plus-lighter"
                                            }}
                                        />

                                        {/* D. Dancing Dust Motes (Exclusive to beam area) */}
                                        <div className="absolute top-20 w-64 h-96 pointer-events-none overflow-hidden">
                                            {[...Array(12)].map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0 }}
                                                    animate={{
                                                        opacity: [0, 0.4, 0],
                                                        y: [-20, -100],
                                                        x: [Math.random() * 20, Math.random() * -20]
                                                    }}
                                                    transition={{
                                                        duration: 5 + Math.random() * 5,
                                                        repeat: Infinity,
                                                        delay: Math.random() * 5
                                                    }}
                                                    className="absolute w-1 h-1 bg-white rounded-full blur-[1px]"
                                                    style={{
                                                        left: `${20 + Math.random() * 60}%`,
                                                        top: `${60 + Math.random() * 40}%`
                                                    }}
                                                />
                                            ))}
                                        </div>
                                    </>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </div>

                    {/* --- DESK REFLECTION (Enhanced) --- */}
                    <AnimatePresence>
                        {isDarkMode && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute bottom-[45px] left-1/2 -translate-x-1/2 pointer-events-none"
                            >
                                {/* Primary Reflection Blob */}
                                <motion.div
                                    animate={{ opacity: [0.4, 0.6, 0.4], scale: [1, 1.05, 1] }}
                                    transition={{ repeat: Infinity, duration: 4 }}
                                    className="w-[500px] h-[60px] bg-yellow-200/10 blur-[40px] rounded-[100%]"
                                />
                                {/* Sharp Specular "Hot Spot" */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-4 bg-yellow-100/20 blur-md rounded-full" />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Desk Elements */}
                    <div className="relative w-full flex justify-center items-end pb-12 gap-2 md:gap-3">
                        {/* ENHANCED SNAKE PLANT (Sansevieria) */}
                        <div className="relative group perspective-1000">
                            <motion.svg
                                width="55"
                                height="100"
                                viewBox="0 0 100 150"
                                className="drop-shadow-2xl"
                            >
                                <defs>
                                    {/* --- Realistic Leaf Gradients --- */}
                                    <linearGradient id="leafFront" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#4a7a63" />
                                        <stop offset="20%" stopColor="#6fdcbf" />
                                        <stop offset="80%" stopColor="#6fdcbf" />
                                        <stop offset="100%" stopColor="#4a7a63" />
                                    </linearGradient>

                                    <linearGradient id="leafBack" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#2d5a4a" />
                                        <stop offset="100%" stopColor="#3a7a63" />
                                    </linearGradient>

                                    {/* Pattern for the snake-skin texture */}
                                    <pattern id="leafPattern" x="0" y="0" width="10" height="20" patternUnits="userSpaceOnUse">
                                        <path d="M0 10 Q 5 0 10 10" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
                                    </pattern>

                                    <linearGradient id="potGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor={isDarkMode ? "#2d1b36" : "#8d7a6d"} />
                                        <stop offset="50%" stopColor={isDarkMode ? "#4c325c" : "#ad998a"} />
                                        <stop offset="100%" stopColor={isDarkMode ? "#2d1b36" : "#8d7a6d"} />
                                    </linearGradient>
                                </defs>

                                {/* --- Back Leaves (Darker for Depth) --- */}
                                <motion.path
                                    initial={{ scaleY: 0, opacity: 0 }} animate={{ scaleY: 1, opacity: 1, rotate: [-1, 1, -1] }}
                                    transition={{ duration: 1.5, repeat: Infinity, repeatType: "mirror" }}
                                    d="M35,110 Q15,50 30,10 Q45,50 40,110" fill="url(#leafBack)"
                                />
                                <motion.path
                                    initial={{ scaleY: 0, opacity: 0 }} animate={{ scaleY: 1, opacity: 1, rotate: [1, -1, 1] }}
                                    transition={{ duration: 2, delay: 0.2, repeat: Infinity, repeatType: "mirror" }}
                                    d="M65,110 Q85,40 70,20 Q55,40 60,110" fill="url(#leafBack)"
                                />

                                {/* --- Middle Leaves (Fullness) --- */}
                                <motion.path
                                    initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 1.2, delay: 0.4 }}
                                    d="M45,110 Q30,60 40,30 Q55,60 50,110" fill="#56af96"
                                />
                                <motion.path
                                    initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 1.4, delay: 0.5 }}
                                    d="M55,110 Q75,60 65,40 Q50,60 55,110" fill="#56af96"
                                />

                                {/* --- Hero Leaves (Foreground with Detail) --- */}
                                {/* Main Tall Center Leaf */}
                                <motion.g
                                    animate={{ rotate: [-0.5, 0.5, -0.5] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <path d="M50,110 Q30,50 50,5 Q70,50 50,110" fill="url(#leafFront)" stroke="#f1c40f" strokeWidth="0.5" />
                                    <path d="M50,110 Q30,50 50,5 Q70,50 50,110" fill="url(#leafPattern)" opacity="0.6" />
                                </motion.g>

                                {/* Front Left Curved Leaf */}
                                <motion.g
                                    animate={{ rotate: [-1, 1, -1] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                >
                                    <path d="M40,115 Q20,80 35,45 Q45,80 40,115" fill="url(#leafFront)" stroke="#f1c40f" strokeWidth="0.3" />
                                    <path d="M40,115 Q20,80 35,45 Q45,80 40,115" fill="url(#leafPattern)" opacity="0.4" />
                                </motion.g>

                                {/* Front Right Small Leaf */}
                                <path d="M60,115 Q75,90 65,70 Q55,90 60,115" fill="url(#leafFront)" opacity="0.9" />

                                {/* --- The Pot & Soil --- */}
                                <g>
                                    {/* Soil/Dirt */}
                                    <ellipse cx="50" cy="112" rx="28" ry="6" fill="#3d2b1f" />

                                    {/* Pot Body */}
                                    <path d="M22,110 L78,110 L72,145 Q70,152 60,152 L40,152 Q30,152 28,145 Z" fill="url(#potGrad)" />

                                    {/* Pot Rim (Adds 3D feel) */}
                                    <rect x="20" y="105" width="60" height="6" rx="3" fill="url(#potGrad)" stroke="rgba(0,0,0,0.1)" strokeWidth="0.5" />
                                </g>

                                {/* Reflection on Pot in Light Mode */}
                                {!isDarkMode && (
                                    <rect x="28" y="115" width="4" height="25" rx="2" fill="white" opacity="0.2" />
                                )}
                            </motion.svg>

                            {/* Table Shadow for the whole plant */}
                            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-3 bg-black/20 blur-md rounded-[100%] -z-10" />
                        </div>

                        {/* 2. COFFEE MUG (Day/Night Responsive) */}

                        <div className="relative mb-[-3px] group select-none">

                            {/* --- 1. WISPY STEAM (BHAF) --- */}
                            <div className="absolute -top-24 left-2 w-20 h-24 pointer-events-none z-20">
                                {[
                                    { d: "M20,60 Q10,40 30,20 T20,0", delay: 0, duration: 5 },
                                    { d: "M30,60 Q50,40 30,20 T40,0", delay: 2, duration: 6 },
                                ].map((wisp, i) => (
                                    <motion.svg
                                        key={i}
                                        viewBox="0 0 50 70"
                                        className="absolute inset-0 w-full h-full"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{
                                            opacity: [0, 0.4, 0.2, 0],
                                            y: -50,
                                            x: [0, i % 2 === 0 ? 15 : -15, 0],
                                            scale: [1, 1.8, 2.2]
                                        }}
                                        transition={{ duration: wisp.duration, repeat: Infinity, delay: wisp.delay, ease: "linear" }}
                                    >
                                        <path d={wisp.d} fill="none" stroke={isDarkMode ? "rgba(255,244,197,0.3)" : "rgba(150,150,150,0.2)"} strokeWidth="3" strokeLinecap="round" style={{ filter: "blur(5px)" }} />
                                    </motion.svg>
                                ))}
                            </div>

                            {/* --- 2. THE STARBUCKS SQUAT MUG (IMAGE STYLE) --- */}
                            <motion.svg
                                width="55"
                                height="45"
                                viewBox="0 0 120 100"
                                className="drop-shadow-2xl"
                                whileHover={{ y: -2, rotate: -0.5 }}
                            >
                                <defs>
                                    {/* Dark Green for Interior and Logo */}
                                    <linearGradient id="starbucksGreen" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#1e3932" />
                                        <stop offset="100%" stopColor="#007042" />
                                    </linearGradient>

                                    {/* Ceramic Texture for Outside */}
                                    <linearGradient id="mugExterior" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor={isDarkMode ? "#1a1a1a" : "#f0ede6"} />
                                        <stop offset="30%" stopColor={isDarkMode ? "#2d2d2d" : "#ffffff"} />
                                        <stop offset="100%" stopColor={isDarkMode ? "#0f0f0f" : "#e5e2d9"} />
                                    </linearGradient>
                                </defs>

                                {/* --- Thick Chunky Handle --- */}
                                <path
                                    d="M90,35 Q115,35 115,58 Q115,82 90,82"
                                    fill="none"
                                    stroke={isDarkMode ? "#2d2d2d" : "#fdfcf9"}
                                    strokeWidth="14"
                                    strokeLinecap="round"
                                />
                                {/* Handle Inner Detail */}
                                <path d="M90,35 Q110,35 110,58 Q110,82 90,82" fill="none" stroke="rgba(0,0,0,0.05)" strokeWidth="4" strokeLinecap="round" />

                                {/* --- Squat Mug Body (Main) --- */}
                                <path
                                    d="M10,25 L100,25 L92,85 Q90,95 75,95 L35,95 Q20,95 18,85 Z"
                                    fill="url(#mugExterior)"
                                    className="transition-all duration-1000"
                                />

                                {/* --- Inside Green Color (Image Style) --- */}
                                <ellipse cx="55" cy="25" rx="45" ry="12" fill="#1e3932" />
                                {/* Liquid (Coffee) */}
                                <ellipse cx="55" cy="28" rx="38" ry="8" fill="rgba(0,0,0,0.6)" />

                                {/* --- THE REAL STARBUCKS SIREN LOGO --- */}
                                <g transform="translate(55, 62) scale(0.95)">
                                    {/* Green Outer Circle */}
                                    <circle r="22" fill="#007042" />

                                    {/* Siren Face & Hair (White Parts) */}
                                    <path
                                        d="M0,-8 C-2,-8 -4,-6 -4,-3 C-4,1 0,6 0,6 C0,6 4,1 4,-3 C4,-6 2,-8 0,-8"
                                        fill="white"
                                    />
                                    {/* Crown */}
                                    <path d="M-6,-9 L0,-14 L6,-9 L4,-7 L-4,-7 Z" fill="white" />
                                    {/* Small Stars in Crown */}
                                    <circle cx="-3" cy="-10" r="1" fill="#007042" />
                                    <circle cx="0" cy="-11" r="1.2" fill="#007042" />
                                    <circle cx="3" cy="-10" r="1" fill="#007042" />

                                    {/* Wavy Hair Lines (Symmetrical) */}
                                    <path d="M-8,-4 Q-12,0 -8,8 M-12,2 Q-16,6 -12,12" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M8,-4 Q12,0 8,8 M12,2 Q16,6 12,12" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" />

                                    {/* Twin Tails (Bottom) */}
                                    <path d="M-15,10 Q-10,15 -5,12 M15,10 Q10,15 5,12" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                </g>

                                {/* --- Ceramic Gloss (Light Mode Only) --- */}
                                {!isDarkMode && (
                                    <>
                                        <rect x="25" y="35" width="6" height="45" rx="3" fill="white" opacity="0.4" />
                                        <path d="M90,45 L90,70" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
                                    </>
                                )}

                                {/* --- Night Mode Rim Glow --- */}
                                {isDarkMode && (
                                    <motion.path
                                        animate={{ opacity: [0.3, 0.6, 0.3] }}
                                        transition={{ duration: 3, repeat: Infinity }}
                                        d="M15,35 Q15,25 35,25 L85,25"
                                        fill="none"
                                        stroke="rgba(255, 244, 197, 0.4)"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                    />
                                )}
                            </motion.svg>

                            {/* --- Table Shadow --- */}
                            <div
                                className="absolute -bottom-2 left-10 right-14 h-3 rounded-[100%] blur-md -z-10 transition-all duration-1000"
                                style={{
                                    background: "rgba(0,0,0,0.2)",
                                    opacity: isDarkMode ? 0.8 : 0.4,
                                    transform: "scaleX(0.7)"
                                }}
                            />
                        </div>

                        {/* MONITOR WITH BLOOM GLOW */}
                        <div className="relative">


                            <motion.div
                                className="w-50 h-34 rounded-2xl border-[5px] relative overflow-hidden transition-all duration-700 z-10"
                                style={{
                                    backgroundColor: isDarkMode ? "#12121e" : "#f8f9fa",
                                    borderColor: "#2d2d2d",
                                    boxShadow: isDarkMode
                                        ? "0 25px 50px -12px rgba(0, 0, 0, 0.8), inset 0 0 10px rgba(0,0,0,0.5)"
                                        : "0 20px 40px rgba(0,0,0,0.1)"
                                }}
                            >
                                {/* --- Window Header (Title Bar) --- */}
                                <div className={`h-8 flex items-center px-4 border-b gap-1.5 ${isDarkMode ? 'bg-[#1e1e2e] border-white/5' : 'bg-gray-100 border-gray-200'}`}>
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] shadow-sm" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] shadow-sm" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f] shadow-sm" />
                                    <div className="ml-2 h-2 w-16 rounded-full opacity-20" style={{ backgroundColor: isDarkMode ? '#fff' : '#000' }} />
                                </div>

                                {/* --- Editor Layout --- */}
                                <div className="flex h-full font-mono text-[10px]">
                                    {/* Sidebar (File Explorer) */}
                                    <div className={`w-16 h-full flex flex-col gap-2 p-3  ${isDarkMode ? 'bg-[#181825] border-r border-gray-800' : 'bg-gray-50 border-r border-gray-200'}`}>
                                        {[30, 50, 40].map((w, i) => (
                                            <div key={i} className={`h-1.5 rounded-full ${isDarkMode ? 'bg-white/10' : 'bg-gray-300'}`} style={{ width: `${w}%` }} />
                                        ))}
                                    </div>

                                    {/* Main Code Area */}
                                    <div className="flex-1 p-4 relative">
                                        {/* Simulated Code Lines */}
                                        <div className="space-y-2.5">
                                            {/* Line 1: import... */}
                                            <div className="flex gap-1.5">
                                                <div className="w-10 h-2 rounded bg-purple-400 opacity-80" />
                                                <div className="w-16 h-2 rounded bg-blue-400 opacity-80" />
                                            </div>
                                            {/* Line 2: function... */}
                                            <div className="flex gap-1.5 pl-2">
                                                <div className="w-12 h-2 rounded bg-teal-400 opacity-80" />
                                                <div className="w-24 h-2 rounded bg-yellow-400 opacity-80" />
                                                <div className="w-4 h-2 rounded bg-white/20" />
                                            </div>
                                            {/* Line 3: Active Typing Line */}
                                            <div className="flex items-center gap-1.5 pl-4">
                                                <motion.div
                                                    className="h-2 rounded bg-pink-400 opacity-80"
                                                    animate={{ width: [0, 60, 0] }}
                                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                                />
                                                {/* Blinking Cursor */}
                                                <motion.div
                                                    animate={{ opacity: [0, 1, 0] }}
                                                    transition={{ repeat: Infinity, duration: 0.8 }}
                                                    className="w-[2px] h-3 bg-white"
                                                />
                                            </div>
                                            {/* Line 4: Closing tag */}
                                            <div className="w-8 h-2 rounded bg-teal-400 opacity-80" />
                                        </div>

                                        {/* --- Screen Overlays --- */}
                                        {/* 1. Glass Glare/Reflection */}
                                        <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.07]" />

                                        {/* 2. Scanline Effect (For Realism) */}
                                        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
                                            style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 1px, #fff 1px, #fff 2px)', backgroundSize: '100% 2px' }}
                                        />
                                    </div>
                                </div>

                                {/* Screen Glow Bleed (Dark Mode only) */}
                                <AnimatePresence>
                                    {isDarkMode && (
                                        <motion.div
                                            initial={{ opacity: 0 }} animate={{ opacity: 0.6 }}
                                            className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-blue-500/10 to-transparent pointer-events-none"
                                        />
                                    )}
                                </AnimatePresence>
                            </motion.div>
                            {/* Stand */}
                            <div className="w-8 h-6 bg-[#333] mx-auto" />
                            <div className="w-25 h-2 bg-[#222] rounded-t-xl mx-auto" />
                        </div>


                        <div className="flex items-end gap-2 pb-1 relative group">
                            {/* --- BOOK 1: The Salmon Journal --- */}
                            <motion.div
                                whileHover={{ y: -10, transition: { type: "spring", stiffness: 300 } }}
                                className="relative w-4 h-20 rounded-sm shadow-xl flex flex-col items-center py-4 cursor-pointer"
                                style={{
                                    backgroundColor: "#dd859c",
                                    background: "linear-gradient(90deg, rgba(0,0,0,0.1) 0%, transparent 15%, transparent 85%, rgba(0,0,0,0.2) 100%), #dd859c"
                                }}
                            >
                                {/* Spine Ribs (Realistic Binding) */}
                                <div className="w-full h-[2px] bg-black/10 my-2" />
                                {/* Simulated Title Line */}
                                <div className="w-3/4 h-6 border-y border-white/20 flex flex-col justify-center gap-1">
                                    <div className="w-full h-[1px] bg-white/30" />
                                    <div className="w-2/3 h-[1px] bg-white/30 mx-auto" />
                                </div>
                                <div className="mt-auto mb-2 w-full h-[2px] bg-black/10" />

                                {/* Top Edge (Visible Pages) */}
                                <div className={`absolute -top-[3px] left-[1px] right-[1px] h-[3px] rounded-t-sm ${isDarkMode ? 'bg-gray-400' : 'bg-gray-100'}`} />
                            </motion.div>

                            {/* --- BOOK 2: The Tech Guide --- */}
                            <motion.div
                                whileHover={{ y: -10, transition: { type: "spring", stiffness: 300 } }}
                                className="relative w-3.5 h-20 rounded-sm shadow-xl flex flex-col items-center justify-between py-6 cursor-pointer"
                                style={{
                                    backgroundColor: "#a3d9e8",
                                    background: "linear-gradient(90deg, rgba(0,0,0,0.15) 0%, transparent 20%, transparent 80%, rgba(0,0,0,0.15) 100%), #a3d9e8"
                                }}
                            >
                                {/* Gold Leaf Detail */}
                                <div className="w-full h-1 bg-yellow-400/40" />
                                {/* Center Logo/Icon placeholder */}
                                <div className="w-3 h-3 rounded-full border border-white/40" />
                                <div className="w-full h-1 bg-yellow-400/40" />

                                {/* Top Edge (Visible Pages) */}
                                <div className={`absolute -top-[3px] left-[1px] right-[1px] h-[3px] rounded-t-sm ${isDarkMode ? 'bg-gray-400' : 'bg-gray-100'}`} />
                            </motion.div>

                            {/* --- BOOK 3: The Leaning Masterpiece --- */}
                            <motion.div
                                initial={{ rotate: 15 }}
                                whileHover={{ rotate: 0, y: -10, x: -5 }}
                                className="relative w-5 h-22 rounded-sm shadow-2xl flex flex-col items-center py-8 cursor-pointer origin-bottom"
                                style={{
                                    backgroundColor: "#ae8fdb",
                                    background: "linear-gradient(90deg, rgba(0,0,0,0.2) 0%, transparent 15%, transparent 85%, rgba(0,0,0,0.2) 100%), #ae8fdb"
                                }}
                            >
                                {/* Embossed Spine Details */}
                                <div className="space-y-1 w-full">
                                    <div className="w-full h-[1px] bg-white/20" />
                                    <div className="w-full h-[1px] bg-white/20" />
                                </div>

                                {/* Vertical Title Line */}
                                <div className="w-[2px] h-12 bg-white/20 mt-4 rounded-full" />

                                <div className="mt-auto space-y-1 w-full">
                                    <div className="w-full h-[1px] bg-white/20" />
                                    <div className="w-full h-[1px] bg-white/20" />
                                </div>

                                {/* Top Edge (Visible Pages) */}
                                <div className={`absolute -top-[3px] left-[1px] right-[1px] h-[3px] rounded-t-sm ${isDarkMode ? 'bg-gray-500' : 'bg-gray-200'}`} />
                            </motion.div>

                            {/* --- BOOK SHADOW ON SHELF --- */}
                            <div className="absolute -bottom-2 left-0 right-0 h-4 bg-black/20 blur-lg -z-10 rounded-full" />
                        </div>

                        {/* Shelf Base */}
                        <div className={`absolute bottom-11 w-[120%] h-3 rounded-full -z-10 transition-colors duration-1000`} style={{ backgroundColor: colors.shelf }} />
                    </div>
                </div>

                {/* RIGHT: TEXT CONTENT */}
                <div className="space-y-6 md:space-y-8 order-1 md:order-2 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        {/* Eyebrow - Brittany style */}
                        <p className="font-mono text-md font-bold tracking-tight mb-2" style={{ color: isDarkMode ? "#dab2ff" : "#657e86" }}>
                            Hi, my name is
                        </p>

                        {/* Name - Huge and Bold */}
                        <h2 className="text-3xl md:text-5xl font-black leading-[1.1] tracking-tighter" style={{ color: colors.text }}>
                            Avani Tejani.
                        </h2>

                        {/* Catchphrase - Muted tone */}
                        <h3 className="text-2xl md:text-xl lg:text-3xl font-black leading-[1.1] tracking-tighter opacity-40" style={{ color: colors.text }}>
                            I build things for the web.
                        </h3>
                    </motion.div>

                    <motion.p
                        className="text-sm md:text-md font-medium  leading-relaxed opacity-70"
                        style={{ color: colors.text }}
                    >
                        I’m a <span className={isDarkMode ? "text-purple-300" : "text-[#185c48]"}>Frontend Developer</span> specializing in architecting high-performance, scalable web applications. Currently, I'm focused on building clean, maintainable digital experiences using the
                        <span className="italic"> React & Next.js</span> ecosystem.
                    </motion.p>


                    {/* Modern Tagline for Skills (Optional visual flair) */}
                    <div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-wrap inline gap-3 font-mono text-xs md:text-sm opacity-50" style={{ color: colors.text }}>

                        <span >▹</span>
                        <span>Focused on Performance Optimization & API Integration</span>
                    </div>


                    <div className="flex flex-col  md:flex-col lg:flex-row gap-4 pt-4 justify-center md:justify-start">
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 md:px-10 md:py-4  rounded-xl font-black text-white transition-all text-sm tracking-widest uppercase"
                            style={{ backgroundColor: isDarkMode ? "#ae8fdb" : "#467b6c" }}
                        >
                            Check out my work!
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: isDarkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)" }}
                            className={`px-6 py-3 md:px-10 md:py-4 rounded-xl font-black border-2 transition-all text-sm tracking-widest uppercase ${isDarkMode ? 'border-white text-white' : 'border-[#467b6c] text-[#467b6c]'}`}
                        >
                            Resume
                        </motion.button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Herosection;