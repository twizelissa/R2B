import {SiToyota,SiMitsubishi, SiSony, SiKyocera, SiNec} from 'react-icons/si'
import {CgWebsite} from 'react-icons/cg'

import Navigation from '../components/Navigation.js'
import Footer from '../components/Footer.js'
import Title from '../components/Title.js'
import './../styles/animation.css'

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

        <div className="my-40 relative">
          <Title title='Our partners'/>

        {/* bg image */}
          <div className="bg-white bg-gradient-to-r from-baseColor to-baseColor opacity-[0.2]">
            <img src={partnersImage} alt="design image" />
          </div>

        {/* partners list */}
          <div className="flex items-start justify-between flex-wrap gap-20 w-full absolute top-[25%]">
            {[{element:<SiToyota className="text-white text-[6rem]"/>, companyName: 'Toyota'}, 
            {element: <SiKyocera className="text-white text-[6rem]"/>, companyName: 'Kyocera'},
            {element: <SiMitsubishi className="text-white text-[6rem]"/>, companyName: 'Mitsubishi'},
            {element: <SiSony className="text-white text-[6rem]"/>, companyName:'SONY'},
            {element: <SiNec className="text-white text-[6rem]"/>, companyName: 'NEC Corporation'},
          ].map((item,index)=>{
              return(
                <div className="flex flex-col items-center gap-8 hover:bg-secondColor" key={index}>
                  <div className="border-2 border-[#8AC5FC] p-28">
                    {item?.element}
                  </div>
                  <p className='text-[#8AC5FC] text-[3rem] hover:animate-moveLabel hover:text-baseColor' >{item.companyName}</p>
                </div>
              )
            })}
          </div>
        
        </div>
      </main>

      {/* Footer */}
      <Footer/>
    </div>
  )
}
