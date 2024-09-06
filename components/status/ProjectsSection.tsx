import { SideProject, SideProjectProps } from './SideProject'
import { Card } from '../ui/card'
import { ArrowUpRight, CarFront, LucideIcon, ShoppingCart, Store } from 'lucide-react'

export const ProjectsSection = () => {
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
    ];

    return (
        <Card className='flex-1 p-4 flex flex-col gap-4 w-full'>
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
    );
}
