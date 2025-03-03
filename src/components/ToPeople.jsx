import { useState } from "react";
import { MdSearch, MdMoreVert, MdPhone, MdChat } from "react-icons/md";
import { FiPlus, FiCheck, FiClock } from "react-icons/fi";
import { MdArrowOutward } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { FileMinus, MailOpen, User } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const people = [
  {
    email: "xmitchell@hotmail.com",
    contact: "Lynn Tanner",
    provider: "Microsoft",
    status: "Verified",
  },
  {
    email: "tbaker@outlook.com",
    contact: "Capt. Trunk",
    provider: "Google",
    status: "Not yet contacted",
  },
  {
    email: "mgonzalez@aol.com",
    contact: "Thomas Anum",
    provider: "Google",
    status: "Not yet contacted",
  },
];

export default function TopPeople() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);

  const handleAnother = () => {
    setIsSecondModalOpen(true);
    setIsModalOpen(false);
  }

  return (
    <div className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="font-semibold">Top People</h3>
        <button className="ml-auto">
          <Link to='/analytics'>
            <MdArrowOutward className="h-5 w-5 text-muted-foreground" />
          </Link>
        </button>
      </div>

      <div className="mb-6 flex items-center gap-4">
        <div className="relative flex-1">
          <MdSearch className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full rounded-full border border-gray-300 bg-background px-9 py-2 text-sm focus:outline-none cursor-pointer"
          />
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-1 rounded-full border border-gray-300 px-4 py-2 text-sm hover:bg-accent cursor-pointer"
        >
          <FiPlus className="h-4 w-4" />
          Add People
        </button>
      </div>

      <div className="min-w-full overflow-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-300 text-sm text-muted-foreground">
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
              <tr key={person.email} className="border border-gray-300 text-sm">
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

      {/* Floating Contact */}
      {/* <div className="fixed bottom-6 right-6 flex w-96 items-center gap-3 rounded-full border-b bg-background px-5 py-3 pr-4 shadow-lg">
        <img
          src="https://img.pikbest.com/origin/09/26/70/62VpIkbEsTv9G.png!sw800"
          alt="Benjamin Cooper"
          className="h-10 w-10 rounded-full"
        />
        <div className="mr-2">
          <div className="font-medium">Benjamin Cooper</div>
          <div className="text-sm text-muted-foreground">+123 456 789 101</div>
        </div>
        <div className="flex gap-1">
          <button className="rounded-full bg-red-500 p-2 text-white hover:bg-red-600 cursor-pointer">
            <MdPhone className="h-5 w-5" />
          </button>
          <button className="rounded-full bg-teal-500 p-2 text-white hover:bg-teal-600 cursor-pointer">
            <MdChat className="h-5 w-5" />
          </button>
          <button className="rounded-full border p-2 hover:bg-accent cursor-pointer">
            <MdMoreVert className="h-5 w-5" />
          </button>
        </div>
      </div> */}

      {/* Modal */}
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
                <div onClick={handleAnother} className="flex gap-4 cursor-pointer items-center px-10">
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

      {/* Second Modal (MailOpen Click) */}
      {isSecondModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#3a3939a3] bg-opacity-50">
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold inline-flex gap-1"> <User className="text-gray-300" /> Add new lead</h3>
              <button onClick={() => setIsSecondModalOpen(false)}>
                <IoClose className="h-6 w-6 text-gray-500 hover:text-gray-700 cursor-pointer" />
              </button>
            </div>
            <div className="mt-4">
              lead owner
              <div className="bg-gray-200 w-fit rounded-full px-2 flex gap-2 items-center my-2 border border-gray-300">
                <img src="https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg" className="h-10 w-10 rounded-full object-cover " alt="" />
                Beetao lenu
              </div>
              <p className="bg-gray-200 rounded p-1">Personal Information</p>
              <form className="space-y-4" action="#">
                <div className="flex gap-2 my-2">
                    <div className="w-72">
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900">First Name</label>
                        <input type="email" name="email" id="email"className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:border-green-500 focus:bg-green-100 focus:outline-none "  placeholder="name@company.com" required />
                    </div>
                    <div className="w-72">
                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Lead Status</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:border-green-500 focus:bg-green-100 focus:outline-none "  required />
                    </div>
                </div>
                <div className="flex gap-2">
                    <div className="w-72">
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Last Name</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:border-green-500 focus:bg-green-100 focus:outline-none "  placeholder="name@company.com" required />
                    </div>
                    <div className="w-72">
                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:border-green-500 focus:bg-green-100 focus:outline-none "  required />
                    </div>
                </div>
                    <div className="w-72">
                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:border-green-500 focus:bg-green-100 focus:outline-none " required />
                    </div>
                    <p className="bg-gray-200 rounded p-1">Company Information</p>
                    <div className="flex gap-2">
                    <div className="w-72">
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Company</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:border-green-500 focus:bg-green-100 focus:outline-none " placeholder="name@company.com" required />
                    </div>
                    <div className="w-72">
                        <label for="password" className="block mb-2  text-sm font-medium text-gray-900 dark:text-white">Website</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:border-green-500 focus:bg-green-100 focus:outline-none " required />
                    </div>
                </div>
                </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
