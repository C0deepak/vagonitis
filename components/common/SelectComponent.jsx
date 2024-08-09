'use client';

import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import React, { useState } from 'react';

const SelectComponent = ({ selectedBgColor = 'bg-blue-100', selectedTextColor = 'text-blue-600' }) => {
    const [selectedCard, setSelectedCard] = useState(0);

    const cards = [
        {
            heading: 'Upgrade performance, with a single click',
            description: 'Vagon Cloud Computer makes remote desktop experiences accessible for everyone with 4K resolution and 60 FPS streaming experience.',
            image: 'https://framerusercontent.com/images/74QuaBjjjxqNbVXB8qS7mRUri4E.png?scale-down-to=1024',
        },
        {
            heading: 'Maximize efficiency with cloud power',
            description: 'Experience seamless workflows and unmatched computing power in the cloud, accessible from anywhere.',
            image: 'https://framerusercontent.com/images/6TbowZG3czmmXtON6tnAGQeOoE.png?scale-down-to=1024',
        },
        {
            heading: 'Streamline your workflow with advanced tools',
            description: 'Access a suite of tools designed to enhance productivity and performance in a remote environment.',
            image: 'https://framerusercontent.com/images/XJF405Yp3eQeXe2Poyddj9Ngi7I.png?scale-down-to=1024',
        },
    ];

    const handleCardClick = (index) => {
        setSelectedCard(index);
    };

    return (
        <div className="flex flex-col sm:flex-row gap-16 items-center justify-between">
            <div className="flex flex-col gap-4 w-[50%]">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className={cn(
                            'flex flex-col gap-4 p-6 rounded-xl cursor-pointer',
                            selectedCard === index && selectedBgColor
                        )}
                        onMouseEnter={() => handleCardClick(index)}
                    >
                        <h3
                            className={cn(
                                'text-xl font-bold',
                                selectedCard === index
                                    ? selectedTextColor
                                    : 'text-neutral-900'
                            )}
                        >
                            {card.heading}
                        </h3>
                        <p className="text-sm">{card.description}</p>
                        <button className="flex items-center underline text-sm font-semibold gap-2">
                            Learn More <ArrowRight size={16} />
                        </button>
                    </div>
                ))}
            </div>
            <div className="rounded-xl overflow-hidden w-[40%] h-full">
                <img
                    src={cards[selectedCard].image}
                    alt=""
                    className="h-full w-full object-cover"
                />
            </div>
        </div>
    );
};

export default SelectComponent;
