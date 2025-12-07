import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Goals from './components/Goals'
import About from './components/About'
import WhyJoin from './components/WhyJoin'
import Contact from './components/Contact'

const App = () => {
  return (
    <div>
      <div className=''>
      <Navbar />
      </div>
      <div className=''>
        {/* <Hero_new /> */}
      <Hero />
      </div>
      <div className=''>
        <About />
      </div>
       <div className=''>
        <WhyJoin />
      </div>
      <div className=''>
        <Goals />
      </div>
      <div className=''>
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default App
