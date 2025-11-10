import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AllJobPage = () => {

    const [jobs, setJobs] = useState([])

    useEffect(()=>{
axios.get("http://localhost:3000/jobs")
    .then(data => setJobs(data.data)
    )
    }, [])
    console.log(jobs);

    return (
        <div className='grid my-4 lg:grid-cols-3 grid-cols-2 gap-3 max-w-6xl mx-auto'>

    {jobs.map(job=> <div key={job._id} className="border border-gray-300 rounded-lg p-4 max-w-sm mx-auto shadow-sm">
      <img src='https://placehold.co/400'
        
        alt="Job"
        className="w-full h-40 object-cover rounded-md"
      />
      
      <div className="mt-3">

        <h3 className="text-lg font-bold text-gray-800">{job.title}</h3>
        <p className="text-green-600 font-medium text-sm">{job.category}</p>
        <p className="text-gray-700 mt-2">{job.summary}</p>
        <p className="text-gray-600 text-sm">Posted by:  {job.postedBy}</p>
        <p className="text-gray-500 text-sm mt-2">Contact: {job.userEmail}</p>
        <p className="text-gray-500 text-sm mt-2">Posted at: {job.postedAt}</p>
      </div>

      <button className="w-full bg-blue-500 text-white py-2 rounded-md mt-4 hover:bg-blue-600">
        Apply Now
      </button>
    </div>)}


        </div>
    );
};

export default AllJobPage;