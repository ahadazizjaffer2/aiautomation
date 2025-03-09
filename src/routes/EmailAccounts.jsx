import React, { useState } from "react";
import { FaEllipsisH, FaFilter, FaChevronDown } from "react-icons/fa";
import { FaBackward } from "react-icons/fa";

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

const EmailAccounts = () => {
  const [selected, setSelected] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [showAccountsPage, setShowAccountsPage] = useState(false);

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

  const AccountsSelectionPage = () => (
    <div className="p-4 md:p-24 px-auto pt-[20px] md:pt-[40px] bg-white min-h-screen flex justify-center flex-col">
      <div className="flex items-center mb-4">
        <button
          onClick={() => setShowAccountsPage(false)}
          className="flex items-center text-gray-600 hover:text-gray-800"
        >
          <span className="mr-2">
            <FaBackward />
            </span> Back
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-3 mt-8">
        {/* First Card */}
        <div className="border border-gray-200 rounded-2xl p-4 flex flex-col w-[275px] md:w-auto">
          <div className="flex justify-center mb-4">
            <img src="/src/assets/customer-support.jpeg" alt="Email setup" className="w-70 h-40 object-contain" />
          </div>
          <h3 className="text-lg font-semibold text-center mb-4">Ready-to-send accounts</h3>
          <button className="bg-[#15A395] text-white py-2 px-4 rounded-full w-full mb-6">
            Continue
          </button>

          <div className="space-y-4 mt-2">
            <div className="flex items-center">
              <div className="w-4 h-4 mr-2 rounded-full border border-gray-300 flex items-center justify-center">
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              </div>
              <span className="text-sm text-gray-600">Ready-to-use accounts & domains</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 mr-2 rounded-full border border-gray-300 flex items-center justify-center">
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              </div>
              <span className="text-sm text-gray-600">Launch your outreach immediately</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 mr-2 rounded-full border border-gray-300 flex items-center justify-center">
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              </div>
              <span className="text-sm text-gray-600">Expand your campaigns seamlessly</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 mr-2 rounded-full border border-gray-300 flex items-center justify-center">
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              </div>
              <span className="text-sm text-gray-600">Enhanced email deliverability</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 mr-2 rounded-full border border-gray-300 flex items-center justify-center">
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              </div>
              <span className="text-sm text-gray-600">Premium US-based IP accounts</span>
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div className="border border-gray-200 rounded-lg p-6 flex flex-col w-[275px] md:w-auto">
          <div className="flex justify-center mb-4">
            <img src="/src/assets/send-message.jpeg" alt="Hassle-free setup" className="w-70 h-40 object-contain" />
          </div>
          <h3 className="text-lg font-semibold text-center mb-4">Hassle-free email setup</h3>

          <div className="mb-6">
            <button className="flex items-center justify-center bg-gray-100 text-gray-800 py-2 px-4 rounded-full w-full mb-2">
              <img src="https://www.google.com/favicon.ico" alt="Google" className="w-4 h-4 mr-2" />
              Gmail/ Google Suite
            </button>
          </div>

          <div className="space-y-4 mt-2">
            <div className="flex items-center">
              <div className="w-4 h-4 mr-2 rounded-full border border-gray-300 flex items-center justify-center">
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              </div>
              <span className="text-sm text-gray-600">Accounts set up for you</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 mr-2 rounded-full border border-gray-300 flex items-center justify-center">
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              </div>
              <span className="text-sm text-gray-600">Pick your domain & account names</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 mr-2 rounded-full border border-gray-300 flex items-center justify-center">
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              </div>
              <span className="text-sm text-gray-600">Seamless auto-reconnect</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 mr-2 rounded-full border border-gray-300 flex items-center justify-center">
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              </div>
              <span className="text-sm text-gray-600">Cut costs & boost efficiency</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 mr-2 rounded-full border border-gray-300 flex items-center justify-center">
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              </div>
              <span className="text-sm text-gray-600">Premium US-based IP accounts</span>
            </div>
          </div>
        </div>

        {/* Third Card */}
        <div className="border border-gray-200 rounded-lg p-6 flex flex-col w-[275px] md:w-auto">
          <div className="flex justify-center mb-4">
            <img src="/src/assets/businessman-sends-marketing-mails (1).jpeg" alt="Ready accounts" className="w-70 h-40 object-contain" />
          </div>
          <h3 className="text-lg font-semibold text-center mb-4">Ready-to-send accounts</h3>

          <div className="mb-6 space-y-2">
            <button className="flex items-center justify-center bg-gray-100 text-gray-800 py-2 px-4 rounded-full w-full">
              <img src="https://www.google.com/favicon.ico" alt="Google" className="w-4 h-4 mr-2" />
              Gmail/ Google Suite
            </button>
            <button className="flex items-center justify-center bg-gray-100 text-gray-800 py-2 px-4 rounded-full w-full">
              <img src="https://c.s-microsoft.com/favicon.ico" alt="Microsoft" className="w-4 h-4 mr-2" />
              Microsoft Office 365 Suite
            </button>
            <button className="flex items-center justify-center bg-gray-100 text-gray-800 py-2 px-4 rounded-full w-full">
              SMTP/IMAP
            </button>
          </div>

          <div className="space-y-4 mt-2">
            <div className="flex items-center">
              <div className="w-4 h-4 mr-2 rounded-full border border-gray-300 flex items-center justify-center">
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              </div>
              <span className="text-sm text-gray-600">Connect any IMAP or SMTP email provider</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 mr-2 rounded-full border border-gray-300 flex items-center justify-center">
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              </div>
              <span className="text-sm text-gray-600">Sync up replies in the Multibox</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {showAccountsPage ? (
        <AccountsSelectionPage />
      ) : (
        <div className="bg-white overflow-auto min-h-screen pl-[5px] md:px-[140px] pt-[10px] md:pt-[35px] text-gray-400 flex flex-col md:justify-center align-center text-sm">
          <div className="flex items-center justify-between mb-4 flex-col md:flex-row gap-2 md:mx-5">
            <input
              type="text"
              placeholder="Search..."
              className="p-2 border border-gray-300 rounded-full md:w-1/3 w-full"
            />
            <div className="flex md:gap-4 gap-1 items-center ">
              <button className="flex items-center px-3 md:px-4 py-2 border border-gray-300 rounded-full text-sm">
                All Statuses
              </button>
              <button className="flex items-center px-3 py-2 border border-gray-300 rounded-full">
                Oldest First
              </button>
              <button className="px-3 py-2 bg-[#15A395] text-white rounded-full"
              onClick={() => setShowAccountsPage(true)}>
                + Add new
              </button>
            </div>
          </div>

          <div className="overflow-auto">
            <div className="flex md:grid grid-cols-5 gap-2 md:gap-4 my-6 md:my-12 text-gray-400 font-medium pl-[12px] py-4 w-150 md:w-auto">
              <div className="flex items-center gap-2 w-[200px] md:w-auto">
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleSelectAll}
                  className="w-4 h-4 md:w-5 md:h-5 text-green-500"
                />
                Email Address
              </div>
              <div className="w-[100px] md:w-auto">Email Sent</div>
              <div className="w-[100px] md:w-auto">Warmup Emails</div>
              <div className="w-[100px] md:w-auto">Health Score</div>
            </div>

            {contacts.map((contact) => (
              <div
                key={contact.id}
                className={`flex jusitfy-between w-150 md:w-auto flex-shrink-0 md:grid grid-cols-5 gap-4 items-center p-4 rounded-lg transition-all ${selected.includes(contact.id) ? "bg-[#c3ffe8]" : "hover:bg-[#e4fff5]"
                  } text-gray-500`}
              >
                <div className="flex items-center md:gap-4 gap-2 w-[200px] md:w-auto">
                  <input
                    type="checkbox"
                    checked={selected.includes(contact.id)}
                    onChange={() => toggleSelect(contact.id)}
                    className="w-4 h-4 md:w-5 md:h-5 text-green-500"
                  />
                  <div
                    className={`md:w-10 md:h-10 h-8 w-8 shrink-0 flex items-center justify-center rounded-full text-white font-bold ${contact.bgColor}`}
                  >
                    {contact.initials}
                  </div>
                  <span>{contact.name}</span>
                </div>
                <div className="w-[100px] md:w-auto">{contact.emailsSent}</div>
                <div className="w-[100px] md:w-auto">{contact.warmupEmails}</div>
                <div className="w-[100px] md:w-auto">{contact.healthScore}</div>
                <div className="text-gray-600 w-[30px] md:w-auto cursor-pointer flex justify-end ">
                  <FaEllipsisH />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default EmailAccounts;