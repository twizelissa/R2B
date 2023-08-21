import Navigation from "../components/Navigation.js"

import bgVideo from './../assets/videos/bg-video.mp4'

 function Landing(){
    return(
        <div className="bg-[">
            
           <header className="w-full h-[100vh] relative">
               <Navigation/>

           <div className="bg-video absolute top-0 left-0 h-full w-full -z-1 opacity-[0.07] overflow-hidden">
          <video className="bg-video__content h-full w-full object-cover" autoPlay muted loop>
            <source src={bgVideo} type="video/mp4" />
            <source src="img/" type="video/webm" />
            Your browser is not supported
          </video>
        </div>

      <div className="absolute text-center top-[40%] left-[20%] md:left-[50%] transform -translate-x-[15%] md:-translate-x-[50%] -translate-y-[50%] ">
         <h1 className="text-center text-white block text-[3rem] md:text-[8rem] md:leading-[9rem]">Get your company grow with our services</h1>
      </div>
           </header>

           <main>
            Here we go
           </main>
        </div>
    )
}

export default Landing