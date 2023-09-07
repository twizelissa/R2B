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

          <header className='baseHeader w-full h-[55vh] md:h-[100vh] relative bg-local'>
              
              {/* <Navigation/> */}

            <div className="absolute text-center top-[40%] left-[20%] md:left-[55%] transform -translate-x-[10%] md:-translate-x-[5%] -translate-y-[40%] ">
              <h1 className="text-white block text-[3rem] md:text-[5rem] md:leading-[6rem] mb-16 md:mb-20">
                Get your company grow with our services
              </h1>

              <Button btnLabel="Learn more" linkTo="about-us"/>       
            </div>

            <div className="absolute top-[10rem] md:top-[20rem]  left-[.5rem] md:left-[6rem]">
            <VerticalSocialMedia/>
            </div>
         </header>

         <main>
            {/*----------- About section ----------*/}
            <div className="flex flex-col md:w-[70%] w-[90%] absolute md:left-[10%] left-[5%] md:top-[80%] top-[40%] md:flex-row bg-[#828f9a] md:gap-40 h-[60vh] md:h-[45vh]">
                <div className="w-[100%] md:w-[50%] h-[40%] md:h-full">
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
              <div className="py-24 md:py-36 relative md:top-[20rem] top-[40rem]">
                <Title title='Services'/>
                <div className="mt-20">
                  <img src={wheelImage} alt="wheel svg" />
                </div>

              {/* card */}
                <div className="bg-white w-[100%] md:w-[20%] text-baseColor absolute px-10 md:px-20 top-[45rem] md:top-[26rem] md:right-[20%] right-0 md:left-0 opacity-[0.3] rounded-md py-10 md:py-20">
                  <TbBulb className="text-center text-[10rem] mb-6 md:mb-10 relative left-[45%] md:left-[50%] -translate-x-[50%]"/>
                  <p className='text-baseFont font-semibold'>We ensure that your business activities get promoted by our service solutions.</p>
                </div>

              {/* imgae */}
                <div className="absolute w-[80%] md:w-[35%] h-[35vh] md:h-[55vh] top-[17rem] md:top-[26rem] rounded-md right-[3rem] md:right-[25rem]">
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
            <div className="relative top-[70rem] md:top-[24rem]">
              <Title title='Why choose us?'/>
              
              <div className="w-[100%] md:w-[34%] text-baseFont relative">
                <div className="mt-24">
                  <img src={sidePoints} alt="points" className='w-8' />
                </div>

                <div className="text-white absolute -top-4 left-20">
                  <h1 className='text-[2.5rem] md:text-[3rem] mb-2 md:mb-8'>Faster Development</h1>
                  <p className='text-baseFont'>We have a large community of talents who are good in different services. We respect the time we set between us and you. 
                    It means we deliver work to you in the time we agreed on. No delay.</p>
                </div>

                <div className="text-white absolute top-60 left-20">
                  <h1 className='text-[2.5rem] md:text-[3rem] mb-2 md:mb-8'>Quality work</h1>
                  <p className='text-baseFont'>With the range of services we offer, we let our talented workers put their magic in work. 
                  These experts are specialized in using different tools so that they can go beyond your expectations.</p>
                </div>

                <div className="text-white absolute top-[31rem] left-20">
                  <h1 className='text-[2.5rem] md:text-[3rem mb-2 md:mb-8'>Affordable prices</h1>
                  <p className='text-baseFont'>We have a good will to work with you. That’s why our prices are not going to make you go back. 
                  We feel happy when we see your company’s flag rising up daily. According to the service you need, 
                  choose the best plan to help you grow.</p>
                </div>
              </div>

              <div className="bg-gradient-to-r md:w-[60%] w-[100%] h-[60vh] absolute top-48 md:top-64 right-0 -z-40">
                <div className="h-full bg-gradient-to-r md:from-cyan-500 from-baseColor md:to-blue-500 md:opacity-[0.3] to-baseColor opacity-[0.8]"></div>
                <img src={chooseUsImage} className='w-full object-cover h-full absolute top-0 -z-10' alt="Why choose us image" />
              </div>
            </div>

{/* ---------- Awards section */}
              <div className="relative top-[90rem] md:top-[44rem]">
                <Title title='Numbers'/>

              <div className="relative">
                <div className="md:w-[30%] w-[70%] absolute top-[5%] left-[15%] md:left-0 md:top-[12.5%] z-50">
                  <img src={awardImage} className='w-full object-cover' alt="award image" />
                </div>

                <div className="relative text-baseColor bg-white bg-gradient-to-l from-secondColor to-white opacity-[0.8] flex-1 md:h-[50vh] h-[36vh] md:w-[80%] w-[100%] md:left-[20%] md:top-0 top-20">
                  {/* For managing absolute functions */}
                  <div className="flex flex-col justify-center items-center absolute top-72 md:top-20 md:left-[30%] left-[15%] ">
                    <h1 className='md:text-[5rem] text-[3rem] md:leading-[10rem] leading-[2rem]'>We stand on the top</h1>
                    <div className="flex items-center text-baseFont gap-20 text-center my-10">
                      <h1>
                        <span className='block md:text-5xl text-3xl font-semibold md:my-4 my-2'>+100</span>
                        <span className='block text-[1.2rem] md:text-[1.5rem]'>Clients</span>
                      </h1>

                      <h1>
                        <span className='block md:text-5xl text-3xl font-semibold md:my-4 my-2'>+400</span>
                        <span className='block text-[1.2rem] md:text-[1.5rem]'>Projects</span>
                      </h1>

                      <h1>
                        <span className='block md:text-5xl text-3xl font-semibold md:my-4 my-2'>10</span>
                        <span className='block text-[1.2rem] md:text-[1.5rem]'>Awards</span>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
         </main>
           

           {/* -------Footer */}
           <div className='relative md:top-[44rem] top-[90rem]'>
              <Footer/>
            </div>
        </div>
    )
}

export default Landing