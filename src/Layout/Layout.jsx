import React from 'react';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Layout() {
  return (
    <div className="flex h-screen w-full">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Navbar />
        <main className="px-2 md:px-4 pl-[50px] md:pl-[60px]">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;