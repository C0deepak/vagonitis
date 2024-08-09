import React from 'react';
import BlogCard from './Card/BlogCard';

const BlogSection = () => {
    const blogs = [
        {
            img: 'https://framerusercontent.com/images/wXMvuQb5TpQZc6ylocgt254A.jpg?scale-down-to=512',
            title: 'Understanding React Context API',
            author: 'Jane Doe',
        },
        {
            img: 'https://framerusercontent.com/images/S2dwVHGNe4s83K6cmklIliRPs8.jpg?scale-down-to=512',
            title: 'How to Build a Full-Stack Application with Next.js',
            author: 'John Smith',
        },
        {
            img: 'https://framerusercontent.com/images/SE8WuCuJ26wSHEQ1Dn4qUIVKvfM.jpg?scale-down-to=512',
            title: 'Exploring the New Features of Tailwind CSS',
            author: 'Emily Davis',
        },
        {
            img: 'https://framerusercontent.com/images/Gl1PK6djOiR85cgT8Tzpcd7ACA4.jpg',
            title: 'Exploring the New Features of Tailwind CSS',
            author: 'Emily Davis',
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 gap-8 p-16 bg-neutral-900">
            {blogs.map((blog, index) => (
                <BlogCard
                    key={index}
                    img={blog.img}
                    title={blog.title}
                    author={blog.author}
                />
            ))}
        </div>
    );
};

export default BlogSection;
