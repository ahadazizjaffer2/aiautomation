import React, { useState } from "react";
import { FaEllipsisH, FaFilter, FaChevronDown } from "react-icons/fa";

const contacts = [
  {
    id: 1,
    name: "Support",
    email: "support@manaflow.com",
    emailsSent: "12 of 67",
    warmupEmails: "56",
    healthScore: "99%",
    initials: "S",
    bgColor: "bg-gray-300",
  },
  {
    id: 2,
    name: "Help",
    email: "help@manaflow.com",
    emailsSent: "0 of 32",
    warmupEmails: "0",
    healthScore: "99%",
    initials: "H",
    bgColor: "bg-red-300",
  },
  {
    id: 3,
    name: "Manager",
    email: "manager@manaflow.com",
    emailsSent: "11 of 89",
    warmupEmails: "78",
    healthScore: "98%",
    initials: "M",
    bgColor: "bg-yellow-300",
  },
  {
    id: 4,
    name: "HR",
    email: "hr@manaflow.com",
    emailsSent: "0 of 120",
    warmupEmails: "34",
    healthScore: "2%",
    initials: "HR",
    bgColor: "bg-green-300",
  },
  {
    id: 5,
    name: "CEO",
    email: "ceo@manaflow.com",
    emailsSent: "27 of 122",
    warmupEmails: "120",
    healthScore: "98%",
    initials: "CE",
    bgColor: "bg-purple-300",
  },
  {
    id: 6,
    name: "Branch Manager",
    email: "nybranchmanager@manaflow.com",
    emailsSent: "0 of 2",
    warmupEmails: "0",
    healthScore: "98%",
    initials: "BM",
    bgColor: "bg-yellow-500",
  },
];

const ContactList = () => {
  const [selected, setSelected] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelected([]);
    } else {
      setSelected(contacts.map((contact) => contact.id));
    }
    setSelectAll(!selectAll);
  };

  return (
    <div className="p-6 bg-white min-h-screen pl-[180px] pr-[140px] pt-[35px] text-gray-400">
      <div className="flex items-center justify-between mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 border border-gray-300 rounded-full w-1/3"
        />
        <div className="flex gap-4 items-center">
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-full">
            All Statuses
          </button>
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-full">
            Oldest First
          </button>
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-full">
            <FaFilter size={16} className="mr-2" /> Filter
          </button>
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-full">
            Oldest first <FaChevronDown size={16} className="ml-2" />
          </button>
          <button className="p-2 px-4 bg-[#15A395] text-white rounded-full">
            + Add new
          </button>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-4 my-12 text-gray-400 font-medium pl-[12px] py-4">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={selectAll}
            onChange={handleSelectAll}
            className="w-5 h-5 text-green-500"
          />
          Email Address
        </div>
        <div>Email Sent</div>
        <div>Warmup Emails</div>
        <div>Health Score</div>
        <div></div>
      </div>

      {contacts.map((contact) => (
        <div
          key={contact.id}
          className={`grid grid-cols-5 gap-4 items-center p-4 rounded-lg transition-all ${
            selected.includes(contact.id) ? "bg-[#c3ffe8]" : "hover:bg-[#e4fff5]"
          } text-gray-500`}
        >
          <div className="flex items-center gap-4">
            <input
              type="checkbox"
              checked={selected.includes(contact.id)}
              onChange={() => toggleSelect(contact.id)}
              className="w-5 h-5 text-green-500"
            />
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full text-white font-bold ${contact.bgColor}`}
            >
              {contact.initials}
            </div>
            <span>{contact.name}</span>
          </div>
          <div>{contact.emailsSent}</div>
          <div>{contact.warmupEmails}</div>
          <div>{contact.healthScore}</div>
          <div className="text-gray-600 cursor-pointer flex justify-end">
            <FaEllipsisH />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
