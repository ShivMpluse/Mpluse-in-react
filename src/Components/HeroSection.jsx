/* eslint-disable react/prop-types */

import BTN from "../Components/BTN/BTN";
import gsap from "gsap";
// import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import card from '../../public/images/1.png';
import blur from '../../public/images/blur.png';
import star from '../../public/images/Star-3.png';
// import phone from '../../public/images/iPhone-13-Pro-Front.png';
import { useGSAP } from '@gsap/react';
import { useRef } from "react";
import styled from "styled-components";


// bg-[url${blur}] bg-cover bg-center h-64 w-full

const HeroSection = ({count, fun}) => {

  const backLightRef = useRef() 

  useGSAP(()=> {
    gsap.from('.star img', {
      rotate: 360,
      repeat: -1,
      duration: 3,
      // yoyo: true,
      stagger: 1,
      // ease: 'pawer1.out',
      // scale: 1.5
    })
    gsap.from('.star img', {
      // rotate: 360,
      repeat: -1,
      duration: 3,
      yoyo: true,
      stagger: 4,
      ease: 'pawer1.in',
      // scale: 0.2,
      // x: -500,
    })
  },[])



   const style = 'sm:w-full';

  return (
    <section className="hero flex items-center mx-auto w-full h-screen sm:flex-col mt-[20px] my-auto sm:overflow-hidden" >
      <div className="main mx-auto container flex flex-wrap justify-center sm:mx-auto md:mx-auto lg:mx-auto max-h-[85vh] sm:pt-16  md:pt-12  mt-32">    
        {/* Left Section */}
        <div className="relative left sm:flex sm:flex-col w-full lg:w-1/2  lg:px-8 sm:mx-auto md:mx-auto lg:mx-auto  ">
          <div className=" flex flex-col md:gap-[70px] sm:gap-10 sm:p-1 md:p-4">
            <h1 className='text-3xl md:text-5xl lg:text-5xl xl:text-6xl font-black text-black bg-gradient-to-r from-yellow-400 via-fuchsia-400 to-blue-500 bg-clip-text z-20' >
              <Hero className="sm:mx-auto md:mx-auto lg:mx-auto capitalize tracking-tighter">Fintech Enrollment and Advisory 2024-2025</Hero>
            </h1>
            <Para className=" text-sm md:text-base lg:text-lg text-justify text-black  max-w-[500px]  poppins-medium">
              Pursuing a career in finance is a dream for many, but the journey to 
              becoming a fintech professional is filled with challenges and critical 
              decisions that require expert guidance. At FinTech Wala, we provide 
              comprehensive career planning and mentorship, ensuring you make informed 
              choices every step of the way.
            </Para>
            <div className="effect absolute  sm:top-[-50px] sm:left-[0]">
              <div className="eff  sm:h-64 sm:w-80 z-10  sm:top-[-50px] sm:left-[400px]">
                <img src={blur} alt="eff" className="backlight top-[-600px] left-10 rotate-180 opacity-50"/>
              </div>
              <div className="star h-16 w-16">
                <img src={star} alt="star" className="top-1 left-10 absolute" ref={backLightRef}/>
              </div>
            </div>
            {/* *************************************************************************************** */}
            <div className="btn sm:w-full flex gap-4">
              <BTN text="Contact Us" className={`sm:w-full ${style}`}/>
              <div className="box h-8 w-32 border-2 border-black bg-gray-200 ">{count}</div>
              <button className="px-5 py-3 border-2 border-black" onClick={fun}>Increment</button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative lg:flex lg:w-1/2 w-full h-full lg:flex-row flex-col gap-4 px-4 lg:px-0 sm:hidden">
          <div className="max-h-[800px] max-w-[50px] min-h-[30px] min-[300px] pt-16 overflow-hidden">
            {/* Optional Lottie animation */}
          </div>

          {/* Card Image */}
          <div className="vfx relative ">
            <img  ref={backLightRef} src={blur} alt="light" className=" absolute translate-x-[25%] translate-y-[8%] scale-150 opacity-50" />
            <img src={card} alt="circle" className="circle z-10 h-[550px] translate-x-[10%] translate-y-[-10%] scale-95" />
          </div>
          <div className="star">
            <img src={star} alt="star" className="bottom-6 right-10 absolute" ref={backLightRef}/>
          </div>
            
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


const Para = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 100;
  font-size: 16px;
`

const Hero = styled.h1`
  font-size: 40px;
  font-weight: 500;
  line-height: 60px;
  font-family: 'poppins', sans-serif;
`