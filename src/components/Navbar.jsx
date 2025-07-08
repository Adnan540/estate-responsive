import React from 'react'
import logo from '../assets/logo.svg'

const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 w-full z-10 bg-black bg-opacity-20">
      <div className="flex items-center justify-between px-6 py-4">
        <img src={logo} alt="logo" className="w-32" />

        {/*Navigation menus*/}
        <ul className="hidden md:flex gap-6 text-white">
          <a href="#Header" className="cursor-pointer hover:text-gray-400">Home</a>
          <a href="#About" className="cursor-pointer hover:text-gray-400">About</a>
          <a href="#Projects" className="cursor-pointer hover:text-gray-400">Projects</a>
          <a href="#Testimonials" className="cursor-pointer hover:text-gray-400">Testimonials</a>
        </ul>

        <button className="signup-btn">
          Signup
        </button>
      </div>
    </div>
  )
}

export default Navbar
