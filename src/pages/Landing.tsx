import { Link } from "react-router-dom"
import aboutImage from './../assets/images/about-analytics.jpg'
import Navigation from "../components/Navigation.js"
import './../styles/button.css'

import bgVideo from './../assets/videos/bg-video.mp4'
import VerticalSocialMedia from "../components/VerticalSocialMedia.js"
import Button from "../components/Button.js"

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

           <main>
            <div className="flex bg-[#828f9a] gap-40  h-[45vh]">
              <div className="w-[50%]">
                <img src={aboutImage} className="object-cover w-full h-full" alt="About image" />
              </div>

              <div className="w-[45%] py-16 text-white ">
                <h1 className="text-[5rem]">About us</h1>
                <p className="w-[75%] py-10 text-[1.5rem]">Hi! You’ve been wondering how and where you can get services such as software development for 
                  your company, digital marketing services,  motion graphics, and monetization. 
                  Here you are.</p>

                  <Button btnLabel="Learn more" linkTo="about-us"/>
              </div>
            </div>

            <div className="">
              Something else
            </div>
           </main>
        </div>
    )
}

export default Landing