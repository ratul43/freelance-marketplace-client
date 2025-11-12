import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthContext";
import axios from "axios";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";

const MyPostedJobsPage = () => {
  const { user, loading } = useContext(AuthContext);
    const [postedJob, setPostedJob] = useState([])

    const navigate = useNavigate()




  useEffect(() => {
    if (user) {
      axios
        .get(`http://localhost:3000/myAddedJobs?email=${user.email}`)
        .then((data) => setPostedJob(data.data.result));
    }
  }, [user]);

  const handleDelete = (id) => {
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

    axios.delete(`http://localhost:3000/deleteJob/${id}`)
    .then(data => console.log(data)
    
    )
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
    navigate("/")
  }
});
    }





  
  if (loading) {
    return <h1>Loading......</h1>;
  }

  if(postedJob.length == 0) {
    return <h1 className='font-bold ml-4 mt-7 text-cyan-500 text-xl'> No data available</h1>
  }




  if (user) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          My Posted Jobs
        </h2>

        {
            postedJob.map(job=> <div key={job._id} className="space-y-4">
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
                <p className="text-sm text-gray-500 mt-2">
                  Contact: {job.userEmail}
                </p>
              </div>
              <div className="flex gap-2">
                
                <Link to={`/updateJob/${job._id}`} className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-red-600">
                  Update
                </Link>
                <button onClick={()=>handleDelete(job._id)} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
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
