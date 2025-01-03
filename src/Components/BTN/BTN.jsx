/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const BTN = ({text, ...rest}) => {
  return (
    <>
        <button className=" poppins-medium duration-500 ease-in-out hover:shadow-2xl shadow-lime-500/50 px-5 py-3 bg-black rounded-lg text-white whitespace-nowrap border-black border hover:bg-transparent hover:text-black ">
            {text}
        </button>
    </>
  )
}

export default BTN
