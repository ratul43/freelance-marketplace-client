import React from 'react';

const AboutPlatform = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
            <div className="max-w-4xl mx-auto text-center">
                {/* Badge */}
                <div className="inline-block bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 border border-blue-200 mb-8">
                    <span className="text-blue-600 font-semibold text-sm">🎯 Trusted Freelance Platform</span>
                </div>
                
                {/* Main Heading */}
                <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                    Where Talent Meets
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                        Opportunity
                    </span>
                </h1>
                
                {/* Description */}
                <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                    Workspring connects skilled professionals with businesses for 
                    <span className="font-semibold text-gray-800"> web development</span>, 
                    <span className="font-semibold text-gray-800"> digital marketing</span>, and 
                    <span className="font-semibold text-gray-800"> graphic design</span> projects.
                </p>
                
                {/* Stats */}
                <div className="flex justify-center items-center gap-8 mb-12">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600">500+</div>
                        <div className="text-gray-500 text-sm">Active Freelancers</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-purple-600">1k+</div>
                        <div className="text-gray-500 text-sm">Projects Completed</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-indigo-600">98%</div>
                        <div className="text-gray-500 text-sm">Success Rate</div>
                    </div>
                </div>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                        🚀 Start Your Project
                    </button>
                    <button className="border-2 border-gray-300 hover:border-blue-400 text-gray-700 hover:text-blue-600 font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-md">
                        💼 Find Work
                    </button>
                </div>
                
                {/* Trust Indicator */}
                <div className="mt-12">
                    <p className="text-gray-500 text-sm mb-4">Trusted by professionals worldwide</p>
                    <div className="flex justify-center items-center gap-8 opacity-60">
                        <div className="text-lg">🌟</div>
                        <div className="text-lg">⭐</div>
                        <div className="text-lg">💫</div>
                        <div className="text-lg">✨</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPlatform;