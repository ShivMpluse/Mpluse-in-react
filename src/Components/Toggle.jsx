import { useState } from "react"


const Toggle = () => {

    const [isOn, setIsOn] = useState(false)

    const handleToggleSwitch = () => {
        setIsOn(!isOn)
    }

    return (
        <span className={`fixed top-[400%] left-0 text-xl text-white cursor-pointer h-10 w-20 p-1 border border-black rounded-full ${isOn ? "bg-red-500" : "bg-lime-500 "}`}  onClick={handleToggleSwitch}>
            <div className={`main border-2 border-white rounded-full h-8 w-8 mx-auto my-auto ${isOn ? "ml-0" : "mr-0"}`}>
                <span className=" text-[10px] my-auto flex justify-center items-center uppercase font-bold">{isOn ? "on" : "off"}</span>
            </div>
        </span>
    )
}

export default Toggle
