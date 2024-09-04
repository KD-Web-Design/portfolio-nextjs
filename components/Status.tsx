/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Section } from './Section'
import { Card } from './ui/card'
import { ArrowUpRight, CarFront, LucideIcon, ShoppingCart, Store } from 'lucide-react'
import Link from 'next/link'
import myImage from '../public/pp-circle.png';
import GmailIcon from './icons/GmailIcon'

export default function Status() {
  return (
    // CARDS PROJETS PERSOS 
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
                        url={project.url}
                    />
                ))}
            </div>
            </Card>
            <Card className='p-4 flex-1 '>
                <h1 className="scroll-m-20 text-md font-extrabold tracking-tight lg:text-lg">
                    Contactez-moi
                </h1>
                <ContactCard name='KD Web Design' description='contact.kd.webdesign@gmail.com' mediumImage='https://static.vecteezy.com/ti/vecteur-libre/p3/13948544-logo-gmail-sur-fond-blanc-transparent-gratuit-vectoriel.jpg' />
                <ContactCard name='KD Web Design' description='KD-Web-Design' mediumImage='https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1200px-LinkedIn_icon.svg.png' />
            </Card>
        </div>
    </Section>
  )
}

// PROJECT CONTENT 

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

// CERTIFICATS CONTENT 


const CERTIFICATES: CertificatesProps[] = [
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpCpzAlmrfzPB_q16Dbvq0IihxEcGEKTZFLA&s",
        title: "Responsive Web Design",
        date: "08/2024",
        url: "https://www.freecodecamp.org/certification/KD-Web-Design/responsive-web-design"
    },
]



type CertificatesProps = {
    image: string;
    title: string;
    date: string;
    url: string;
}

const Certificates = (props: CertificatesProps) => {
    return (
        <Link href={props.url} target='blank' className='inline-flex items-center gap-4 hover:bg-accent/50 transition-colors rounded p-1 cursor-pointer'>
            
            <img src={props.image} alt={props.title} className='w-10 h-10 object-contain rounded-md'/>

            <div className='flex items-center gap-2'>
                <p className="text-sm font-semibold">{props.title}</p>
            </div>
            <div className='ml-auto'>
                <p className="text-xs text-end text-muted-foreground">{props.date}</p>
            </div>
        </Link>

    )    
}

// CONTACT CARD 

const ContactCard = (props: {
    name: string;
    description: string;
    mediumImage: string;
}) => {
    return (
        <Card className='p-3 bg-accent/10 flex items-center gap-4 hover:bg-accent/30 transition-colors group cursor-pointer'>
            <div className='relative'>
                <img src={myImage.src} alt={props.name} className='w-10 h-10' />
                <img src={props.mediumImage} alt={props.name} className='w-4 h-4 absolute -bottom-1 -right-1 rounded-full object-contain' />
            </div>
            <div className='mr-auto'>
                <div className='flex items-center gap-2'>
                    <p className="text-sm font-semibold">{props.name}</p>
                </div>
                <p className="text-xs text-muted-foreground">{props.description}</p>
            </div>
            <ArrowUpRight size={16} className='group-hover:translate-x-2 mr-4 group-hover:-translate-y-2 transition-transform' />
        </Card>
    )
}
