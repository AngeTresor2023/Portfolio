import { Card } from '@/components/ui/card'
import { Code, LucideIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Section } from './Section'
import Image from 'next/image'

const Experience = () => {
  return (
    <Section className="flex max-lg:flex-col items-center gap-0">

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

export default Experience



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

