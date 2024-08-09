import React from 'react';

const TestimonialCard = ({ img, name, intro, review }) => {
    return (
        <div className="bg-white shadow-xl rounded-lg flex flex-col overflow-hidden">
            <div className="flex items-center gap-4 p-4 border-b-1 bg-indigo-500/10">
                <img
                    src={img}
                    alt={name}
                    className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                    <h4 className="text-lg font-bold">{name}</h4>
                    <p className="text-sm text-gray-600">{intro}</p>
                </div>
            </div>
            <p className="text-gray-800 text-sm px-8 py-6 text-medium">{review}</p>
        </div>
    );
};

export default TestimonialCard;
