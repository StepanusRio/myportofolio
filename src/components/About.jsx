import React from 'react'
const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-[#301E67] via-[#03001C] to-[#03001C] text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-justify'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-600'>About</p>
        </div>
        <p className='text-xl mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sequi deleniti, voluptates reiciendis, pariatur quas voluptatum distinctio necessitatibus aliquid qui asperiores sint ipsa dolores sit aspernatur aperiam voluptas omnis rem dolor laudantium repudiandae natus, ullam doloribus! Eaque mollitia illo officiis iste et deleniti in vitae, repellat non magnam molestias voluptas!</p>
        <br />
        <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nihil aspernatur commodi eum ducimus suscipit laboriosam odit perferendis iste sint saepe quos excepturi ab id alias quam dolorum, facere nam fugiat incidunt? Fugiat facilis, reprehenderit officia architecto ratione cupiditate mollitia modi, minus voluptate at soluta aliquid amet vero non sed.</p>
      </div>
    </div>
  )
}

export default About