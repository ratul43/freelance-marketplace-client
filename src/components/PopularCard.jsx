import React from 'react';

const PopularCard = () => {
    const categories = [
        {
            id: 1,
            name: "Web Development",
            description: "Frontend, Backend, Full Stack development roles",
            icon: "💻",
            image: "https://spec.nith.ac.in/BLOGS/a1%20(5).jpg",
            count: 7,
            color: "bg-blue-100 text-blue-800"
        },
        {
            id: 2,
            name: "Digital Marketing",
            description: "SEO, Social Media, Content Marketing positions",
            icon: "📱",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTReySGlGPAS4p-qmwSG7Pj5KVvQiZvMNFwfw&s",
            count: 7,
            color: "bg-green-100 text-green-800"
        },
        {
            id: 3,
            name: "Graphics Designing",
            description: "UI/UX, Motion Graphics, Brand Design roles",
            icon: "🎨",
            image: "https://www.projuktirpathshalabd.com/public/uploads/blog/20221213121220.Graphic-Design-01.png",
            count: 6,
            color: "bg-purple-100 text-purple-800"
        }
    ];

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Grid Layout for all devices */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {categories.map(category => (
                    <div 
                        key={category.id} 
                        className="relative w-full h-48 sm:h-56 md:h-60 lg:h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                 
                        <img
                            className="w-full h-full object-cover"
                            src={category.image}
                            alt={category.name}
                        />
                        
                       
                        <div className="absolute inset-0 bg-gray-800 opacity-60 hover:opacity-50 transition-opacity duration-300" />
                     
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                            <div className="text-2xl sm:text-3xl mb-2">{category.icon}</div>
                            <h2 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold mb-2">
                                {category.name}
                            </h2>
                            <p className="text-white text-sm sm:text-base opacity-90 leading-tight">
                                {category.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularCard;