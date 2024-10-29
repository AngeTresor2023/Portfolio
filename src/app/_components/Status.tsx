import React from 'react'
import { Section } from './Section'
import { Card } from '@/components/ui/card'
import { BookText, Code, GraduationCap, Home, LibraryBig, LucideIcon, MonitorCog } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const Status = () => {
  return (
 /*  <Section className="flex max-md:flex-col items-start"> 
    <div className="flex-[1] w-full ">
        <Card className="w-full p-4 flex flex-col gap-2 w-ful">
            <p className= " text-lg text-muted-foreground ">My Projects </p>
            <div className="flex flex-col gap-4 ">
                {
                    SideProjects.map((project, index) =>(
                    <MyProject
                    key={index}
                    Logo={project.Logo}
                    title={project.title}
                    description={project.description}
                    url= "/"
                    />

                ))}
            </div>
        </Card>
    </div>
    
    <div className="flex-[1] w-full flex flex-col gap-4 ">
        <Card className="p-4 flex-1">
        <p className= " text-lg text-muted-foreground ">My Studies </p>
            <div className="flex flex-col gap-4 ">
                {
                    Studies.map((project, index) =>(
                    <MyStudies
                    key={index}
                    Logo={project.Logo}
                    title={project.title}
                    description={project.description}
                    url= "/"
                    />

                ))}
            </div>
        </Card>
        </div>
        <div className="flex-[1] w-full flex flex-col gap-4 ">
        <Card className="p-4 flex-1">
        <p className= " text-lg text-muted-foreground ">My Experiences </p>
            <div className="flex flex-col gap-4 ">
                {
                    Experiences.map((project, index) =>(
                    <MyExperience
                            key={index}
                            image={project.image}
                            title={project.title}
                            date={project.date}
                            url="/" 
                            role={project.role}                    />

                ))}
            </div>
        </Card>
   </div>

   </Section>*/
   <Section className="flex flex-row items-start gap-6">
    <div className="flex-[1] w-full">
        <Card className="w-full p-4 flex flex-col gap-2">
            <p className="text-lg text-muted-foreground">My Projects</p>
            <div className="flex flex-col gap-4">
                {SideProjects.map((project, index) => (
                    <MyProject
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

    <div className="flex-[1] w-full">
        <Card className="p-4 flex flex-col gap-4">
            <p className="text-lg text-muted-foreground">My Experiences</p>
            <div className="flex flex-col gap-4">
                {Experiences.map((project, index) => (
                    <MyExperience
                        key={index}
                        image={project.image}
                        title={project.title}
                        date={project.date}
                        url="/"
                        role={project.role}
                    />
                ))}
            </div>
        </Card>
    </div>
</Section>

  )
}

export default Status

const SideProjects = [
    {
        Logo: Code,
        title: "My Resto",
        description: "Presenter les plats culinaires africains.",
    },
    {
        Logo: Code,
        title: "Herman",
        description: "Outils de gestion de stock et de vente pour une entreprise MIPAN Sarl",
    },
    {
        Logo: Code,
        title: "React",
        description: "Coder avec react",
    },
]

type MyprojectProps = {
    Logo : LucideIcon; 
    title: string; 
    description: string;
    url: string;
};

const MyProject = (props: MyprojectProps ) =>{
    return(
        <Link href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">

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

const Experiences: MyExperiencesProps[] = [
    {
        image: " https://media.licdn.com/dms/image/v2/C560BAQHosBetXPdPZg/company-logo_200_200/company-logo_200_200/0/1630635501271/justicecanada_logo?e=2147483647&v=beta&t=XFU8i0l4ufqlQq9K1elONhVbSieKQJo7HPgo5zJ7P5Q",
        title: "Junior IT Technician",
        role: "IT Technician",
        date:"03 jan - 30 Juin",
        url: "htttps://justice.ca",
    },
    {
        image: " https://media.licdn.com/dms/image/v2/C560BAQHosBetXPdPZg/company-logo_200_200/company-logo_200_200/0/1630635501271/justicecanada_logo?e=2147483647&v=beta&t=XFU8i0l4ufqlQq9K1elONhVbSieKQJo7HPgo5zJ7P5Q",
        title: "IT Technician",
        role: "IT Technician ",
        date:"15 jan 2021 au 20 novembre 2023",
        url: "htttps://justice.ca",
    },
    {
        image: " https://media.licdn.com/dms/image/v2/C560BAQHosBetXPdPZg/company-logo_200_200/company-logo_200_200/0/1630635501271/justicecanada_logo?e=2147483647&v=beta&t=XFU8i0l4ufqlQq9K1elONhVbSieKQJo7HPgo5zJ7P5Q",
        title: "Consultant",
        role: "Coder avec react",
        date:"15 jan 2021 au 20 novembre 2023",
        url: "htttps://justice.ca",
    },

    {
        image: " https://media.licdn.com/dms/image/v2/C560BAQHosBetXPdPZg/company-logo_200_200/company-logo_200_200/0/1630635501271/justicecanada_logo?e=2147483647&v=beta&t=XFU8i0l4ufqlQq9K1elONhVbSieKQJo7HPgo5zJ7P5Q",
        title: "Teacher",
        role: "Enseignant",
        date:"2021- present",
        url: "/",
    },
]

type MyExperiencesProps = {
    image: string; 
    title: string; 
    role: string;
    date: string;
    url: string;
};

const MyExperience = (props: MyExperiencesProps ) =>{
    return(
        <Link href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">

            
                < Image
                 src={props.image}
                 alt={props.title}
                 className="w-8 h-8 object-contain rounded-md"
                 width={20}
                 height={20}/>
            
        
        <div >
            <p className=" text-sm font-semibold "> {props.title}</p>
            <p className=" text-sm text-muted-foreground "> {props.role}</p>
            
        </div>
        <div className="ml-auto">
            <p className=" text-sm text-muted-foreground "> {props.date}</p>

        </div>
        </Link>
    )
};