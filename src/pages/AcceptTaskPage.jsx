import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const AcceptTaskPage = () => {

    const [acceptJob, setAcceptJob] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:3000/my-accepted-tasks`)
        .then(data => setAcceptJob(data.data))
    }, [])

    const handleDelete = (value) => {
      
      axios.delete(`http://localhost:3000/doneJobs?id=${value}`)
      .then(()=>{
        
      setAcceptJob(prevJobs => prevJobs.filter(job=> job._id !== value))
      toast.success("Job deleted")

      })
      .catch(error=>{
        toast.error(error.message)
      })
    }
    

    return (
        <div className='max-w-4xl mx-auto p-6'>

      {acceptJob.map(job=>           <div key={job._id} className="space-y-4">
          <div className="bg-white rounded-lg shadow-md p-6 border my-3">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                 {job.title}
                </h3>
                <p className="text-blue-600 font-medium">{job.category}</p>
                <p className="text-gray-600 mt-2">{job.summary}</p>
                <p className="text-sm text-gray-500 mt-2">
                  Posted on: {job.postedAt}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Posted by: {job.postedBy}
                </p>
              </div>
              <div className="flex gap-2">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Edit
                </button>
                <button onClick={()=>handleDelete(job._id)} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>    )}   
         </div>
    );
};

export default AcceptTaskPage;