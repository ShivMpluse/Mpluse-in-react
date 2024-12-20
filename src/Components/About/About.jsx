import { useEffect } from "react";
import gsap from "gsap";

const data = [
    { img: 'http://localhost:5173/img2.png' },
    { img: 'http://localhost:5173/img3.png' },
    { img: 'http://localhost:5173/img5.png' },
    { img: 'http://localhost:5173/img6.png' },
    { img: 'http://localhost:5173/logo.png' },
    { img: '/logo4.png' }
  ]
  
  function About() {


  useEffect(() => {
    gsap.to(".card", {
      x: '-100px',
      duration: 2,
      yoyo: true,
      repeat: '-1'
    });
  });



  return (
    <>
      <div className="text-black container sm:mx-auto flex gap-16 my-12 overflow-hidden">
        {data.map((item, index) => (
          <div className="flex card border py-4 px-6 overflow-x-hidden mx-auto" key={index}>
            <img src={item.img} alt="logo" />
          </div>
        ))}
      </div>
      <div className="py-10 flex flex-col gap-3 container sm:mx-auto md:mx-auto px-4">
        <h1 className="lg:text-6xl text-3xl font-semibold text-blue-950 ">Our Proven Expertise: Your Financial Success Starts Here!
        </h1>
        <h1 className="lg:text-6xl text-3xl">
          <span className="span text-transparent bg-gradient-to-r from-yellow-400 via-fuchsia-400 to-blue-500 bg-clip-text">Join Our Thriving Community of Future Fintech Leaders</span>
        </h1>
      </div>
    </>

  );
}
  
  export default About;
  