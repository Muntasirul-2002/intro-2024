import React from 'react'
import FloatingNavbar from './ui/FloatingNavbar'
import {IconContract, IconUser, IconPhone, IconSettings } from "@tabler/icons-react";


const NavItems = () => {
    const navItems = [
      
        {
          name: "Muntasirul",
          link: "/",
          img:"/muntasirul5.jpg",
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
            name: "Services",
            link: "/services",
            icon: <IconSettings className="h-4 w-4 text-neutral-500 dark:text-white" />,
          },
        {
          name: "Contact",
          link: "/contact",
          icon: <IconPhone className="h-4 w-4 text-neutral-500 dark:text-white" />,
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

