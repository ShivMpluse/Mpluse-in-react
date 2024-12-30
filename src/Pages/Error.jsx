/* eslint-disable no-unused-vars */
import React from 'react'
import img from '../../public/images/error.png'
import { NavLink, useRouteError } from 'react-router'

const Error = () => {

    const error = useRouteError();
    console.log(error);



    return (
        <div className='container mx-auto w-full h-screen flex flex-col justify-center items-center'>
            <img src={img} alt="error" />
            <NavLink to='/' className='text-xl bg-lime-300 p-2 rounded-lg text-black'>
                Back to Home
            </NavLink>
        </div>
    )
}

export default Error
