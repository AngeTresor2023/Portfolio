import React from 'react'
import { cn } from '@/lib/utils'
import { PropsWithChildren } from 'react'

export const Section = (props: PropsWithChildren<{className?:string}>) => {
    return(
        <section className={cn("mx-1 my-1 w-full max-w-full px-1", props.className)}>
            {props.children}

        </section>
    )

}