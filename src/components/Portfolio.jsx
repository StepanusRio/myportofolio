import React from 'react'
import Portfolio1 from '../assets/portofolio/domenico-loia-hGV2TfOh0ns-unsplash.jpg'
import Portfolio2 from '../assets/portofolio/ilya-pavlov-OqtafYT5kTw-unsplash.jpg'
import Portfolio3 from '../assets/portofolio/christopher-gower-m_HRfLhgABo-unsplash.jpg'
import Portfolio4 from '../assets/portofolio/kevin-bhagat-zNRITe8NPqY-unsplash.jpg'
import Portfolio5 from '../assets/portofolio/scott-graham-5fNmWej4tAA-unsplash.jpg'
import Portfolio6 from '../assets/portofolio/tirza-van-dijk-I8OhOu-wLO4-unsplash.jpg'

const Portfolio = () => {
  const portfolios = [
    {
      id:1,
      src:Portfolio1
    }, {
      id: 2,
      src: Portfolio2
    }, {
      id: 3,
      src: Portfolio3
    }, {
      id: 4,
      src: Portfolio4
    }, {
      id: 5,
      src: Portfolio5
    }, {
      id: 6,
      src: Portfolio6
    }
  ]
  return (
    <div name="portofolio" className='bg-gradient-to-b from-[#03001C] via-[#03001C] to-[#301E67] w-full text-white md:h-max'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-5'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-400'>Portofolio</p>
          <p className='py-5'>Check out some of my best work</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
        {
            portfolios.map(({id,src})=>(
              <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img className='justify-center rounded-lg duration-300 hover:scale-105 w-full' src={src} alt="" />
                <div className='items-center justify-center flex'>
                  <button className='w-1/2 px-6 py-3 m-4 duration-300 hover:scale-105 hover:bg-green-700'>Live</button>
                  <button className='w-1/2 px-6 py-3 m-4 duration-300 hover:scale-105 hover:bg-blue-700'>Proposal</button>
                </div>
              </div>
            ))
        }
        </div>
      </div>
    </div>
  )
}

export default Portfolio