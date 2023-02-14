import React, { useEffect, useRef } from 'react'
import { Link } from 'react-scroll'
import HeroImage from "../assets/heroimage.png"
import Typed from 'typed.js';
import AOS from 'aos';
import 'aos/dist/aos.css'

const Hero = () => {
  const el = useRef(null);
  useEffect(()=>{
    const typed = new Typed(el.current,{
      strings: [
        "Student | <strong>Junior Full Stack Web Developer</strong>",
        "Student at <strong>Dian Nuswantoro University</strong>",
        "Currently a <strong>Cloud Computing Student at Bangkit Academy led by Google, Tokopedia, Gojek, and Traveloka!</strong>"
      ],
      smartBackspace:true,
      startDelay:300,
      typeSpeed:40,
      backSpeed:20,
      backDelay:10,
      showCursor:false,
    });
    return()=>{
      typed.destroy();
    };
  },[])
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <section name="home" className='pt-36'>
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-1/2">
            <h1 className='text-base font-semibold text-stroke md:text-xl'>Hello Every one, My name <span className='text-4xl block font-bold text-stroke/80 lg:text-5xl mt-1'>Rio Defa</span></h1>
            <h2 className='font-medium text-stroke/70 mb-4 lg:text-2xl'><span ref={el}></span></h2>
            <p className='font-medium text-secondary mb-10 leading-relaxed'>Hello, I am a web developer with a passion for creating beautiful, functional, and user-friendly websites. I have a strong background in both front-end and back-end development and have experience working with a variety of technologies, including HTML, CSS, JavaScript, and PHP.</p>
            <Link to='portofolio' duration={500} smooth className='text-main text-base font-semibold bg-primary py-3 px-8 rounded-full hover:shadow-lg cursor-pointer'>Portfolio</Link>
            <a href="Cv-StepanusRioDefaArdiantoro.pdf" className='py-2 px-3 border border-slate-500 ml-3 rounded-md hover:border-primary hover:text-primary' download>Download CV</a>
          </div>
          <div className="w-full self-end px-4 lg:w-1/2">
            <div data-aos='fade-up' data-aos-duration='3000' className="mt-10 relative lg:mt-0 lg:right-0">
              <img src={HeroImage} alt="Me" className='max-w-[350px] mx-auto' />
              <span className='absolute bottom-20 -z-10 left-1/2 -translate-x-1/2 lg:scale-105'>
                <svg height={300} width={300} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#6246EA" d="M65.4,-22.1C74.5,6.9,64.7,41.2,40.9,59.2C17,77.3,-20.8,79,-44.2,61.8C-67.5,44.6,-76.4,8.5,-66.6,-21.4C-56.8,-51.3,-28.4,-74.9,-0.1,-74.8C28.1,-74.8,56.2,-51.1,65.4,-22.1Z" transform="translate(100 100)" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero