import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthContext';

const Navbar = () => {

  const { user, signOutUser } = useContext(AuthContext);

   const handleSignOut = () => {
    signOutUser();
    
  };



  const navLinks = (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/allJobs">All Jobs</Link></li>
      <li><Link to="/addJob">Add a Job</Link></li>
      <li><Link to="/acceptTasks">My Accepted Tasks</Link></li>
    </>
  );

  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="text-2xl font-bold text-blue-600">WorkSpring</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <ul className="menu menu-horizontal px-1 font-medium text-gray-700">
            {navLinks}
          </ul>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button onClick={handleSignOut} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">Logout</button>
          <Link to="/login" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Login/Register</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-medium">
            {navLinks}
            <li className="mt-2"><button className="btn btn-error btn-sm w-full">Logout</button></li>
            <li><Link to="/auth" className="btn btn-primary btn-sm w-full mt-1">Login/Register</Link></li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
