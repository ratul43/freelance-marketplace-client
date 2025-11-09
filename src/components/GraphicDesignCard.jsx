import React from 'react';

const GraphicDesignCard = () => {
    return (
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md border border-gray-200 p-6">
            {/* Header */}
            <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-800">Graphic Designing</h3>
            </div>
            
            {/* Main Content Grid */}
            <div className="grid grid-cols-3 gap-4 mb-6">
                {/* Left Column */}
                <div className="space-y-2">
                    <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-medium">
                        blys
                    </div>
                    <div className="text-gray-600 text-sm">Bookings</div>
                </div>
                
                {/* Middle Column */}
                <div className="space-y-2">
                    <div className="text-gray-500 text-sm">Streaming</div>
                    <div className="text-gray-500 text-sm">Streaming</div>
                    <div className="text-gray-500 text-sm">First bookings</div>
                    <div className="text-gray-500 text-sm">Streaming</div>
                </div>
                
                {/* Right Column - Numbered Items */}
                <div className="space-y-2">
                    {[
                        { num: "7", title: "Strategy", desc: "Other message for you and" },
                        { num: "8", title: "Therapy", desc: "Game Shrends to You" },
                        { num: "9", title: "Mechanism", desc: "I am running in the" },
                        { num: "10", title: "Automata", desc: "Goods" },
                        { num: "11", title: "Request", desc: "Cancel Hot Sound" },
                        { num: "12", title: "Game cards", desc: "I am running in the" },
                        { num: "13", title: "Interference", desc: "Single Shrending" },
                        { num: "14", title: "Offshore", desc: "I am running in the" },
                        { num: "15", title: "High Legend", desc: "Bookings" },
                        { num: "16", title: "Probable", desc: "Not Unapplicable" },
                        { num: "17", title: "Time Back", desc: "Time Back" }
                    ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-2">
                            <span className="text-gray-500 text-sm min-w-6">{item.num}</span>
                            <div>
                                <div className="text-gray-800 text-sm font-medium">{item.title}</div>
                                <div className="text-gray-500 text-xs">{item.desc}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GraphicDesignCard;