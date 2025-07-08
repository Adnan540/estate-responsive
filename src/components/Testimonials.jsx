import React from 'react';
import { testimonialsData } from '../assets/assets';

function Testimonials() {
  return (
    // Main container for the testimonials section
    <div id='Testimonials' className="container mx-auto py-10 lg:px-32 w-full overflow-hidden">
      
      {/* Section heading */}
      <h2 className="text-4xl sm:text-2xl font-bold mb-2 text-center">
        Customer <span className="underline underline-offset-4 decoration-1 font-extralight">Testimonials</span>
      </h2>

      {/* Section subheading/description */}
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        Real stories from those who found home with us
      </p>

      {/* Testimonial cards container - responsive layout using flex and wrap */}
      <div className="flex flex-wrap justify-center gap-6 px-4">
        {testimonialsData.map((testimonial, index) => (
          
          // Individual testimonial card
          <div
            key={index}
            className="w-full sm:w-64 md:w-72 lg:w-80 h-auto p-6 bg-white rounded-lg shadow-md flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
          >
            {/* Customer image - styled as a circular avatar */}
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 rounded-full object-cover mb-4"
            />

            {/* Customer name */}
            <h1 className="text-gray-800 font-semibold">{testimonial.name}</h1>

            {/* Customer title or role */}
            <p className="text-sm text-gray-600 mb-2">{testimonial.title}</p>

            {/* Star rating rendered dynamically based on rating number */}
            <div>
              {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                <span key={starIndex} className="text-yellow-500 text-lg">★</span>
              ))}
            </div>
            {/* Testimonial text */}
            <p className="text-gray-700 mt-4">
              {testimonial.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
