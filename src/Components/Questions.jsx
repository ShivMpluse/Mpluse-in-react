/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { IoMdAdd } from "react-icons/io";
import { CgMathMinus } from "react-icons/cg";

const questions = [
    {
        id: 1,
        Questions: ["What are the eligibility criteria for applying for a fintech loan?"],
        Answer: ["The eligibility criteria include a stable source of income, a valid bank account, and a good credit score. Specific requirements may vary depending on the financial institution."]
    },
    {
        id: 2,
        Questions: ["How long does it take to get approved for a fintech loan?"],
        Answer: ["The approval process typically takes a few hours to a couple of days, depending on the lender and the completeness of the provided information."]
    },
    {
        id: 3,
        Questions: ["What documents are required for applying for a fintech loan?"],
        Answer: ["Common documents include proof of identity, proof of address, income statements, and bank statements. The exact requirements may vary by lender."]
    },
    {
        id: 4,
        Questions: ["Can I apply for a fintech loan if I have a low credit score?"],
        Answer: ["Some fintech lenders offer loans to individuals with low credit scores, but the interest rate may be higher or you may need to provide additional collateral."]
    },
    {
        id: 5,
        Questions: ["Is it safe to apply for a fintech loan online?"],
        Answer: ["Yes, applying for a fintech loan online can be safe, provided you are using a reputable lender and ensure that the website has proper encryption and security measures."]
    }
]

const Questions = () => {

    const [isOpen, setIsOpen] = useState(null)

    const handleShow = (id) => {
        setIsOpen(isOpen === id ? null : id);
    }



    return (
        <section className='container flex flex-col gap-4 sm:mx-auto mt-16'>
        {
            questions.map((data) => {
                return(
                    <div className="border sm:mx-4 md:mx-4 shadow-sm px-8 py-4 rounded-lg" key={data.id}>
                        <div className="cursor-pointer text-black flex justify-between " onClick={()=>handleShow(data.id)}>
                            <h3 className="text-lg poppins-medium">{data.Questions}</h3>
                            {isOpen === data.id ? (<IoMdAdd className='text-2xl'/>): (<CgMathMinus className='text-2xl'/>)
                            }
                                
                        </div>
                        <div className={`answer text-black  flex-col gap-2 duration-700 ease-linear ${isOpen === data.id ? 'flex ': 'hidden'} duration-700`}>
                            <h2 className="font-bold">Answer :-</h2>
                            <div className="w-full h-[2px] bg-gradient-to-r from-[#F8DA8A] to-pink-500"></div>
                            <p className=" text-sm ">{data.Answer}</p>  
                        </div>
                    </div>
                )
            })
        }
        </section>
    )
}

export default Questions
