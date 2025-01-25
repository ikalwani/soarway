// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { 
//   ChevronRight, Heart, Users, Target, ArrowRight, Globe, 
//   Feather, Wind 
// } from 'lucide-react';



// // SoarAway Logo Component
// const SoarAwayLogo = ({
//   className,
//   size = "w-24 h-24",
//   textSize = "text-4xl",
// }) => (
//   <div className={`flex items-center ${className}`}>
//     <svg viewBox="0 0 100 100" className={`${size} mr-4`}>
//       <path
//         d="M50 10 L90 50 L50 90 L10 50 Z"
//         fill="#FFA500"
//         stroke="#FF6347"
//         strokeWidth="5"
//       />
//       <path d="M50 30 L75 50 L50 70 L25 50 Z" fill="#FFD700" />
//     </svg>
//     <span className={`font-bold text-yellow-600 ${textSize}`}>SoarAway</span>
//   </div>
// );
// const AfricanTexture = () => (
//   <svg
//     className="absolute inset-0 w-full h-full opacity-10"
//     viewBox="0 0 100 100"
//   >
//     <defs>
//       <pattern
//         id="african-pattern"
//         patternUnits="userSpaceOnUse"
//         width="20"
//         height="20"
//       >
//         <rect width="20" height="20" fill="#F5D4A0" />
//         <path
//           d="M0 0L10 10L0 20ZM10 0L20 10L10 20ZM20 0L30 10L20 20Z"
//           fill="#E7B887"
//           opacity="0.5"
//         />
//       </pattern>
//     </defs>
//     <rect width="100%" height="100%" fill="url(#african-pattern)" />
//   </svg>
// );

// // African Pattern Background
// const AfricanPatternBackground = () => (
//   <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100">
//     <pattern id="african-pattern" patternUnits="userSpaceOnUse" width="20" height="20">
//       <path d="M0 0h20v20H0z" fill="none" />
//       <path d="M10 0l10 10-10 10L0 10z" fill="currentColor" />
//     </pattern>
//     <rect width="100%" height="100%" fill="url(#african-pattern)" />
//   </svg>
// );

// // Enhanced Flying Birds
// const FlyingBirds = () => {
//   return [...Array(10)].map((_, i) => (
//     <motion.div
//       key={i}
//       className="fixed z-0 pointer-events-none"
//       style={{
//         left: `-100px`,
//         top: `${Math.random() * 100}%`,
//       }}
//       initial={{ 
//         x: -100,
//         y: Math.random() * window.innerHeight,
//         opacity: 0.6,
//       }}
//       animate={{
//         x: window.innerWidth + 100,
//         y: [
//           Math.random() * window.innerHeight,
//           Math.random() * window.innerHeight,
//           Math.random() * window.innerHeight
//         ],
//         opacity: [0.6, 1, 0.6],
//         transition: {
//           duration: 15 + Math.random() * 10,
//           repeat: Infinity,
//           ease: "linear",
//         },
//       }}
//     >
//       <svg
//         viewBox="0 0 24 24"
//         className="w-8 h-8 text-yellow-400/30"
//         fill="none"
//         stroke="currentColor"
//       >
//         <path
//           d="M4 12h2c3.5-3.5 7-3.5 18-3.5v-2c-11 0-18 0-20 5.5zM4 14h2c3.5 3.5 7 3.5 18 3.5v2c-11 0-18 0-20-5.5z"
//           strokeWidth="1.5"
//         />
//       </svg>
//     </motion.div>
//   ));
// };

// // Donation Impact Section
// const DonationImpact = () => (
//   <section className="bg-yellow-50 py-16">
//     <div className="container mx-auto px-6">
//       <h2 className="text-4xl font-bold text-center mb-12">
//         Your Donation Changes Lives
//       </h2>
//       <div className="grid md:grid-cols-3 gap-8">
//         {[
//           {
//             amount: "$50",
//             impact: "Provides mentorship for one youth for a month",
//             icon: Users,
//           },
//           {
//             amount: "$100",
//             impact: "Supports leadership training for 5 young leaders",
//             icon: Target,
//           },
//           {
//             amount: "$500",
//             impact: "Funds a comprehensive youth development program",
//             icon: Heart,
//           },
//         ].map((tier, index) => (
//           <motion.div
//             key={index}
//             className="bg-white shadow-lg rounded-xl p-8 text-center"
//             whileHover={{ scale: 1.05 }}
//           >
//             <tier.icon className="mx-auto w-12 h-12 text-yellow-500 mb-4" />
//             <h3 className="text-3xl font-bold text-yellow-600 mb-4">
//               {tier.amount}
//             </h3>
//             <p className="text-gray-600">{tier.impact}</p>
//           </motion.div>
//         ))}
//       </div>
//       <div className="text-center mt-12">
//         <button className="bg-yellow-500 text-white px-12 py-4 rounded-full text-xl font-bold hover:bg-yellow-600 transition">
//           Donate Now and Make a Difference
//         </button>
//       </div>
//     </div>
//   </section>
// );

// const HomePage = () => {
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="w-full overflow-hidden relative">
//       <FlyingBirds />

//       {/* Hero Section with Dynamic Elements */}
//       <section className="relative min-h-screen bg-gradient-to-br from-orange-500 via-yellow-500 to-red-500">
//         <div className="absolute inset-0 bg-black/40" />
//         <AfricanPatternBackground />

//         <div className="relative z-10 container mx-auto px-6 h-screen flex flex-col justify-center">
//           <SoarAwayLogo className="mb-8" />

//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="max-w-4xl flex items-center"
//           >
//             <div className="w-2/3 pr-12">
//               <h1 className="text-7xl font-bold mb-8 text-white leading-tight">
//                 Unleashing the Spirit of
//                 <span className="block text-yellow-400">Africa's Youth</span>
//               </h1>

//               <div className="flex items-center space-x-8 mb-12">
//                 <div className="w-24 h-1 bg-yellow-400" />
//                 <p className="text-xl text-white max-w-2xl">
//                   Nurturing creative, ethical leaders who will transform
//                   Africa's future through education, mentorship, and cultural
//                   empowerment.
//                 </p>
//               </div>

//               <div className="flex gap-6">
//                 <button className="group bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-full font-semibold text-lg flex items-center">
//                   Make An Impact
//                   <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//                 </button>
//                 <button className="group border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center hover:bg-white/10">
//                   Our Programs
//                   <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
//                 </button>
//               </div>
//             </div>

//             <div className="w-1/3">
//               <img
//                 src="./african-youth.jpg"
//                 alt="African youth empowerment"
//                 className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
//               />
//             </div>
//           </motion.div>
//         </div>

//         {/* Animated Statistics Overlay */}
//         <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white backdrop-blur-md">
//           <div className="container mx-auto px-6 py-8">
//             <div className="grid grid-cols-4 gap-8">
//               {[
//                 { icon: Users, count: "50,000+", label: "Youth Impacted" },
//                 { icon: Globe, count: "25", label: "Districts" },
//                 { icon: Target, count: "400", label: "Schools" },
//                 { icon: Heart, count: "14", label: "Years of Impact" },
//               ].map((stat, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.2 }}
//                   className="text-center"
//                 >
//                   <stat.icon className="w-8 h-8 mx-auto mb-4 text-yellow-400" />
//                   <h3 className="text-4xl font-bold mb-2">{stat.count}</h3>
//                   <p className="text-gray-400">{stat.label}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Vision Section */}
//       <section className="py-24 bg-white relative overflow-hidden">
//         <div className="container mx-auto px-6">
//           <div className="grid grid-cols-2 gap-16 items-center">
//             <div>
//               <h2 className="text-5xl font-bold mb-8 leading-tight">
//                 Crafting the Africa
//                 <span className="text-yellow-500"> of Our Dreams</span>
//               </h2>
//               <p className="text-xl text-gray-600 mb-8">
//                 We dream of an Africa where every child is free to imagine,
//                 create, and achieve. Where young people, deeply rooted in their
//                 identity, find the support to live purposeful lives.
//               </p>
//               <div className="space-y-6">
//                 {[
//                   "Leadership Development",
//                   "Cultural Empowerment",
//                   "Creative Expression",
//                   "Ethical Foundation",
//                 ].map((item, index) => (
//                   <motion.div
//                     key={index}
//                     className="flex items-center space-x-4"
//                     initial={{ opacity: 0, x: -20 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ delay: index * 0.2 }}
//                   >
//                     <div className="w-2 h-2 rounded-full bg-yellow-500" />
//                     <p className="text-lg font-semibold">{item}</p>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//             <div className="relative">
//               <img
//                 src="/api/placeholder/600/800"
//                 alt="African youth in action"
//                 className="rounded-2xl shadow-2xl"
//               />
//               <div className="absolute -bottom-8 -left-8 bg-yellow-400 p-8 rounded-xl">
//                 <h3 className="text-3xl font-bold mb-2">197+</h3>
//                 <p className="text-lg">Active Mentors</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Programs Section */}
//       <section className="py-24 bg-gray-900 text-white relative">
//         <AfricanPatternBackground />
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-5xl font-bold mb-6">Our Programs</h2>
//             <p className="text-xl text-gray-400 max-w-2xl mx-auto">
//               Comprehensive initiatives designed to nurture leadership,
//               creativity, and ethical development.
//             </p>
//           </div>

//           <div className="grid grid-cols-3 gap-8">
//             {[
//               {
//                 title: "Archers' League",
//                 description:
//                   "Elite leadership development program for exceptional young talents.",
//                 icon: Target,
//                 color: "yellow",
//               },
//               {
//                 title: "Change Week",
//                 description:
//                   "Intensive transformation program focusing on community impact.",
//                 icon: Users,
//                 color: "orange",
//               },
//               {
//                 title: "Soar Mentorship",
//                 description:
//                   "One-on-one guidance from experienced leaders and professionals.",
//                 icon: Heart,
//                 color: "red",
//               },
//             ].map((program, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.2 }}
//                 className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all cursor-pointer group"
//               >
//                 <div
//                   className={`w-16 h-16 rounded-xl bg-${program.color}-500/20 flex items-center justify-center mb-6`}
//                 >
//                   <program.icon
//                     className={`w-8 h-8 text-${program.color}-400`}
//                   />
//                 </div>
//                 <h3 className="text-2xl font-bold mb-4">{program.title}</h3>
//                 <p className="text-gray-400 mb-6">{program.description}</p>
//                 <a
//                   href="#"
//                   className="flex items-center text-yellow-400 font-semibold group-hover:text-yellow-300"
//                 >
//                   Learn More
//                   <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
//                 </a>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <DonationImpact />

//       {/* Impact Stories Section */}
//       <section className="py-24 bg-white">
//         <div className="container mx-auto px-6">
//           <h2 className="text-5xl font-bold mb-16 text-center">
//             Impact Stories
//           </h2>
//           <div className="grid grid-cols-2 gap-16">
//             {[
//               {
//                 name: "Churchill Onyait",
//                 role: "Public Speaker & Coach",
//                 quote:
//                   "Through the Archers' League, I found my voice and purpose in transforming lives.",
//                 image: "/api/placeholder/400/500",
//                 story: `Churchill's journey began in his last year of high school when he attended the Archers' League. This pivotal experience not only honed his public speaking skills but also ignited his passion for community transformation. 

//           Winning numerous speaking tournaments across Uganda and Africa, Churchill leveraged his voice to address critical issues like corruption and social reforms. He went on to found 'Friends of Churchill', an organization that brings together speakers and judges from across the African continent.

//           Collaborating with fellow Archer Tyra, he developed a free mentorship program that cultivates civic consciousness and develops public speaking skills among emerging talents.`,
//               },
//               {
//                 name: "Tyra Kabugo",
//                 role: "Poet & Leader",
//                 quote:
//                   "SoarAway helped me channel my creativity into meaningful change for Africa.",
//                 image: "/api/placeholder/400/500",
//                 story: `At just 19 years old, Tyra Kabugo has become a beacon of hope and creativity. A passionate poet and leader, she took on the leadership of The Archers' League and now directs operations at SoarAway.

//           Her journey with SoarAway transformed her artistic expression from a personal passion to a tool for societal change. Through the mentorship program, Tyra learned to use her creativity as a powerful medium for storytelling and social impact.

//           Her work has already impacted thousands of lives, demonstrating the potential of young African leaders to drive meaningful transformation.`,
//               },
//             ].map((story, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 className="relative group"
//               >
//                 <div className="relative overflow-hidden rounded-2xl">
//                   <img
//                     src={story.image}
//                     alt={story.name}
//                     className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-500"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
//                   <div className="absolute bottom-0 left-0 right-0 p-8">
//                     <blockquote className="text-white text-xl mb-4">
//                       "{story.quote}"
//                     </blockquote>
//                     <h3 className="text-2xl font-bold text-white mb-2">
//                       {story.name}
//                     </h3>
//                     <p className="text-gray-300">{story.role}</p>
//                   </div>
//                 </div>
//                 <div className="mt-6 text-gray-700">
//                   <p>{story.story}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="py-24 bg-gradient-to-br from-yellow-500 to-orange-500 relative">
//         <AfricanPatternBackground />
//         <div className="container mx-auto px-6 text-center relative z-10">
//           <h2 className="text-5xl font-bold text-white mb-8">
//             Join Us in Shaping Africa's Future
//           </h2>
//           <p className="text-xl text-white/90 max-w-2xl mx-auto mb-12">
//             Your support empowers the next generation of African leaders.
//             Together, we can create lasting change.
//           </p>
//           <button className="bg-white text-yellow-500 px-12 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition-colors">
//             Make Your Impact Today
//           </button>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white py-16">
//         <div className="container mx-auto px-6">
//           <div className="grid md:grid-cols-4 gap-8">
//             <div>
//               <SoarAwayLogo textColor="text-white" className="mb-6" />
//               <p className="text-gray-400">
//                 Nurturing Africa's youth to become ethical, creative leaders who
//                 transform communities.
//               </p>
//             </div>
//             <div>
//               <h4 className="text-xl font-bold mb-6">Quick Links</h4>
//               <ul className="space-y-4">
//                 <li>
//                   <a href="#" className="hover:text-yellow-400">
//                     About Us
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-yellow-400">
//                     Programs
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-yellow-400">
//                     Impact Stories
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:text-yellow-400">
//                     Donate
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="text-xl font-bold mb-6">Contact</h4>
//               <ul className="space-y-4">
//                 <li>Email: info@soaraway.org</li>
//                 <li>Phone: +256 123 456 789</li>
//                 <li>Address: Kampala, Uganda</li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="text-xl font-bold mb-6">Follow Us</h4>
//               <div className="flex space-x-4">
//                 <a href="#" className="text-white hover:text-yellow-400">
//                   Facebook
//                 </a>
//                 <a href="#" className="text-white hover:text-yellow-400">
//                   Twitter
//                 </a>
//                 <a href="#" className="text-white hover:text-yellow-400">
//                   Instagram
//                 </a>
//               </div>
//               <div className="mt-6">
//                 <button className="bg-yellow-500 text-black px-8 py-3 rounded-full hover:bg-yellow-400 transition">
//                   Subscribe to Newsletter
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="border-t border-gray-800 mt-12 pt-8 text-center">
//             <p className="text-gray-400">
//               © {new Date().getFullYear()} SoarAway. All Rights Reserved.
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default HomePage;




import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ChevronRight,
  Heart,
  Users,
  Target,
  ArrowRight,
  Globe,
  Feather,
  Wind,
  Compass,
  Brush
} from "lucide-react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

// SoarAway Logo Component
const SoarAwayLogo = ({
  className,
  size = "w-32 h-32",
  textSize = "text-5xl",
}) => (
  <div className={`flex items-center ${className}`}>
    <img src="./s.ico" alt="SoarAway" className="w-32 h-32 mr-4" />
    <span className={`font-bold text-yellow-600 ${textSize}`}>SoarAway</span>
  </div>
);

// African Texture Background
const AfricanTexture = () => (
  <svg 
    className="absolute inset-0 w-full h-full opacity-10" 
    viewBox="0 0 100 100"
  >
    <defs>
      <pattern 
        id="african-pattern" 
        patternUnits="userSpaceOnUse" 
        width="20" 
        height="20"
      >
        <rect width="20" height="20" fill="#F5D4A0" />
        <path 
          d="M0 0L10 10L0 20ZM10 0L20 10L10 20ZM20 0L30 10L20 20Z" 
          fill="#E7B887" 
          opacity="0.5"
        />
      </pattern>
    </defs>
    <rect 
      width="100%" 
      height="100%" 
      fill="url(#african-pattern)" 
    />
  </svg>
);


const CraftingTheAfricaOfOurDreams = () => (
  <section className="py-24 bg-white relative overflow-hidden">
    <div className="container mx-auto px-6">
      <h2 className="text-5xl font-bold mb-8 leading-tight">
        Crafting the Africa
        <span className="text-yellow-500"> of Our Dreams</span>
      </h2>
      <p className="text-xl text-gray-600 mb-8">
        We dream of an Africa where every child is free to imagine, create, and
        achieve. Where young people, deeply rooted in their identity, find the
        support to live purposeful lives.
      </p>
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <Feather className="w-6 h-6 text-yellow-500" />
            <p className="text-lg font-semibold">Leadership Development</p>
          </div>
          <div className="flex items-center space-x-4">
            <Compass className="w-6 h-6 text-yellow-500" />
            <p className="text-lg font-semibold">Cultural Empowerment</p>
          </div>
          <div className="flex items-center space-x-4">
            <Brush className="w-6 h-6 text-yellow-500" />
            <p className="text-lg font-semibold">Creative Expression</p>
          </div>
          <div className="flex items-center space-x-4">
            <Globe className="w-6 h-6 text-yellow-500" />
            <p className="text-lg font-semibold">Ethical Foundation</p>
          </div>
        </div>
        <div className="relative">
          {/* <img
            src="/"
            className="rounded-2xl shadow-2xl"
          /> */}
          <div className="absolute -bottom-8 -left-8 bg-yellow-400 p-8 rounded-xl">
            <h3 className="text-3xl font-bold mb-2">197+</h3>
            <p className="text-lg">Active Mentors</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// African Pattern Background
const AfricanPatternBackground = () => (
  <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100">
    <pattern id="african-pattern" patternUnits="userSpaceOnUse" width="20" height="20">
      <path d="M0 0h20v20H0z" fill="none" />
      <path d="M10 0l10 10-10 10L0 10z" fill="currentColor" />
    </pattern>
    <rect width="100%" height="100%" fill="url(#african-pattern)" />
  </svg>
);

// Enhanced Flying Birds
const FlyingBirds = () => {
  return [...Array(10)].map((_, i) => (
    <motion.div
      key={i}
      className="fixed z-0 pointer-events-none"
      style={{
        left: `-100px`,
        top: `${Math.random() * 100}%`,
      }}
      initial={{ 
        x: -100,
        y: Math.random() * window.innerHeight,
        opacity: 0.6,
      }}
      animate={{
        x: window.innerWidth + 100,
        y: [
          Math.random() * window.innerHeight,
          Math.random() * window.innerHeight,
          Math.random() * window.innerHeight
        ],
        opacity: [0.6, 1, 0.6],
        transition: {
          duration: 15 + Math.random() * 10,
          repeat: Infinity,
          ease: "linear",
        },
      }}
    >
      <svg
        viewBox="0 0 24 24"
        className="w-8 h-8 text-yellow-400/30"
        fill="none"
        stroke="currentColor"
      >
        <path
          d="M4 12h2c3.5-3.5 7-3.5 18-3.5v-2c-11 0-18 0-20 5.5zM4 14h2c3.5 3.5 7 3.5 18 3.5v2c-11 0-18 0-20-5.5z"
          strokeWidth="1.5"
        />
      </svg>
    </motion.div>
  ));
};

// Donation Impact Section
const DonationImpact = () => (
  <section className="bg-yellow-50 py-16">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-12">
        Your Donation Changes Lives
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            amount: "$50",
            impact: "Provides mentorship for one youth for a month",
            icon: Users,
          },
          {
            amount: "$100",
            impact: "Supports leadership training for 5 young leaders",
            icon: Target,
          },
          {
            amount: "$500",
            impact: "Funds a comprehensive youth development program",
            icon: Heart,
          },
        ].map((tier, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-xl p-8 text-center"
            whileHover={{ scale: 1.05 }}
          >
            <tier.icon className="mx-auto w-12 h-12 text-yellow-500 mb-4" />
            <h3 className="text-3xl font-bold text-yellow-600 mb-4">
              {tier.amount}
            </h3>
            <p className="text-gray-600">{tier.impact}</p>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-12">
        <button className="bg-yellow-500 text-white px-12 py-4 rounded-full text-xl font-bold hover:bg-yellow-600 transition">
          Donate Now and Make a Difference
        </button>
      </div>
    </div>
  </section>
);

const HomePage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full overflow-hidden relative">
      <FlyingBirds />
      <header className="py-6 bg-gradient-to-br from-orange-500 via-[#E6B44C] to-[#E08000] text-white">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <SoarAwayLogo />
          <nav>
            <ul className="flex space-x-8">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Programs</a>
              </li>
              <li>
                <a href="#">Impact</a>
              </li>
              <li>
                <a href="/donate">Donate</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section with Dynamic Elements */}
      <section className="relative min-h-screen bg-gradient-to-br from-orange-500 via-[#E6B44C] to-[#E08000]">
        <div className="absolute inset-0 bg-black/40" />
        <AfricanTexture />

        <div className="relative z-10 container mx-auto px-6 h-screen flex items-center justify-between">
          <div className="w-2/3 pr-12">
            <div className="flex items-center space-x-8 mb-8">
              <div className="w-24 h-1 bg-[#FFCD00]"></div>
              <h1 className="text-6xl font-bold text-white leading-tight">
                Unleashing the Spirit of Africa's Youth
              </h1>
            </div>
            <p className="text-xl text-white max-w-2xl mb-12">
              Nurturing creative, ethical leaders who will transform Africa's
              future through education, mentorship, and cultural empowerment.
            </p>
            <div className="flex gap-6">
              <button className="group bg-[#FFCD00] hover:bg-[#FFDD66] text-black px-8 py-4 rounded-full font-semibold text-lg flex items-center">
                Make An Impact
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform w-6 h-6" />
              </button>
              <button className="group border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center hover:bg-white/10">
                Our Programs
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform w-6 h-6" />
              </button>
            </div>
          </div>
          <div className="w-1/3">
            <img
              src="./african-youth.jpg"
              alt="African youth empowerment"
              className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Animated Statistics Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white backdrop-blur-md py-8">
          <div className="container mx-auto px-6 grid grid-cols-4 gap-8">
            <div className="text-center">
              <Users className="w-8 h-8 mx-auto mb-4 text-[#FFCD00]" />
              <h3 className="text-4xl font-bold mb-2">50,000+</h3>
              <p className="text-gray-400">Youth Impacted</p>
            </div>
            <div className="text-center">
              <Globe className="w-8 h-8 mx-auto mb-4 text-[#FFCD00]" />
              <h3 className="text-4xl font-bold mb-2">25</h3>
              <p className="text-gray-400">Districts</p>
            </div>
            <div className="text-center">
              <Target className="w-8 h-8 mx-auto mb-4 text-[#FFCD00]" />
              <h3 className="text-4xl font-bold mb-2">400</h3>
              <p className="text-gray-400">Schools</p>
            </div>
            <div className="text-center">
              <Heart className="w-8 h-8 mx-auto mb-4 text-[#FFCD00]" />
              <h3 className="text-4xl font-bold mb-2">14</h3>
              <p className="text-gray-400">Years of Impact</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <CraftingTheAfricaOfOurDreams />

      {/* Programs Section */}
      <section className="py-24 bg-gray-900 text-white relative">
        <AfricanPatternBackground />
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Our Programs</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive initiatives designed to nurture leadership,
              creativity, and ethical development.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {[
              {
                title: "Archers' League",
                description:
                  "Elite leadership development program for exceptional young talents.",
                icon: Target,
                color: "yellow",
              },
              {
                title: "Change Week",
                description:
                  "Intensive transformation program focusing on community impact.",
                icon: Users,
                color: "orange",
              },
              {
                title: "Soar Mentorship",
                description:
                  "One-on-one guidance from experienced leaders and professionals.",
                icon: Heart,
                color: "red",
              },
            ].map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all cursor-pointer group"
              >
                <div
                  className={`w-16 h-16 rounded-xl bg-${program.color}-500/20 flex items-center justify-center mb-6`}
                >
                  <program.icon
                    className={`w-8 h-8 text-${program.color}-400`}
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4">{program.title}</h3>
                <p className="text-gray-400 mb-6">{program.description}</p>
                <a
                  href="#"
                  className="flex items-center text-yellow-400 font-semibold group-hover:text-yellow-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <DonationImpact />
      {/* Impact Stories Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold mb-16 text-center">
            Impact Stories
          </h2>
          <div className="grid grid-cols-2 gap-16">
            {[
              {
                name: "Churchill Onyait",
                role: "Public Speaker & Coach",
                quote:
                  "Through the Archers' League, I found my voice and purpose in transforming lives.",
                image: "./yo.jpg",
                story: `Churchill's journey began in his last year of high school when he attended the Archers' League. This pivotal experience not only honed his public speaking skills but also ignited his passion for community transformation. 

Winning numerous speaking tournaments across Uganda and Africa, Churchill leveraged his voice to address critical issues like corruption and social reforms. He went on to found 'Friends of Churchill', an organization that brings together speakers and judges from across the African continent.

Collaborating with fellow Archer Tyra, he developed a free mentorship program that cultivates civic consciousness and develops public speaking skills among emerging talents.`,
              },
              {
                name: "Tyra Kabugo",
                role: "Poet & Leader",
                quote:
                  "SoarAway helped me channel my creativity into meaningful change for Africa.",
                image: "./yo1.jpg",
                story: `At just 19 years old, Tyra Kabugo has become a beacon of hope and creativity. A passionate poet and leader, she took on the leadership of The Archers' League and now directs operations at SoarAway.

Her journey with SoarAway transformed her artistic expression from a personal passion to a tool for societal change. Through the mentorship program, Tyra learned to use her creativity as a powerful medium for storytelling and social impact.

Her work has already impacted thousands of lives, demonstrating the potential of young African leaders to drive meaningful transformation.`,
              },
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="relative group"
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <blockquote className="text-white text-xl mb-4">
                      "{story.quote}"
                    </blockquote>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {story.name}
                    </h3>
                    <p className="text-gray-300">{story.role}</p>
                  </div>
                </div>
                <div className="mt-6 text-gray-700">
                  <p>{story.story}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-br from-yellow-500 to-orange-500 relative">
        <AfricanTexture />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl font-bold text-white mb-8">
            Join Us in Shaping Africa's Future
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-12">
            Your support empowers the next generation of African leaders.
            Together, we can create lasting change.
          </p>
          <button className="bg-white text-yellow-500 px-12 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition-colors">
            Make Your Impact Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <p className="text-gray-400">
                Nurturing Africa's youth to become ethical, creative leaders who
                transform communities.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="hover:text-yellow-400">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400">
                    Programs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400">
                    Impact Stories
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-400">
                    Donate
                  </a>
                </li>
              </ul>
            </div>
            {
              <div>
                <h4 className="text-xl font-bold mb-6">Contact</h4>
                <ul className="space-y-4">
                  <li>Email: info@soaraway.org</li>
                  <li>Phone: +256 123 456 789</li>
                  <li>Address: Kampala, Uganda</li>
                </ul>
              </div>
            }
            {
              <div>
                <h4 className="text-xl font-bold mb-6">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-white hover:text-yellow-400">
                    Facebook
                  </a>
                  <a href="#" className="text-white hover:text-yellow-400">
                    Twitter
                  </a>
                  <a href="#" className="text-white hover:text-yellow-400">
                    Instagram
                  </a>
                </div>
                <div className="mt-6">
                  <button className="bg-yellow-500 text-black px-8 py-3 rounded-full hover:bg-yellow-400 transition">
                    Subscribe to Newsletter
                  </button>
                </div>
              </div>
            }
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} SoarAway. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;