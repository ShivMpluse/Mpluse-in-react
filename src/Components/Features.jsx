// import React from 'react'


const card = [
    {
        id: 1, 
        img_url: '../../public/images/img-5.png',
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
            <div className="main">
                <h1 className="text-transparent bg-gradient-to-r from-[#F5E197] to-[#E6217B] bg-clip-text"></h1>
            </div>
            <div className="container grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {card.map((value) => {
                    return(
                        <div className="  flex flex-col gap-2 " key={value.id}>
                            <div className="img">
                                <img src={value.img_url} alt={value.title} className=" h-full w-full border-b-2 pb-1"/>
                            </div>

                            <div className="flex justify-center items-center">
                                <h2 className="text-2xl text-black">{value.title}</h2>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    )
}
