import logo from "../../../public/images/mpluse-white.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineFacebook } from "react-icons/ai";
import { TfiTwitter } from "react-icons/tfi";
import { CiLinkedin } from "react-icons/ci";
import { RiYoutubeLine } from "react-icons/ri";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { ImWhatsapp } from "react-icons/im";
import { LuBookPlus } from "react-icons/lu";
import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <section className="bg-black mb-0 text-white mt-28">
        <div className="mx-auto  py-6 ">
          <div className="container py-4 px-6 h-full  sm:mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center sm:gap-6 md:gap-2 sm:border-b-2 border md:border-0">
            
            {/* First Column - Feedback Form */}
            <div className="col p-2 sm:px-4 sm:border-b-2 md:border-0 flex flex-col gap-9">
              <img src={logo} alt="Mpluse Logo" className="h-8 w-32" />
              <div className="form flex flex-col gap-6">
                <p className="text-sm">Feedback Form</p>
                <form action="">
                  <div className="flex gap-1">
                    <input
                      type="text"
                      className="py-2 px-4 rounded-lg border w-full"
                      placeholder="Write Your feedback"
                    />
                    <MdKeyboardArrowRight className="text-white  rounded-full text-[30px]  w-10 h-10" />
                  </div>
                  <div className="icons flex gap-3 py-4">
                    <FaInstagram className=" text-3xl" />
                    <AiOutlineFacebook className=" text-3xl" />
                    <TfiTwitter className=" text-3xl" />
                    <CiLinkedin className=" text-3xl" />
                    <RiYoutubeLine className=" text-3xl" />
                  </div>
                </form>
              </div>
            </div>

            {/* Second Column - Company Section */}
            <div className="col p-2 flex flex-col gap-4 sm:border-b-2 md:border-0">
              <div className="md:mt-[-80px]">
                <h3 className="text-xl font-bold">Company</h3>
              </div>
              <p className="">Privacy Policy</p>
            </div>

            {/* Third Column - Contact Us Section */}
            <div className="col p-2 flex flex-col justify-items-center gap-6 sm:border-b-2 md:border-0">
              <h3 className=" text-xl font-bold">Contact Us</h3>
              <ul className="flex flex-col gap-3">
                <li className="flex gap-4">
                  <IoCallOutline className=" text-2xl" />
                  <span> +91 11525056</span>
                </li>
                <li className="flex gap-4">
                  <MdOutlineMail className=" text-2xl" />
                  <span> info@mpluse.in</span>
                </li>
                <li className="flex gap-4">
                  <ImWhatsapp className=" text-2xl" />
                  <span> +91 11525056</span>
                </li>
                <li className="flex gap-4">
                  <LuBookPlus className=" text-2xl" />
                  <span> Book Appointment</span>
                </li>
              </ul>
            </div>

            {/* Fourth Column - Address Section */}
            <div className="col p-2  flex flex-col gap-4 sm:border-b-2 md:border-0">
              <h3 className="text-xl font-bold">Address</h3>
              <p className="text-sm pr-8">
                Sf 17, Aakriti Business Centre, Salaiya, Bhopal, (MP), 462026
              </p>
            </div>
          </div>
        </div>
        {/* <span className=" flex justify-center items-center mt-2">dfghj</span> */}
      </section>
      <div className=" bg-gray-300 mx-auto flex justify-center items-center /50 p-4 border w-full">
        <Copy className="text-sm ">© 2025 Mpluse. All Rights Reserved.</Copy>
      </div>

    </>
    
  );
};

export default Footer;

const Copy = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 100;
  font-size: 16px;
`