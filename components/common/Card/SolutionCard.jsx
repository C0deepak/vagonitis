import React from 'react';
import { cn } from '@/lib/utils'; // Adjust the import path as needed
import { ArrowRight } from 'lucide-react';

const SolutionCard = ({ img, heading, description, className, headingClassName }) => {
    return (
        <div className={cn('group relative rounded-lg overflow-hidden p-6 flex flex-col gap-8', className)}>
            {img && (
                <img
                    src={img}
                    alt={heading || 'Card image'}
                    className="w-20"
                />
            )}
            <div className="flex flex-col gap-2">
                {heading && (
                    <h3 className={cn('text-2xl font-semibold mb-2', headingClassName)}>
                        {heading}
                    </h3>
                )}
                {description && (
                    <p className="text-base font-medium">
                        {description}
                    </p>
                )}
            </div>
            <div className="absolute top-6 right-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className={cn('block transform transition-transform duration-300 group-hover:translate-x-1', headingClassName)}>
                    <ArrowRight />
                </span>
            </div>
        </div>
    );
};

export default SolutionCard;
