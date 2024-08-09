import React from 'react';
import { cn } from '@/lib/utils';

const Heading = ({ subheading, mainHeading, paragraph, className, headingClassName }) => {
    return (
        <div className={cn('flex flex-col gap-2', className)}>
            {subheading && (
                <h4 className="text-sm font-semibold uppercase text-neutral-400">
                    {subheading}
                </h4>
            )}
            {mainHeading && (
                <h2 className={cn('text-4xl font-semibold my-2', headingClassName)}>
                    {mainHeading}
                </h2>
            )}
            {paragraph && (
                <p className="text-base font-medium">
                    {paragraph}
                </p>
            )}
        </div>
    );
};

export default Heading;
