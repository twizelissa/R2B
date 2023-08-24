import {SiToyota,SiMitsubishi, SiSony, SiKyocera, SiNec} from 'react-icons/si'

import Navigation from '../components/Navigation.js'
import Footer from '../components/Footer.js'
import Title from '../components/Title.js'

import personImage from './../assets/images/on-mac.jpg'
import partnersImage from './../assets/images/partners-image.svg'

export default function Services() {
  return (
    <div>
      {/* Navigatoin */}
      <header>
        <Navigation/>

         {/* background */}
         <div className="relative">
            <div className="w-full h-[100vh] bg-gradient-to-b from-white to-baseColor opacity-[0.58]">
                <img src={personImage} className='w-full h-full object-cover absolute -z-40' alt="back image" />
            </div>
        </div>
      </header>
      
      <main>

        <div className="my-40">
          <Title title='Our partners'/>

        {/* bg image */}
          <div className="">
            <img src={partnersImage} alt="" />
          </div>

        {/* partners list */}
        <div className="flex">
          <div className="">
          <SiToyota/>
          <p>Toyota</p>
          </div>
        </div>
        </div>
      </main>

      {/* Footer */}
      <Footer/>
    </div>
  )
}
