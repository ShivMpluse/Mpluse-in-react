
import { useGSAP } from '@gsap/react'
import card from '../../public/images/card-5.gif'
import Increment from '../Components/Increment'
import gsap from 'gsap'
import { useEffect, useState } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const AboutSection = () => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        if (count < 8000) {
            const intervalId = setInterval(() => {
              setCount((prevCount) => prevCount + 1);
            });
      
            return () => clearInterval(intervalId);
          }
        }, [count]);
        
        // useGSAP(() => {
        //     gsap.from('.about', {
        //         // duration: 1,
        //         opacity: 0,
        //         ease: 'bounce.out',
        //         scrollTrigger: {
        //             trigger: ".about",
        //             start: "top 80%",
        //             end: "top 10%",
        //             scrub: 1,
        //             // markers: true,//for debugging
        //         }
        //     });
        // }, []);



  return (
    <section className="text-black md:mx-auto  mx-auto px-4 bg-white">
        <div className="container about mx-auto grid lg:grid-cols-2 sm:grid-cols-1 justify-between items-center flex-wrap sm:mx-auto">
            <div className="col grid grid-col-2 gap-4">
                <div className="row1  gap-12 grid sm:grid-col-1 md:grid-cols-2">
                    <Increment title={count} description='Successful Admission' className='poppins-medium'/>
                    <Increment title={count} description='Successful Admission'/>
                </div>
                <div className="row1  gap-12 grid sm:grid-col-1 md:grid-cols-2">
                    <Increment title={count} description='Successful Admission'/>
                    <Increment title={count} description='Successful Admission'/>
                </div>
            </div>
            <div className="col">
                <img src={card} alt="card" className='max-h-[500px]'/>
            </div>
        </div>
    </section>
  )
}

export default AboutSection

