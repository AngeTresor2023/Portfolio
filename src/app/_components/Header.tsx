import React from 'react'
import { Section}  from './Section'
import { Button, buttonVariants } from '@/components/ui/button'
import { GithubIcon } from './icons/GithubIcon'
import { cn } from '@/lib/utils'
import { NextjsIcon } from './icons/NextjsIcon'
import { Twitter } from './icons/Twitter'
import Link from 'next/link'
import { WhatsappMonochromeIcon } from './icons/WhatsappMonochromeIcon'


function Header() {
  return (
    <header className="sticky top-0 py-4">
        <Section className="flex items-baseline">
            <h1 className="text-2xl font-bold text-primary-foreground">
                Ange Djomo 🟢🔴­­­🟡
            </h1>
           
            <div className="flex-1"/>
            <ul className="flex items-center gap-16">


            <a href="#Projets" className=" text-xl font-bold">My Projects</a>
            <Link href="https://twitter.com/ange_djomo" target="_blank" className=" text-xl font-bold">Follow</Link>
            <Link href="#" className=" text-xl font-bold" >My Studies</Link>
            <Link href="#" className=" text-xl font-bold">My Certifications</Link>
            <Link href="#" className=" text-xl font-bold">Contact Me</Link>

                <div className="flex items center gap-4">
                <Link
                    href="https://github.com/AngeTresor2023"
                    className={cn(buttonVariants({ variant: "outline" }), "size-10 p-0")}>
                    <GithubIcon size={12} className="text-foreground"/>
                </Link>

                <Link
                    href="https://wa.me/+14384678027"
                    className={cn(buttonVariants({ variant: "outline" }), "size-10 p-0")}>
                    <WhatsappMonochromeIcon size={12} className="text-foreground"/>
                </Link>

                <Link
                    href="https://github.com/AngeTresor2023"
                    className={cn(buttonVariants({ variant: "outline" }), "size-10 p-0")}>
                    <Twitter size={12} className="text-foreground"/>
                </Link>
                </div>
                
                
            </ul>

        </Section>
    </header>
  )
}

export default Header