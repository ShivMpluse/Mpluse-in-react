
import BTN from "../Components/BTN/BTN";
// import img1 from "../../public/images/images1.png";
// import img2 from "../../public/images/images2.png";
// import { useEffect } from "react";
// import gsap from "gsap";
// import hero from '../../public/images/hero.webp'
// import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import card from '../../public/images/card.gif';

const HeroSection = () => {

   const style = 'sm:w-full';

  return (
    <section className=" flex items-center mx-auto w-full h-screen  py-8 sm:flex-col mt-[70px]" >
      <div className="main mx-auto container flex flex-wrap justify-center sm:mx-auto md:mx-auto lg:mx-auto max-h-[90vh]  sm:pt-16  md:pt-12 ">    
        {/* Left Section */}
        <div className="left sm:flex sm:flex-col w-full lg:w-1/2 px-4 lg:px-8 sm:mx-auto md:mx-auto lg:mx-auto  ">
          <div className="my-auto flex flex-col md:gap-[70px] sm:gap-[40px]">
            <h1 className="text-3xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-transparent bg-gradient-to-r from-yellow-400 via-fuchsia-400 to-blue-500 bg-clip-text">
              <span className="sm:mx-auto md:mx-auto lg:mx-auto poppins-medium">FinTech Enrollment and Advisory 2024-2025</span>
            </h1>
            <p className=" text-sm md:text-base lg:text-lg text-justify text-black/60  max-w-[500px]  poppins-medium">
              Pursuing a career in finance is a dream for many, but the journey to 
              becoming a fintech professional is filled with challenges and critical 
              decisions that require expert guidance. At FinTech Wala, we provide 
              comprehensive career planning and mentorship, ensuring you make informed 
              choices every step of the way.
            </p>
            <div className="btn sm:w-full">
              <BTN text="Contact Us" className={`sm:w-full ${style}`}/>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="right lg:flex lg:w-1/2 w-full h-full lg:flex-row flex-col gap-4px-4 lg:px-0 flex sm:hidden ">
          
          <div className="max-h-[800px] max-w-[50px]: min-h-[30px] min-[300px] pt-16 overflow-hidden">
          {/* <DotLottieReact
            src="https://lottie.host/d0a4802c-afd1-4b4c-8c1f-7df2296185f0/yg5uI93CB7.lottie"
            loop
            autoplay
          /> */}
          
          </div>
          <img src={card} alt="" className="" />
        </div>


        {/* <div className="flex h-[264px]  img21 flex-col items-center lg:hidden overflow-hidden sm:rotate-90 max-w-56 mx-auto ">
            <img
              src={img1}
              alt="Contact"
              className="img1  lg:w-auto z-10 h-auto "
            />
            <img
              src={img1}
              alt="Contact"
              className="img1  lg:w-auto z-10 h-auto "
            />
          </div> */}
      </div>
    </section>
  );
};

export default HeroSection;