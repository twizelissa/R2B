import { Link } from 'react-router-dom'
import {IoMdArrowDropdown} from "react-icons/io";

import usflag from "./../assets/images/usflag.jpg"
import Logo from  './../assets/images/RtoB Whitelogo.png';
import './../styles/navigation.css'

export default function Navigation() {
  return (
    <div className='px-[3rem]'>

{/* For responsive navigation */}
<input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon"> &nbsp; </span></label>


        <div className="navigation__nav flex gap-4 text-[.8rem] items-center justify-between text-white">
          {/*1. Logo */}
            <div className='w-20 h-20'><img src={Logo} alt="" /></div>

{/* 1. Links */}
            <ul className='flex gap-8'>
                <li><Link to={"/home"}>Home</Link></li>
                <li><Link to={"/#"}>About us</Link></li>
                <li><Link to={"/#"}>Services</Link></li>
                <li><Link to={"/#"}>Education</Link></li>
                <li><Link to={"/#"}>News</Link></li>
                <li><Link to={"/#"}>Careers</Link></li>
            </ul>

{/* 3. Localisation */}
            <div className='flex gap-2'>
              <div className=' '>
              <img src={usflag} className='rounded-full w-6 h-6 object-fit' alt="localisation img" />
              </div>
              <IoMdArrowDropdown className="text-lg"/>
            </div>

{/* Contact */}
           <div className='bg-white px-6 py-2 text-[#192F43]'>
            <Link to={"/contact"}>CONTACT</Link>
           </div>
        </div>
    </div>
  )
}
