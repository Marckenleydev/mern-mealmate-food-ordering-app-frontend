import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Circle, CircleUserRound } from 'lucide-react'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router'
import { Separator } from './ui/separator'
import { Button } from './ui/button'

const UserNameMenu = () => {
    const { user,logout} = useAuth0();

  return (
    <div className="bg-white !important">
    <DropdownMenu>
        
        <DropdownMenuTrigger className='flex items-center px-3 font-bold hover:text-orange-500'>
            <CircleUserRound className='text-orange-500 mr-2'/>
            {user?.email}

        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuItem >
            <Link to="/user-profile" className='font-bold hover:text-orange-500'>
              User Profile
            </Link>

            </DropdownMenuItem>
            <Separator/>
            <DropdownMenuItem>
            <Button 
            onClick={()=> logout()}
             className='font-bold flex flex-1 bg-orange-500'>
              Log Out
            </Button>
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
    </div>
  )
}

export default UserNameMenu