import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { ClimbingBoxLoader } from 'react-spinners';

const AllJobPage = () => {

    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(true)
        const [sortOrder, setSortOrder] = useState('none')


    useEffect(()=>{

      setLoading(true)
      let url = "http://localhost:3000/allJobs"

      if(sortOrder === "post-asc") {
        url = "http://localhost:3000/sort-ascending"
      }
      else if (sortOrder === "post-desc") {
        url = "http://localhost:3000/sort-descending"
      }

axios.get(url)
    .then(data => {
      setJobs(data.data)
      setLoading(false)
    })
    .catch(error => {
      console.error('Error fetching jobs: ', error.message)
      setLoading(false)
    })
    
    }, [sortOrder])
    

    if(loading) {
        return <ClimbingBoxLoader className='max-w-6xl mx-auto' color="#e74c3c" />
    }

    return (
      <div className='my-7'> 

     <div className='max-w-6xl mx-auto flex justify-end'>
       <label className="form-control w-full max-w-xs">
          <select
          value={sortOrder}
          onChange={e=> setSortOrder(e.target.value)}
            className="select select-bordered"
            
          >
            <option value="none">Sort by posted time</option>
            <option value="post-asc">Low → High</option>
            <option value="post-desc">High → Low</option>
          </select>
        </label>
     </div>

 <div className='grid my-4 lg:grid-cols-3 md:grid-cols-2 gap-3 max-w-6xl mx-auto'>

    {jobs.map(job=> <div key={job._id} className="border border-gray-300 rounded-lg p-4 shadow-sm flex flex-col h-full"> 
      <img 
        src={job.coverImage}
        alt="Job"
        className="w-full h-40 object-cover rounded-md" 
      />
      
      <div className="mt-3 flex-1 flex flex-col"> 
        <h3 className="text-lg font-bold text-cyan-800 line-clamp-1">{job.title}</h3> 
        <p className="text-green-600 font-medium text-sm">{job.category}</p>
        <p className="text-gray-700 mt-2 line-clamp-2 flex-1">{job.summary}</p> 
        
        <div className="mt-auto"> 
          <p className="text-gray-600 text-sm truncate">Posted by: {job.postedBy}</p>
          <p className="text-gray-500 text-sm mt-1 truncate">Contact: {job.userEmail}</p>
          <p className="text-gray-500 text-sm mt-1">Posted at: {job.postedAt}</p>
        </div>
      </div>

      <div className="w-full text-center bg-blue-500 text-white py-2 rounded-md mt-3 hover:bg-blue-600">
        <Link to={`/allJobs/${job._id}`}>View Details</Link>
      </div>
    </div>)}


        </div>

      </div>
       
    );
};

export default AllJobPage;