import React from 'react';
import { Link } from 'react-router';

const JobSection = ({job}) => {
 
 const {category, coverImage, postedAt, postedBy, summary, title, userEmail, _id} = job
    
  return (
    <div className="border border-gray-300 rounded-lg p-4 shadow-sm flex flex-col h-full"> {/* Changed to h-full */}
      <img 
        src={coverImage}
        alt="Job"
        className="w-full h-40 object-cover rounded-md" /* Fixed image height */
      />
      
      <div className="mt-3 flex-1 flex flex-col"> {/* Flex column with flex-1 */}
        <h3 className="text-lg font-bold text-cyan-800 line-clamp-1">{title}</h3> {/* Limit title to 1 line */}
        <p className="text-green-600 font-medium text-sm">{category}</p>
        <p className="text-gray-700 mt-2 line-clamp-2 flex-1">{summary}</p> {/* Limit summary to 2 lines and take remaining space */}
        
        <div className="mt-auto"> {/* Push to bottom */}
          <p className="text-gray-600 text-sm truncate">Posted by: {postedBy}</p>
          <p className="text-gray-500 text-sm mt-1 truncate">Contact: {userEmail}</p>
          <p className="text-gray-500 text-sm mt-1">Posted at: {postedAt}</p>
        </div>
      </div>

      <div className="w-full text-center bg-blue-500 text-white py-2 rounded-md mt-3 hover:bg-blue-600">
        <Link to={`/allJobs/${job._id}`}>View Details</Link>
      </div>
    </div>
  );
};

export default JobSection;