import About from "./Components/About/About"
import HeroSection from "./Components/HeroSection"
import Navigation from "./Components/Navigation"
// import hero from '../../public/images/hero.webp'
// import hero from '../public/images/hero.webp'
import AboutSection from "./Components/AboutSection"
import Carousel from "./Components/Carousel"
import NextPage from "./Components/NextPage"
import Testimonial from "./Components/Testimonial"
import { Features } from "./Components/Features"
import Questions from "./Components/Questions"
import Footer from "./Components/Footer/Footer"
import Animation from "./Components/Animation"
// import Slides from "./Components/Slides"

// style={{ backgroundImage: `url(${hero})`}}

function App() {

  return (    
    <section className="App  bg-fixed" >
        <Navigation />
        <HeroSection  />
        <Animation />
        <About />
        <AboutSection />
        <Carousel />
        <Testimonial />
        <NextPage />
        <Features />
        <Questions />
        <Footer />
    </section>
  )
}

export default App
