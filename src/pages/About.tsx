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
          <div className="bg-[#8AC5FC] opacity-[0.35] w-[50%] relative -z-50">
            <h1 className='text-white opacity-[1] absolute top-[60%] md:top-[50%] left-[20%] md:left-[50%] transform -translate-x-[10%] md:-translate-x-[50%] -translate-y-[50%]'>
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
        </div>
      </main>

{/* -------- Footer */}
      <Footer/>
    </div>
  )
}
