import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
function App() {
  return (
    <>
    <div className='w-full min-h-screen '>
      <Header></Header>
      <About></About>
      <Projects></Projects>
      <Testimonials></Testimonials>
      <Contact></Contact>
      <Footer></Footer>
    </div>
    </>
  )
}

export default App
