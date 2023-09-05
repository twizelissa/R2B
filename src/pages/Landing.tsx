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
import sidePoints from './../assets/images/points.svg'
import chooseUsImage from './../assets/images/why-choose-us.jpg'

import awardImage from './../assets/images/golden-award.jpg'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer.js'
import Title from '../components/Title.js'

 function Landing(){
    return(
        <div>
           <header className="w-full h-[55vh] md:h-[100vh] relative">
               <Navigation/>

           <div className="bg-video absolute top-0 left-0 h-full w-full -z-1 opacity-[0.07] overflow-hidden">
              {/* <video className="bg-video__content h-full w-full object-cover" autoPlay muted loop>
                <source src={bgVideo} type="video/mp4" />
                <source src="img/" type="video/webm" />
                Your browser is not supported
              </video> */}
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

{/* -------Services section */}
            <div className="py-24 md:py-36 relative top-full">
              <Title title='Services'/>
              <div className="mt-20">
                <img src={wheelImage} alt="wheel svg" />
              </div>

            {/* card */}
              <div className="bg-white w-[60%] md:w-[20%] text-baseColor absolute px-10 md:px-20 top-full md:top-[26rem] right-[20%] md:left-0 opacity-[0.3] rounded-md py-10 md:py-20">
                <TbBulb className="text-center text-[10rem] mb-6 md:mb-10 relative left-[45%] md:left-[50%] -translate-x-[50%]"/>
                <p className='text-baseFont font-semibold'>We ensure that your business activities get promoted by our service solutions.</p>
              </div>

            {/* imgae */}
              <div className="absolute w-[70%] md:w-[35%] h-[35vh] md:h-[55vh] top-[17rem] md:top-[26rem] rounded-md right-[6rem] md:right-[25rem]">
                <img src={servicesImage} className='w-full h-full object-cover' alt="services imageS" />

              {/* overflowing services */}
                <div className="bg-white rounded-[140px] text-baseColor absolute px-10 md:px-20 py-2 md:py-4 top-10 -left-[20%]">
                  <Link to={"/#"}>
                    <CgWebsite className="relative text-[2rem] left-[50%] -translate-x-[50%] my-2"/>
                    <h1 className='text-[1rem] md:text-baseFont font-semibold'>Software Developement</h1>
                  </Link>
                </div>

                <div className="bg-white rounded-[140px] text-baseColor absolute px-10 md:px-20 py-2 md:py-4 top-[10rem] md:top-[2.5rem] left-[55%] md:left-[75%] w-[55%] md:w-[45%]">
                  <SiGooglemarketingplatform className="relative text-[2rem] md:text-[3rem] left-[50%] -translate-x-[50%] my-2"/>
                  <h1 className='md:text-baseFont text-[1rem] font-semibold'>Digital Marketing</h1>
                </div>

                <div className="bg-white rounded-[140px] text-baseColor absolute px-10 md:px-20 py-2 md:py-4 top-[16rem] md:top-[23rem] -left-[15%]">
                  <MdSlowMotionVideo className="relative text-[2rem] md:text-[3rem] left-[50%] -translate-x-[50%] my-2"/>
                  <h1 className='md:text-baseFont text-[1rem] font-semibold'>Motion and Graphics</h1>
                </div>

                <div className="bg-white rounded-[140px] text-baseColor absolute px-10 md:px-20 py-2 md:py-4 top-[23rem] md:top-[20rem] left-[55%] md:left-[75%] w-[60%] md:w-[45%]">
                  <MdOutlineMonetizationOn className="relative text-[2rem] md:text-[3rem] left-[50%] -translate-x-[50%] my-2"/>
                  <h1 className='md:text-baseFont text-[1rem] font-semibold'>Web/App Monetization</h1>
                </div>
              </div>
            </div>

{/* ----------why choose us */}
            <div className="relative top-full">
            <Title title='Why choose us?'/>
              
              <div className="w-[100%] md:w-[34%] text-baseFont relative">
                <div className="mt-24">
                  <img src={sidePoints} alt="points" className='w-8' />
                </div>

                <div className="text-white absolute -top-4 left-20">
                  <h1 className='text-[2.5rem] md:text-[3rem] mb-4 md:mb-8'>Faster Development</h1>
                  <p className='text-baseFont'>We have a large community of talents who are good in different services. We respect the time we set between us and you. 
                    It means we deliver work to you in the time we agreed on. No delay.</p>
                </div>

                <div className="text-white absolute top-60 left-20">
                  <h1 className='text-[2.5rem] md:text-[3rem] mb-4 md:mb-8'>Quality work</h1>
                  <p className='text-baseFont'>With the range of services we offer, we let our talented workers put their magic in work. 
                  These experts are specialized in using different tools so that they can go beyond your expectations.</p>
                </div>

                <div className="text-white absolute top-[31rem] left-20">
                  <h1 className='text-[2.5rem] md:text-[3rem mb-4 md:mb-8'>Affordable prices</h1>
                  <p className='text-baseFont'>We have a good will to work with you. That’s why our prices are not going to make you go back. 
                  We feel happy when we see your company’s flag rising up daily. According to the service you need, 
                  choose the best plan to help you grow.</p>
                </div>
              </div>

              <div className="bg-gradient-to-r w-[60%] h-[60vh] absolute top-64 right-0">
                <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-[0.3]"></div>
                <img src={chooseUsImage} className='w-full object-cover h-full absolute top-0 -z-10' alt="Why choose us image" />
              </div>
            </div>

{/* ---------- Awards section */}
            <div className="relative top-96">
            <Title title='Numbers'/>

              <div className="relative">
                <div className="w-[30%] absolute top-[12.5%] z-50">
                  <img src={awardImage} className='w-full object-cover' alt="award image" />
                </div>

                <div className="relative text-baseColor bg-white bg-gradient-to-l from-secondColor to-white opacity-[0.8] flex-1 h-[50vh] w-[80%] left-[20%]">
                  {/* For managing absolute functions */}
                  <div className="flex flex-col justify-center items-center absolute top-20 left-[30%]">
                    <h1 className='text-[5rem] leading-[10rem]'>We stand on the top</h1>
                    <div className="flex items-center text-baseFont gap-20 text-center my-10">
                      <h1>
                        <span className='block text-5xl font-semibold my-4'>+100</span>
                        <span className='block text-center'>Clients</span>
                      </h1>

                      <h1>
                        <span className='block text-5xl font-semibold my-4'>+400</span>
                        <span className='block'>Projects</span>
                      </h1>

                      <h1>
                        <span className='block text-5xl font-semibold my-4'>10</span>
                        <span className='block'>Awards</span>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           </main>

           {/* -------Footer */}
           <div className='relative top-96'>
              <Footer/>
            </div>
        </div>
    )
}

export default Landing