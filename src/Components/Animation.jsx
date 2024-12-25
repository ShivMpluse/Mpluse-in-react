import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import logo from '../../public/images/788.png';
import atm from '../../public/images/atmCard1.png';



gsap.registerPlugin(ScrollTrigger);

const Animation = () => {
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      gsap.to(".animation h1", {
        duration: 4,
        x: "-320%",
        scrollTrigger: {
          scroller: "body",
          trigger: ".animation",
          start: "top 30%",
          end: "top -250%",
          scrub: 4,
          markers: true,
          pin: true,
        },
      });

      gsap.to(".leftCard", {
        x: "-90%",
        rotate: -20,
        scrollTrigger: {
          scroller: "body",
          trigger: ".animation",
          start: "top -40%",
          end: "top -50%",
          scrub: 4,
          pin: true,
        },
      });

      gsap.to(".rightCard", {
        x: "90%",
        rotate: 20,
        scrollTrigger: {
          scroller: "body",
          trigger: ".animation",
          start: "top -40%",
          end: "top -50%",
          scrub: 4,
          markers: true,
          pin: true,
        },
      });
    });

    mm.add("(max-width: 1023px)", () => {
      gsap.to(".animation h1", {
        duration: 4,
        x: "-150%",
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

    mm.add("(max-width: 320px)", () => {
      gsap.to(".animation h1", {
        duration: 4,
        x: "-100%",
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

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <div className="container mx-auto">
      <div className="animation  h-[500px] w-full ">
        <div className="mx-auto overflow-hidden text-[6vh] sm:text-[10vh] md:text-[12vh] lg:text-[20vh] xl:text-[40vh] text-center uppercase font-bold tracking-widest whitespace-nowrap text-transparent/10">
          <h1>
            <span className="bg-gradient-to-r from-yellow-400 via-fuchsia-400 to-blue-500 bg-clip-text drop-shadow-2xl shadow-white">
              Welcome to the financial world
            </span>
          </h1>
        </div>
      </div>
      <div className="container animationCard mx-auto flex justify-center relative border h-80 w-full">
            <img src={logo} alt="Mpluse" className="h-10 w-32 mt-8" />
        <div className="leftCard  w-[150px] sm:w-[200px] md:w-[250px] p-4 text-black absolute">
          <img src={atm} alt="ATM" />
          {/* <h2>Name: Left!</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, consequatur?</p> */}
        </div>

        <div className="rightCard  w-[150px] sm:w-[200px] md:w-[250px] p-4  absolute">
        <img src={atm} alt="ATM" />
          {/* <h2>Name: Right!</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, consequatur?</p> */}
        </div>
      </div>
    </div>
  );
};

export default Animation;
