import React, { useState } from 'react';

const Support = () => {
    const [formData, setFormData] = useState({
        type: '',
        subject: '',
        message: '',
        attachment: null
    });

    const handleTypeChange = (type) => {
        setFormData({ ...formData, type });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, attachment: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add your form submission logic here
    };

    return (
        <div className="min-h-screen bg-gray-100 p-4 flex justify-center items-start">
            <div className="bg-white rounded-2xl shadow-md w-full max-w-xl p-8">
                <h1 className="text-2xl font-medium text-center mb-1">Help Desk</h1>
                <p className="text-center text-gray-500 text-sm mb-6">
                    Submit bugs, feature requests and feedback here
                </p>

                <form onSubmit={handleSubmit}>
                    {/* Request Type */}
                    <div className="flex gap-8 mb-6">
                        <label className="flex items-center text-gray-500">
                            <input
                                type="checkbox"
                                checked={formData.type === 'bug'}
                                onChange={() => handleTypeChange('bug')}
                                className="w-4 h-4 mr-2 border-gray-300 rounded "
                            />
                            Bug
                        </label>

                        <label className="flex items-center text-gray-500">
                            <input
                                type="checkbox"
                                checked={formData.type === 'feature'}
                                onChange={() => handleTypeChange('feature')}
                                className="w-4 h-4 mr-2 border-gray-300 rounded "
                            />
                            Feature request
                        </label>

                        <label className="flex items-center text-gray-500">
                            <input
                                type="checkbox"
                                checked={formData.type === 'feedback'}
                                onChange={() => handleTypeChange('feedback')}
                                className="w-4 h-4 mr-2 border-gray-200 rounded "
                            />
                            Feedback
                        </label>
                    </div>

                    {/* Subject */}
                    <div className="mb-4">
                        <label className="block font-medium mb-2">Subject</label>
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            placeholder="Subject"
                            className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                    </div>

                    {/* Message */}
                    <div className="mb-4 border-whi">
                        <label className="block font-medium mb-2">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Type your message here..."
                            rows="5"
                            className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                        ></textarea>
                    </div>

                    {/* Attachment */}
                    <div className="mb-6">
                        <label className="block font-medium mb-2">Attachment</label>
                        <div className="border border-dashed border-gray-300 rounded-md p-8 text-center">
                            <div className="flex justify-center mb-2">
                                <svg
                                    className="w-8 h-8 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                    ></path>
                                </svg>
                            </div>
                            <p className="text-sm text-gray-500 border-dashed">
                                Drag file here or click to browse
                            </p>
                            <input
                                type="file"
                                onChange={handleFileChange}
                                className="hidden"
                                id="file-upload"
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-4 rounded-full transition duration-300"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Support;