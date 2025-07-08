import React, { useState } from 'react';
import leftArrow from '../assets/left_arrow.svg';
import rightArrow from '../assets/right_arrow.svg';
import { projectsData } from '../assets/assets';

const Projects = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCards = 4; // Number of cards shown at once

  const handleProjectNext = () => {
    setStartIndex((prev) => (prev + visibleCards) % projectsData.length);
  };

  const handleProjectPrev = () => {
    setStartIndex((prev) =>
      (prev - visibleCards + projectsData.length) % projectsData.length
    );
  };

  // Slice the projects to show a subset
  const displayedProjects = projectsData
    .concat(projectsData) // for looping around
    .slice(startIndex, startIndex + visibleCards);

  return (
    <div className="container mx-auto py-10 lg:px-32 w-full overflow-hidden" id="Projects">
      {/* ✅ Section title */}
      <h2 className="text-4xl sm:text-2xl font-bold mb-2 text-center">
        Projects <span className="underline underline-offset-4 decoration-1 font-extralight">Completed</span>
      </h2>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        Crafting Spaces, Building Legacies—Explore Our Portfolio
      </p>

      {/* ✅ Projects Grid */}
      <div className="flex flex-wrap justify-center gap-6 px-4">
        {displayedProjects.map((project, index) => (
          <div
            key={index}
            className="w-full sm:w-64 md:w-72 lg:w-80 h-auto p-6 bg-white rounded-lg shadow-md flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-60 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
            <p className="text-gray-600 text-sm">
              {project.price}
              <span className="ml-2 text-gray-500">{project.location}</span>
            </p>
          </div>
        ))}
      </div>

      {/* ✅ Slider buttons */}
      <div className="flex justify-center gap-4 mt-10">
        <button
          className="p-2 bg-gray-200 rounded hover:bg-gray-400 transition"
          onClick={handleProjectPrev}
          aria-label="Previous"
        >
          <img src={leftArrow} alt="Previous" className="w-4" />
        </button>
        <button
          className="p-2 bg-gray-200 rounded hover:bg-gray-400 transition"
          onClick={handleProjectNext}
          aria-label="Next"
        >
          <img src={rightArrow} alt="Next" className="w-4" />
        </button>
      </div>
    </div>
  );
};

export default Projects;





// import React, { useState } from 'react';
// import leftArrow from '../assets/left_arrow.svg';
// import rightArrow from '../assets/right_arrow.svg';
// import { projectsData } from '../assets/assets';

// const Projects = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleProjectNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
//   };

//   const handleProjectPrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + projectsData.length) % projectsData.length);
//   };

//   const project = projectsData[currentIndex];

//   return (
//     <div className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden" id="Projects">
//       {/* ✅ Section Title */}
//       <h1 className="text-lg sm:text-3xl font-extrabold mb-2">
//         Projects
//         <span className="underline underline-offset-4 decoration-1 font-extralight"> Completed</span>
//       </h1>

//       {/* ✅ Subtitle */}
//       <p className="text-gray-500 mb-6 text-center max-w-xl">
//         Crafting spaces, building legacies – explore our portfolio.
//       </p>

//       {/* ✅ Slider Buttons */}
//       <div className="flex gap-4 mt-6">
//         <button
//           className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-500 transition-colors"
//           aria-label="Previous Project"
//           onClick={handleProjectPrev}
//         >
//           <img src={leftArrow} alt="Left arrow" />
//         </button>
//         <button
//           className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-500 transition-colors"
//           aria-label="Next Project"
//           onClick={handleProjectNext}
//         >
//           <img src={rightArrow} alt="Right arrow" />
//         </button>
//       </div>

//       {/* ✅ Active Project */}
//       <div className="mt-10 w-full max-w-md mx-auto">
//         <div className="relative w-full">
//           {/* Project Image */}
//           <img
//             src={project.image}
//             alt={project.title}
//             className="w-full h-48 object-cover rounded-lg shadow-md"
//           />

//           {/* Project Info Overlay */}
//           <div className="absolute left-1/2 -translate-x-1/2 bottom-4 bg-white w-5/6 px-4 py-3 shadow-lg rounded-md text-center">
//             <h2 className="text-lg font-semibold text-gray-800">{project.title}</h2>
//             <p className="text-sm text-gray-600">
//               {project.price}
//               <span className="ml-2 text-gray-500">{project.location}</span>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;
