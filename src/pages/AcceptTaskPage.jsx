import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../provider/AuthContext';

const AcceptTaskPage = () => {

  const {user} = useContext(AuthContext)

    const [acceptJob, setAcceptJob] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:3000/my-accepted-tasks?email=${user.email}`)
        .then(data => setAcceptJob(data.data))
    }, [user.email])

    const handleDelete = (value) => {
      
      axios.delete(`http://localhost:3000/doneJobs?id=${value}`)
      .then(()=>{
        
      setAcceptJob(prevJobs => prevJobs.filter(job=> job._id !== value))

              toast.success("Job done")

      })
      .catch(error=>{
        toast.error(error.message)
      })
    }

    const handleCancel = (value) => {
      
      axios.delete(`http://localhost:3000/doneJobs?id=${value}`)
      .then(()=>{
        
      setAcceptJob(prevJobs => prevJobs.filter(job=> job._id !== value))

              toast.success("Job canceled")

      })
      .catch(error=>{
        toast.error(error.message)
      })
    }
    

  if(acceptJob.length == 0){
    return <h1 className='font-bold ml-4 mt-7 text-cyan-500 text-xl'>There's no record</h1>
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
                <p className="text-sm font-semibold text-gray-500 mt-2">
                  Accepted at: {job.acceptedAt}
                </p>
              </div>
              <div className="flex md:flex-row flex-col gap-2">
                <button onClick={()=>handleDelete(job._id)} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Done
                </button>
                <button onClick={()=>handleCancel(job._id)} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>    )}   
         </div>
    );
};

export default AcceptTaskPage;