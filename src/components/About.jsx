import Aos from 'aos';
import React, { useEffect } from 'react'
import { BsLinkedin, BsInstagram, BsTwitter } from 'react-icons/bs'
import { TfiEmail } from "react-icons/tfi";
const About = () => {
  useEffect=(()=>{
    Aos.init()
  },[])
  const social = [
    {
      id:1,
      child:(
        <>
          <BsLinkedin size={18} />
        </>
      ),
      href:'https://www.linkedin.com/in/stepanusriodefa/',
      style:'hover:border-primary hover:text-primary'
    },{
      id:2,
      child:(
        <>
          <BsInstagram size={18}/>
        </>
      ),
      href:'https://www.instagram.com/stepanusriodefa/',
      style:'hover:border-primary hover:text-primary'
    }, {
      id: 3,
      child: (
        <>
          <BsTwitter size={18} />
        </>
      ),
      href: 'https://www.twitter.com/stepanusriodefa/',
      style: 'hover:border-primary hover:text-primary'
    }, {
      id: 4,
      child: (
        <>
          <TfiEmail size={18} />
        </>
      ),
      href: 'mailto:stepanusriodefaardian@gmail.com',
      style: 'hover:border-primary hover:text-primary'
    }
  ]
  return (
    <section className='pt-40 pb-32' name="about">
      <div className="container">
        <div className="flex flex-wrap">
          <div data-aos='fade-right' data-aos-duration='1500' data-aos-easing="ease-in-sine" data-aos-anchor-placement="top-center" className="w-ful px-4 mb-10 lg:w-1/2">
            <h4 className='font-bold text-lg text-stroke uppercase mb-3'>About Me</h4>
            <h2 className='font-bold text-stroke/90 text-3xl mb-5 max-w-md lg:text-4xl'>Come to know me more</h2>
            <p className='font-medium text-base text-secondary max-w-xl lg:text-lg'>When I'm not coding, you can find me exploring new technologies, experimenting with new design techniques, or simply enjoying the outdoors. I am always looking for new challenges and opportunities to further my skills and grow as a developer.</p>
          </div>
          <div data-aos='fade-left' data-aos-duration='1500'  data-aos-anchor-placement="top-center" data-aos-easing="ease-in-sine" className="w-full px-4 lg:w-1/2">
            <h3 className='font-semibold text-stroke mb-4 text-2xl lg:text-3xl lg:pt-11'>Reach Me On</h3>
            <p className='font-medium text-base text-secondary max-w-xl mb-5 lg:text-lg'>If you're looking for a web developer who is dedicated, creative, and passionate about their work, then look no further. Contact me today to discuss your project and find out how I can help bring your vision to life.</p>
            <div className="flex items-center">
            {
              social.map(({id,child,href,style})=>(
                <a key={id} href={href} target='_blank' rel="noreferrer" className={`w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-secondary ${style}`}>{child}</a>
              ))
            }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About