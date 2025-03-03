import React, { useState, useEffect } from 'react';
import { Play, Pause, MoreHorizontal, Search, Filter, PlusCircle, ChevronDown, CheckCircle, AlertCircle, Circle, ArrowUpDown, X } from 'lucide-react';
import { Link } from 'react-router-dom';

function App() {
  const [campaigns, setCampaigns] = useState([
    {
      id: 1,
      name: 'SMB Target',
      status: 'Error',
      progress: 12,
      sent: 1500,
      clicks: 58,
      replies: 20,
      replyRate: 2,
      opportunities: 5
    },
    {
      id: 2,
      name: 'My Campaign',
      status: 'Active',
      progress: 72,
      sent: 89,
      clicks: 0,
      replies: 0,
      replyRate: 0,
      opportunities: 0
    }
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All statuses');
  const [sortOrder, setSortOrder] = useState('Oldest first');
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [showNewCampaignModal, setShowNewCampaignModal] = useState(false);
  const [newCampaignName, setNewCampaignName] = useState('');

  const statusOptions = [
    { value: 'All statuses', icon: <Filter size={16} className="text-gray-400" /> },
    { value: 'Active', icon: <Play size={16} className="text-blue-500" /> },
    { value: 'Draft', icon: <Circle size={16} className="text-gray-400" /> },
    { value: 'Paused', icon: <Pause size={16} className="text-yellow-500" /> },
    { value: 'Error', icon: <AlertCircle size={16} className="text-red-500" /> },
    { value: 'Completed', icon: <CheckCircle size={16} className="text-green-500" /> }
  ];

  const sortOptions = [
    { value: 'Newest first', label: 'Newest first' },
    { value: 'Oldest first', label: 'Oldest first' },
    { value: 'Name A - Z', label: 'Name A - Z' },
    { value: 'Name Z - A', label: 'Name Z - A' }
  ];

  const handleStatusChange = (status) => {
    setStatusFilter(status);
    setShowStatusDropdown(false);
  };

  const handleSortChange = (sort) => {
    setSortOrder(sort);
    setShowSortDropdown(false);
    const sortedCampaigns = [...campaigns];
    
    if (sort === 'Newest first') {
      sortedCampaigns.sort((a, b) => b.id - a.id);
    } else if (sort === 'Oldest first') {
      sortedCampaigns.sort((a, b) => a.id - b.id);
    } else if (sort === 'Name A - Z') {
      sortedCampaigns.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === 'Name Z - A') {
      sortedCampaigns.sort((a, b) => b.name.localeCompare(a.name));
    }

    setCampaigns(sortedCampaigns);
  };

  useEffect(() => {
    const handleClickOutside = () => {
      setShowStatusDropdown(false);
      setShowSortDropdown(false);
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleDropdownClick = (e) => {
    e.stopPropagation();
  };

  const handleCreateCampaign = () => {
    if (newCampaignName.trim()) {
      const newCampaign = {
        id: campaigns.length + 1,
        name: newCampaignName.trim(),
        status: 'Draft',
        progress: 0,
        sent: 0,
        clicks: 0,
        replies: 0,
        replyRate: 0,
        opportunities: 0
      };
      
      setCampaigns([...campaigns, newCampaign]);
      setNewCampaignName('');
      setShowNewCampaignModal(false);
    }
  };
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Filters and actions */}
        <div className="flex justify-between mb-6">
          <div className="relative rounded-md shadow-sm w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <div className="relative flex items-center w-80">
  <Search size={20} className="absolute left-3 text-gray-400" />
  <input
    type="text"
    className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 shadow-sm text-gray-700"
    placeholder="|Search..."
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
  />
</div>

          </div>
          <div className="flex space-x-4">
            <div className="relative">
              <button
                type="button"
                className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
                id="filter-menu"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowStatusDropdown(!showStatusDropdown);
                  setShowSortDropdown(false);
                }}
              >
                <Filter size={18} className="mr-2 text-gray-400" />
                {statusFilter}
                <ChevronDown size={16} className="ml-2 text-gray-400" />
              </button>
              
              {/* Status dropdown */}
              {showStatusDropdown && (
                <div 
                  className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
                  onClick={handleDropdownClick}
                >
                  <div className="py-1">
                    {statusOptions.map((option) => (
                      <button
                        key={option.value}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                        onClick={() => handleStatusChange(option.value)}
                      >
                        <span className="mr-2">{option.icon}</span>
                        {option.value}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                type="button"
                className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
                id="sort-menu"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowSortDropdown(!showSortDropdown);
                  setShowStatusDropdown(false);
                }}
              >
                <ArrowUpDown size={16} className="mr-2 text-gray-400" />
                {sortOrder}
                <ChevronDown size={16} className="ml-2 text-gray-400" />
              </button>
              
              {/* Sort dropdown */}
              {showSortDropdown && (
                <div 
                  className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
                  onClick={handleDropdownClick}
                >
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <button
                        key={option.value}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 flex items-center ${
                          sortOrder === option.value ? 'text-teal-600 font-medium' : 'text-gray-700'
                        }`}
                        onClick={() => handleSortChange(option.value)}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-500 hover:bg-teal-600 focus:outline-none"
              onClick={() => setShowNewCampaignModal(true)}
            >
              <PlusCircle size={18} className="mr-2" />
              Add new
            </button>
          </div>
        </div>

        {/* Campaigns table */}
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-8">
                  <input
                    type="checkbox"
                    className="focus:ring-teal-500 h-4 w-4 text-teal-600 border-gray-300 rounded"
                  />
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Progress
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Sent
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Click
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Replies
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Opportunities
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <span className="sr-only">More</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {campaigns.map((campaign) => (
                <tr key={campaign.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="checkbox"
                      className="focus:ring-teal-500 h-4 w-4 text-teal-600 border-gray-300 rounded"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link to='/campaigns/target'>
                      <div className="text-sm font-medium text-gray-900">{campaign.name}</div>
                    </Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      campaign.status === 'Active' ? 'bg-blue-100 text-blue-800' : 
                      campaign.status === 'Error' ? 'bg-red-100 text-red-800' : 
                      campaign.status === 'Paused' ? 'bg-yellow-100 text-yellow-800' :
                      campaign.status === 'Draft' ? 'bg-gray-100 text-gray-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {campaign.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="w-32">
                      <div className="bg-gray-200 rounded-full h-2.5">
                        <div 
                          className={`h-2.5 rounded-full ${
                            campaign.status === 'Active' ? 'bg-teal-500' : 
                            campaign.status === 'Error' ? 'bg-red-500' :
                            campaign.status === 'Completed' ? 'bg-green-500' :
                            'bg-yellow-500'
                          }`} 
                          style={{ width: `${campaign.progress}%` }}
                        ></div>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">{campaign.progress}%</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {campaign.sent}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {campaign.clicks}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{campaign.replies}</div>
                    <div className="text-xs text-gray-500">{campaign.replyRate}%</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {campaign.opportunities}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {campaign.status === 'Active' ? (
                      <button className="text-gray-400 hover:text-gray-500">
                        <Pause size={18} />
                      </button>
                    ) : (
                      <button className="text-gray-400 hover:text-gray-500">
                        <Play size={18} />
                      </button>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-gray-400 hover:text-gray-500">
                      <MoreHorizontal size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      {/* New Campaign Modal */}
      {showNewCampaignModal && (
        <div className="fixed inset-0 overflow-y-auto z-50 flex items-center justify-center">
          {/* Overlay */}
          <div className="fixed inset-0 bg-opacity-25" onClick={() => setShowNewCampaignModal(false)}></div>
          
          {/* Modal */}
          <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4 p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-900">Let's create a new campaign</h3>
              <button 
                className="text-gray-400 hover:text-gray-500"
                onClick={() => setShowNewCampaignModal(false)}
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="mb-6">
              <label htmlFor="campaign-name" className="block text-sm font-medium text-gray-700 mb-2">
                What would you like to name it?
              </label>
              <input
                type="text"
                id="campaign-name"
                className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                placeholder="My Campaign"
                value={newCampaignName}
                onChange={(e) => setNewCampaignName(e.target.value)}
                autoFocus
              />
            </div>
            
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                onClick={() => setShowNewCampaignModal(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                onClick={handleCreateCampaign}
                disabled={!newCampaignName.trim()}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;