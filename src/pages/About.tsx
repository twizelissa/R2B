import Navigation from '../components/Navigation.js'
import Footer from '../components/Footer.js'

import aboutusImage from './../assets/images/about-us.png';
import Title from '../components/Title.js';

export default function About() {
  return (
    <div>
{/* -------- Navigatoin */}
      <header>
        <Navigation/>

        <div className="flex h-[80vh] relative">
          <div className="bg-secondColor opacity-[0.35] w-[50%] relative -z-50">
            <h1 className='text-white absolute top-[60%] md:top-[50%] left-[20%] md:left-[50%] transform -translate-x-[10%] md:-translate-x-[50%] -translate-y-[50%]'>
              <span className='block text-[6rem]'>ABOUT US</span>
              <span className='block'>Get and use digital services in every corner.</span>
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
                  <span className='text-secondColor mr-6 text-5xl'>01.</span>
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

            <div className="w-[45%]">

            </div>
          </div>
        </div>
      </main>

{/* -------- Footer */}
      <Footer/>
    </div>
  )
}
