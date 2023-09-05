import { Link } from 'react-router-dom'
import {IoMdArrowDropdown} from "react-icons/io";
import {AiOutlineMenu} from 'react-icons/ai'

import usflag from "./../assets/images/usflag.jpg"
import Logo from  './../assets/images/RtoB Whitelogo.png';
import './../styles/navigation.css'

export default function Navigation() {
  return (
    <div className='px-[1rem] md:px-[3rem] relative'>

          {/*1. Logo */}
          <div className='absolute top-0 md:left-[6rem] z-[1500]'>
              <img src={Logo} className='h-[6rem] md:h-[10rem]' alt="Logo" />
            </div>


      {/* For responsive navigation */}
          <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
              <label htmlFor="navi-toggle" className="navigation__button md:hidden">
              <AiOutlineMenu className="navigation__icon md:hidden"/>
              </label>

              <div className="navigation__background md:hidden">&nbsp;</div>

        {/* 1. Links */}
            <div className="navigation__nav text-white text-[2rem] fixed top-[6rem] left-[30%] transition-all duration-[0.8s] w-[100%] hidden md:block z-[1500] md:opacity-1">
            <ul className="flex flex-col md:flex-row gap-10 mt-20 md:mt-0">
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/about-us"}>About us</Link></li>
                <li><Link to={"/services"}>Services</Link></li>
                <li><Link to={"/education"}>Education</Link></li>
                <li><Link to={"/news"}>News</Link></li>
                <li><Link to={"/careers"}>Careers</Link></li>
            </ul>
        </div>


          {/* ------------------- */}
          <div className="absolute top-0 md:top-10 right-[7rem] flex gap-6 md:gap-10 items-end text-white">
                {/* 3. Localisation */}
              <div className='flex gap-2 mt-10'>
                <img src={usflag} className='rounded-full w-10 h-10 md:w-14 md:h-14 object-fit' alt="localisation img" />
                <IoMdArrowDropdown className="text-[3rem]"/>
              </div>

    {/* Contact */}
              <div className="bg-white px-8 py-4 text-md md:px-14 md:py-6 text-2xl text-baseColor">
                <Link to={"/contact"}>CONTACT</Link>
              </div>
            </div>


    </div>
  )
}
