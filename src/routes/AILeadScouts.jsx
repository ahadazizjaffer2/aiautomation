import React from "react";
import { FaSearch, FaPhone, FaCommentDots, FaBriefcase, FaMapMarkerAlt, FaIndustry, FaUsers, FaDollarSign, FaGlobe, FaCogs, FaMoneyCheckAlt, FaUser, FaBuilding, FaHandSparkles } from "react-icons/fa";
import backgroundImage from "../assets/AILead_Scouts.jpeg";

export default function LeadSearch() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-[300px] bg-white border border-gray-200 rounded-2xl h-screen flex flex-col ml-[75px]">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold mb-[40px]">Search Manually</h2>
          <div className="flex items-center justify-between">
            <FaMapMarkerAlt />
            <span className="text-lg text-gray-500">Skip already owned</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
        <nav className="flex-1 p-2 space-y-4">
          {[{ icon: FaBriefcase, label: "Job titles" }, { icon: FaMapMarkerAlt, label: "Location" }, { icon: FaIndustry, label: "Industry & Keywords" }, { icon: FaUsers, label: "Employees" }, { icon: FaDollarSign, label: "Revenue" }, { icon: FaGlobe, label: "Lookalike domain" }, { icon: FaCogs, label: "Technologies" }, { icon: FaMoneyCheckAlt, label: "Funding type" }, { icon: FaUser, label: "Name" }, { icon: FaBuilding, label: "Company" }].map((item, index) => (
            <div key={index} className="w-full p-2 rounded text-lg text-gray-400 hover:bg-gray-100 cursor-pointer flex items-center space-x-2">
              <item.icon />
              <span className='pl-[15px]'>{item.label}</span>
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div
  className="flex justify-center items-center flex-1 bg-black relative bg-cover bg-center rounded-2xl mx-4"
  style={{ backgroundImage: `url(${backgroundImage})` }}
>
  <div className="bg-opacity-60 rounded-2xl shadow-lg w-[750px] text-center">
    <h2 className="text-white text-3xl mb-[75px] pb-[30px] mt-[0px]">
      Discover high-value leads with ease
    </h2>
    <div className="flex flex-wrap justify-center gap-2 mb-6 w-[650px] mx-auto">
      {["Sales persons", "Marketing Directors from Sweden", "Chief Executive Officers from Switzerland", "IT managers", "Small business owners in Los Angeles"].map((item, index) => (
        <button key={index} className="px-4 py-3 text-sm bg-gray-500/30 text-white rounded-full shadow my-[10px] mx-[6px]">
          {item}
        </button>
      ))}
    </div>
     <div className="flex items-center bg-white rounded-full shadow-md overflow-hidden justify-center w-full max-w-xl mx-auto border border-gray-200">
      <div className="text-gray-500 ml-4">
        <FaSearch size={20} />
      </div>
      <input
        type="text"
        placeholder="E.g Engineers in New York in software ..."
        className="flex-1 px-3 py-3 text-gray-700 focus:outline-none text-sm"
      />
      <div className="mr-2">
        <button className="bg-gradient-to-r from-amber-500 to-emerald-600 px-6 py-2 text-white font-semibold rounded-full flex items-center space-x-2">
          <FaHandSparkles size={16} className="mr-1" />
          <span>AI Search</span>
        </button>
      </div>
    </div>
  </div>
</div>

    </div>
  );
}
