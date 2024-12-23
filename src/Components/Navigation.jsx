import { useState } from "react";
import logo from "../../public/images/788.png";
import BTN from "./BTN/BTN";
import { MdOutlineMenu } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";
import styled from "styled-components";
import { useGSAP } from "@gsap/react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClose, setIsClose] = useState(false)

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState); // Toggles the menu
    setIsClose(!isClose);
  };

  useGSAP({ from: { opacity: 0 }, duration: 1, delay: 0.5 });


  
const Section = styled.div`
  /* color: red; */
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 100;
`
  
 

  return (
    <Section className="nav mx-auto w-full z-50 flex h-28 justify-between sm:min-w-[320px]  px-4  backdrop-blur-[15px] bg-transparent fixed top-0">
      <div  className="mx-auto flex justify-between w-full md:container px-4 ">
        {/* Logo */}
      <img src={logo} alt="logo" className="logo p-2 h-[60px]  md:flex lg:flex my-auto items-center " />

      {/* Menu */}
      <Section className="menu text-black flex ">
        {/* Hamburger Menu Icon */}
        {/* <div className="toggleMenu"> */}
        {isClose ? 
          (<MdOutlineClose className="text-3xl shadow-1xl shadow-blue-500 p-1 md:hidden cursor-pointer my-auto "  onClick={toggleMenu}/> ): 
          (<MdOutlineMenu className="text-3xl shadow-2xl shadow-blue-500 p-1 md:hidden cursor-pointer my-auto "  onClick={toggleMenu}/>)
        }
          
        {/* </div> */}
        

        {/* Menu Items */}
        <ul 
          className={`flex-col md:flex md:flex-row gap-6 my-auto items-center h-auto z-50
            ${
              isOpen ? "flex" : "hidden"
            } absolute md:static top-20 sm:left-[270px]  bg-white md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none`}
        >
          <li className="hover:border-b-2 border-black font-thin  box-border ">Features</li>
          <li className="hover:border-b-2 border-black font-thin  box-border">Pricing</li>
          <li className="hover:border-b-2 border-black font-thin  box-border">About</li>
          <li className="hover:border-b-2 border-black font-thin  box-border">Services</li>
        </ul>
      </Section>

      {/* Button */}
      <div className="my-auto hidden md:flex">
        <BTN text="Consult Now" />
      </div>
      </div>
      
    </Section>
  );
};

export default Navigation;
