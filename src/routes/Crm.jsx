import { useState } from "react"
import { Search, Filter, MoreVertical, Plus, MapPin, Globe, MailOpen, FileMinus, ChevronDown, Play, Pause, CircleCheck } from "lucide-react"
import { FcGoogle } from "react-icons/fc";
import { IoClose } from "react-icons/io5";
import { FiCheck, FiClock } from "react-icons/fi";
export default function Crm() {
const [isModalOpen, setIsModalOpen] = useState(false);
const [isOpen, setIsOpen] = useState(false);
const listItems = [
    { name: "All Statuses", icon: "⚡" },
    { name: "Play", icon: <Play size={20} className="text-blue-400" /> },
    { name: "Paused", icon: <Pause size={20} className="text-orange-400" /> },
    { name: "Completed", icon: <CircleCheck size={20} className="text-green-400" /> }
];
  const accounts = [
    {
      id: 1,
      name: "Microsoft Inc.",
      logo: "/placeholder.svg?height=50&width=50",
      logoBackground: "bg-[#f25022]",
      location: "United Kingdom",
      website: "www.microsoft.com/us",
      contacts: 24,
      contactAvatars: ["CE", "BM", "HR"],
    },
    {
      id: 2,
      name: "M & M Boutique",
      logo: "/placeholder.svg?height=50&width=50",
      logoBackground: "bg-teal-500",
      location: "United Kingdom",
      website: "www.microsoft.com/us",
      contacts: 24,
      contactAvatars: ["BM", "CE", "HR"],
    },
    {
      id: 3,
      name: "X (FormelyTwitter)",
      logo: "/placeholder.svg?height=50&width=50",
      logoBackground: "bg-black",
      location: "United Kingdom",
      website: "www.microsoft.com/us",
      contacts: 24,
      contactAvatars: ["HR", "CE", "BM"],
    },
    {
      id: 4,
      name: "PWC",
      logo: "/placeholder.svg?height=50&width=50",
      logoBackground: "bg-orange-500",
      location: "United Kingdom",
      website: "www.microsoft.com/us",
      contacts: 24,
      contactAvatars: ["CE", "BM", "HR"],
    },
    {
      id: 5,
      name: "Deloitte",
      logo: "/placeholder.svg?height=50&width=50",
      logoBackground: "bg-black",
      location: "United Kingdom",
      website: "www.microsoft.com/us",
      contacts: 24,
      contactAvatars: ["CE", "BM", "HR"],
    },
    {
      id: 6,
      name: "Life Planner Inc.",
      logo: "/placeholder.svg?height=50&width=50",
      logoBackground: "bg-pink-500",
      location: "United Kingdom",
      website: "www.microsoft.com/us",
      contacts: 24,
      contactAvatars: ["CE", "BM", "HR"],
    },
    {
      id: 7,
      name: "Hop's Bakery",
      logo: "/placeholder.svg?height=50&width=50",
      logoBackground: "bg-teal-500",
      location: "United Kingdom",
      website: "www.microsoft.com/us",
      contacts: 24,
      contactAvatars: ["CE", "BM", "HR"],
    },
    {
      id: 8,
      name: "Manaflow",
      logo: "/placeholder.svg?height=50&width=50",
      logoBackground: "bg-yellow-500",
      location: "United Kingdom",
      website: "www.microsoft.com/us",
      contacts: 24,
      contactAvatars: ["CE", "BM", "HR"],
    },
    {
      id: 9,
      name: "Volvo Inc.",
      logo: "/placeholder.svg?height=50&width=50",
      logoBackground: "bg-gray-200",
      location: "United Kingdom",
      website: "www.microsoft.com/us",
      contacts: 24,
      contactAvatars: ["CE", "BM", "HR"],
    },
    {
      id: 10,
      name: "Epidemic Sounds",
      logo: "/placeholder.svg?height=50&width=50",
      logoBackground: "bg-black",
      location: "United Kingdom",
      website: "www.microsoft.com/us",
      contacts: 24,
      contactAvatars: ["CE", "BM", "HR"],
    },
  ]

  const people = [
    { email: "john@example.com", contact: "123-456-7890", provider: "Gmail", status: "Verified" },
    { email: "jane@example.com", contact: "987-654-3210", provider: "Yahoo", status: "Pending" },
  ];

  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("Accounts");

  return (
    <div className="min-h-screen bg-gray-50 ps-20">
      <div className="container mx-auto px-4 py-6">
        {/* Navigation Tabs */}
        <div className="border-b border-gray-200 mb-6">
        <nav className="flex -mb-px">
            {["Accounts", "People", "Opportunities", "Calls", "Meetings"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`mr-8 py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab ? "border-teal-500 text-teal-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex gap-4">
            <div className="relative inline-block text-left">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="px-4 py-2 border border-gray-300 text-gray-600 rounded-full flex gap-1 items-center"
            >
                All Statuses <ChevronDown />
            </button>
            {isOpen && (
                <div className="absolute z-10 mt-2 bg-white shadow-md w-44 rounded-lg">
                    <ul className="py-2 text-sm text-gray-700">
                        {listItems.map((val, index) => (
                            <li key={index} className="px-4 py-2 flex gap-2 items-center hover:bg-gray-100">
                                {val.icon} {val.name}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            </div>

            <div className="relative inline-block text-left">
              <button
                type="button"
                className="inline-flex justify-between w-40 rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-teal-500"
              >
                <span>Oldest first</span>
                <svg
                  className="h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
              <Plus className="mr-2 h-5 w-5" />
              Add new
            </button>
          </div>
          {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#3a3939a3] bg-opacity-50">
          <div className="w-96 rounded-lg bg-white p-6 shadow-lg">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Add leads</h3>
              <button onClick={() => setIsModalOpen(false)}>
                <IoClose className="h-6 w-6 text-gray-500 hover:text-gray-700 cursor-pointer" />
              </button>
            </div>
            <div className="mt-4 space-y-4">
              <div className="shadow-lg p-2">
                <div className="flex gap-4 cursor-pointer items-center px-10">
                  <div>
                  <FileMinus className="text-green-400" size={35} />
                  </div>
                  <p className="h-8 border border-gray-200"></p>
                  <div>
                    <p className="text-gray-400">Upload</p>
                    <p className="font-semibold">CSV</p>
                  </div>
                </div>
              </div>

              <div className="shadow-lg p-2">
                <div className="flex gap-4 items-center px-10">
                  <div>
                  <FileMinus className="text-green-400" size={35} />
                  </div>
                  <p className="h-8 border border-gray-200"></p>
                  <div>
                    <p className="text-gray-400">Use</p>
                    <p className="font-semibold">AI lead Finder</p>
                  </div>
                </div>
              </div>

              <div className="shadow-lg p-2">
                <div className="flex gap-4 cursor-pointer items-center px-10">
                  <div>
                  <MailOpen size={30}  className="cursor-pointer" />
                  </div>
                  <p className="h-8 border border-gray-200"></p>
                  <div>
                    <p className="text-gray-400">Enter</p>
                    <p className="font-semibold">Email Manually</p>
                  </div>
                </div>
              </div>

              <div className="shadow-lg p-2">
                <div className="flex gap-4 cursor-pointer items-center px-10">
                  <div>
                    <FcGoogle size={27} />
                  </div>
                  <p className="h-8 border border-gray-200"></p>
                  <div>
                    <p className="text-gray-400">Use</p>
                    <p className="font-semibold">Google Sheets</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
        </div>

        {/* Accounts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {/* Accounts Grid */}
  {activeTab === "Accounts" &&
    accounts.map((account) => (
      <div key={account.id} className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-4">
          <div className="flex justify-between items-start mb-4">
            <div
              className={`${account.logoBackground} w-12 h-12 rounded-md flex items-center justify-center text-white`}
            >
              <img src={account.logo || "/placeholder.svg"} alt={account.name} className="w-8 h-8" />
            </div>
            <button className="text-gray-400 hover:text-gray-500">
              <MoreVertical className="h-5 w-5" />
            </button>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">{account.name}</h3>
          <div className="flex items-center text-sm text-gray-500 mb-1">
            <MapPin className="h-4 w-4 mr-1" />
            {account.location}
          </div>
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <Globe className="h-4 w-4 mr-1" />
            {account.website}
          </div>
          <div className="flex items-center">
            <div className="flex -space-x-2 mr-2">
              {account.contactAvatars.map((avatar, index) => (
                <div
                  key={index}
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs text-white border-2 border-white ${
                    index % 3 === 0 ? "bg-blue-500" : index % 3 === 1 ? "bg-yellow-500" : "bg-green-500"
                  }`}
                >
                  {avatar}
                </div>
              ))}
            </div>
            <span className="text-sm text-gray-500">{account.contacts} Contacts</span>
          </div>
        </div>
      </div>
    ))}

  {activeTab === "People" && (
    <div className="min-w-full overflow-auto">
    <table className="w-full">
      <thead>
        <tr className="border-b text-sm text-muted-foreground">
          <th className="whitespace-nowrap px-4 py-3 text-left font-medium">
            <input type="checkbox" className="rounded border-muted cursor-pointer" />
          </th>
          <th className="whitespace-nowrap px-4 py-3 text-left font-medium text-gray-400">EMAIL</th>
          <th className="whitespace-nowrap px-4 py-3 text-left font-medium text-gray-400">CONTACT</th>
          <th className="whitespace-nowrap px-4 py-3 text-left font-medium text-gray-400">EMAIL PROVIDER</th>
          <th className="whitespace-nowrap px-4 py-3 text-left font-medium text-gray-400">STATUS</th>
        </tr>
      </thead>
      <tbody>
        {people.map((person) => (
          <tr key={person.email} className="border text-sm">
            <td className="px-4 py-3">
              <input type="checkbox" className="rounded border-muted cursor-pointer" />
            </td>
            <td className="px-4 py-3">{person.email}</td>
            <td className="px-4 py-3">{person.contact}</td>
            <td className="px-4 py-3">{person.provider}</td>
            <td className="px-4 py-3">
              <div className="flex items-center gap-2">
                {person.status === "Verified" ? (
                  <>
                    <FiCheck className="h-4 w-4 text-blue-500" />
                    <span className="text-blue-500">Verified</span>
                  </>
                ) : (
                  <>
                    <FiClock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Not yet contacted</span>
                  </>
                )}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )}
               
        </div>
      </div>
    </div>
  )
}
