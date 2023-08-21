import React from 'react'
import { Link } from 'react-router-dom'
import {IoMdArrowDropdown} from 'react-icons/io';

import usflag from "./../assets/images/usflag.jpg"
import Logo from  './../assets/images/RtoB Whitelogo.png';

export default function Navigation() {
  return (
    <div className=''>
        <div className="flex gap-4 text-[.8rem] items-center justify-between text-white">
            <div className='w-20 h-20'><img src={Logo} alt="" /></div>

            <ul className='flex gap-8'>
                <li><Link to={"/home"}>Home</Link></li>
                <li><Link to={"/#"}>About us</Link></li>
                <li><Link to={"/#"}>Services</Link></li>
                <li><Link to={"/#"}>Education</Link></li>
                <li><Link to={"/#"}>News</Link></li>
                <li><Link to={"/#"}>Careers</Link></li>
            </ul>

            <div className='flex gap-2'>
              <div className=' '>
              <img src={usflag} className='rounded-full w-6 h-6 object-fit' alt="localisation img" />
              </div>
              
              <IoMdArrowDropdown className="text-lg"/>
            </div>

           <div className='bg-white px-6 py-2 text-[#192F43]'>
            <Link to={"/contact"}>CONTACT</Link>
           </div>
        </div>
    </div>
  )
}
