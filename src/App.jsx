import About from "./Components/About/About"
import HeroSection from "./Components/HeroSection"
import Navigation from "./Components/Navigation"
// import hero from '../../public/images/hero.webp'
import hero from '../public/images/hero.webp'
import AboutSection from "./Components/AboutSection"
import Carousel from "./Components/Carousel"
// import Slides from "./Components/Slides"


function App() {

  return (
    <div className="">
      <div className="nav" style={{ backgroundImage: `url(${hero})`}}>
        <Navigation />
        <HeroSection  />
      </div>
      <div className="hero bg-white ">
        <About />
      </div>
      <AboutSection />
      <Carousel />
    </div>
  )
}

export default App
