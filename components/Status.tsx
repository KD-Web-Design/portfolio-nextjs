/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Section } from './Section'
import { Card } from './ui/card'
import { CarFront, LucideIcon, ShoppingCart, Store } from 'lucide-react'
import Link from 'next/link'

export default function Status() {
  return (
    <Section className='flex max-md:flex-col items-start gap-4'>
        <Card className='flex-1 p-4 flex flex-col gap-2 w-full'>
            <h1 className="scroll-m-20 text-md font-extrabold tracking-tight lg:text-lg">
                Projets persos
            </h1>
            <div className='flex flex-col gap-4'>
                {SIDE_PROJECTS.map((project, index) => (
                    <SideProject
                        key={index}
                        Logo={project.Logo}
                        title={project.title}
                        description={project.description}
                        url={project.url}
                    />
                ))}
            </div>
        </Card>
        <div className="flex-1 h-full gap-4 flex w-full flex-col">
            <Card className='p-4 flex-1'>
                <h1 className="scroll-m-20 text-md font-extrabold tracking-tight lg:text-lg">
                    Certificats
                </h1>
                <div className='flex-[2] flex flex-col gap-4'>
                {CERTIFICATES.map((project, index) => (
                    <Certificates
                        key={index}
                        image={project.image}
                        title={project.title}
                        date={project.date}
                    />
                ))}
            </div>
            </Card>
            <Card className='p-4 flex-1'>
                Contact me
            </Card>
        </div>
    </Section>
  )
}

const SIDE_PROJECTS: SideProjectProps[] = [
    {
        Logo: CarFront,
        title: "BMW",
        description: "Concept d'une landing page BMW, un de mes premiers projets."
    },
    {
        Logo: Store,
        title: "La Petite Butineuse",
        description: "Projet d'un site de présentation de miels pour un commerçant.",
        url: "https://la-petite-butineuse.onrender.com"
    },
    {
        Logo: ShoppingCart,
        title: "Leboncoin",
        description: "Réplique de la landing page du site Leboncoin."
    }
]


type SideProjectProps = {
    Logo: LucideIcon;
    title: string;
    description: string;
    url?: string;
}

const SideProject = (props: SideProjectProps) => {
    const content = (

        <div className='inline-flex items-center gap-4 hover:bg-accent/50 transition-colors rounded p-1 cursor-pointer'>
            <span className='bg-accent text-accent-foreground p-3 rounded-sm'>
                <props.Logo  />
            </span>
            <div className='w-full'>
                <p className="text-md font-semibold">{props.title}</p>
                <p className="text-sm text-muted-foreground">{props.description}</p>
            </div>
        </div>
    )
    return props.url ? (
        <Link href={props.url} target='blank'>
            {content}
        </Link>
    ) : (
        content
    )
}


const CERTIFICATES: CertificatesProps[] = [
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpCpzAlmrfzPB_q16Dbvq0IihxEcGEKTZFLA&s",
        title: "Responsive Web Design",
        date: "08/2024",
    },
]



type CertificatesProps = {
    image: string;
    title: string;
    date: string;
}

const Certificates = (props: CertificatesProps) => {
    return (
        <div className='inline-flex items-center gap-4 hover:bg-accent/50 transition-colors rounded p-1 cursor-pointer'>
            
            <img src={props.image} alt={props.title} className='w-10 h-10 object-contain rounded-md'/>

            <div className='flex items-center gap-2'>
                <p className="text-md font-semibold">{props.title}</p>
            </div>
            <div className='ml-a'>
                <p className="text-sm text-end text-muted-foreground">{props.date}</p>
            </div>
        </div>

    )

    
}
