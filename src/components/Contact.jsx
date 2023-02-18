import React from 'react'

const Contact = () => {
  return (
    <section name="contact" className='pt-24 pb-16'>
      <div className="container">
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
          <div className='pb-8'>
            <p className='text-4xl font-semibold inline border-b-4 text-stroke border-gray-600 '>Contact</p>
            <p className='py-6 text-slate-400'>Submit Form bellow to connect with me</p>
          </div>
          <div className='flex justify-center items-center'>
            <form action="https://getform.io/f/820bd183-b54b-4e4b-be32-9540c33f89a0" method='POST' className='flex flex-col w-full md:w-1/2'>
              <input type="text" name="name" id="name" placeholder='Insert your name' className='p-2 bg-transparent border-2 rounded-md focus:outline-none text-stroke' />
              <input type="email" name="email" id="email" placeholder='Insert Your email' className='my-4 p-2 bg-transparent border-2 rounded-md focus:outline-none text-stroke' />
              <textarea name="message" rows="10" className='p-2 bg-transparent border-2 rounded-md focus:outline-none text-stroke' placeholder='Type your message'></textarea>
              <button className='mt-5 rounded-md py-3 px-6 border border-slate-300 hover:text-primary'>Let's talk</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact