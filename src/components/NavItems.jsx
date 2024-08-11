import React from 'react'
import FloatingNavbar from './ui/FloatingNavbar'
import { IconHome, IconMessage,IconContract, IconUser } from "@tabler/icons-react";


const NavItems = () => {
    const navItems = [
      
        {
          name: "Muntasirul",
          link: "/",
          img:"/muntasirul5.jpg",
          icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
          //TODO: remove this icon and set only the avatar, remove from here and go to the floatingnav page and set the home link in the avatar
        },
        {
          name: "About",
          link: "/about",
          
          icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "Resume",
            link: "/resume",
            icon: <IconContract className="h-4 w-4 text-neutral-500 dark:text-white" />,
          },
        {
          name: "Contact",
          link: "/contact",
          icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
      ];
  return (
    <div className='relative w-full'>
     
        <FloatingNavbar navItems={navItems} />
        {/* <NavItems/> */}
       
    </div>
  )
}

export default NavItems

