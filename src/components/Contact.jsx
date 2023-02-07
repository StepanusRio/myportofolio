import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='h-screen w-full bg-gradient-to-b from-[#301E67] via-[#03001C] to-[#03001C] text-white p-4'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-600 '>Contact</p>
          <p className='py-6'>Submit Form bellow to connect with me</p>
        </div>
        <div className='flex justify-center items-center'>
          <form action="https://getform.io/f/820bd183-b54b-4e4b-be32-9540c33f89a0" method='POST' className='flex flex-col w-full md:w-1/2'>
            <input type="text" name="name" id="name" placeholder='Insert your name' className='p-2 bg-transparent border-2 rounded-md focus:outline-none text-white' />
            <input type="email" name="email" id="email" placeholder='Insert Your email' className='my-4 p-2 bg-transparent border-2 rounded-md focus:outline-none text-white' />
            <textarea name="message" rows="10" className='p-2 bg-transparent border-2 rounded-md focus:outline-none text-white' placeholder='Type your message'></textarea>
            <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-105 duration-300'>Let's talk</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact