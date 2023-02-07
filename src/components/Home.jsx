import React from 'react';
import HeroImage from '../assets/heroimage.png';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className='flex h-screen bg-gradient-to-b from-[#03001C] via-[#03001C] to-[#301E67]'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row '>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a Full Stack Developer</h2>
          <p className='text-gray-500 py-4 max-w-md'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis aut fugit vitae quas nesciunt. Corporis dolore qui praesentium aperiam harum?</p>
          <div>
            <Link to='portofolio' duration={500} smooth className='group text-[#B6EADA] w-fit px-6 py-3 flex items-center rounded-md border border-[#301E67] hover:bg-gradient-to-r from-[#301E67] to-[#5B8FB9] duration-300 cursor-pointer'>Portfolio <span className='group-hover:rotate-90 duration-300'>{<MdKeyboardArrowRight size={25} className='ml-1'/>}</span></Link>
          </div>
        </div>
        <div>
          <img src={HeroImage} alt="myprofile" className='rounded-2xl mx-auto w-2/3 md:w-full' />
        </div>
      </div>
    </div>
  )
}

export default Home