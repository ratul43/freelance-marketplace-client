import React, { useContext, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthContext';
import { toast } from 'react-toastify';

const RegisterPage = () => {

  const {signUpNewUser, updateUserProfile, googleSignIn, user} = useContext(AuthContext)

      const [error, setError] = useState()

        const navigate = useNavigate()



  const handleSubmit = (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const password = e.target.password.value 
    const email = e.target.email.value 
    const photo = e.target.photo.value

    if(!name){
      setError("Please provide your name")
      return
    }
    if(!email){
      setError("Please provide your email")
      return
    }
    if(!photo){
      setError("Please provide your photo url")
      return
    }


    if (password.length < 6) {
        setError("Password must be at least 6 characters long");
        return
    }
    
    if (!/(?=.*[a-z])/.test(password)) {
        setError("Password must contain at least one lowercase letter");
        return
    }

     if (!/(?=.*[A-Z])/.test(password)) {
        setError("Password must contain at least one uppercase letter");
        return
    }

    signUpNewUser(email, password)
    .then(()=>{
    return updateUserProfile(name, photo)
    })


    .then(()=>{
      toast.success("Signup successful")
      navigate("/")
    })

    .catch((err)=>{
      toast.error(err.message)
    })

  }

  if(user){
    return(
      <Navigate to={"/"} ></Navigate>
    )
  }


    return (
        <div>
        <div className="w-full mx-auto my-7 max-w-md backdrop-blur-md bg-white/90 border border-gray-200 shadow-lg rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
              <form onSubmit={handleSubmit} className="space-y-5">
                <h2 className="text-2xl font-semibold mb-2 text-center text-gray-800">
                  Registration
                </h2>

        <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered w-full bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>

            <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">Photo</label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Your photo URL here"
                  className="input input-bordered w-full bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>



                <div>
                  <label className="block text-sm mb-1 text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="example@email.com"
                    className="input input-bordered w-full bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>

                <div className="relative">
                  <label className="block text-sm mb-1 text-gray-700">Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="••••••••"
                    className="input input-bordered w-full bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Register
                </button>

                <p className="text-center text-sm text-gray-600 mt-4">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-blue-600 hover:text-blue-800 underline font-medium transition-colors"
                  >
                    Log in
                  </Link>
                </p>
                
                {/* Divider */}
                <div className="flex items-center justify-center gap-2 my-4">
                  <div className="h-px w-16 bg-gray-300"></div>
                  <span className="text-sm text-gray-500">or</span>
                  <div className="h-px w-16 bg-gray-300"></div>
                </div>

                {/* Google Signin */}
                <button
                  type="button"
                  onClick={googleSignIn}
                  className="flex items-center justify-center gap-3 bg-white text-gray-700 px-5 py-3 rounded-lg w-full font-semibold hover:bg-gray-50 transition-all duration-300 border border-gray-300 hover:border-gray-400 shadow-sm hover:shadow-md"
                >
                  <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="google"
                    className="w-5 h-5"
                  />
                  Continue with Google
                </button>
              </form>
            </div>
        </div>
    );
};

export default RegisterPage;