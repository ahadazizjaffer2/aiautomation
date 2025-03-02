import React, { useState } from "react";
import { FaSearch, FaPlus, FaEllipsisH } from "react-icons/fa";

const emails = [
  { id: 1, name: "Casper Nelly", initials: "CN", bgColor: "bg-yellow-500", subject: "Re: Request for Overview of Your Solutions", time: "7 hrs ago", unread: true },
  { id: 2, name: "Phillip Passaquindici", initials: "PP", bgColor: "bg-red-500", subject: "Re: Request for Overview of Your Solutions", time: "7 hrs ago", unread: false },
  { id: 3, name: "Anika Rosser", initials: "AR", bgColor: "bg-green-500", subject: "Re: Request for Overview of Your Solutions", time: "7 hrs ago", unread: false },
];

const Inbox = () => {
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [selectedTab, setSelectedTab] = useState("All Inboxes");

  return (
    <div className="flex min-h-screen bg-gray-200 text-gray-400 pl-[120px] pt-[40px] pr-[120px]">
      {/* Sidebar */}
      <div className="w-[40%] p-6 border-r border-gray-300 bg-white rounded-2xl mr-6">
      <div className="mb-4 flex space-x-4">
          {['All Inboxes', 'Emails', 'SMS'].map((tab) => (
            <span
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`cursor-pointer ${selectedTab === tab ? "text-green-500 border-b-2 border-green-500" : "text-gray-500"}`}
            >
              {tab}
            </span>
          ))}
        </div>
        <div className="mb-4 text-2xl text-gray-400">Primary</div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search emails..."
            className="w-full p-2 border border-gray-300 rounded-full pl-10"
          />
        </div>
        <div>
          {emails.map((email) => (
            <div
              key={email.id}
              onClick={() => setSelectedEmail(email)}
              className={`p-4 border-b border-gray-200 flex items-center justify-between cursor-pointer rounded-lg transition-colors ${selectedEmail?.id === email.id ? "bg-[#15A395] text-white" : "hover:bg-[#f5fffb]"} ${email.unread ? "font-bold" : "font-normal"}`}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 flex items-center justify-center rounded-full text-white font-bold ${email.bgColor}`}> 
                  {email.initials} 
                </div>
                <div>
                  <p>{email.name}</p>
                  <p className="text-sm">{email.subject}</p>
                </div>
              </div>
              <span className="text-sm">{email.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Container */}
      <div className="flex-1">
        {/* Buttons Container */}
        <div className="flex justify-between items-center mb-4">
          <div className="bg-white p-1 rounded-xl flex space-x-2">
            <button className="p-2 rounded ml-[25px] mr-[25px]">Archive</button>
            <button className="p-2 rounded ml-[25px] mr-[25px]">Snooze</button>
            <button className="p-2 rounded ml-[25px] mr-[25px]">Delete</button>
          </div>
          <button className="p-3 bg-white rounded-xl">About Lead</button>
        </div>
        {/* Email Content */}
        <div className="flex-1 flex flex-col bg-white rounded-2xl p-3 mb-[10px]">
          {selectedEmail && <h2 className="text-xl-center font-bold rounded">{selectedEmail.subject}</h2>}
        </div>
        <div className="flex-1 flex flex-col bg-white rounded-2xl p-6">
          {selectedEmail ? (
            <div className="w-full">
              <div className="flex items-center mb-4">
                <div className={`w-10 h-10 flex items-center justify-center rounded-full text-white font-bold ${selectedEmail.bgColor}`}>{selectedEmail.initials}</div>
                <div className="ml-3">
                  <p className="font-bold">{selectedEmail.name}</p>
                  <p className="text-sm text-gray-500">To: support@quickpipe.com</p>
                </div>
                <span className="ml-auto text-sm text-gray-500">{selectedEmail.time}</span>
              </div>
              <div className="rounded-xl">
                <p className="text-gray-700">Hi Support Team,</p>
                <p className="text-gray-700 mt-2">My name is Alex Carter, and I work as a Sales Representative at Greenfield Solutions. We’re currently exploring tools to help us scale our team operations effectively, particularly in areas like client follow-ups, reporting, and team collaboration.</p>
                <p className="text-gray-700 mt-2">Would it be possible to set up a meeting to discuss this further? I’m generally available on weekdays after 1 PM and can adjust if needed. Looking forward to your insights!</p>
                <p className="text-gray-700 mt-4">Best regards,</p>
                <p className="text-gray-700">Alex Carter</p>
              </div>
              <div className="flex justify-end mt-4">
                <button className="p-3 pr-10 pl-10 bg-[#15A395] text-white rounded-xl">Reply</button>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <p>Click to view</p>
              <div className="w-16 h-16 mx-auto bg-blue-100 p-4 rounded-full">
                <div className="w-12 h-12 bg-blue-500 rounded-full"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Inbox;
