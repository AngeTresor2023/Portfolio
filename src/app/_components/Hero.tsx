import Image from 'next/image';
import { Section } from './Section'
import React from 'react'

const Hero = () => {
  return (
    <Section className="flex max-lg:flex-col items-center gap-0">
        
            <div className="flex-[3] w-full flex flex-col gap-2 mx-2 md:mx-64 my-1 px-1">
                <h2 className="font-caption font-bold text-8xl">Ange Djomo</h2>
                <h3 className="font-caption text-3xl mx-3">Web Developer , IT Technician & Teacher</h3>
                <p className="text-justify mx-3">
                    As an experienced IT technician and educator with over four years of expertise in technical support, escalation management, and training, I am recognized for my ability to solve complex issues while clearly communicating technical concepts. Fluent in both French and English, I excel in providing exceptional customer service in bilingual environments. Motivated by a passion for continuous learning, I am currently developing my skills in computer programming and cybersecurity, with the goal of staying at the cutting edge of technology and enhancing operational efficiency.
                </p>
            </div>
            <div className="flex-[2] w-full flex flex-col gap-2 items-start justify-start">
                <Image 
                    src="/meilleur2.png"
                    className="w-full h-auto max-w-2xl max-md:w-56 opacity-60" 
                    alt="Ange Djomo picture"
                    width={800}
                    height={800}
                />
            </div>
        
  
</Section>

  );
};

export default Hero