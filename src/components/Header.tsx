import React from 'react'
import { Link } from 'react-router'
import MobileNav from './MobileNav'
import MainNav from './MainNav'

const Header = () => {
  return (
    <div className='border-b-2 border-b-orange-500 py-6'>
        <div className="container flex mx-auto justify-between items-center">
            <Link  to="/" className='text-xl font-bold tracking-tight text-orange-500'>
            MERNEats</Link>
            <div className='md:hidden bg-white'>
                <MobileNav/>
            </div>
            <div className='hidden md:block w-full  '>
              <MainNav/>
            </div>
        </div>

    </div>
  )
}

export default Header