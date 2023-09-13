import Navigation from '../components/Navigation.js';
import Footer from '../components/Footer.js';
import Title from '../components/Title.js';
import { GrPlay } from 'react-icons/gr';

import eduImage from './../assets/images/Directions.png';
import webDev from './../assets/images/webdev.png';
import appDev from './../assets/images/6.png';
import sofDev from './../assets/images/8.png';
import DigDev from './../assets/images/9.png';
import connector from './../assets/images/connector.png';
import developer from './../assets/images/developer.png';

export default function About() {
  return (
    <div>
      {/* -------- Navigation */}
      <header>
        <Navigation />
        <div></div>

        <div className="flex h-[80vh] relative">
          <div className="w-[50%] h-full relative -z-50 p-10">
            <h1 className='text-white text-baseFont leading-[1.5] opacity-100 z-10 absolute top-[60%] md:top-[50%] left-[20%] md:left-[35%] transform -translate-x-[10%] md:-translate-x-[35%] -translate-y-[50%]'>
              <Title title='We provide real job training to foster opportunities' />
              <span className='block mb-10'>
                Through our periodic programs, you gain hands-on experience by working on various projects. Say goodbye to learning materials that hold you back from entering the job market.
              </span>
              <span className='block'>Our goal is to nurture leaders in Africa, accelerating the growth of each nation and empowering its people.</span>

              <button className='bg-white mt-6 p-6 flex items-center justify-between text-black font-bold w-[207px] h-[61px] relative'>
                <div>Start today</div>
                <div className="bg-white flex items-center">
                  <GrPlay className="text-9xl h-[45px] ml-2" />
                </div>
              </button>

            </h1>
          </div>


          {/* adding images  */}
          <div className='flex items-center mt-20'>
  <img
    src={connector}
    alt="edu"
    style={{
      width: '200px',
      height: '200px',
    }}
  />
  <div className="w-20"></div> {/* Space between images */}
  <img
    src={developer}
    alt="edu"
    style={{
      width: '560px', // Set the width to 560px
      height: '470px', // Set the height to 470px
      borderRadius: '15px', // Add border-radius
      marginLeft: '20px', // Add space between the two images
    }}
  />
</div>




          


        </div>
      </header>

      {/* -------- Main */}
      <main>
        {/* ---------- directions --------------- */}
        <div className="relative">
          <div className="h-min relative">
            <img
              src={eduImage}
              alt="edu"
              style={{
                width: '1971px',
                height: '576px',
              }}
            />
          </div>

          {/* Background Rectangle with transparent opacity */}
          <div className="bg-baseColor opacity-20 absolute top-0 left-0 h-full w-full"></div>
          <div className="absolute left-20 top-20 w-full">
            <Title title='Popular directions' />

            {/* Flex container for rectangles */}
            <div className="flex mt-10">
              {/* Rectangle 1 */}
              <div className='bg-secondColor text-baseColor w-[322px] h-[350px] flex flex-col items-center justify-center'>
                <div className='w-[268px] h-[263px] flex flex-col items-center justify-center'>
                  <h1 className='text-white'>Web Design</h1>
                  <img
                    src={webDev}
                    alt="edu"
                    style={{
                      width: '100%',
                      height: 'auto',
                    }}
                  />
                </div>
              </div>

              {/* Gap between rectangles */}
              <div className="w-20"></div>

              {/* Rectangle 2 */}
              <div className='bg-secondColor text-baseColor w-[322px] h-[350px] flex flex-col items-center justify-center'>
                <div className='w-[268px] h-[263px] flex flex-col items-center justify-center'>
                  <h1 className='text-white'>App Development</h1>
                  <img
                    src={appDev}
                    alt="edu"
                    style={{
                      width: '100%',
                      height: 'auto',
                    }}
                  />
                </div>
              </div>

              {/* Gap between rectangles */}
              <div className="w-20"></div>

              {/* Rectangle 3 */}
              <div className='bg-secondColor text-baseColor w-[322px] h-[350px] flex flex-col items-center justify-center'>
                <div className='w-[268px] h-[263px] flex flex-col items-center justify-center'>
                  <h1 className='text-white'>Software Development</h1>
                  <img
                    src={sofDev}
                    alt="edu"
                    style={{
                      width: '100%',
                      height: 'auto',
                    }}
                  />
                </div>
              </div>

              {/* Gap between rectangles */}
              <div className="w-20"></div>

              {/* Rectangle 4 */}
              <div className='bg-secondColor text-baseColor w-[322px] h-[350px] flex flex-col items-center justify-center'>
                <div className='w-[268px] h-[263px] flex flex-col items-center justify-center'>
                  <h1 className='text-white'>Digital Marketing</h1>
                  <img
                    src={DigDev}
                    alt="edu"
                    style={{
                      width: '100%',
                      height: 'auto',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* -------- Footer */}
      <Footer />
    </div>
  );
}
