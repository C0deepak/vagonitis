import React from 'react'
import Image from 'next/image'
import Facebook from '@/public/img/facebook.svg'
import Disney from '@/public/img/disney.svg'
import Airbnb from '@/public/img/airbnb.svg'
import Apple from '@/public/img/apple.svg'
import Spark from '@/public/img/spark.svg'
import Samsung from '@/public/img/samsung.svg'
import Quora from '@/public/img/quora.svg'
import Sass from '@/public/img/sass.svg'

const HomeLogoCarousel = () => {
    const logos = [
        { src: Facebook, alt: 'Facebook' },
        { src: Disney, alt: 'Disney' },
        { src: Airbnb, alt: 'Airbnb' },
        { src: Apple, alt: 'Apple' },
        { src: Spark, alt: 'Spark' },
        { src: Samsung, alt: 'Samsung' },
        { src: Quora, alt: 'Quora' },
        { src: Sass, alt: 'Sass' },
    ]
    return (
        <div class="w-full inline-flex flex-nowrap overflow-hidden p-8">
            <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                {logos.map((logo, index) => (
                    <li key={index}>
                        <Image src={logo.src} alt={logo.alt} className='invert-[.3]'/>
                    </li>
                ))}
            </ul>
            <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                {logos.map((logo, index) => (
                    <li key={index}>
                        <Image src={logo.src} alt={logo.alt} className='invert-[.3]'/>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default HomeLogoCarousel