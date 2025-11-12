import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const ProfilePage = () => {
  const navigate = useNavigate()
  const { user, updateIndividualProfile } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");

  const handleUpdateProfile = async () => {
    await updateIndividualProfile(name, photo);
    navigate("/")
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-8">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md border border-gray-200">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          My Profile
        </h2>

        {/* User Photo */}
        <div className="flex flex-col items-center space-y-2 mb-6">
          <img
            src={photo || user?.photoURL || "https://via.placeholder.com/100"}
            alt="Profile"
            className="w-20 h-20 rounded-full border-2 border-gray-300 object-cover"
          />
          <p className="text-sm text-gray-600">{user?.email}</p>
        </div>

        {/* Input Fields */}
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Display Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Photo URL
            </label>
            <input
              type="text"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              placeholder="Enter photo URL"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Update Button */}
        <button
          onClick={handleUpdateProfile}
          className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors duration-300"
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;