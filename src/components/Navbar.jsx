// const [isProfileOpen, setIsProfileOpen] = useState(false);
// const [isOrgOpen, setIsOrgOpen] = useState(false);

import React, { useState, useEffect } from 'react';
import { Bell, ChevronDown, User, HelpCircle, Settings, LogOut, Plus, X, Briefcase } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const Navbar = () => {
  const [workspaceName, setWorkspaceName] = useState('');
  const [workspaceID, setWorkspaceID] = useState(uuidv4());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isOrgOpen, setIsOrgOpen] = useState(false);
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState('All');

  const handleCreateWorkspace = () => {
    console.log("New Workspace Created:", workspaceName, workspaceID);
    setIsModalOpen(false);
    setWorkspaceName('');
    setWorkspaceID(uuidv4());
  };

  const notifications = [
    {
      name: "Benjiman Cooper",
      img: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg",
      designation: "CEO @Meta .Inc",
      title: "Re: Meeting with lead",
      time: "5s ago",
      type: 'Clicked',
      bg: "bg-[#33beff]",
      color: "text-[#ff336b]"
    },
    {
      name: "Casper",
      img: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg",
      designation: "Sales Manager @Meta .Inc",
      title:  "Re: Meeting with lead",
      time: "9s ago",
      type: 'Hot lead',
      bg: "bg-[#33ffca]",
      color: "text-[#ff336b]"
    },
    {
      name: "John",
      img: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg",
      designation: "Sales Manager @Meta .Inc",
      title:  "Re: Meeting with lead",
      time: "Yesterday",
      type: 'Unread',
      bg: "bg-[#7dff33]",
      color: "text-[#ff336b]"
    },
    {
      name: "Naism",
      img: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg",
      designation: "Sales Manager @Meta .Inc",
      title:  "Re: Meeting with lead",
      time: "1 hour ago",
      type: 'Opened',
      color: "text-[#ff336b]",
      bg: "bg-[#e6ff33]",
    }
  ];

  const filteredNotifications = selectedFilter === "All" 
    ? notifications 
    : notifications.filter(notification => notification.type === selectedFilter);

  const handleLogout = () => {
    navigate('/login');
  };

  // Function to close all dropdowns
  const closeAllDropdowns = () => {
    setIsNotificationOpen(false);
    setIsProfileOpen(false);
    setIsOrgOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown")) {
        closeAllDropdowns();
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      <nav className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Left side - Logo */}
            <div className="flex items-center">
              <span className="text-xl font-bold">Dashboard</span>
            </div>
            <div>
              <ul className='flex gap-5'>
                <Link to='/'>
                  <li>Home</li>
                </Link>
                <Link to='/crm'>
                  <li>AI CRM</li>
                </Link>
                <Link to="/campaigns">
  <li>Campaigns</li>
</Link>

              </ul>
            </div>

            {/* Right Side - Dropdowns */}
            <div className="flex items-center space-x-4">

              {/* Notification Dropdown */}
              <div className="relative dropdown">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    closeAllDropdowns();
                    setIsNotificationOpen(!isNotificationOpen);
                  }}
                  className="p-1.5 border border-gray-300 text-gray-600 bg-gray-200 rounded-full cursor-pointer flex gap-1 items-center"
                >
                  <Bell />
                </button>

                {isNotificationOpen && (
        <div className="absolute -right-10 mt-4 bg-white shadow-lg w-80 rounded-lg px-1 py-3 z-10">
          <div className='flex gap-2 items-center p-2'>
              <button
                  onClick={(e) => {
                    e.stopPropagation();
                    closeAllDropdowns();
                    setIsNotificationOpen(!isNotificationOpen);
                  }}
                  className="p-1 border border-gray-300 text-gray-600 bg-gray-200 rounded-full cursor-pointer flex gap-1 items-center"
                >
                <X size={16} />
                </button>
            <span>Notifications</span>
          </div>

          {/* Filter Options */}
          <ul className='flex gap-3 p-2 text-[15px] font-semibold cursor-pointer'>
            {["All", "Unread", "Opened", "Clicked", "Hot lead"].map((filter) => (
              <li 
                key={filter} 
                className={selectedFilter === filter ? "text-blue-500" : ""}
                onClick={() => setSelectedFilter(filter)}
              >
                {filter}
              </li>
            ))}
          </ul>

          {/* Filtered Notifications */}
          {filteredNotifications.map((val, index) => (
            <div key={index} className='flex gap-3 px-3 mt-5'>
              <img src={val.img} className='w-9 h-9 rounded-full object-cover' alt="" />
              <div>
                <div className='flex text-[15px] gap-2 items-center'>
                  <h2>{val.name}</h2>
                  <p className='text-gray-400'>{val.designation}</p>
                </div>
                <p>{val.title}</p>
                <div className='flex items-center gap-1'>
                  <p className={`${val.bg} px-1.5 py-0.5 ${val.color} rounded-full text-[13px] inline-flex items-center`}>
                    {val.type}
                  </p>
                  <p>{val.time}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Show message if no notifications */}
          {filteredNotifications.length === 0 && (
            <p className="text-center text-gray-500 mt-3">No notifications found</p>
          )}
        </div>
      )}
              </div>

              {/* Profile Dropdown */}
              <div className="relative dropdown">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    closeAllDropdowns();
                    setIsProfileOpen(!isProfileOpen);
                  }}
                  className="p-1.5 border cursor-pointer border-gray-300 text-gray-600 bg-gray-200 rounded-full flex gap-1 items-center"
                >
                  <User size={22} />
                </button>

                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border-none">
                    <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <User className="w-4 h-4 mr-2" />
                      Profile
                    </a>
                    <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <Settings className="w-4 h-4 mr-2" />
                      Settings
                    </a>
                    <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <HelpCircle className="w-4 h-4 mr-2" />
                      Help Center
                    </a>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Logout
                    </button>
                  </div>
                )}
              </div>

              {/* Organization Dropdown */}
              <div className="relative dropdown">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    closeAllDropdowns();
                    setIsOrgOpen(!isOrgOpen);
                  }}
                  className="p-1.5 border border-gray-300 text-gray-600 rounded-full flex gap-1 items-center"
                >
                  <span>My Organization</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {isOrgOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg py-2 z-10 border">
                    <div className="px-3 pb-2">
                      <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full p-2 text-sm border border-gray-300 rounded-md focus:outline-none"
                      />
                    </div>

                    <div className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
                      <span className="text-sm font-medium">My Organization</span>
                    </div>

                    <div onClick={()=> setIsModalOpen(true)} className="px-3 py-2 text-gray-500 hover:bg-gray-100 cursor-pointer flex items-center">
                      <Plus className="w-4 h-4 mr-2" />
                      <span className="text-sm">Create Workspace</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {isModalOpen && (<div className="fixed inset-0 flex items-center justify-center">
              <div className="bg-white w-96 p-6 rounded-lg shadow-lg modal">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold">Create New Workspace</h2>
                  <button onClick={() => setIsModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="mt-4">
                  <label className="text-sm font-medium text-gray-700 flex items-center">
                    <Briefcase className="w-4 h-4 mr-2" />
                    Workspace Name
                  </label>
                  <input
                    type="text"
                    value={workspaceName}
                    onChange={(e) => setWorkspaceName(e.target.value)}
                    className="w-full p-2 mt-1 border rounded-md focus:outline-none"
                    placeholder="Enter workspace name"
                  />
                </div>

                <div className="mt-4">
                  <label className="text-sm font-medium text-gray-700 flex items-center">
                    <Briefcase className="w-4 h-4 mr-2" />
                    Workspace ID
                  </label>
                  <input
                    type="text"
                    value={workspaceID}
                    readOnly
                    className="w-full p-2 mt-1 border bg-gray-100 rounded-md focus:outline-none"
                  />
                </div>

                <div className="mt-6 flex justify-between">
                  <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 border rounded-md">
                    Cancel
                  </button>
                  <button 
                    onClick={handleCreateWorkspace} 
                    className="px-4 py-2 bg-teal-500 text-white rounded-md flex items-center"
                  >
                    <Briefcase className="w-4 h-4 mr-2" />
                    Create Workspace
                  </button>
                </div>
              </div>
              </div>
              )}


          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;



  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (!event.target.closest(".dropdown") && !event.target.closest(".modal")) {
  //       setIsProfileOpen(false);
  //       setIsOrgOpen(false);
  //     }
  //   };
  //   document.addEventListener("click", handleClickOutside);
  //   return () => document.removeEventListener("click", handleClickOutside);
  // }, []);

