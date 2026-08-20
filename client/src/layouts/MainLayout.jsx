import React from 'react'
import { Outlet } from "react-router-dom";
import Navbar from '../components/Navbar';
import MiniNav from '../components/MiniNav';
import ColorSwitcher from '../components/ColorSwitcher';

const MainLayout = () => {
  return (                                                                                   
    <div className='flex min-h-screen flex-col overflow-x-hidden bg-background text-text md:h-screen md:flex-row md:overflow-hidden'>

      <MiniNav/>
      <Navbar />

    
      <main className='flex-1 overflow-y-auto pb-20 md:pb-0'>
        <Outlet />
      </main>

      <ColorSwitcher />
    </div>
  )
}

export default MainLayout