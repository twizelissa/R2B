import { Link } from 'react-router-dom'
import {IoMdArrowDropdown} from "react-icons/io";
import {AiOutlineMenu} from 'react-icons/ai'

import usflag from "./../assets/images/usflag.jpg"
import Logo from  './../assets/images/RtoB Whitelogo.png';
import './../styles/navigation.css'

export default function Navigation() {
  return (
    <div className='px-[3rem]'>

       <div className="flex gap-4 text-[2rem] items-start md:items-center md:justify-between text-white">
          {/*1. Logo */}
            <div className='w-[100%] md:w-[10%]'>
              <img src={Logo} className='w-full h-full' alt="" />
              </div>

{/* For responsive navigation */}
<input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
      <label htmlFor="navi-toggle" className="navigation__button">
        <AiOutlineMenu className="navigation__icon"/>
        </label>

        {/* 1. Links */}
            <div className="navigation__nav">
            <ul className="flex flex-col md:flex-row gap-10">
                <li><Link to={"/home"}>Home</Link></li>
                <li><Link to={"/#"}>About us</Link></li>
                <li><Link to={"/#"}>Services</Link></li>
                <li><Link to={"/#"}>Education</Link></li>
                <li><Link to={"/#"}>News</Link></li>
                <li><Link to={"/#"}>Careers</Link></li>
            </ul>
            </div>

{/* 3. Localisation */}
            <div className='flex gap-2'>
              <img src={usflag} className='rounded-full md:w-14 h-14 object-fit' alt="localisation img" />
              <IoMdArrowDropdown className="text-[3rem]"/>
            </div>

{/* Contact */}
           <div className="bg-white px-6 py-2 text-[#192F43]">
            <Link to={"/contact"}>CONTACT</Link>
           </div>
        </div>
    </div>
  )
}
