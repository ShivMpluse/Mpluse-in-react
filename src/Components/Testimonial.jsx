import circle from '../../public/images/circleimage.png';
import light from '../../public/images/blur.png';
import logo1 from '../../public/images/Ellipse 41.png';
import logo2 from '../../public/images/Ellipse 42.png';
import logo3 from '../../public/images/Ellipse 43.png';
import logo4 from '../../public/images/Ellipse 44.png';
import logo5 from '../../public/images/Ellipse 45.png';
import star from '../../public/images/Star-3.png';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import styled from 'styled-components';

const Testimonial = () => {
  const starRef = useRef();

  useGSAP(() => {
    gsap.to('.test', {
      ease: 'power1.out',
      scale: 1,
    });
    gsap.from('.test .star', {
      duration: 1,
      opacity: 3,
      repeat: -1,
      rotate: 360,
      yoyo: true,
    });
  }, []);

  return (
    <section className="test container mx-auto relative text-black mt-12 sm:mt-16 md:mt-20 lg:mt-28">
      {/* Heading */}
      <div className="heading flex flex-col gap-2 items-center mx-auto text-center px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl capitalize font-semibold">
          What Our Users Say About Us?
        </h2>
        <div className="h-1 bg-gradient-to-r from-[#95F7AC] via-[#8647D7] to-[#4F28A7] w-48 sm:w-64 md:w-80 lg:w-[500px]"></div>
      </div>

      {/* Main Content */}
      <div className="main mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-8 lg:px-12">
          {/* Left Column */}
          <div className="relative hidden md:flex justify-center items-center">
            <div className="test absolute top-0 left-10">
              <img src={star} alt="star" className="star z-50" />
            </div>
            {/* Circle Image */}
            <img
              src={circle}
              alt="circle"
              className="h-48 w-48 sm:h-64 sm:w-64 md:h-80 md:w-80 lg:h-96 lg:w-96 top-[-20px] md:top-[-40px] scale-125 absolute z-20"
            />
            {/* Light Image */}
            <img
              src={light}
              alt="light"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:flex opacity-80"
            />
          </div>

          {/* Right Column */}
          <div className="col text-black px-4 py-6 sm:py-8 lg:py-12 flex flex-col justify-center">
            <div className="space-y-6">
              <Best className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black leading-snug">
                The Best Financial Accounting App Ever!
              </Best>
              <Para className="text-sm md:text-base lg:text-lg pr-0 md:pr-16">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”
              </Para>
            </div>

            {/* Profile Images */}
            <div className="flex gap-2 sm:gap-4 mt-4">
              {[logo1, logo2, logo3, logo4, logo5].map((logo, index) => (
                <div
                  key={index}
                  className="img rounded-full w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 flex justify-center items-center overflow-hidden"
                >
                  <img src={logo} alt={`Profile ${index + 1}`} className="object-cover w-full h-full" />
                </div>
              ))}
            </div>

            {/* Profile Name */}
            <p className="font-semibold mt-4 text-sm sm:text-base md:text-lg">Nick Jonas</p>
            <div className="test absolute bottom-0 right-12 hidden md:block">
              <img src={star} alt="star" ref={starRef} className="star z-50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

const Para = styled.p`
  font-family: 'poppins', sans-serif;
  font-weight: 100;
  text-transform: capitalize;
  color: black;
  font-size: 14px;
`;

const Best = styled.h2`
  font-family: 'poppins', sans-serif;
  font-weight: 500;
  text-transform: capitalize;
  color: black;
  font-size: 20px;
`;
