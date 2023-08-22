import {TbBulb} from 'react-icons/tb'
import {SiGooglemarketingplatform} from 'react-icons/si'
import {CgWebsite} from 'react-icons/cg'
import {MdSlowMotionVideo, MdOutlineMonetizationOn} from 'react-icons/md'

import Navigation from "../components/Navigation.js"
import VerticalSocialMedia from "../components/VerticalSocialMedia.js"
import Button from "../components/Button.js"
import './../styles/button.css'

import aboutImage from './../assets/images/about-analytics.jpg'
import servicesImage from './../assets/images/services.jpg'

import wheelImage from './../assets/images/wheel-image.svg'
import bgVideo from './../assets/videos/bg-video.mp4'

 function Landing(){
    return(
        <div className="">
            
           <header className="w-full h-[55vh] md:h-[100vh] relative">
               <Navigation/>

           <div className="bg-video absolute top-0 left-0 h-full w-full -z-1 opacity-[0.07] overflow-hidden">
              <video className="bg-video__content h-full w-full object-cover" autoPlay muted loop>
                <source src={bgVideo} type="video/mp4" />
                <source src="img/" type="video/webm" />
                Your browser is not supported
              </video>
           </div>

          <div className="absolute text-center top-[60%] md:top-[50%] left-[20%] md:left-[50%] transform -translate-x-[10%] md:-translate-x-[50%] -translate-y-[50%] ">
            <h1 className="text-center text-white block text-[3rem] md:text-[8rem] md:leading-[9rem] mb-32 md:mb-40">
              Get your company grow with our services
            </h1>

            <Button btnLabel="Learn more" linkTo="about-us"/>
        
          </div>

          <div className="absolute top-[10rem] md:top-[20rem]  left-[.5rem] md:left-[6rem]">
          <VerticalSocialMedia/>
          </div>
           </header>


{/* ----------MAIN---------- */}
           <main>

            {/*----------- About section ----------*/}
            <div className="flex flex-col md:flex-row bg-[#828f9a] md:gap-40 h-[60vh] md:h-[45vh]">
              <div className="w-[100%] md:w-[50%]">
                <img src={aboutImage} className="object-cover w-full h-full" alt="About image" />
              </div>

              <div className="w-[100%] md:w-[45%] py-16 px-4 md:px-0 text-white ">
                <h1 className="text-headerFontPhone md:text-headerFontWeb leading-10 md:leading-normal">About us</h1>
                <p className="w-[95%] md:w-[75%] py-10 text-[1.5rem]">Hi! You’ve been wondering how and where you can get services such as software development for 
                  your company, digital marketing services,  motion graphics, and monetization. 
                  Here you are.</p>

                  <Button btnLabel="Learn more" linkTo="about-us"/>
              </div>
            </div>

{/* -------Services section-------*/}
            <div className="py-24 md:py-36 relative">
              <div className="border-[.3rem] border-secondColor w-40 my-4"></div>
              <h1 className='text-white text-headerFontPhone md:text-headerFontWeb'>Services</h1>
              <div className="mt-20">
                <img src={wheelImage} alt="wheel svg" />
              </div>

{/* card */}
              <div className="bg-white w-[20%] text-baseColor absolute px-20 top-[26rem] opacity-[0.3] rounded-md py-20">
                <TbBulb className="text-center text-[10rem]  mb-10 relative left-[50%] -translate-x-[50%]"/>
                <p className='text-baseFont font-semibold'>We ensure that your business activities get promoted by our service solutions.</p>
              </div>

{/* imgae */}
              <div className="absolute w-[80%] md:w-[35%] top-[26rem] rounded-md right-[25rem]">
                <img src={servicesImage} className='w-full' alt="services imageS" />

{/* overflowing services */}
                <div className="bg-white rounded-[140px] text-baseColor absolute px-20 py-4 top-10 -left-[25%]">
                  <CgWebsite className="relative text-[3rem] left-[50%] -translate-x-[50%] my-2"/>
                  <h1 className='text-baseFont font-semibold'>Software Developement</h1>
                </div>

                <div className="bg-white rounded-[140px] text-baseColor absolute px-20 py-4 top-10 left-[75%] w-[45%]">
                  <SiGooglemarketingplatform className="relative text-[3rem] left-[50%] -translate-x-[50%] my-2"/>
                  <h1 className='text-baseFont font-semibold'>Digital Marketing</h1>
                </div>

                <div className="bg-white rounded-[140px] text-baseColor absolute px-20 py-4 top-[23rem] -left-[15%]">
                  <MdSlowMotionVideo className="relative text-[3rem] left-[50%] -translate-x-[50%] my-2"/>
                  <h1 className='text-baseFont font-semibold'>Motion and Graphics</h1>
                </div>

                <div className="bg-white rounded-[140px] text-baseColor absolute px-20 py-4 top-[20rem] left-[75%] w-[50%]">
                  <MdOutlineMonetizationOn className="relative text-[3rem] left-[50%] -translate-x-[50%] my-2"/>
                  <h1 className='text-baseFont font-semibold'>Web/App Monetization</h1>
                </div>
              </div>
            </div>
           </main>
        </div>
    )
}

export default Landing