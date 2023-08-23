import { Link } from 'react-router-dom'
import {BiLogoFacebook, BiLogoInstagram} from 'react-icons/bi'
import {CiTwitter, CiYoutube} from 'react-icons/ci'

import Logo from './../assets/images/RtoB Whitelogo_横長.png'

export default function Footer() {
  return (
    <div className="py-24 my-20 text-white text-baseFont">
       <div className="flex items-start gap-20 h-full">
         {/* Logo */}
         <div className="flex flex-col justify-between h-[20vh] w-[15%]">
            <div>
                <img src={Logo} className='w-full object-cover' alt="logo" />
            </div>

           {/* social media links */}
            <div className="flex items-center justify-center gap-6">
                <Link to={"/#"} className='bg-white text-baseColor rounded-full p-2 transform hover:scale-150 transition-all duration-300'>
                    <BiLogoFacebook className="text-[1.5rem]"/>
                </Link>

                <Link to={"/#"} className='bg-white text-baseColor rounded-full p-2 transform hover:scale-150 transition-all duration-300'>
                    <CiTwitter className="text-[1.5rem]"/>
                </Link>
                
                <Link to={"/#"} className='bg-white text-baseColor rounded-full p-2 transform hover:scale-150 transition-all duration-300'>
                    <BiLogoInstagram className="text-[1.5rem]"/>
                </Link>

                <Link to={"/#"} className='bg-white text-baseColor rounded-full p-2 transform hover:scale-150 transition-all duration-300'>
                    <CiYoutube className="text-[1.5rem]"/>
                </Link>
                {/* <div className="">

                </div> */}
            </div>
         </div>
        

        {/* Links */}
        <div className="flex items-start">
            <div className="flex flex-col gap-2">
                <h1 className='text-[3rem] font-[500]'>IT Solutions</h1>
                <Link to={"/#"} className='opacity-[0.9]'>Web/App Development</Link>
                <Link to={"/#"}>Mobile application development</Link>
                <Link to={"/#"}>UI/UX</Link>
            </div>
        </div>
       </div>
    </div>
  )
}
