import axios from 'axios';
import React from 'react';
import { Link, useLoaderData, useNavigate, useParams } from 'react-router';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const JobDetailsPage = () => {

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
   

    const handleAccept = () => {
        const acceptData = {
            title: title,
            category: category,
            summary: summary,
            coverImage: coverImage,
            postedBy: userEmail,
            postedAt: postedAt
            
        }

        axios.post(`http://localhost:3000/my-accepted-tasks`, acceptData)
        .then(data=> console.log(data)
    )
    toast.success("Job accepted")

    }


    return (
        <div className="max-w-4xl my-7 mx-auto bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center gap-6">
                {/* Image */}
                <div className="w-96 h-96">
                    <img 
                        src="https://placehold.co/400" 
                        alt={title}
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
                
                {/* Content */}
                <div className="flex-1">
                    <h1 className="text-2xl font-bold text-gray-800 mb-2">{title}</h1>
                    <p className="text-blue-600 font-semibold mb-4">{category}</p>
                    <p className="text-gray-600 mb-4">{summary}</p>
                    
                    <div className="space-y-2 text-gray-700">
                        <p><span className="font-semibold">Posted by:</span> {postedBy}</p>
                        <p><span className="font-semibold">Contact:</span> {userEmail}</p>
                        <p><span className="font-semibold">Posted at:</span> {postedAt}</p>
                        <Link to={`/updateJob/${_id}`} className="btn btn-primary">Update</Link>
                <button onClick={handleDelete} className='btn btn-warning ml-4 mb-1'>Delete </button>
                <button onClick={handleAccept} className='btn btn-success ml-4 mb-1'>Accept </button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default JobDetailsPage;