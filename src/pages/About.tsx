import {IoArrowDownCircleOutline, IoArrowUpCircleOutline} from 'react-icons/io5'

import Navigation from '../components/Navigation.js'
import Footer from '../components/Footer.js'

import aboutusImage from './../assets/images/about-us.png';
import statisticsImage from './../assets/images/statistics.jpg'
import motionGraphics from './../assets/images/camera.jpg'
import softwareDevImage from './../assets/images/software-development.jpg'
import onFocusImage from './../assets/images/on-focus.jpg'
import marketImage from './../assets/images/market.jpg'
import digitalMarketingImage from './../assets/images/digital-marketing.jpg'
import faqImage from './../assets/images/faq.jpg';

import Title from '../components/Title.js';
import faqAndAnswers from '../data/faq.js';
import { useState } from 'react';
import VerticalSocialMedia from '../components/VerticalSocialMedia.js';

import Kotone from './../assets/images/Kotone.jpg'
import Olivier from './../assets/images/Olivier.jpg'
import Elsa from './../assets/images/Elsa.jpg'
import La_paix from './../assets/images/profile.jpg'

export default function About() {
  const imageStyle = 'w-full h-full rounded-xl object-cover overflow-hidden'
  const [opened, setOpened] = useState(0);

  return (
    <div>
{/* -------- Navigatoin */}
      <header>
        {/* <Navigation/> */}

        <div className="flex md:flex-row flex-col h-[80vh] relative">
          <div className="md:w-[50%] w-[100%] h-full relative -z-50">
            <div className="bg-secondColor opacity-[0.35] w-[100%] h-full"></div>
            <h1 className='text-white text-baseFont leading-[1.5] opacity-100 z-10 absolute top-[35%] md:top-[50%] left-[15%] md:left-[35%] transform -translate-x-[10%] md:-translate-x-[35%] -translate-y-[50%]'>
              <span className='block text-[6rem] font-semibold my-10'>ABOUT US</span>
              <span className='block'>
               We work with Rwandan passionate and dedicated software engineers. Rwandan government is focusing on ICT development.
               Our members are fluent in Japanese, English, French and Kinyarwanda, which enables smooth team assignment and 
               software development.
              </span>
            </h1>
          </div>

          <div className="bg-[#D9D9D9] flex-grow flex-1 relative -z-50">
            <div className="absolute w-full bottom-0 left-0">
              <img src={aboutusImage} className='w-full' alt="About us image" />
          </div>
          </div>
        </div>
      </header>
      

{/* -------- Main */}

      <main>
      <div className="md:mt-32 mt-16">
          <Title title='Services Description'/>

          <div className="flex md:flex-row flex-col bg-white mt-20">
            <div className="md:p-20 p-5 md:w-[55%] w-full">
              <div className="md:mb-16 mb-8">
                <h1 className='font-semibold mb-6'>
                  <span className='text-secondColor md:mr-6 mr-3  md:text-5xl text-4xl'>01.</span>
                  <span>Holistic approach for your media growth</span>
                </h1>
                <p className='md:mx-24 mx-6 md:text-[1.5rem] text-[1.2rem]'>Media growth involves in page views improvement and revenue improvement. We provide comprehensive support for SEO and ASO 
                  to increase traffic and acquire new users, while also assisting in maximizing monetization results through programmatic 
                  advertising solutions.</p>
              </div>

              <div className="md:mb-16 mb-8">
                <h1 className='font-semibold mb-6'>
                  <span className='text-secondColor md:mr-6 mr-3  md:text-5xl text-4xl'>02.</span>
                  <span>Influencer Marketing to reach out to more  potential customers</span>
                </h1>
                <p className='md:mx-24 mx-6 md:text-[1.5rem] text-[1.2rem]'>
                  We will find and secure the ideal talent to promote your brand, ranging from nano-influencers with dedicated and 
                  interactive followers to celebrities capable of showcasing your brand to millions of people.
                </p>
              </div>

              <div className="md:mb-16 mb-8">
                <h1 className='font-semibold mb-6'>
                  <span className='text-secondColor md:mr-6 mr-3  md:text-5xl text-4xl'>03.</span>
                  <span>ERP/CRM Development and Integrate</span>
                </h1>
                <p className='md:mx-24 mx-6 md:text-[1.5rem] text-[1.2rem]'>
                  Every project is different and so should the process be. We’ll define a clear framework of how we 
                  build your own application, website, and softwares to create the best suite for your business by 
                  exchanging feedback and effectively working together.
                </p>
              </div>
            </div>

            <div className="md:w-[45%] w-full md:p-20 p-5 relative">
              <div className="flex items-center md:gap-8 gap-4">
                <div className="flex flex-col md:gap-8 gap-4 md:w-[33%] w-[3md:0%] md:h h-[35vh]-[65vh] h-[40vh]">
                  {/* first images */}
                  <img src={statisticsImage} className={imageStyle} alt="statistics" />
                  <img src={digitalMarketingImage} className={imageStyle} alt="Dig marketing" />
                  <img src={marketImage} className={imageStyle} alt="Marketing" />
                </div>

                {/* second images */}
                <div className="flex flex-col md:gap-8 gap-4 md:w-[33%] w-[30%] md:h-[45vh] h-[20vh]">
                  <img src={softwareDevImage} className={imageStyle} alt="Software development" />
                  <img src={motionGraphics} className={imageStyle} alt="Motion graphics" />
                </div>

                {/* Third image */}
                <div className="md:w-[33%] w-[30%] md:h-[25vh] h-[15vh]">
                  <img src={onFocusImage} className={imageStyle} alt="On focus" />
                </div>
              </div>
              <div className="bg-secondColor opacity-[0.35] absolute top-0 right-0 h-full w-full"></div>
            </div>
          </div>
        </div>


{/* ----------FAQ--------------- */}

        <div className="mt-32">
          <div className="faq w-full h-[100vh] py-14">
            <div className="w-full flex md:flex-row flex-col justify-around items-center">
              <div className="md:w-[50%] px-5">
                <Title title='FAQ'/>
                <div className="w-full">
                        {
                          faqAndAnswers.map((item, index)=>(
                            <div className="bg-theGreyish cursor-pointer text-baseColor rounded-2xl p-8 my-6 transition-all duration-500" key={index}
                            onClick={()=>setOpened(index)} >
                              <div className="w-full flex justify-between items-center mb-6">
                                <h1 className='font-semibold text-[1.7rem]'>{item.question}</h1>
                                {opened === index ?<IoArrowUpCircleOutline/> : <IoArrowDownCircleOutline/>}
                              </div>
                                <p className={`text-[1.4rem] w-[85%] ${opened === index? ``:'hidden'}`}>{item.answer}</p>
                            </div>
                          ))
                        }
                </div>
              </div>

              {/* form */}
              <div className="bg-secondColor  text-baseColor opacity-80 md:w-[30%] w-[90%] m-auto rounded-3xl p-12">
                <form onSubmit={e => e.preventDefault()}>
                  <h1 className='text-center text-5xl mb-8'>Ask your question</h1>

                  <div className="w-[70%] my-10">
                    <input type="text" className='bg-transparent border-b border-baseColor focus:outline-none w-full text-[1.3rem] placeholder-baseColor' placeholder='Name' />
                  </div>

                  <div className="w-[70%] my-10">
                    <input type="email" className='bg-transparent border-b border-baseColor focus:outline-none w-full text-[1.3rem] placeholder-baseColor' placeholder='Email' />
                  </div>

                  <div className="w-[100%] my-10">
                    <textarea className='bg-transparent border-b border-baseColor focus:outline-none w-full text-[1.3rem] placeholder-baseColor' placeholder='Question...'>
                    </textarea>
                  </div>
                  <button className='text-white text-center py-4 px-20 bg-baseColor hover:bg-baseColor hover:opacity-70 transition-all duration-300'>Submit</button>
                </form>
              </div> 
            </div>
          </div>
        </div>

        {/* ------------ TEAM ------------- */}
        <div className="mt-32">
          <Title title='Team'/>

          <div className="bg-secondColor opacity-40 flex flex-wrap gap-20 justify-center my-10 md:p-40 p-10">
          <div className="w-full md:w-[45%] md:h-[65vh] h-[35vh] relative">
              <div className="flex w-full h-full bg-baseColor">
                <div className="text-md w-[15%] h-[60%] text-white">
                  <VerticalSocialMedia/>
                </div>
                <div className="w-[75%] translate-x-[5%] translate-y-[15%]">
                  <img src={Kotone} className='h-[75%] object-cover' alt="" />
                </div>
              </div>

              <div className="border border-white absolute text-white py-6 px-20 md:-top-[5%] -top-[15%] left-[30%]">
              <h1 className='border-b-2 border-t-2 b'>CEO</h1>
              </div>
            </div>

            <div className="w-full md:wmd:-[45%] h h-[35vh]-[65vh] relative">
              <div className="flex w-full h-full bg-baseColor">
                <div className="text-md w-[15%] h-[60%] text-white">
                  <VerticalSocialMedia/>
                </div>
                <div className="w-[75%] translate-x-[5%] translate-y-[15%]">
                  <img src={Olivier} className='h-[75%] object-cover' alt="" />
                </div>
              </div>

              <div className="border border-white absolute text-white py-6 px-20 md:-top-[5%] -top-[15%] left-[30%]">
              <h1 className='border-b-2 border-t-2 b'>CEO</h1>
              </div>
            </div>

            <div className="w-full md:wmd:-[45%] h h-[35vh]-[65vh] relative">
              <div className="flex w-full h-full bg-baseColor">
                <div className="text-md w-[15%] h-[60%] text-white">
                  <VerticalSocialMedia/>
                </div>
                <div className="w-[75%] translate-x-[5%] translate-y-[15%]">
                  <img src={Elsa} className='h-[75%] object-cover' alt="" />
                </div>
              </div>

              <div className="border border-white absolute text-white py-6 px-20 md:-top-[5%] -top-[15%] left-[30%]">
              <h1 className='border-b-2 border-t-2 b'>CEO</h1>
              </div>
            </div>

            <div className="w-full md:wmd:-[45%] h h-[35vh]-[65vh] relative">
              <div className="flex w-full h-full bg-baseColor">
                <div className="text-md w-[15%] h-[60%] text-white">
                  <VerticalSocialMedia/>
                </div>
                <div className="w-[75%] translate-x-[5%] translate-y-[15%]">
                  <img src={La_paix} className='h-[75%] object-cover' alt="" />
                </div>
              </div>

              <div className="border border-white absolute text-white py-6 px-20 md:-top-[5%] -top-[15%] left-[30%]">
              <h1 className='border-b-2 border-t-2 b'>CEO</h1>
              </div>
            </div>
          </div>
        </div>
      </main>
      

{/* -------- Footer */}
      <div>
        <Footer/>
      </div>
    </div>
  )
}
