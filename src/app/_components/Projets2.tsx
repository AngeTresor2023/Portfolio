"use client"

import React from 'react'
import { Fade, Slide } from 'react-awesome-reveal'

import Spacing from './Spacing'
import { Section } from 'lucide-react'

const Projets2 = () => {
  return (
    
    <div className="mx-auto">
        <hr className="border-t-2 border-white  my-8 m-36" />
      <h1 className="text-center font-bold text-3xl mb-14 mt-5 sm:mt-0 text-3xl font-bold sm:text-4xl lg:text-5xl">
        My Projects
      </h1>
      
      <p className="text-gray-600 max-w-2xl text-center my-4 mx-auto">
          A showcase of some of the projects I’ve been working on. Click on each one to learn more.
        </p>
      {/* Les cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-x-2 gap-y-6 place-items-center py-8">
      
        {projects.map(({ id, image, title, description }) => {
          return (
            <div
              key={id}
              className="text-white shadow-md rounded-lg overflow-hidden relative group " // Ajout de la classe group ici
            >
              <img
                src={image}
                alt={title}
                className="w-full max-w-[500px] h-[200px] rounded-lg opacity-80"
              />
              {/* Overlay section */}
              <div className="absolute top-[-100%] left-0 opacity-0 group-hover:opacity-100 group-hover:top-[0] p-4 w-full h-full bg-black/60 group-hover:backdrop-blur-sm duration-500">
                <div className="space-y-4">
                  <Slide cascade>
                    <h1 className="text-3xl font-bold">{title}</h1>
                    <Fade cascade damping={0.05}>
                      {description}
                    </Fade>
                    <div>
                      <button className="border border-white px-4 py-2 rounded-lg hover:bg-black/20 duration-300">
                        View
                      </button>
                    </div>
                  </Slide>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <Spacing size="lg"/>
      <hr className="border-t-2 border-white m-36 my-8" />
    </div>
   
  )
}

export default Projets2

const projects = [
  {
    id: 1,
    title: "My Resto",
    description: "My Resto Delta est un site web dédié à.",
    image: "/myresto.webp",
  },
  {
    id: 2,
    title: "Herman",
    description: "Herman est un projet conçu pour faciliter la gestion.",
    image: "/myresto.webp",
  },
  {
    id: 3,
    title: "My Home",
    description: "My Home est un projet de domotique.",
    image: "/myresto.webp",
  },
]
