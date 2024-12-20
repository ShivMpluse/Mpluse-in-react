import circle from '../../public/images/circleimage.png'
import light from '../../public/images/blur.png'
import logo1 from '../../public/images/Ellipse 41.png'
import logo2 from '../../public/images/Ellipse 42.png'
import logo3 from '../../public/images/Ellipse 43.png'
import logo4 from '../../public/images/Ellipse 44.png'
import logo5 from '../../public/images/Ellipse 45.png'
import star from '../../public/images/star-3.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

const Testimonial = () => {

  const starRef = useRef()


  useGSAP(()=> {
    gsap.to('.test ', {
      rotate: 720,
      repeat: -1,
      duration: 6,
      // yoyo: true,
      stagger: 1,
      ease: 'pawer1.out',
      scale: 1
    })
  },[])





  return (
    <section className='container mx-auto relative text-black mt-28'>
      <div className="heading flex justify-center mx-auto">
          <h2 className="text-3xl">
            Whats Our Users Say About Up ?
          </h2>
      </div>
      <div className="main ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="relative sm:hidden md:flex justify-center items-center">
          <div className="test absolute top-0 left-0">
            <img src={star} alt="star" ref={starRef} className='star z-50'/>
          </div>
          
            {/* Circle Image */}
            <img
              src={circle}
              alt="test"
              className="h-[300px] w-[300px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px] top-[-30px] md:top-[-50px] scale-125 absolute z-20"
            />
            {/* Light Image */}
            <img
              src={light}
              alt="light"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:flex"
            />
          </div>

          {/* Right Column */}
          <div className="col text-black px-6 py-4 md:py-8 lg:py-12 flex flex-col justify-center">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black leading-snug">
                The best Financial Accounting App Ever!
              </h2>
              <p className="text-sm md:text-base lg:text-lg pr-0 md:pr-16">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
                In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit.
                Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem
                sapien, suspendisse aliquam.”
              </p>
            </div>

            {/* Profile Images */}
            <div className="flex gap-4 mt-6">
              {[logo1, logo2, logo3, logo4, logo5].map((logo, index) => (
                <div
                  key={index}
                  className="img rounded-full w-12 h-12 md:w-16 md:h-16 flex justify-center items-center overflow-hidden"
                >
                  <img src={logo} alt={`Profile ${index + 1}`} className="object-cover w-full h-full" />
                </div>
              ))}
            </div>

            {/* Profile Name */}
            <p className="font-bold mt-4 text-base md:text-lg">Nick Jonas</p>
            <div className="test absolute bottom-0 right-0">
              <img src={star} alt="star" ref={starRef} className='star z-50'/>
            </div>
          </div>
        </div>
      </div>


    </section>
  )
}

export default Testimonial
