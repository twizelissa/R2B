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

          <div className='w-900 h-900 bg-gray-200 flex ml-5 mr-40'>
            {/* Left Side - Text */}
            <div className='w-4/10 bg-blue-300 p-8'>
              <h2 className='text-3xl font-bold mb-4'>About Us</h2>
              <p className='text-lg'>
                We are a dedicated team committed to delivering high-quality products and services to our clients.
              </p>
            </div>

            {/* Right Side - Contact Form and Social Media */}
            <div className='w-6/10 bg-white opacity-75 p-8 flex'>
              <div className='w-7/10'>
                <h2 className='text-3xl font-bold mb-4'>Contact Us</h2>
                <form>
                  <div className='mb-4'>
                    <label className='block text-sm font-medium text-gray-700'>Name</label>
                    <input
                      type='text'
                      className='mt-1 p-2 w-full border-b-2 border-blue-500 focus:outline-none'
                      placeholder='Your Name'
                    />
                  </div>
                  <div className='mb-4'>
                    <label className='block text-sm font-medium text-gray-700'>Email</label>
                    <input
                      type='email'
                      className='mt-1 p-2 w-full border-b-2 border-blue-500 focus:outline-none'
                      placeholder='you@example.com'
                    />
                  </div>
                  <div className='mb-4'>
                    <label className='block text-sm font-medium text-gray-700'>Message</label>
                    <textarea
                      className='mt-1 p-2 w-full border-b-2 border-blue-500 focus:outline-none'
                      rows={4}
                      placeholder='Your message here...'
                    />
                  </div>
                  <button
                    type='submit'
                    className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
                  >
                    Send
                  </button>
                </form>
              </div>
              <div className='w-3/10 pl-8'>
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
