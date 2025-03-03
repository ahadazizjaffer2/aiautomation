// routes/Settings.jsx
import React, { useState } from 'react';

const Settings = () => {
    const [profileData, setProfileData] = useState({
        firstName: 'Beetos',
        lastName: 'Lenu',
        email: 'ceo@quickiepe.ai',
        phone: '+12304560713',
        password: '••••••••••••••••',
        twoFactorEnabled: true,
    });

    const [workspaceData, setWorkspaceData] = useState({
        name: 'My Organization',
        id: '+12304560713',
    });

    const [activeTab, setActiveTab] = useState('profile');
    const [members] = useState([
        { id: 1, name: 'Beetoo Leru', role: 'Owner', avatar: '👤', color: 'bg-yellow-100' },
        { id: 2, name: 'Kaiya Donin', role: 'Editor', avatar: '👤', color: 'bg-purple-100' },
    ]);

    const handleProfileChange = (e) => {
        const { name, value } = e.target;
        setProfileData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleWorkspaceChange = (e) => {
        const { name, value } = e.target;
        setWorkspaceData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleToggle = () => {
        setProfileData((prev) => ({
            ...prev,
            twoFactorEnabled: !prev.twoFactorEnabled,
        }));
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(workspaceData.id);
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen justify-center pl-[120px]">
            {/* Navigation Tabs */}
            <div className="w-full max-w-3xl">
                <div className="mb-8 border-b border-gray-300">
                    <nav className="flex space-x-8">
                        <button
                            className={`py-4 px-1 border-b-2 font-medium ${activeTab === 'profile' ? 'border-green-500 text-green-500' : 'text-gray-500 border-white'}`}
                            onClick={() => setActiveTab('profile')}
                        >
                            Profile
                        </button>
                        <button
                            className={`py-4 px-1 border-b-2 font-medium ${activeTab === 'workspace' ? 'border-green-500 text-green-500' : 'text-gray-500 border-white'}`}
                            onClick={() => setActiveTab('workspace')}
                        >
                            Workspace & members
                        </button>
                        <button
                            className={`py-4 px-1 border-b-2 font-medium ${activeTab === 'integrations' ? 'border-green-500 text-green-500' : 'text-gray-500 border-white'}`}
                            onClick={() => setActiveTab('integrations')}
                        >
                            Integrations
                        </button>
                    </nav>
                </div>
            </div>

            {/* Content Based on Active Tab */}
            <div className="bg-white rounded-2xl shadow p-6">
                {activeTab === 'profile' ? (
                    // Profile Content (from original Settings.jsx)
                    <>
                        {/* Profile Picture */}
                        <div className="flex items-center mb-8">
                            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                                <span className="text-xl text-yellow-800">👤</span>
                            </div>
                            <button className="text-gray-600 hover:text-gray-800 text-sm font-medium">
                                Edit profile picture
                            </button>
                        </div>

                        {/* Form Fields */}
                        <div className="space-y-6">
                            {/* Name Fields */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                        </svg>
                                        First name
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={profileData.firstName}
                                        onChange={handleProfileChange}
                                        className="w-full p-2 border border-gray-200 rounded-md"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                        </svg>
                                        Last name
                                    </label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={profileData.lastName}
                                        onChange={handleProfileChange}
                                        className="w-full p-2 border border-gray-200 rounded-md"
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={profileData.email}
                                    onChange={handleProfileChange}
                                    className="w-full p-2 border border-gray-200 rounded-md"
                                />
                            </div>

                            {/* Phone */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                    </svg>
                                    Phone number
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={profileData.phone}
                                    onChange={handleProfileChange}
                                    className="w-full p-2 border border-gray-200 rounded-md"
                                />
                            </div>

                            {/* Password */}
                            <div>
                                <div className="flex justify-between items-center mb-1">
                                    <label className="block text-sm font-medium text-gray-700 flex items-center">
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                                        </svg>
                                        Password
                                    </label>
                                    <button className="text-sm text-teal-500 hover:text-teal-600">
                                        Update password
                                    </button>
                                </div>
                                <input
                                    type="password"
                                    name="password"
                                    value={profileData.password}
                                    readOnly
                                    className="w-full p-2 border border-gray-200 rounded-md bg-gray-50"
                                />
                            </div>

                            {/* 2FA Toggle */}
                            <div className="flex justify-between items-center py-2">
                                <div className="flex items-center">
                                    <svg className="w-4 h-4 mr-2 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                                    </svg>
                                    <span className="text-sm font-medium text-gray-700">Enable 2FA</span>
                                </div>
                                <button
                                    onClick={handleToggle}
                                    className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none ${profileData.twoFactorEnabled ? 'bg-green-500' : 'bg-gray-200'}`}
                                >
                                    <span
                                        className={`inline-block w-4 h-4 transform transition-transform bg-white rounded-full ${profileData.twoFactorEnabled ? 'translate-x-6' : 'translate-x-1'}`}
                                    />
                                </button>
                            </div>
                        </div>
                    </>
                ) : activeTab === 'workspace' ? (
                    // Workspace & Members Content (from WorkspaceMembers.jsx)
                    <>
                        {/* Workspace Section */}
                        <div className="mb-8">
                            <h2 className="text-xl font-semibold mb-4">Workspace</h2>
                            <div className="">
                                {/* Workspace Name */}
                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                        </svg>
                                        Workspace name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={workspaceData.name}
                                        onChange={handleWorkspaceChange}
                                        className="w-full p-2 border border-gray-300 rounded-md"
                                    />
                                </div>

                                {/* Workspace ID */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                        </svg>
                                        Worskpace ID
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            value={workspaceData.id}
                                            readOnly
                                            className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
                                        />
                                        <button
                                            onClick={copyToClipboard}
                                            className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Members Section */}
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Members</h2>
                            <div className="bg-white rounded-lg shadow">
                                {/* Member Tabs */}
                                <div className="border-b border-gray-200 px-6 flex justify-between items-center">
                                    <div className="flex space-x-6">
                                        <button
                                            onClick={() => setActiveTab('team')}
                                            className={`py-4 px-1 font-medium relative ${activeTab === 'team'
                                                ? 'text-green-500 border-b-2 border-green-500'
                                                : 'text-gray-500'
                                                }`}
                                        >
                                            The Team
                                        </button>
                                        <button
                                            onClick={() => setActiveTab('pending')}
                                            className={`py-4 px-1 font-medium ${activeTab === 'pending'
                                                ? 'text-green-500 border-b-2 border-green-500'
                                                : 'text-gray-500'
                                                }`}
                                        >
                                            Pending Invitations
                                        </button>
                                    </div>
                                    <button className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-full flex items-center">
                                        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
                                        </svg>
                                        Add Member
                                    </button>
                                </div>

                                {/* Member List */}
                                <div className="p-6">
                                    {activeTab === 'team' ? (
                                        <div className="space-y-4">
                                            {members.map(member => (
                                                <div key={member.id} className="flex items-center justify-between">
                                                    <div className="flex items-center">
                                                        <div className={`w-10 h-10 ${member.color} rounded-full flex items-center justify-center mr-3`}>
                                                            <span>{member.avatar}</span>
                                                        </div>
                                                        <span className="font-medium">{member.name}</span>
                                                    </div>
                                                    <span className="text-gray-500">{member.role}</span>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="text-center p-4 text-gray-500">
                                            No pending invitations
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </>
                ) : activeTab === 'integrations' ? (
                    // Placeholder for Integrations (you can expand this later)
                    <div className="bg-white p-6">
                        <div className="relative mb-6">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </div>
                            <input
                                type="search"
                                className="block w-full p-2 pl-10 text-sm text-gray-700 border border-gray-200 rounded-full bg-gray-50"
                                placeholder="Search..."
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {/* Slack */}
                            <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm group hover:border-[#15A395] transition-colors duration-200">
                                <div className="mb-3">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.5 19.5a3.5 3.5 0 01-3.5-3.5 3.5 3.5 0 013.5-3.5h3.5v3.5a3.5 3.5 0 01-3.5 3.5zm1.75-10.5V6.5a3.5 3.5 0 013.5-3.5 3.5 3.5 0 013.5 3.5v10.5a3.5 3.5 0 01-3.5 3.5 3.5 3.5 0 01-3.5-3.5v-7zm10.5 1.75h3.5a3.5 3.5 0 013.5 3.5 3.5 3.5 0 01-3.5 3.5h-3.5v-7zm-1.75 10.5v3.5a3.5 3.5 0 01-3.5 3.5 3.5 3.5 0 01-3.5-3.5v-3.5h7z" fill="#E01E5A" />
                                        <path d="M19.5 6.5a3.5 3.5 0 013.5-3.5 3.5 3.5 0 013.5 3.5v3.5h-3.5a3.5 3.5 0 01-3.5-3.5zm-1.75 1.75H8.25a3.5 3.5 0 01-3.5-3.5 3.5 3.5 0 013.5-3.5h10.5a3.5 3.5 0 013.5 3.5 3.5 3.5 0 01-3.5 3.5z" fill="#36C5F0" />
                                        <path d="M25.5 19.5a3.5 3.5 0 013.5 3.5 3.5 3.5 0 01-3.5 3.5h-3.5v-3.5a3.5 3.5 0 013.5-3.5zm-1.75 10.5v-3.5a3.5 3.5 0 013.5-3.5 3.5 3.5 0 013.5 3.5v3.5h-7z" fill="#ECB22E" />
                                        <path d="M12.5 25.5a3.5 3.5 0 01-3.5 3.5 3.5 3.5 0 01-3.5-3.5v-3.5h3.5a3.5 3.5 0 013.5 3.5zm1.75-1.75h10.5a3.5 3.5 0 013.5 3.5 3.5 3.5 0 01-3.5 3.5h-10.5a3.5 3.5 0 01-3.5-3.5 3.5 3.5 0 013.5-3.5z" fill="#2EB67D" />
                                    </svg>
                                </div>
                                <h3 className="text-base font-semibold text-gray-900 mb-1">Slack</h3>
                                <p className="text-sm text-gray-600 mb-4 leading-relaxed">Connect Quickpipe AI with Slack to get instant lead updates, follow-up reminders, and notifications in your team's channels for seamless collaboration.</p>
                                <div className="flex items-center justify-between gap-2">
                                    <button className="flex items-center justify-center text-xs text-gray-500 bg-white px-3 py-1.5 rounded-full border border-gray-200">
                                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        </svg>
                                        Manage
                                    </button>
                                    <button className="flex items-center justify-center text-xs text-gray-500 bg-white group-hover:bg-[#15A395] group-hover:text-white px-3 py-1.5 rounded-full border border-gray-200 group-hover:border-[#15A395] transition-colors duration-200">
                                        Connect
                                    </button>
                                </div>
                            </div>

                            {/* Google Calendar */}
                            <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm group hover:border-[#15A395] transition-colors duration-200">
                                <div className="mb-3">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="4" y="6" width="24" height="20" rx="2" fill="#4285F4" />
                                        <rect x="10" y="12" width="12" height="2" fill="white" />
                                        <rect x="10" y="16" width="12" height="2" fill="white" />
                                        <rect x="10" y="20" width="8" height="2" fill="white" />
                                    </svg>
                                </div>
                                <h3 className="text-base font-semibold text-gray-900 mb-1">Google Calendar</h3>
                                <p className="text-sm text-gray-600 mb-4 leading-relaxed">Automatically sync meetings, follow-ups, and reminders from Quickpipe AI to Google Calendar, ensuring you never miss an important event.</p>
                                <div className="flex items-center justify-between gap-2">
                                    <button className="flex items-center justify-center text-xs text-gray-500 bg-white px-3 py-1.5 rounded-full border border-gray-200">
                                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        </svg>
                                        Manage
                                    </button>
                                    <button className="flex items-center justify-center text-xs text-gray-500 bg-white group-hover:bg-[#15A395] group-hover:text-white px-3 py-1.5 rounded-full border border-gray-200 group-hover:border-[#15A395] transition-colors duration-200">
                                        Connect
                                    </button>
                                </div>
                            </div>

                            {/* Open AI */}
                            <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm group hover:border-[#15A395] transition-colors duration-200">
                                <div className="mb-3">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M26 16a10 10 0 1 1-20 0 10 10 0 0 1 20 0z" stroke="#000" strokeWidth="1.5" />
                                        <path d="M16 6v20M6 16h20M23 9 9 23M9 9l14 14" stroke="#000" strokeWidth="1.5" />
                                    </svg>
                                </div>
                                <h3 className="text-base font-semibold text-gray-900 mb-1">Open AI</h3>
                                <p className="text-sm text-gray-600 mb-4 leading-relaxed">Leverage AI to draft emails, summarize notes, and predict lead conversions directly within Quickpipe AI. Boosting efficiency and personalization.</p>
                                <div className="flex items-center justify-between gap-2">
                                    <button className="flex items-center justify-center text-xs text-gray-500 bg-white px-3 py-1.5 rounded-full border border-gray-200">
                                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        </svg>
                                        Manage
                                    </button>
                                    <button className="flex items-center justify-center text-xs text-gray-500 bg-white group-hover:bg-[#15A395] group-hover:text-white px-3 py-1.5 rounded-full border border-gray-200 group-hover:border-[#15A395] transition-colors duration-200">
                                        Connect
                                    </button>
                                </div>
                            </div>

                            {/* Hubspot */}
                            <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm group hover:border-[#15A395] transition-colors duration-200">
                                <div className="mb-3">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.41 13.714v4.572H8.53v-4.572H5.41zm9.143 0v4.572h3.122v-4.572h-3.122zm9.143 0v4.572h3.122v-4.572h-3.122zM10.133 22.857v-3.122H5.562a4.572 4.572 0 0 0 4.571 3.122zm3.2-3.122v3.122a4.571 4.571 0 0 0 4.572-4.572h-1.371v1.45h-3.2zm9.142 0v3.122a4.571 4.571 0 0 0 4.572-4.572H25.6v1.45h-3.124z" fill="#FF7A59" />
                                        <path d="M25.6 9.143a4.571 4.571 0 0 0-4.572 4.571h1.372v-1.45H25.6v-3.121zm-9.143 4.571a4.572 4.572 0 0 0-4.571-4.571v3.121h3.2v-1.45h1.371zM10.133 12.266V9.143a4.571 4.571 0 0 0-4.571 4.571h1.371v-1.45h3.2z" fill="#FF7A59" />
                                    </svg>
                                </div>
                                <h3 className="text-base font-semibold text-gray-900 mb-1">Hubspot</h3>
                                <p className="text-sm text-gray-600 mb-4 leading-relaxed">Integrate HubSpot with Quickpipe AI to sync lead data, track interactions, and access HubSpot's analytics for a seamless sales workflow.</p>
                                <div className="flex items-center justify-between gap-2">
                                    <button className="flex items-center justify-center text-xs text-gray-500 bg-white px-3 py-1.5 rounded-full border border-gray-200">
                                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        </svg>
                                        Manage
                                    </button>
                                    <button className="flex items-center justify-center text-xs text-gray-500 bg-white group-hover:bg-[#15A395] group-hover:text-white px-3 py-1.5 rounded-full border border-gray-200 group-hover:border-[#15A395] transition-colors duration-200">
                                        Connect
                                    </button>
                                </div>
                            </div>

                            {/* Salesforce */}
                            <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm group hover:border-[#15A395] transition-colors duration-200">
                                <div className="mb-3">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.847 7.84c1.017-1.08 2.45-1.747 4.045-1.747 3.05 0 5.547 2.44 5.547 5.427 0 .48-.067.933-.187 1.373 1.627.587 2.8 2.147 2.8 3.96 0 2.333-1.947 4.227-4.347 4.227-.24 0-.48-.013-.707-.053-.573 1.373-1.933 2.347-3.52 2.347-.667 0-1.293-.174-1.84-.467-.6 2.053-2.52 3.547-4.773 3.547-2.293 0-4.227-1.534-4.8-3.627-.28.053-.573.08-.867.08-2.413 0-4.387-1.893-4.387-4.227 0-1.813 1.173-3.373 2.827-3.96-.12-.44-.187-.893-.187-1.373 0-2.987 2.493-5.427 5.56-5.427 1.307 0 2.493.453 3.44 1.213.4-.306.84-.573 1.293-.786.04-.133.093-.267.133-.413z" fill="#00A1E0" />
                                    </svg>
                                </div>
                                <h3 className="text-base font-semibold text-gray-900 mb-1">Salesforce</h3>
                                <p className="text-sm text-gray-600 mb-4 leading-relaxed">Sync leads and contact data between Quickpipe AI and Salesforce. Track progress, update records, and access CRM insights without leaving the app.</p>
                                <div className="flex items-center justify-between gap-2">
                                    <button className="flex items-center justify-center text-xs text-gray-500 bg-white px-3 py-1.5 rounded-full border border-gray-200">
                                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        </svg>
                                        Manage
                                    </button>
                                    <button className="flex items-center justify-center text-xs text-gray-500 bg-white group-hover:bg-[#15A395] group-hover:text-white px-3 py-1.5 rounded-full border border-gray-200 group-hover:border-[#15A395] transition-colors duration-200">
                                        Connect
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default Settings;