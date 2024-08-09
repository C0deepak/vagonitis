import React from 'react'
import { cn } from '@/lib/utils';

const FeatureCard = ({ img, heading, description, className }) => {
    return (
        <div className={cn('group relative rounded-lg overflow-hidden p-6 flex flex-col gap-8 border', className)}>
            {img && (
                <img
                    src={img}
                    alt={heading || 'Card image'}
                    className="h-24 mx-auto"
                />
            )}
            <div className="flex flex-col gap-2">
                {heading && (
                    <h3 className={cn('text-lg font-semibold mb-2')}>
                        {heading}
                    </h3>
                )}
                {description && (
                    <p className="text-base font-medium">
                        {description}
                    </p>
                )}
            </div>
        </div>
    )
}

export default FeatureCard