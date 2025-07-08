import React from 'react';
import brandImage from '../assets/brand_img.png'; // ✅ Import the brand image

const About = () => {
  return (
    // ✅ Outer container for the About section
    <div
      id="About"
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
    >
      {/* ✅ Section title */}
      <h1 className="text-lg sm:text-3xl font-extrabold mb-2">
        About
        <span className="underline underline-offset-4 decoration-1 font-extralight">
          {' '}
          ourbrand
        </span>
      </h1>

      {/* ✅ Subtitle paragraph with gray text and centered */}
      <p className="text-gray-500 text-center max-w-md mb-3">
        Passionate about Properties, Dedicated to your vision
      </p>

      {/* ✅ Flex container: image on the left, content on the right (on large screens) */}
      <div className="flex flex-col md:flex-row items-stretch md:gap-10 min-h-[500px] w-full">
  {/* Left Side: Full-height Image */}
  <div className="w-full md:w-1/2 h-full">
    <img
      src={brandImage}
      alt="Our brand"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Right Side: Text Content */}
  <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center text-gray-600 p-4 md:p-0 mt-10 md:mt-0">
    {/* Info Boxes */}
    <div className="grid grid-cols-2 gap-4 mb-6 w-full 2xl:pr-28">
      <p className="text-4xl font-medium">+10</p>
      <p>years of Excellence</p>
    </div>
    <div className="grid grid-cols-2 gap-4 mb-6 w-full 2xl:pr-28">
      <p className="text-4xl font-medium">+12</p>
      <p>ongoing Projects</p>
    </div>
    <div className="grid grid-cols-2 gap-4 mb-6 w-full 2xl:pr-28">
      <p className="text-4xl font-medium">+20</p>
      <p>happy Clients</p>
    </div>
    <div className="grid grid-cols-2 gap-4 mb-6 w-full 2xl:pr-28">
      <p className="text-4xl font-medium">+25</p>
      <p>completed Projects</p>
    </div>
    
    {/* Paragraph & Button */}
    <p className="my-2">
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, aliquam illum, sint cum quas quae earum in laborum quo consectetur inventore, quaerat dolores harum amet. Laborum assumenda explicabo iure labore.
    </p>
    <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
      Learn more
    </button>
  </div>
</div>

    </div>
  );
};

export default About;
