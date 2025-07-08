import React from 'react'
import { assets } from '../assets/assets'
const Footer = () => {
return (
    <div className="pt-10 px-4 md:px-20 lg:px-32 w-full bg-gray-900 w-full overflow-hidden" id='Footer'>

        {/* Main container for the footer section */}
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-start '>

            {/*first col*/}
            <div className='w-full md:w-1/3 mb-8 md:mb-0 '>
                <img src={assets.logo_dark} alt="" />
                <p className='text-gray-400 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium deleniti tempore optio excepturi temporibus consectetur aspernatur officia qui sint dolores facilis eaque, fugit earum eius voluptate, mollitia voluptatem animi repellat.</p>
            </div>

            {/*second col*/}
            <div className='w-full md:w-1/5 mb-8 md:mb-0' >
                <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
                <ul className='flex flex-col gap-2 text-gray-400'>
                    <a className='hover:text-white' href="#Home">Home</a>
                    <a className='hover:text-white' href="#About">About</a>
                    <a className='hover:text-white' href="#Projects">Projects</a>
                    <a className='hover:text-white' href="#Testimonials">Testimonials</a>
                    <a className='hover:text-white' href="#Contact">Contact</a>
                </ul>
            </div>

            {/*third col*/}
            <div className='w-full md:w-1/3'>
                <h3 className='text-white text-lg font-bold mb-4'>Subscribe to our newsletter </h3>
                <p className='text-gray-400 mb-4 max-w-80'>The latest news, articles and resources , sent to your inbox weekly</p>
                <div>
                    <input type="email" placeholder='Enter your email' className='w-full p-2 rounded-md text-gray-800 mb-4' />
                    <button className='bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors'>Subscribe</button>   
                </div>
            </div>
        </div>

        {/* Footer bottom section */}
        <div>
            <p className='text-gray-400 text-center mt-8'>© 2023 estate. All rights reserved.</p>
            <p className='text-gray-400 text-center'>Designed by Mohamad </p>
        </div>
    </div>
  )
}

export default Footer