import React from 'react';
import { Link } from 'react-router';
import { FaExclamationTriangle } from 'react-icons/fa';

const ErrorPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4">
            <div className="text-center">
                {/* Error Icon */}
                <div className="mb-6">
                    <FaExclamationTriangle className="text-6xl text-red-500 mx-auto" />
                </div>
                
                {/* Error Message */}
                <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
                <p className="text-gray-500 mb-8 max-w-md">
                    Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
                </p>
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link 
                        to="/" 
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                    >
                        Go Home
                    </Link>
                    <button 
                        onClick={() => window.history.back()} 
                        className="border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-colors"
                    >
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;