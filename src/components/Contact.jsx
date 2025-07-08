import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Contact = () => {
  // Local state to store form input values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  // Handle input changes and update state
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault() // Prevent default page reload

    // Submit form data to Web3Forms API
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        access_key: '6a729886-d3f9-4abd-939b-2c6fdd0fa2a0', // ✅ Your Web3Forms Access Key
        ...formData
      })
    })

    const result = await response.json()

    // Show success or error toast
    if (result.success) {
      toast.success('✅ Message sent successfully!')
      setFormData({ name: '', email: '', message: '' }) // Reset form
    } else {
      toast.error('❌ Something went wrong. Please try again.')
    }
  }

  return (
    <div>
      {/* Toast container for notifications */}
      <ToastContainer />

      {/* Section heading */}
      <h2 className="text-4xl sm:text-2xl font-bold mb-2 text-center">
        Contact <span className="underline underline-offset-4 decoration-1 font-extralight">With Us!</span>
      </h2>

      {/* Section subheading */}
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        Ready to make a Move? Let's connect and turn your real estate dreams into reality.
      </p>

      {/* Contact form */}
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-6">
        {/* Name field */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Name"
            required
          />
        </div>

        {/* Email field */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Email"
            required
          />
        </div>

        {/* Message textarea */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
          <textarea
            id="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Message"
            required
          ></textarea>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

export default Contact
