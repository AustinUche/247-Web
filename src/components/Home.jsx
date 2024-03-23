import React from 'react'
import Hero from './Hero'
import About from './About'
import Services from './Services'
import Header from './Header'
import Contact from './Contact'
import Footer from './Footer'

const Home = () => {
  return (
    <div className='w-full'>
      <Header />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home