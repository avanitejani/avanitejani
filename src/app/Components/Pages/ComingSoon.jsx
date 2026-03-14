import React from 'react';
import { LuRocket, LuSparkles } from 'react-icons/lu';

const ComingSoon = () => {
    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-[#050505] font-montserrat flex items-center justify-center p-6">

            {/* --- BACKGROUND BLOBS (High-End Mesh Gradient) --- */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* The "Sun" Glow */}
                <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/20 blur-[150px] rounded-full opacity-50" />

                {/* Subtle Accents */}
                <div className="absolute bottom-[10%] left-[10%] w-72 h-72 bg-purple-600/10 blur-[120px] rounded-full" />
                <div className="absolute top-[30%] right-[10%] w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full" />

                {/* Fine Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.05]"
                    style={{ backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />
            </div>

            {/* --- MAIN CONTENT --- */}
            <div className="relative z-10 flex flex-col items-center">

                {/* Floating Icon Centerpiece */}
                <div className="relative group mb-12">
                    {/* Animated Glow Backlight */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-cyan-400 blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 animate-pulse" />

                    <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center rounded-[40px] bg-neutral-900 border border-white/10 shadow-2xl floating">
                        <LuRocket className="w-16 h-16 md:w-20 md:h-20 text-white -rotate-12 transition-transform group-hover:scale-110 duration-500" />

                        {/* Small accent stars */}
                        <LuSparkles className="absolute top-6 right-6 text-cyan-400 animate-pulse" />
                        <div className="absolute bottom-8 left-8 w-2 h-2 bg-purple-500 rounded-full animate-ping" />
                    </div>
                </div>

                {/* Text Section */}
                <div className="text-center space-y-6">
                    <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">Under Construction</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white">
                        Coming <span className="gradient-text">Soon</span>
                    </h1>

                    <p className="text-slate-500 text-base md:text-lg max-w-lg mx-auto font-medium leading-relaxed">
                        We are hand-crafting a brand new digital experience.
                        The wait will be worth it.
                    </p>
                </div>

                {/* Minimalist Bottom Indicator */}
                <div className="mt-20 flex flex-col items-center gap-4">
                    <div className="w-[1px] h-12 bg-gradient-to-b from-cyan-500 to-transparent" />
                    <span className="text-[10px] font-semibold text-slate-600 uppercase tracking-[0.5em]">Avani Tejani 2026</span>
                </div>

            </div>

            {/* Corner Accents */}
            <div className="absolute bottom-10 left-10 hidden lg:block">
                <div className="text-white/10 text-xs font-mono">
                    LOG_STATUS: COMPILING_ASSETS<br />
                    ENV: PRODUCTION_BUILD
                </div>
            </div>

        </div>
    );
};

export default ComingSoon;