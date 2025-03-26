// import React from 'react';
// import Sidebar from '../components/Sidebar';
// import { Outlet } from 'react-router-dom';
// import Navbar from '../components/Navbar';

// function Layout() {
//   return (
//     <div className="flex h-screen w-full">
//       <Sidebar />
//       <div className="flex flex-col w-full">
//         <Navbar />
//         <main className="pl-[50px] md:pl-[60px]">
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// }

// export default Layout;

import React, { useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Layout() {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user exists in localStorage
    const user = localStorage.getItem('user'); // Replace 'user' with your actual key name

    if (!user) {
      // If no user found, redirect to the login page
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div className="flex h-screen w-full">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Navbar />
        <main className="pl-[50px] md:pl-[60px]">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
