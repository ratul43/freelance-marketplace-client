import React from 'react';
import { Link } from 'react-router';

const LoginPage = () => {
    return (
        <div>
           <div className="w-full max-w-md my-7 mx-auto backdrop-blur-md bg-white/90 border border-gray-200 shadow-lg rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
              <form className="space-y-5">
                <h2 className="text-2xl font-semibold mb-2 text-center text-gray-800">
                  Log In
                </h2>

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
                  type="button"
                  className="hover:underline cursor-pointer text-sm text-blue-600 hover:text-blue-800 transition-colors"
                  onClick={""}
                >
                  Forget password?
                </button>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Login
                </button>

                {/* Divider */}
                <div className="flex items-center justify-center gap-2 my-4">
                  <div className="h-px w-16 bg-gray-300"></div>
                  <span className="text-sm text-gray-500">or</span>
                  <div className="h-px w-16 bg-gray-300"></div>
                </div>

                {/* Google Signin */}
                <button
                  type="button"
                  onClick={""}
                  className="flex items-center justify-center gap-3 bg-white text-gray-700 px-5 py-3 rounded-lg w-full font-semibold hover:bg-gray-50 transition-all duration-300 border border-gray-300 hover:border-gray-400 shadow-sm hover:shadow-md"
                >
                  <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="google"
                    className="w-5 h-5"
                  />
                  Continue with Google
                </button>

                <p className="text-center text-sm text-gray-600 mt-4">
                  Don't have an account?{" "}
                  <Link
                    to="/register"
                    className="text-blue-600 hover:text-blue-800 underline font-medium transition-colors"
                  >
                    Register
                  </Link>
                </p>
              </form>
            </div>
        </div>
    );
};

export default LoginPage;