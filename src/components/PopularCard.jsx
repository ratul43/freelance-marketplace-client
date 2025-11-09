import React from 'react';

const PopularCard = () => {

    const categories = [
  {
    id: 1,
    name: "Web Development",
    description: "Frontend, Backend, Full Stack development roles",
    icon: "💻",
    image:"https://spec.nith.ac.in/BLOGS/a1%20(5).jpg",
    count: 7,
    color: "bg-blue-100 text-blue-800"
  },
  {
    id: 2,
    name: "Digital Marketing",
    description: "SEO, Social Media, Content Marketing positions",
    icon: "📱",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTReySGlGPAS4p-qmwSG7Pj5KVvQiZvMNFwfw&s",
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
        <div className='max-w-6xl mx-auto flex gap-3'>
            {categories.map(category => 
   <div key={category.id} className="relative w-xl mx-auto mt-20">
  <img
    className="h-64 w-full object-cover rounded-md"
    src={category.image}
    alt="Random image"
  />
  <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md" />
  <div className="absolute inset-0 flex flex-col items-center justify-center">
    <h2 className="text-white text-3xl font-bold">{category.name}</h2>
    <p className='text-white'>{category.description}</p>
  </div>
</div>
            )}
         
        </div>
        

    );
};

export default PopularCard;