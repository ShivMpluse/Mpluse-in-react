import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import logo from '../../public/images/card.gif';
import atm from '../../public/images/atmCard1.png';
import '../Components/Animation.module.css';



gsap.registerPlugin(ScrollTrigger);

const Animation = () => {
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px) and (max-width: 1680px)", () => {
      gsap.to(".animation h1", {
        duration: 4,
        x: "-250%",
        scrollTrigger: {
          scroller: "body",
          trigger: ".animation",
          start: "top 40%",
          end: "top -150%",
          scrub: 4,
          // markers: true,
          pin: true,
        },
      });
      
    // mm.add("(min-width: 1024px ) and (max-width: 1680px)", () => {
    //   gsap.to(".animation h1", {
    //     duration: 4,
    //     x: "-500%",
    //     scrollTrigger: {
    //       scroller: "body",
    //       trigger: ".animation",
    //       start: "top 30%",
    //       end: "top -150%",
    //       scrub: 2,
    //       pin: true,
    //     },
    //   });
    // });

    mm.add("(min-width: 769px) and (max-width: 1023px)", () => {
      gsap.to(".animation h1", {
        duration: 4,
        x: "-500%",
        scrollTrigger: {
          scroller: "body",
          trigger: ".animation",
          start: "top 30%",
          end: "top -150%",
          scrub: 2,
          pin: true,
        },
      });
    });

     
      
    });


    
    mm.add("(min-width: 375px) and (max-width: 768px)",  () => {
      gsap.to(".animation h1", {
        duration: 4,
        x: "-700%",
        scrollTrigger: {
          scroller: "body",
          trigger: ".animation",
          start: "top 30%",
          end: "top -50%",
          scrub: 2,
          pin: true,
        },
      });
    });


    mm.add("(min-width: 320px) and (max-width: 768px)",  () => {
      gsap.to(".leftCard", {
        x: "-150%", // Adjusted for appropriate movement
        rotateY: 80,
        rotate: -20,
        scrollTrigger: {
          trigger: ".animationCard", // Use the correct container
          start: "top 70%", // Adjusted start position
          end: "top -300%", // Adjusted end position
          scrub: 2,
        },
      });

      gsap.to(".rightCard", {
        x: "150%", // Adjusted for appropriate movement
        rotateY: -80,
        rotate: 20,
        scrollTrigger: {
          trigger: ".animationCard", // Use the correct container
          start: "top 70%", // Adjusted start position
          end: "top -300%", // Adjusted end position
          scrub: 2,
        },
      });
    });


    
    mm.add("(min-width: 769px) and (max-width: 1023px)",  () => {
      gsap.to(".leftCard", {
        x: "-150%", // Adjusted for appropriate movement
        rotateY: 80,
        rotate: -20,
        scrollTrigger: {  
          scroller: "body",
          trigger: ".animationCard", // Use the correct container
          start: "top 50%", // Adjusted start position
          end: "top 0%", // Adjusted end position
          scrub: 2,
          pin: true,
        },
      });
      
      gsap.to(".rightCard", {
        x: "150%", // Adjusted for appropriate movement
        rotateY: -80,
        rotate: 20,
        scrollTrigger: {
          scroller: "body",
          trigger: ".animationCard", // Use the correct container
          start: "top 50%", // Adjusted start position
          end: "top 0%", // Adjusted end position
          scrub: 2,
          pin: true,
        },
      });
    });


    
    
    mm.add("(min-width: 1024px) and (max-width: 1680px)",  () => {
      gsap.to(".leftCard", {
        x: "-150%", // Adjusted for appropriate movement
        rotateY: 80,
        rotate: -20,
        scrollTrigger: {
          scroller: "body",
          trigger: ".animationCard", // Use the correct container
          start: "top 50%", // Adjusted start position
          end: "top -50%", // Adjusted end position
          scrub: 2,
          // pin: true,
        },
      });
      
      gsap.to(".rightCard", {
        x: "150%", // Adjusted for appropriate movement
        rotateY: -80,
        rotate: 20,
        scrollTrigger: {
          scroller: "body",
          trigger: ".animationCard", // Use the correct container
          start: "top 50%", // Adjusted start position
          end: "top -50%", // Adjusted end position
          scrub: 2,
          // pin: true,
        },
      });
    });

    
    
    return () => {
      mm.revert();
    };
  }, []);

  return (
    <div className=" mx-auto relative">
      <div className="bg-black  animation flex items-center sm:h-[250px] md:h-[400px] lg:h-[500px] w-full ">
        <div className="mx-auto overflow-hidden text-[6vh] sm:text-[150px] md:text-[250px] lg:text-[20vh] xl:text-[40vh] text-center uppercase font-bold tracking-widest whitespace-nowrap text-transparent/10">
          <h1>
            <span className="bg-gradient-to-r from-yellow-400 via-fuchsia-400 to-blue-500 bg-clip-text drop-shadow-2xl shadow-white">
              Welcome to the financial world
            </span>
          </h1>
        </div>
      </div>
      <div className=" animationCard mx-auto flex justify-center items-center relative  sm:h-[300px] md:h-[700px] lg:h-[500px] w-full overflow-hidden">
        <img src={logo} alt="Mpluse" className="h-10 w-32 mt-8 absolute sm:scale-[4.5] md:scale-[8]" />
        <div className="img-container relative border">
          <div className="rightCard  w-[150px] sm:w-[200px] md:w-[250px] p-4 absolute sm:left-[-30px] md:left-[10px] sm:top-[-150px] md:top-[-170px]">
            <img src={atm} alt="ATM" className="sm:scale[1] md:scale-[1.3] "/>
          </div>

          <div className="leftCard  w-[150px] sm:w-[200px] md:w-[250px] p-4 absolute sm:left-[-160px] md:left-[-240px] sm:top-[-150px] md:top-[-170px]">
            <img src={atm} alt="ATM" className="sm:scale[1] md:scale-[1.3] "/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Animation;
