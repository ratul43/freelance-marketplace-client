import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthContext";
import axios from "axios";

const MyPostedJobsPage = () => {
  const { user, loading } = useContext(AuthContext);
    const [postedJob, setPostedJob] = useState([])
  useEffect(() => {
    if (user) {
      axios
        .get(`http://localhost:3000/myAddedJobs?email=${user.email}`)
        .then((data) => setPostedJob(data.data.result));
    }
  }, [user]);


  
  if (loading) {
    return <h1>Loading......</h1>;
  }

  if (user) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          My Posted Jobs
        </h2>

        {
            postedJob.map(job=> <div className="space-y-4">
          <div key={job._id} className="bg-white rounded-lg shadow-md p-6 border my-3">
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
                  Posted by: {job.userEmail}
                </p>
              </div>
              <div className="flex gap-2">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Edit
                </button>
                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>)
        }
      </div>
    );
  }
};

export default MyPostedJobsPage;
