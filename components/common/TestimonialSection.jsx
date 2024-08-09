import React from 'react';
import TestimonialCard from './Card/TestimonialCard';

const TestimonialSection = () => {
    const testimonials = [
        {
            img: 'https://framerusercontent.com/images/jIhhlavGARHtm8JYH1OC8TRaU.jpg',
            name: 'Jane Doe',
            intro: 'CEO at Company One',
            review: '“Seamless integration with your computer. If you can&apos;t afford a professional workstation, or want to supplement your current rig, Vagon is the best option I can think of.”',
        },
        {
            img: 'https://framerusercontent.com/images/ljHPQL4N8AJBHbQAF0FU1xUPaug.webp',
            name: 'John Smith',
            intro: 'CTO at Startup Two',
            review: '“Vagon provides a boost to your computer at home to run Autodesk, Adobe, and other graphics software faster. It is more likely that Vagon will reduce workstation investments.”',
        },
        {
            img: 'https://framerusercontent.com/images/DzisrscDjqOhJUGPgvPMSc9TQs.webp',
            name: 'Emily Davis',
            intro: 'Marketing Head at Business Three',
            review: '“Let&apos;s say you have something like a tablet or a Chromebook and you can work on a computer through your browser that&apos;s much more powerful.”',
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-gray-100 p-16">
            {testimonials.map((testimonial, index) => (
                <TestimonialCard
                    key={index}
                    img={testimonial.img}
                    name={testimonial.name}
                    intro={testimonial.intro}
                    review={testimonial.review}
                />
            ))}
        </div>
    );
};

export default TestimonialSection;
