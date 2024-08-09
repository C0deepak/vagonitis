import React from 'react';

const BlogCard = ({ img, title, author }) => {
    return (
        <div className="rounded-lg overflow-hidden flex flex-col gap-4">
            <img
                src={img}
                alt={title}
                className="w-full aspect-square object-cover"
            />
            <div className="flex flex-col gap-2">
                <h3 className="text-medium text-white font-bold">{title}</h3>
                <p className="text-sm text-indigo-600">By {author}</p>
            </div>
        </div>
    );
};

export default BlogCard;
