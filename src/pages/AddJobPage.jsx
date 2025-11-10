import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { AuthContext } from '../provider/AuthContext';

const AddJobPage = () => {
    const {user} = useContext(AuthContext)

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        title: '',
        category: '',
        summary: '',
        coverImage: '',
        userEmail: user?.email,
        postedBy: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
            postedAt: new Date()
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Job Data:', formData);
        

        axios.post('http://localhost:3000/addJob', formData)
        .then(data => console.log(data)
        )

        toast.success("Job added successfully")

        navigate("/")

    };

    return (
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Post a New Job</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="e.g. Senior Frontend Developer"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                    <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    >
                        <option value="">Select Category</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="Graphics Designing">Graphics Designing</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Job Summary</label>
                    <textarea
                        name="summary"
                        value={formData.summary}
                        onChange={handleChange}
                        placeholder="Brief description of the job..."
                        rows="3"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Cover Image URL</label>
                    <input
                        type="url"
                        name="coverImage"
                        value={formData.coverImage}
                        onChange={handleChange}
                        placeholder="https://example.com/image.jpg"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <input
                        type="text"
                        name="postedBy"
                        value={formData.postedBy}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Contact Email</label>
                    <input
                        type="email"
                        name="userEmail"
                        defaultValue={user?.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
                >
                    Post Job
                </button>
            </form>
        </div>
    );
};

export default AddJobPage;