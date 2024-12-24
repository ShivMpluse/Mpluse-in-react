import scrollTrigger from "gsap/all";
import gsap from "gsap";
import { useEffect } from "react";

gsap.registerPlugin(scrollTrigger);

const Animation = () => {
  useEffect(() => {
    // GSAP MatchMedia for responsive animations
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      // For large screens and desktops
      gsap.to(".animation h1", {
        duration: 4,
        x: "-320%",
        scrollTrigger: {
          scroller: "body",
          trigger: ".animation",
          start: "top 30%",
          end: "top -250%",
          scrub: 2,
          markers: true,
          pin: true,
        },
      });

      gsap.to(".leftCard", {
        x: "-80%",
        rotateY: -20,
        scrollTrigger: {
          scroller: "body",
          trigger: ".animation",
          start: "top -30%",
          end: "top -50%",
          scrub: 2,
          pin: true,
        },
      });

      gsap.to(".rightCard", {
        x: "80%",
        rotateX: 20,
        scrollTrigger: {
          scroller: "body",
          trigger: ".animation",
          start: "top -30%",
          end: "top -50%",
          scrub: 2,
          pin: true,
        },
      });
    });

    mm.add("(max-width: 1023px)", () => {
      // For tablets and smaller screens
      gsap.to(".animation h1", {
        duration: 4,
        x: "-150%", // Less translation for smaller screens
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
      // For mobile screens
      gsap.to(".animation h1", {
        duration: 4,
        x: "-100%", // Even less translation for small screens
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
      mm.revert(); // Revert animations when component unmounts
    };
  }, []);

  return (
    <div className=" mx-auto pb-1">
      {/* Animation Header */}
      <div className="animation w-full">
        <div className="mx-auto overflow-hidden text-[6vh] sm:text-[10vh] md:text-[12vh] lg:text-[20vh] xl:text-[40vh] text-center uppercase font-bold tracking-widest whitespace-nowrap text-transparent/10">
          <h1>
            <span className="bg-gradient-to-r from-yellow-400 via-fuchsia-400 to-blue-500 bg-clip-text drop-shadow-2xl shadow-black">
              Welcome to the financial world
            </span>
          </h1>
        </div>
      </div>

      {/* Animation Cards */}
      {/* <div className="container animationCard mx-auto flex justify-center relative border h-80 w-full">
        <div className="leftCard border w-[150px] sm:w-[200px] md:w-[250px] p-4 text-black bg-gray-300 absolute">
          <h2>Name: Left!</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, consequatur?</p>
        </div>

        <div className="rightCard border w-[150px] sm:w-[200px] md:w-[250px] p-4 text-black bg-gray-300 absolute">
          <h2>Name: Right!</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, consequatur?</p>
        </div>
      </div> */}
    </div>
  );
};

export default Animation;
