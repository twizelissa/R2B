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
                    <BiLogoFacebook className="text-[1.5rem] hover:font-semibold"/>
                </Link>

                <Link to={"/#"} className='bg-white text-baseColor rounded-full p-2 transform hover:scale-150 transition-all duration-300'>
                    <CiTwitter className="text-[1.5rem] hover:font-semibold"/>
                </Link>
                
                <Link to={"/#"} className='bg-white text-baseColor rounded-full p-2 transform hover:scale-150 transition-all duration-300'>
                    <BiLogoInstagram className="text-[1.5rem] hover:font-semibold"/>
                </Link>

                <Link to={"/#"} className='bg-white text-baseColor rounded-full p-2 transform hover:scale-150 transition-all duration-300'>
                    <CiYoutube className="text-[1.5rem] hover:font-semibold"/>
                </Link>
                {/* <div className="">

                </div> */}
            </div>
         </div>
        

        {/* Links */}
        <div className="flex items-start gap-32">
            <div className="flex flex-col gap-2">
                <h1 className='text-[2.5rem] font-[500] leading-[6rem]'>IT Solutions</h1>
                <Link to={"/#"} className='opacity-[0.8]'>Web/App Development</Link>
                <Link to={"/#"} className='opacity-[0.8]'>Mobile application development</Link>
                <Link to={"/#"} className='opacity-[0.8]'>UI/UX</Link>
            </div>

            <div className="flex flex-col gap-2">
                <h1 className='text-[2.5rem] font-[500] leading-[6rem]'>Ad Monetization</h1>
                <Link to={"/#"} className='opacity-[0.8]'>SEO/ASO</Link>
                <Link to={"/#"} className='opacity-[0.8]'>Analytics</Link>
                <Link to={"/#"} className='opacity-[0.8]'>Google ads</Link>
                <Link to={"/#"} className='opacity-[0.8]'>Google products</Link>
            </div>

            <div className="flex flex-col gap-2">
                <h1 className='text-[2.5rem] font-[500] leading-[6rem]'>Digital Marketing</h1>
                <Link to={"/#"} className='opacity-[0.8]'>Design</Link>
                <Link to={"/#"} className='opacity-[0.8]'>Influencer marketing</Link>
                <Link to={"/#"} className='opacity-[0.8]'>Advertising</Link>
                <Link to={"/#"} className='opacity-[0.8]'>Video creation</Link>
            </div>

            <div className="flex flex-col gap-2">
                <h1 className='text-[2.5rem] font-[500] leading-[6rem]'>Work Preparation</h1>
                <Link to={"/#"} className='opacity-[0.8]'>Connection</Link>
                <Link to={"/#"} className='opacity-[0.8]'>Skill Training</Link>
                <Link to={"/#"} className='opacity-[0.8]'>Learning Bootcamps</Link>
            </div>
        </div>
       </div>
    </div>
  )
}
