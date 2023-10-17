'use client'

import React from 'react';
import { usePathname } from 'next/navigation';
import { useMemo } from "react"
import { HiHome } from "react-icons/hi"
import { BiSearch } from "react-icons/bi"
import Box from './Box';
import SidebarItem from './SidebarItem';
import Library from './Library';


const Sidebar = () => {

  const pathname = usePathname();

  const routes = useMemo(() => [
    {
      icon: HiHome,
      label: 'Home',
      active: pathname !== '/search',
      href: '/',
    },
    {
      icon: BiSearch,
      label: 'Search',
      active: pathname === '/search',
      href: '/search',
    },

  ], [pathname])

  return (
    <div
      className='
        hidden
        md:flex
        flex-col
        gap-y-2
        bg-black
        h-full
        w-[377px]
        min-w-[296px]
        max-w-[600px]
        p-2
        resize-x	
        overflow-auto
      '
    >
      <Box>
        <div
          className='
            flex
            flex-col
            gap-y-4
            px-6
            py-4
          '
        >
          {routes.map((item) => (
            <SidebarItem 
              key={item.label}
              {...item}
            />
          ))}
        </div>
      </Box>
      <Box 
        className='
          h-full 
          overflow-hidden
          hover:overflow-y-auto 
          scrollbar
        scrollbar-thumb-white/30
        hover:scrollbar-thumb-white/50 
          scrollbar-track-white/0
          scrollbar-medium
      '>
        <Library />
      </Box>
    </div>
  );
};

export default Sidebar;