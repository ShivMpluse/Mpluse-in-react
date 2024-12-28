// import React from 'react'

import styled from "styled-components";


const card = [
    {
        id: 1, 
        img_url: '../../public/images/img-6.png',
        title: 'Awarded by DGP of MP'
    },
    {
        id: 2, 
        img_url: '../../public/images/img-6.png',
        title: 'Awarded by DGP of MP'
    },
    {
        id: 3, 
        img_url: '../../public/images/img4.png',
        title: 'Awarded by DGP of MP'
    },
    {
        id: 4, 
        img_url: '../../public/images/img-7.png',
        title: 'Awarded by DGP of MP'
    },
]



export const Features = () => {
    return (
        <section className="container sm:mx-auto overflow-hidden sm:px-2">
            <div className="main flex flex-col justify-center text-xl p-4">
                <div className="flex p-4">
                    <h1 className="mx-auto text-transparent bg-gradient-to-r from-[#F5E197] to-[#E6217B] bg-clip-text"><span>Awarded</span></h1>
                </div>
                <div className="h-1 w-full bg-gradient-to-r from-[#95F7AC] via-[#8647D7] to-[#4F28A7]"></div>
            </div>
            <div className="container grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {card.map((value) => {
                    return(
                        <div className="  flex flex-col gap-2 " key={value.id}>
                            <div className="img">
                                <img src={value.img_url} alt={value.title} className=" h-full w-full border-b-2 pb-1"/>
                            </div>

                            <div className="flex justify-center items-center">
                                <H2 className="text-xl text-black">{value.title}</H2>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    )
}

const H2 = styled.h2`
    font-size: 20px;
    font-weight: 500;
`