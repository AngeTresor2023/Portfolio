import { Card } from '@/components/ui/card'
import { Code, GraduationCap, LucideIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Section } from './Section'

const Study = () => {
  return (
    <Section className="flex flex-row items-start gap-6">

    <div className="flex-[1] w-full">
        <Card className="p-4 flex flex-col gap-4">
            <p className="text-lg text-muted-foreground">My Studies</p>
            <div className="flex flex-col gap-4">
                {Studies.map((project, index) => (
                    <MyStudies
                        key={index}
                        Logo={project.Logo}
                        title={project.title}
                        description={project.description}
                        url="/"
                    />
                ))}
            </div>
        </Card>
    </div>

</Section>

  )
}

export default Study

const Studies: MystudiesProps[] = [
    {
        Logo: GraduationCap,
        title: "DEC Computer Programming",
        description: "Presenter les plats culinaires africains.",
        url: "/",
    },
    {
        Logo: GraduationCap,
        title: "Bachelor degree in Maintenance des systemes Informatiques",
        description: "Outils de gestion de stock et de vente pour une entreprise MIPAN Sarl",
        url: "/",
    },
    {
        Logo: GraduationCap,
        title: "DES",
        description: "Coder avec react",
        url: "/",
    },
]

type MystudiesProps = {
    Logo : LucideIcon; 
    title: string; 
    description: string;
    url: string;
};

const MyStudies = (props: MystudiesProps ) =>{
    return(
        <Link href={props.url} 
        className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">

<span className=" bg-accent text-accent-foreground p-3 rounded-sm ">
                < props.Logo size={12}/>
            </span>
        
        <div>
            <p className=" text-lg font-semibold "> {props.title}</p>
            <p className=" text-sm text-muted-foreground "> {props.description}</p>
            
        </div>
        </Link>
    )
};
