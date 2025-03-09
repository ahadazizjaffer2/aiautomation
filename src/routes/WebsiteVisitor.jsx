import { useState } from "react";
import profilePic from "../assets/Boy.png";
import { ChevronDown, Filter, PlusCircle } from "lucide-react";

const contacts = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  name: `Contact ${i + 1}`,
  company: "Manaflow Inc.",
  address: "Los Angeles Pier, LA",
  time: "Jan 23, 7:23 AM",
}));

const ContactCard = ({ contact, isSelected, onSelect }) => {
  return (
    <div
      className={`flex items-center p-2 md:p-4 rounded-lg border border-gray-200 transition-colors ${isSelected ? "bg-[#e4fff5]" : "hover:bg-[#f5fffb]"}`}
    >
      <div className="w-6 flex justify-center mr-4">
        <input 
          type="checkbox" 
          className="form-checkbox w-5 h-5 text-green-500 rounded-full" 
          checked={isSelected}
          onChange={onSelect} 
        />
      </div>
      <img src={profilePic} alt="Profile" className="md:w-5 md:h-5 w-6 h-6 rounded-full mr-4" />
      <div className="flex-1 grid md:grid-cols-4 md:gap-4 text-left">
        <p className="font-medium">{contact.name}</p>
        <p className="text-sm text-gray-500">{contact.company}</p>
        <p className="text-sm text-gray-500">{contact.address}</p>
        <p className="text-sm text-gray-500">{contact.time}</p>
      </div>
    </div>
  );
};

export default function ContactList() {
  const [selectedAll, setSelectedAll] = useState(false);
  const [selectedContacts, setSelectedContacts] = useState({});

  const toggleSelectAll = () => {
    const newSelected = !selectedAll;
    setSelectedAll(newSelected);
    setSelectedContacts(
      newSelected ? Object.fromEntries(contacts.map(c => [c.id, true])) : {}
    );
  };

  const toggleSelect = (id) => {
    setSelectedContacts((prev) => {
      const updatedSelection = { ...prev, [id]: !prev[id] };
      if (!updatedSelection[id]) {
        setSelectedAll(false);
      }
      return updatedSelection;
    });
  };

  return (
    <div className="p-2 md:p-6 bg-white min-h-screen flex justify-center flex-col text-sm ">
      <div className="flex justify-between items-center mb-4 flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 border border-gray-300 rounded-full w-full md:w-64"
        />
        <div className="flex items-center space-x-2 md:space-x-4 text-xs flex-wrap gap-2">
          <button className="flex items-center px-3 md:px-6 py-1.5 md:py-3 border border-gray-300 rounded-full">
            <Filter size={16} className="mr-2" /> Filter
          </button>
          <button className="flex items-center px-3 md:px-6 py-1.5 md:py-3 border border-gray-300 rounded-full">
            Oldest first <ChevronDown size={16} className="ml-2" />
          </button>
          <button className="flex items-center px-3 md:px-6 py-1.5 md:py-3 bg-gradient-to-r from-orange-400 to-green-500 text-white rounded-full">
            <PlusCircle size={16} className="mr-2" /> Get Contacts
          </button>
          <button className="px-3 md:px-6 py-1.5 md:py-3 rounded-full text-white" style={{ backgroundColor: "#15A395" }}>
            Add to campaign
          </button>
        </div>
      </div>
      <div className="flex items-center space-x-2 mb-4">
        <input 
          type="checkbox" 
          className="md:w-6 md:h-6 h-4 w-4 text-green-500 border-gray-300 rounded-full ml-[10px] md:ml-[30px] my-[10px] md:my-[20px] " 
          checked={selectedAll} 
          onChange={toggleSelectAll} 
        />
        <span className="text-gray-700">Visitors</span>
      </div>
      <div className="space-y-4">
        {contacts.map((contact) => (
          <ContactCard 
            key={contact.id} 
            contact={contact} 
            isSelected={selectedContacts[contact.id]} 
            onSelect={() => toggleSelect(contact.id)}
          />
        ))}
      </div>
    </div>
  );
}