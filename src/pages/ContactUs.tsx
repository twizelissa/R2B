import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Title from '../components/Title';
import VerticalSocialMedia from '../components/VerticalSocialMedia';

export default function ContactUs() {
  return (
    <div>
      <header className='mb-60'>
        <Navigation />
      </header>
      <main>
        <div>
          <Title title='Get In touch' />

          <div className='w-[1571px] h-[727px] bg-gray-200 flex ml-5 mr-10'>
            {/* Left Side */}
            <div className='w-[680px] h-[727px] bg-blue-300 opacity-63 flex flex-col justify-center items-center'>
              <h2 className='text-7xl font-bold p-4'>We’d love to</h2>
              <h2 className='text-7xl font-bold mb-4 '>hear from you</h2>
              <div className='bg-[#8AC5FCA1] w-[409px] h-[134px]'></div>
            </div>

            {/* Right Side */}
            <div className='w-[1091px] bg-white p-8 flex'>
              <div className='w-7/10'>
                <h2 className='text-3xl font-bold mb-4'>Contact Us</h2>
                <form>
                  <div className='mb-4 flex'>
                    <div className='w-1/2 mr-2'>
                      <label className='block text-lg font-medium text-gray-700'>First Name</label>
                      <input
                        type='text'
                        className='mt-1 p-2 w-full border-b-2 border-blue-500 focus:outline-none'
                        placeholder='Your First Name'
                      />
                    </div>
                    <div className='w-1/2 ml-2'>
                      <label className='block text-lg font-medium text-gray-700'>Last Name</label>
                      <input
                        type='text'
                        className='mt-1 p-2 w-full border-b-2 border-blue-500 focus:outline-none'
                        placeholder='Your Last Name'
                      />
                    </div>
                  </div>
                  <div className='mb-4 flex'>
                    <div className='w-1/2 mr-2'>
                      <label className='block text-lg font-medium text-gray-700'>Email</label>
                      <input
                        type='email'
                        className='mt-1 p-2 w-full border-b-2 border-blue-500 focus:outline-none'
                        placeholder='you@example.com'
                      />
                    </div>
                    <div className='w-1/2 ml-2'>
                      <label className='block text-lg font-medium text-gray-700'>Phone Number</label>
                      <input
                        type='tel'
                        className='mt-1 p-2 w-full border-b-2 border-blue-500 focus:outline-none'
                        placeholder='Your Phone Number'
                      />
                    </div>
                  </div>
                  <div className='mb-4'>
                    <label className='block text-lg font-medium text-gray-700'>Message</label>
                    <textarea
                      className='mt-1 p-2 w-full border-b-2 border-blue-500 focus:outline-none'
                      rows={4}
                      placeholder='Your message here...'
                    />
                  </div>
                  <button
                    type='submit'
                    className='bg-black text-white px-4 py-2 rounded hover:bg-gray-800'
                    style={{
                      width: '121px',
                      height: '33px',
                      position: 'absolute',
                      top: '797px',
                      left: '832px',
                    }}
                  >
                    Send
                  </button>
                </form>
              </div>
              <div className='ml-40'>
                <VerticalSocialMedia />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
