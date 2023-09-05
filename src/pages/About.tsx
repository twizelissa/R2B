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

export default function About() {
  const imageStyle = 'w-full h-full rounded-xl object-cover overflow-hidden'
  return (
    <div>
{/* -------- Navigatoin */}
      <header>
        <Navigation/>

        <div className="flex h-[80vh] relative">
          <div className="w-[50%] h-full relative -z-50">
            <div className="bg-secondColor opacity-[0.35] w-[100%] h-full"></div>
            <h1 className='text-white text-baseFont leading-[1.5]  opacity-100 z-10 absolute top-[60%] md:top-[50%] left-[20%] md:left-[35%] transform -translate-x-[10%] md:-translate-x-[35%] -translate-y-[50%]'>
              <span className='block text-[6rem] font-semibold my-10'>ABOUT US</span>
              <span className='block'>
              We work with Rwandan passionate and dedicated software engineers. Rwandan government is focusing on ICT development.
               Our members are fluent in Japanese, English, French and Kinyarwanda, which enables smooth team assignment and 
               software development.
              </span>
            </h1>
          </div>

          <div className="bg-[#D9D9D9] flex-1 relative -z-50">
            <div className="absolute bottom-0 left-0">
              <img src={aboutusImage} alt="About us image" />
            </div>
          </div>
        </div>
      </header>
      

{/* -------- Main */}
      <main>
        <div className="mt-32">
          <Title title='Services Description'/>

          <div className="flex bg-white mt-20 ">
            <div className="p-20 w-[55%]">
              <div className="mb-16">
                <h1 className='font-semibold mb-6'>
                  <span className='text-secondColor mr-6 text-5xl'>01.</span>
                  <span>Holistic approach for your media growth</span>
                </h1>
                <p className='mx-24 text-[1.5rem]'>Media growth involves in page views improvement and revenue improvement. We provide comprehensive support for SEO and ASO 
                  to increase traffic and acquire new users, while also assisting in maximizing monetization results through programmatic 
                  advertising solutions.</p>
              </div>

              <div className="mb-16">
                <h1 className='font-semibold mb-6'>
                  <span className='text-secondColor mr-6 text-5xl'>02.</span>
                  <span>Influencer Marketing to reach out to more  potential customers</span>
                </h1>
                <p className='mx-24 text-[1.5rem]'>
                  We will find and secure the ideal talent to promote your brand, ranging from nano-influencers with dedicated and 
                  interactive followers to celebrities capable of showcasing your brand to millions of people.
                </p>
              </div>

              <div className="mb-16">
                <h1 className='font-semibold mb-6'>
                  <span className='text-secondColor mr-6 text-5xl'>03.</span>
                  <span>ERP/CRM Development and Integrate</span>
                </h1>
                <p className='mx-24 text-[1.5rem]'>
                  Every project is different and so should the process be. We’ll define a clear framework of how we 
                  build your own application, website, and softwares to create the best suite for your business by 
                  exchanging feedback and effectively working together.
                </p>
              </div>
            </div>

            <div className="w-[45%] p-20 relative">
              <div className="flex items-center gap-8">
                <div className="flex flex-col gap-8 w-[33%] h-[65vh]">
                  {/* first images */}
                  <img src={statisticsImage} className={imageStyle} alt="statistics" />
                  <img src={digitalMarketingImage} className={imageStyle} alt="Dig marketing" />
                  <img src={marketImage} className={imageStyle} alt="Marketing" />
                </div>

                {/* second images */}
                <div className="flex flex-col gap-8 w-[33%] h-[45vh]">
                  <img src={softwareDevImage} className={imageStyle} alt="Software development" />
                  <img src={motionGraphics} className={imageStyle} alt="Motion graphics" />
                </div>

                {/* Third image */}
                <div className="w-[33%] h-[25vh]">
                  <img src={onFocusImage} className={imageStyle} alt="On focus" />
                </div>
              </div>
              <div className="bg-secondColor opacity-[0.35] absolute top-0 right-0 h-full w-full"></div>
            </div>
          </div>
        </div>

        <div className="mt-32 relative">
          <div className="w-full ">
            <img src={faqImage} alt="faq" />
          </div>

          <div className="bg-baseColor opacity-[0.70] absolute top-0 left-0 h-full w-full"></div>

          <Title title='FAQ'/>
        </div>
      </main>

{/* -------- Footer */}
      <Footer/>
    </div>
  )
}
