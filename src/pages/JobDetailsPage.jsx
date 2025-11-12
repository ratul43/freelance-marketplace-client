import axios from 'axios';
import React, { useContext } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthContext';

const JobDetailsPage = () => {
    const {user} = useContext(AuthContext)
    const data = useLoaderData()
    const jobDetails = data.result  
    const {_id, title, postedBy, coverImage, postedAt, category, summary, userEmail} = jobDetails
    const navigate = useNavigate()

    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:3000/deleteJob/${_id}`)
                    .then(data => console.log(data))
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
                navigate("/")
            }
        });
    }

    const handleAccept = () => {
        const acceptData = {
            title: title,
            category: category,
            summary: summary,
            coverImage: coverImage,
            postedBy: userEmail,
            postedAt: postedAt,
            addedBy: user.email
        }

        axios.post(`http://localhost:3000/my-accepted-tasks`, acceptData)
            .then(data => console.log(data))
        toast.success("Job accepted")
    }

    return (
        <div className="max-w-4xl my-7 mx-auto bg-white rounded-lg shadow-md p-4 sm:p-6">
            <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
                {/* Image - Responsive sizing */}
                <div className="w-full sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96">
                    <img 
                        src={coverImage}
                        alt={title}
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
                
                {/* Content */}
                <div className="flex-1 w-full">
                    <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-2">{title}</h1>
                    <p className="text-blue-600 font-semibold text-sm sm:text-base mb-3 sm:mb-4">{category}</p>
                    <p className="text-gray-600 text-sm sm:text-base mb-4">{summary}</p>
                    
                    <div className="space-y-2 text-gray-700 text-sm sm:text-base">
                        <p><span className="font-semibold">Posted by:</span> {postedBy}</p>
                        <p><span className="font-semibold">Contact:</span> {userEmail}</p>
                        <p><span className="font-semibold">Posted at:</span> {postedAt}</p>
                      
                        {/* Buttons - Responsive layout */}
                        <div className="mt-4 sm:mt-6">
                            {user?.email !== userEmail ? (
                                <button 
                                    onClick={handleAccept} 
                                    className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 sm:px-6 rounded-lg transition-colors"
                                >
                                    Accept Job
                                </button>
                            ) : (
                                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                                    <Link 
                                        to={`/updateJob/${_id}`} 
                                        className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 sm:px-6 rounded-lg text-center transition-colors"
                                    >
                                        Update
                                    </Link>
                                    <button 
                                        onClick={handleDelete} 
                                        className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 sm:px-6 rounded-lg transition-colors"
                                    >
                                        Delete
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetailsPage;