import React from 'react';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Layout() {
  return (
    <div className="flex h-screen">
    <Sidebar />
    <div className="flex-1 flex flex-col">
    <Navbar />
    <main className="flex-1 p-4">
    <Outlet />
    </main>
    </div>
    </div>
  );
}

export default Layout;
