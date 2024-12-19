import card from '../../public/images/card-5.gif'
import Increment from '../Components/Increment'

import { useEffect, useState } from "react"

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



  return (
    <section className="text-black md:mx-auto  mx-auto px-4 bg-white">
        <div className="container mx-auto grid lg:grid-cols-2 sm:grid-cols-1 justify-between items-center flex-wrap sm:mx-auto">
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
