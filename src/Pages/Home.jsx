/* eslint-disable no-unused-vars */
import React from 'react'
// import Navigation from '../Components/Navigation'
import HeroSection from '../Components/HeroSection'
import Animation from '../Components/Animation'
import About from '../Components/About/About'
import AboutSection from '../Components/AboutSection'
import Carousel from '../Components/Carousel'
import Testimonial from '../Components/Testimonial'
import NextPage from '../Components/NextPage'
import { Features } from '../Components/Features'
import Questions from '../Components/Questions'
// import Footer from '../Components/Footer/Footer'

const Home = () => {
  return (
    <div>
      {/* <Navigation /> */}
      <HeroSection />
      <Animation />
      <About />
      <AboutSection />
      <Carousel />
      <Testimonial />
      <NextPage />
      <Features />
      <Questions />
      {/* <Footer /> */}
    </div>
  )
}

export default Home
