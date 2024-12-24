/* eslint-disable no-unused-vars */
import React from "react";
import CardData from "../CardData/CardData.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import profile from '../../public/images/profile.jpg';
// import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from "styled-components";


gsap.registerPlugin(ScrollTrigger);

const Carousel = () => {

  // useGSAP(() => {
  //   gsap.from('.test', {
  //     // duration: 1,
  //     opacity: 0,
  //     ease: 'bounce.out',
  //     scrollTrigger: {
  //       trigger: ".test",
  //       start: "top 85%",
  //       end: "top 10%",
  //       scrub: 1,
  //       markers: true,//for debugging
  //     }
  // });
  // }, []); // Add this line to close the useGSAP hook




  const settings = {
    dots: true, // Enable dots below the slider
    infinite: true, // Loop slides infinitely
    speed: 500, // Transition speed (ms)
    slidesToShow: 3, // Default number of slides to show
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true, // Enable auto slide
    autoplaySpeed: 2000, // Time between slides (ms)
    pauseOnHover: true, // Pause sliding when hovering over a slide
    responsive: [
      {
        breakpoint: 1024, // For devices with width <= 1024px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, // For devices with width <= 768px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <section className="carousel bg-white">
      <div className="container lg:px-4 sm:mx-auto ">
        <div className="page3 w-full xl:mx-auto lg:mx-auto  mt-10">
          <div className=" py-10 flex flex-col gap-8">
            <h1 className="capitalize lg:text-6xl sm:text-2xl text-transparent drop-shadow-lg text-blue-950 bg-gradient-to-r from-yellow-400 via-fuchsia-400 to-blue-500 bg-clip-text">
              Mpluse Fintech Pvt Ltd: Simplifying Your Financial Journey
              Assistance with Seamless Financial Solutions.
            </h1>
            <Para className="lg:text-2xl md:text-xl sm:text-lg text-black capitalize">
              At MPLuse Fintech Pvt Ltd, we offer unparalleled services to ensure
              a seamless financial experience for all our clients. Our tailored
              solutions are designed to cater to the diverse needs of individuals
              and businesses, empowering them to achieve their financial goals.
            </Para>
          </div>
        </div>
      </div>
      <div className="text-black w-3/4 m-auto ">
        <div className="mt-20">
          <Slider {...settings}>
            {CardData.map((data) => {
              return (
                <div className="card1  bg-transparent drop-shadow-lg h-[450px] gap-4" key={data.id}>
                  <div className="h-56  bg-indigo-500 flex justify-center items-center">
                    <img
                      src={profile}
                      alt={data.name}
                      className="p-4 h-28 w-28 object-cover border border-black rounded-full" />
                  </div>
                  <div className="flex flex-col bg-slate-300 justify-center items-center gap-4 p-4 ">
                    <h3 className="text-2xl text-black">{data.name}</h3>
                    <p className="text-sm text-center">{data.about}</p>
                    <button className="btn text-white text-lg py-1 px-6 bg-indigo-500">
                      View More
                    </button>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Carousel


const Para = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 100;
  font-size: 18px;
`