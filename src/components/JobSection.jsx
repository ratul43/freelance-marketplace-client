import React from 'react';
import { Link } from 'react-router';

const JobSection = ({job}) => {
 
 const {category, postedAt, postedBy, summary, title, userEmail, _id} = job
    
  return (
    
    <div className="border border-gray-300 rounded-lg p-4 max-w-sm mx-auto shadow-sm">
      <img src='https://placehold.co/400'
        
        alt="Job"
        className="w-full h-40 object-cover rounded-md"
      />
      
      <div className="mt-3">

        <h3 className="text-lg font-bold text-cyan-800">{title}</h3>
        <p className="text-green-600 font-medium text-sm">{category}</p>
        <p className="text-gray-700 mt-2">{summary}</p>
        <p className="text-gray-600 text-sm">Posted by: {postedBy}</p>
        <p className="text-gray-500 text-sm mt-2">Contact: {userEmail}</p>
        <p className="text-gray-500 text-sm mt-2">Posted at: {postedAt}</p>
      </div>

      <div className="w-full text-center bg-blue-500 text-white py-2 rounded-md mt-4 hover:bg-blue-600">
        <Link to={`/allJobs/${job._id}`}>Apply Now</Link>
      </div>
    </div>
  );
};

export default JobSection;