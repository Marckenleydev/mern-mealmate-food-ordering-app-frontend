import React from 'react'
import { Link } from 'react-router'
import { Button } from './ui/button'
import { useAuth0 } from '@auth0/auth0-react';

const MobileNavLinks = () => {
    const { logout} = useAuth0();
  return (
    <>
    <Link to="/user-profile" className='bg-white flex items-center font-bold hover:bg-orange-500'>User Profile</Link>
    <Button
    onClick={()=>{logout()}}
     className='flex items-center px-3 font-bold hover:bg-slate-500'>
        Log Out
    </Button>
    </>
  )
}

export default MobileNavLinks