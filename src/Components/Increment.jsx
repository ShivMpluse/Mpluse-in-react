/* eslint-disable react/prop-types */




const Increment = ({title, description, className}) => {


    
    


  return (
    <div className={`relative pb-1 bg-gradient-to-r from-[#95F7AC] via-[#8647D7] to-[#4F28A7]  ${className}`}>
      <div className="bg-white flex flex-col p-6 ">
        <h3 className="text-6xl font-light text-black/50">{title}</h3>
        <p>{description}</p>
      </div>
      
    </div>
  )
}

export default Increment
