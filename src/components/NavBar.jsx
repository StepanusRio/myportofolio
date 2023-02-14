import React, { useState } from 'react'
import { Divide as Hamburger } from 'hamburger-react'
import { Link } from 'react-scroll';
const Navbar = () => {

  const nav = [
    {
      id: 1,
      child: 'Home',
      to: 'home'
    },{
      id: 2,
      child: 'About',
      to: 'about'
    }, {
      id: 3,
      child: 'Blog',
      to: 'blog'
    }, {
      id: 4,
      child: 'Portofolio',
      to: 'portofolio'
    }, {
      id: 5,
      child: 'Contact',
      to: 'contact'
    }
  ]

  const [isOpen, setOpen] = useState(false);
  window.onscroll = function () {
    const header = document.querySelector('header');
    const fixNav = header.offsetTop;
    if (window.pageYOffset > fixNav) {
      header.classList.add('navbar-fixed');
    } else {
      header.classList.remove('navbar-fixed');
    }
  }
  return (
    <header className='bg-transparent fixed top-0 left-0 w-full flex items-center z-10'>
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <h1 className='font-signature font-bold text-4xl text-primary py-6 block'>Rio.Dev</h1>
          </div>
          <ul className='hidden lg:flex'>
            {
              nav.map(({ id, to, child }) => (
                <li key={id} className='mx-2'>
                  <Link className='cursor-pointer text-base text-stroke mx-2 flex hover:text-primary' smooth duration={300} to={to}>{child}</Link>
                </li>
              ))
            }
          </ul>
          <div className="flex items-center px-4 lg:hidden">
            <Hamburger toggled={isOpen} toggle={setOpen} />
            {
              isOpen && (
                <nav className='absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-24'>
                  <ul className='block'>
                    {
                      nav.map(({ id, to, child }) => (
                        <li key={id}>
                          <Link className='cursor-pointer text-base text-stroke py-2 mx-8 flex hover:text-primary' smooth duration={300} to={to}>{child}</Link>
                        </li>
                      ))
                    }
                  </ul>
                </nav>
              )
            }
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar