import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  // Helper function for redirect
  const handleRedirect = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
      
          <div
            ref={rydeRef}
            className="first-project-wrapper cursor-pointer"
            onClick={() => handleRedirect("https://drawceptiion.vercel.app/")}
          >
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Drawception Interface" />
            </div>
            <div className="text-content">
              <h2>User-Friendly canvas, draw and clear canvas easily.</h2>
              <p className="text-white-50 md:text-xl">
                An app built with Nextjs, Tailwindcss, Websockets for a fast,
                user-friendly experience.
              </p>
              <p className="text-white-50 md:text-lg mt-2">
                <strong>Tech Stack:</strong> Next.js, TailwindCSS, WebSockets, Nodejs, Typescript
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
           
            <div
              className="project cursor-pointer"
              ref={libraryRef}
              onClick={() => handleRedirect("https://nikehome.vercel.app/")}
            >
              <div className="image-wrapper bg-[#FFEFDB]">
                <img src="/images/project2.png" alt="Nike Home Page" />
              </div>
              <h2>Nike Home Page</h2>
            
              <p className="text-white-50 md:text-lg mt-2">
                <strong>Tech Stack:</strong> Reactjs, TailwindCSS
              </p>
            </div>

            <div
              className="project cursor-pointer"
              ref={ycDirectoryRef}
              onClick={() => handleRedirect("https://findmovies-steel.vercel.app/")}
            >
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/project3.png" alt="Find Movies App" />
              </div>
              <h2>FindMovies - Search Place for Movies</h2>
              <p className="text-white-50 md:text-lg mt-2">
                <strong>Tech Stack:</strong> Reactjs, TMDB API, TailwindCSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;



// import { useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger);

// const AppShowcase = () => {
//   const sectionRef = useRef(null);
//   const rydeRef = useRef(null);
//   const libraryRef = useRef(null);
//   const ycDirectoryRef = useRef(null);

//   useGSAP(() => {
//     // Animation for the main section
//     gsap.fromTo(
//       sectionRef.current,
//       { opacity: 0 },
//       { opacity: 1, duration: 1.5 }
//     );

//     // Animations for each app showcase
//     const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

//     cards.forEach((card, index) => {
//       gsap.fromTo(
//         card,
//         {
//           y: 50,
//           opacity: 0,
//         },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 1,
//           delay: 0.3 * (index + 1),
//           scrollTrigger: {
//             trigger: card,
//             start: "top bottom-=100",
//           },
//         }
//       );
//     });
//   }, []);

//   return (
//     <div id="work" ref={sectionRef} className="app-showcase">
//       <div className="w-full">
//         <div className="showcaselayout">
//           <div ref={rydeRef} className="first-project-wrapper">
//             <div className="image-wrapper">
//               <img src="/images/project1.png" alt="Drawception Interface" />
//             </div>
//             <div className="text-content">
//               <h2>
//                 User-Friendly canvas, draw and clear canvas easily.
//               </h2>
//               <p className="text-white-50 md:text-xl">
//                 An app built with Nextjs, Tailwindcss, Websockets for a fast,
//                 user-friendly experience.
//               </p>
//             </div>
//           </div>

//           <div className="project-list-wrapper overflow-hidden">
//             <div className="project" ref={libraryRef}>
//               <div className="image-wrapper bg-[#FFEFDB]">
//                 <img
//                   src="/images/project2.png"
//                   alt="Nike Home Page"
//                 />
//               </div>
//               <h2>Nike Home Page</h2>
//             </div>

//             <div className="project" ref={ycDirectoryRef}>
//               <div className="image-wrapper bg-[#FFE7EB]">
//                 <img src="/images/project3.png" alt="Find Movies App" />
//               </div>
//               <h2>FindMovies - Search Place for Movies</h2>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AppShowcase;
