import React from 'react';
import { useLoaderData } from 'react-router';

const JobDetailsPage = () => {

    const data = useLoaderData()
    const jobDetails = data.result 
    
    
    const {_id, title, postedBy, postedAt, category, summary, userEmail} = jobDetails

   
    return (
        <div className="max-w-4xl my-7 mx-auto bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center gap-6">
                {/* Image */}
                <div className="w-96 h-96">
                    <img 
                        src="https://placehold.co/400" 
                        alt={jobDetails.title}
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
                
                {/* Content */}
                <div className="flex-1">
                    <h1 className="text-2xl font-bold text-gray-800 mb-2">{jobDetails.title}</h1>
                    <p className="text-blue-600 font-semibold mb-4">{jobDetails.category}</p>
                    <p className="text-gray-600 mb-4">{jobDetails.summary}</p>
                    
                    <div className="space-y-2 text-gray-700">
                        <p><span className="font-semibold">Posted by:</span> {jobDetails.postedBy}</p>
                        <p><span className="font-semibold">Contact:</span> {jobDetails.userEmail}</p>
                        <p><span className="font-semibold">Posted at:</span> {jobDetails.postedAt}</p>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    );
};

export default JobDetailsPage;