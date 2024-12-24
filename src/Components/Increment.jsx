/* eslint-disable react/prop-types */

import styled from "styled-components"




const Increment = ({title, description, className}) => {


    
    


  return (
    <div className={`relative pb-1 bg-gradient-to-r from-[#95F7AC] via-[#8647D7] to-[#4F28A7] w-64 ${className}`}>
      <div className="bg-white flex flex-col p-2 ">
        <H3 className="text-4xl font-light text-black/50">{title}</H3>
        <Para>{description}</Para>
      </div>
      
    </div>
  )
}

export default Increment

const Para = styled.p`
  font-weight: 300;
   font-family: 'Poppins', sans-serif;
`
const H3 = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  color: black;
`