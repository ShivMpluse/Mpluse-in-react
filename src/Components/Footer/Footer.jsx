import logo from '../../../public/images/788.png'
import { MdEmail, MdKeyboardArrowRight } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineFacebook } from "react-icons/ai";
import { TfiTwitter } from "react-icons/tfi";
import { CiLinkedin } from "react-icons/ci";
import { RiYoutubeLine } from "react-icons/ri";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { ImWhatsapp } from "react-icons/im";
import { LuBookPlus } from "react-icons/lu";

const Footer = () => {
  return (
    <section className=" bg-gradient-to-r from-[#F8DA8A] to-pink-500 pb-12 mt-28">
      <div className=" mx-auto bg-white rounded-b-full">
        <div className="container h-full bg-white mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="col ">
            <img src={logo} alt="Mpluse Logo" className='h-[50px]' />
            <div className="form ">
              <p className="text-sm">Feedback Form</p>
              <form action="">
                <div className="flex gap-1">
                  <input type="text" className='py-2 px-4 rounded-lg border w-full' placeholder='Write Your feedback' />
                  <MdKeyboardArrowRight className='text-white bg-indigo-500 rounded-full text-[30px] border w-10 h-10'/>
                </div>
                <div className="icons flex gap-3 py-4">
                  <FaInstagram className='text-indigo-500 text-3xl'/>
                  <AiOutlineFacebook className='text-indigo-500 text-3xl' />
                  <TfiTwitter className='text-indigo-500 text-3xl' />
                  <CiLinkedin className='text-indigo-500 text-3xl' />
                  <RiYoutubeLine className='text-indigo-500 text-3xl' />
                </div>
              </form>
            </div>
          </div>
          <div className="col flex flex-col gap-2">
            <h3 className="text-xl text-black">Company</h3>
            <p className="text-black">Privacy Policy</p>
          </div>
          <div className="col flex flex-col justify-items-center gap-6">
            <h3 className="text-black text-xl font-bold">Contact Us</h3>
            <ul className=' flex flex-col gap-3 text-black/80'>
              <li className='flex gap-4'><IoCallOutline className='text-indigo-500 text-2xl'/> <span> +91 11525056</span> </li>
              <li className='flex gap-4'><MdOutlineMail className='text-indigo-500 text-2xl' /> <span> info@mpluse.in</span> </li>
              <li className='flex gap-4'><ImWhatsapp className='text-indigo-500 text-2xl' /> <span> +91 11525056</span> </li>
              <li className='flex gap-4'><LuBookPlus className='text-indigo-500 text-2xl' /> <span> Book Appoinment</span> </li>
            </ul>
          </div>
          <div className="col text-black flex flex-col gap-4">
            <h3 className="text-xl ">Address</h3>
            <p className="text-sm pr-8">Sf 17, Aakriti Business Centre, Salaiya, Bhopal, (MP), 462026</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
