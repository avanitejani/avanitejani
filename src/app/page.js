// // import Image from "next/image";
// // // import ComingSoon from "./Components/Pages/ComingSoon";
// // import Dashboard from "./Components/Pages/Dashboard";
// // import Herosection from "./Components/Pages/Avani1";
// // // import Hero from "./Components/User/Pages/Hero";
// // // import Login from "./Components/Auth/Login";

// // export default function Home() {
// //   return (
// //     <div>

// //       {/* <ComingSoon /> */}
// //       <Herosection />

      
// //       <Dashboard />
// //     </div>
// //   );
// // }


// "use client";
// import React, { useState } from "react";
// // import Navbar from "@/components/Navbar";
// // import Herosection from "@/components/Herosection";
// import Herosection from "./Components/Pages/Avani1";
// import About from "./Components/Pages/About";
// import Contact from "./Components/Pages/Contact";
// import Experience from "./Components/Pages/Experience";
// // import About from "@/components/About";
// // import Experience from "@/components/Experience";
// // import Contact from "@/components/Contact";

// export default function Home() {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const toggleTheme = () => setIsDarkMode(!isDarkMode);

//   return (
//     <div className={`scroll-smooth ${isDarkMode ? "bg-[#2d1b36]" : "bg-[#56af96]"} transition-colors duration-1000`}>
//       {/* <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} /> */}

//       <section id="hero">
//         <Herosection isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
//       </section>

//       <section id="about">
//         <About isDarkMode={isDarkMode} />
//       </section>

//       <section id="experience">
//         <Experience isDarkMode={isDarkMode} />
//       </section>

//       <section id="contact">
//         <Contact isDarkMode={isDarkMode} />
//       </section>

//       <style jsx global>{`
//         html { scroll-behavior: smooth; }
//         body { overflow-x: hidden; }
//       `}</style>
//     </div>
//   );
// }

"use client";
import React, { useState } from "react";
import Herosection from "./Components/Pages/HeroSection";
import About from "./Components/Pages/About";
import Experience from "./Components/Pages/Experience";
import Contact from "./Components/Pages/Contact";

// import { Contact } from "lucide-react";
// import Herosection from "@/components/Herosection";
// import About from "@/components/About";
// import Experience from "@/components/Experience";
// import Contact from "@/components/Contact"; // Ye aapka naya Dashboard hai

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={`transition-colors duration-1000 ${isDarkMode ? "bg-[#2d1b36]" : "bg-[#56af96]"}`}>
      {/* Navbar ke andar hum toggle pass karenge */}
      <Herosection isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      <section id="about">
        <About isDarkMode={isDarkMode} />
      </section>

      <section id="experience">
        <Experience isDarkMode={isDarkMode} />
      </section>

      <section id="contact">
        <Contact isDarkMode={isDarkMode} />
      </section>

      <style jsx global>{`
                html { scroll-behavior: smooth; }
                body { margin: 0; padding: 0; overflow-x: hidden; }
                /* Custom Scrollbar for Theme matching */
                ::-webkit-scrollbar { width: 10px; }
                ::-webkit-scrollbar-track { background: ${isDarkMode ? "#1f1226" : "#ffffff"}; }
                ::-webkit-scrollbar-thumb { background: ${isDarkMode ? "#ae8fdb" : "#56af96"}; border-radius: 10px; }
            `}</style>
    </div>
  );
}