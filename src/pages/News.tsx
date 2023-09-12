import Navigation from '../components/Navigation.js';
import Footer from '../components/Footer.js';
import Title from '../components/Title.js';

export default function News() {
  return (
    <div>
      {/* -------- Navigation */}
      <header>
        <Navigation />
        <div className="flex h-[80vh] relative">
          <div className="w-[50%] h-full relative -z-50">
            <h1 className='text-white text-baseFont leading-[1.5] opacity-100 z-10 absolute top-[60%] md:top-[50%] left-[20%] md:left-[35%] transform -translate-x-[10%] md:-translate-x-[35%] -translate-y-[50%]'>
              <Title title='We provide real job training to create opportunities' />
              <span className='block mb-6'>
                Through our programs, you gain hands-on experience by working on various projects. Eliminate the delay caused by traditional learning materials and enter the job market with confidence.
              </span>
              <span className='block'>Our mission is to foster leadership in Africa, accelerating the growth of each country and empowering its people.</span>
            </h1>
          </div>
          <div className='mt-6 mr-6'></div>
        </div>
      </header>

      {/* -------- Main */}
      <main>
        {/* ---------- News Section --------------- */}
        <section className="mt-8 p-4 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-4">Latest News</h2>
            <div className="flex flex-wrap gap-4">
              {/* News Item 1 */}
              <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
                <div className="bg-white p-4 rounded-lg">
                  <img
                    src="news_image_1.jpg" // Replace with actual image URL
                    alt="News 1"
                    className="w-full h-auto rounded-lg"
                  />
                  <h3 className="text-lg font-semibold mt-2">
                    <a href="#">News Title 1</a>
                  </h3>
                  <p className="text-gray-600">Published on September 12, 2023</p>
                </div>
              </div>

              {/* News Item 2 */}
              <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
                <div className="bg-white p-4 rounded-lg">
                  <img
                    src="news_image_2.jpg" 
                    alt="News 2"
                    className="w-full h-auto rounded-lg"
                  />
                  <h3 className="text-lg font-semibold mt-2">
                    <a href="#">News Title 2</a>
                  </h3>
                  <p className="text-gray-600">Published on September 13, 2023</p>
                </div>
              </div>

              {/* Add more news items as needed */}
            </div>
          </div>
        </section>
      </main>

      {/* -------- Footer */}
      <Footer />
    </div>
  );
}
