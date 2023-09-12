

import Navigation from '../components/Navigation.js'
import Footer from '../components/Footer.js'

import faqImage from './../assets/images/faq.jpg';

import Title from '../components/Title.js';


export default function About() {
  return (
    <div>
{/* -------- Navigatoin */}
      <header>
        <Navigation/>

        <div className="flex h-[80vh] relative">
          <div className="w-[50%] h-full relative -z-50">
            
            <h1 className='text-white text-baseFont leading-[1.5]  opacity-100 z-10 absolute top-[60%] md:top-[50%] left-[20%] md:left-[35%] transform -translate-x-[10%] md:-translate-x-[35%] -translate-y-[50%]'>
                
              <Title title='We provide a real job training to fair the opportunity'/>
              <span className='block mb-6'>
              Through our period programs, you get hands on experience learning by working on different projects. Get rid of learning materials that make you delay in joining the market.
              </span>
              <span className='block'>We aim to build leaders in Africa to accelerate the growth of each country and empower people in Africa.</span>
            </h1>
          </div>

        <div className='mt-6 mr-6'>

        </div>
        </div>
      </header>
      

{/* -------- Main */}
<main>
  {/* ----------directions--------------- */}
  <div className="mt-32 relative">
    <div className="w-1/2 h-min">
      <img src={faqImage} alt="faq" />
    </div>

    <div className="bg-baseColor opacity-[0.70] absolute top-0 left-0 h-full w-full"></div>
    <div className="absolute left-20 top-20 w-full">
      <Title title='Popular directions'/>
      <div className="flex justify-center">
        <div className="bg-white p-8 rounded-md text-lg font-bold">
          1. Software Development
        </div>
        <div className="bg-white p-8 rounded-md text-lg font-bold">
          2. Marketing
        </div>
        <div className="bg-white p-8 rounded-md text-lg font-bold">
          3. Media Communication
        </div>
        <div className="bg-white p-8 rounded-md text-lg font-bold">
          4. Communication
        </div>
      </div>
    </div>
  </div>
</main>



{/* -------- Footer */}
      <Footer/>
    </div>
  )
}
