import { Card } from '@/components/ui/card';
import Image from 'next/image';
import React from 'react';
import { Section } from './Section';
import styles from '@/app/_components/projet.module.css'
import { ProjectSectionProps } from '@/types/projets';

const Projet = () => {
  return (
    <Section className="flex flex-col items-start gap-6 px-4 bg-grey-700 sm:px-6 lg:px-8">
    
            <ProjectSection params={projects} />
        
      
    </Section>
  );
};

export default Projet;

const projects = [
  {
    title: "My Resto",
    description:"My Resto Delta est un site web dédié à la promotion de la cuisine africaine, conçu avec Next.js et déployé sur Vercel. Le site met en avant des plats africains traditionnels, probablement à travers des images optimisées et des descriptions alléchantes pour capter l’attention des visiteurs. Il semble cibler les amateurs de gastronomie en leur offrant une expérience utilisateur fluide, avec une navigation simple et efficace. L'utilisation de Next.js permet une gestion optimale des images, cruciales pour présenter les plats. Le site pourrait inclure des fonctionnalités supplémentaires telles que la commande en ligne ou la réservation. En somme, My Resto se présente comme une vitrine numérique moderne de la gastronomie africaine, mettant en avant la richesse culinaire du continent à travers une interface moderne et performante.",
    image: "/myresto.webp",
  },
  {
    title: "Herman",
    description:
      "Herman est un projet conçu pour faciliter la gestion des stocks et des ventes d'une entreprise, codé avec **Next.js**, **React**, et déployé sur **Vercel**. Il permet de suivre en temps réel les niveaux de stock, d’automatiser les réapprovisionnements, et d’analyser les ventes. Grâce à une interface intuitive, les utilisateurs peuvent consulter l’état des stocks, créer des rapports de vente détaillés, et recevoir des alertes en cas de stock faible. Herman, avec son architecture basée sur Next.js, améliore l'efficacité en réduisant les erreurs humaines. L'intégration avec Vercel assure des performances optimales et une gestion fluide des mises à jour. Herman génère également des statistiques détaillées sur les performances des produits, aidant les responsables à prendre des décisions éclairées pour optimiser les processus d'achat et de vente. En somme, Herman est un outil intelligent, évolutif et essentiel pour améliorer la productivité d'une entreprise.",
    image: "/myresto.webp",
  },
  {
    title: "My Home",
    description:
      "My Home est un projet de domotique basé sur Arduino qui rend une maison plus intelligente et connectée. Il permet de contrôler à distance, via une application mobile ou un panneau central, divers éléments comme l’éclairage, les volets et la température. Le système peut être intégré à des assistants vocaux pour une utilisation simplifiée et permet d’automatiser les appareils pour améliorer le confort, la sécurité et l’efficacité énergétique. Grâce à la flexibilité de la plateforme Arduino, les utilisateurs peuvent ajouter des fonctionnalités spécifiques, comme l’activation des lumières via des détecteurs de mouvement ou l'intégration de dispositifs de sécurité. Open-source, My Home encourage le partage de solutions et d'améliorations au sein de la communauté, rendant le projet évolutif et adaptable à tout type d’habitation.",
    image: "/myresto.webp",
  },
];

const ProjectSection: React.FC<ProjectSectionProps> = ({ params }) => {
  return (
    
    <Section className="relative overflow-hidden py-12 sm:py-16 lg:py-20 m-auto ">
         <hr className="border-t-2 border-white w-full my-8" />
      <div className="flex flex-col items-center gap-3 text-center mb-10 md:mb-20">
        <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">My Projects</h2>
        <p className="text-gray-600 max-w-2xl text-center my-4">
          A showcase of some of the projects I’ve been working on. Click on each one to learn more.
        </p>
      </div>
      <div className={'container mx-auto space-y-12 xl:space-y-16 ${styles.scroller}'}>
        {params.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col items-center lg:flex-row ${
              index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
            } gap-5 lg:gap-8`}
          >
            <div className={`w-full lg:w-1/2 ${index % 2 !== 0 ?  ' ml-auto' : ''} flex-[2] flex-col`}>
              
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={600}
                  quality={100}
                  className="w-full sm:w-2/3 lg:w-full xl:w-2/3 mx-auto transition-transform duration-500 ease-out-in transform hover:scale-90 opacity-60 hover:opacity-100 rounded-lg"/>

             
            </div>
            <div className="w-full lg:w-1/2 flex-[3] flex-col">
              <div className="space-y-5 lg:space-y-6">
                <h3 className="text-xl font-semibold  lg:text-2xl">{project.title}</h3>
                <p className="text-gray-500 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
