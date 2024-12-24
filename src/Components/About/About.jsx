import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const data = [
  { img: '../../../public/images/img3.png' },
  { img: '../../../public/images/img3.png' },
  { img: '../../../public/images/img5.png' },
  { img: '../../../public/images/img6.png' },
  { img: '../../../public/images/logo.png' },
  { img: '../../../public/images/logo.png' },
  { img: '../../../public/images/logo4.png' },
  { img: '../../../public/images/logo4.png' },
  { img: '../../../public/images/img3.png' },
  { img: '../../../public/images/img5.png' },
  { img: '../../../public/images/img6.png' },
  { img: '../../../public/images/logo.png' },
];

function About() {
  useEffect(() => {
    gsap.to(".card", {
      x: '-300px',
      duration: 2,
      yoyo: true,
      repeat: '-1',
      ease: 'power1.inOut',
    });
  }, []);

      // useGSAP(() => {
      //   gsap.from(".card", {
      //     x: '-300%', // Corrected `x` value to a relative translation
      //     ease: 'power1.inOut',
      //     scrollTrigger: {
      //       scroller: 'body',
      //       trigger: ".card",
      //       start: "top 80%",
      //       end: "bottom 20%",
      //       scrub: 4, // Smooth animation tied to scroll
      //       markers: true, // Debugging markers
      //       pin: true, // Pins the element during the scroll
      //     },
      //   });
      // }, []);

  return (
    <>
      <div className="text-black card container sm:mx-auto flex gap-16 my-10 overflow-hidden ">
        {data.map((item, index) => (
          <div className="flex border h-16 w-64 p-2 overflow-hidden mx-auto" key={index}>
            <img src={item.img} alt="logo" />
          </div>
        ))}
      </div>
      <div className="h1 py-10 flex flex-col gap-3 container sm:mx-auto md:mx-auto px-4">
        <h1 className="lg:text-6xl text-3xl font-semibold text-blue-950">Our Proven Expertise: Your Financial Success Starts Here!</h1>
        <h1 className="lg:text-6xl text-3xl">
          <span className="span text-transparent bg-gradient-to-r from-yellow-400 via-fuchsia-400 to-blue-500 bg-clip-text">Join Our Thriving Community of Future Fintech Leaders</span>
        </h1>
      </div>
    </>
  );
}

export default About;