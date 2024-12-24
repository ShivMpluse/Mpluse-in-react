
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

const HeroSection = () => {

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
    // gsap.from(".circle", {
    //   rotate: 720,
    //   duration: 8,
    //   repeat: -1,
    //   stagger: 3
    // })
  },[])



   const style = 'sm:w-full';

  return (
    <section className="hero flex items-center mx-auto w-full h-screen sm:flex-col mt-[70px] my-auto" >
      <div className="main mx-auto container flex flex-wrap justify-center sm:mx-auto md:mx-auto lg:mx-auto max-h-[85vh] border-4 sm:pt-16  md:pt-12  mt-24">    
        {/* Left Section */}
        <div className="relative left sm:flex sm:flex-col w-full lg:w-1/2 px-4 lg:px-8 sm:mx-auto md:mx-auto lg:mx-auto  ">
          <div className="my-auto flex flex-col md:gap-[70px] sm:gap-[40px] p-4">
            <h1 className='text-3xl md:text-5xl lg:text-5xl xl:text-6xl font-black text-black bg-gradient-to-r from-yellow-400 via-fuchsia-400 to-blue-500 bg-clip-text z-20' >
              <span className="sm:mx-auto md:mx-auto lg:mx-auto poppins-medium">FinTech Enrollment and Advisory 2024-2025</span>
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
                <img src={star} alt="star" className="top-6 left-10 absolute" ref={backLightRef}/>
              </div>
            </div>
            
            <div className="btn sm:w-full">
              <BTN text="Contact Us" className={`sm:w-full ${style}`}/>
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
            {/* <img
              src={phone}
              alt="iphone"
              className=" absolute h-[700px] top-[-8%] left-[55%] translate-x-[-50%] z-30 scale-90"
            />
            <img
              src={phone}
              alt="iphone"
              className=" absolute h-[700px] top-[-5%] left-[65%] translate-x-[-50%] z-20 scale-90"
            />
            <img
              src={phone}
              alt="iphone"
              className=" absolute h-[700px] top-[-12%] left-[45%] translate-x-[-50%] z-40 scale-90"
            /> */}
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