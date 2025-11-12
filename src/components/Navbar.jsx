import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthContext';

const Navbar = () => {

  const { user, signOutUser } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || "light" )

  useEffect(()=>{
    const html = document.querySelector('html')
    html.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
  }, [theme])

 const handleTheme = (checked) => {
  
  setTheme(checked? "dark" : "light")

  }



   const handleSignOut = () => {
    signOutUser();
    
  };

 







  const navLinks = (
    user ? (
      <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/allJobs">All Jobs</Link></li>
      <li><Link to="/addJob">Add a Job</Link></li>
      <li><Link to="/my-accepted-tasks">My Accepted Tasks</Link></li>
      <li><Link to="/myPostedJobs">My Added Jobs</Link></li>
     
      </>
      
    ) : (
      <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/allJobs">All Jobs</Link></li>
      </>
      

    )

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
{user ? (

  <div className="relative group">
  <div className="btn btn-ghost btn-circle avatar">
    <div className="w-10 rounded-full">
      <img alt="profile" src={user.photoURL} />
    </div>
  </div>
  <div className="absolute right-0 mt-3 w-52 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
    <div className="menu menu-sm bg-base-100 rounded-box p-2 shadow-lg">
      <li className="list-none">
        <Link to={"/profile"} className="text-sm font-semibold block mb-1">
          Profile
        </Link>
        <p className="text-black/80 text-sm mb-2">{user?.displayName}</p>
        <p className="text-black/80 text-sm mb-2">{user?.email}</p>
      </li>
      <li className="list-none mt-2">
        <button onClick={handleSignOut} className="btn bg-blue-500 text-white btn-sm w-full">
          Logout
        </button>
      </li>
    </div>
  </div>
</div>

            
          ) : (
            <Link to="/login" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Login/Register
            </Link>
          )}

     <input
           onChange={(e) => handleTheme(e.target.checked)}
           type="checkbox"
           defaultChecked={localStorage.getItem('theme') === "dark"}
           className="toggle"/>


        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-medium">
            {navLinks}
{user ? (


  <div>


  <div className="relative group">
  <div className="btn btn-ghost btn-circle avatar">
    <div className="w-10 rounded-full">
      <img alt="profile" src={user.photoURL} />
    </div>
  </div>
  <div className="absolute right-0 mt-3 w-52 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
    <div className="menu menu-sm bg-base-100 rounded-box p-2 shadow-lg">
      <li className="list-none">
        <Link to={"/profile"} className="text-sm font-semibold block mb-1">
          Profile
        </Link>
        <p className="text-black/80 text-sm mb-2">{user?.displayName}</p>
        <p className="text-black/80 text-sm mb-2">{user?.email}</p>
      </li>
      <li className="list-none mt-2">
        <button onClick={handleSignOut} className="btn bg-blue-500 text-white btn-sm w-full">
          Logout
        </button>
      </li>
    </div>
  </div>
</div>


    
  </div>
              
            ) : (
              <li>
                <Link to="/login" className="btn btn-primary btn-sm w-full mt-1">
                  Login/Register
                </Link>
              </li>
            )}

             <input
           onChange={(e) => handleTheme(e.target.checked)}
           type="checkbox"
           defaultChecked={localStorage.getItem('theme') === "dark"}
           className="toggle"/>



          </ul>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
