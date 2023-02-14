import React from 'react'
import Portofolio1 from "../assets/portofolio/ilya-pavlov-OqtafYT5kTw-unsplash.jpg";
const Portofolio = () => {
  const myporto = [
    {
      id:1,
      img: Portofolio1,
      title:'Digita Jurnal Landing Page',
      describ:'To meet the criteria for Passing the E-Business course.... '
    }
  ]
  return (
    <section name="portofolio" className='pt-36 pb-16'>
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className='font-semibold text-lg text-primary mb-2 uppercase'>Portfolio</h4>
            <h2 className='font-bold text-2xl text-stroke mb-4 sm:text-4xl lg:text-5xl'>My Best Project</h2>
            <p className='font-medium text-md text-secondary md:text-lg'>Here are some of the best projects I've ever made</p>
          </div>
        </div>
        <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
          {
            myporto.map(({ id, img, title, describ }) => (
              <div key={id} data-aos='fade-zoom-in' data-aos-offset="0" data-aos-delay='200' data-aos-duration='2000' data-aos-easing="ease-in-back" className="mb-12 p-4 md:w-1/2">
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

export default Portofolio