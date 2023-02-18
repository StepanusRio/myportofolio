import React, { useEffect } from 'react'
import Aos from 'aos'
import Blog1 from '../assets/portofolio/domenico-loia-hGV2TfOh0ns-unsplash.jpg'

const Blog = () => {
  useEffect = (() => {
    Aos.init();
    Aos.refresh();
  }, [])
  const myblog = [
    {
      id: 1,
      img: Blog1,
      title: 'Welcome to My Blog!',
      describ: 'As a web developer, I am constantly learning, growing, and exploring new technologies and design techniques. My blog is a space where I can share....'
    }
  ]
  return (
    <section name="blog" className='pt-36 pb-16 bg-slate-100'>
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className='font-semibold text-lg text-primary mb-2 uppercase'>My Blog</h4>
            <h2 className='font-bold text-2xl text-stroke mb-4 sm:text-4xl lg:text-5xl'>Recent Blogs</h2>
            <p className='font-medium text-md text-secondary md:text-lg'>Here is my personal writing starting from experience or tips and tricks I will share through the writing below</p>
          </div>
        </div>
        <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
          {
            myblog.map(({ id, img, title, describ }) => (
              <div data-aos='fade-zoom-in' data-aos-offset="0" data-aos-delay='200' data-aos-duration='2000' data-aos-easing="ease-in-back" key={id} className="mb-12 p-4 md:w-1/2">
                <div className="rounded-md shadow-md overflow-hidden">
                  <img src={img} alt={title} />
                </div>
                <h3 className='font-semibold text-stroke text-xl mt-5 mb-3'>{title}</h3>
                <p className='font-medium text-base text-secondary'>{describ} <a className='text-secondary/60 hover:text-secondary' href="https://www.google.com/">Read more</a></p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Blog