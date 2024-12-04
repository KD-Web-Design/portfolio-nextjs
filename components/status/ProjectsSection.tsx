import { SideProject, SideProjectProps } from "./SideProject";
import { Card } from "../ui/card";
import { Car, Mountain, ForkKnifeCrossed } from "lucide-react";

export const ProjectsSection = () => {
  const SIDE_PROJECTS: SideProjectProps[] = [
    {
      Logo: Mountain,
      title: "summitSeekers",
      description:
        "Concept d'application sur les plus belles montagnes du monde.",
      url: "https://mountains-next-js-git-preview-kd-web-designs-projects.vercel.app/",
    },
    {
      Logo: Car,
      title: "La Centrale",
      description:
        "Réplique de la landing page du fameux site vente de véhicules.",
      url: "https://lacentrale-nextjs.onrender.com",
    },
    {
      Logo: ForkKnifeCrossed,
      title: "Burger Xpress",
      description: "Application de commande de burgers en ligne.",
      url: "https://burger-xpress.onrender.com",
    },
  ];

  return (
    <Card className="flex-1 p-4 flex flex-col gap-4 w-full">
      <h1 className="scroll-m-20 text-md font-extrabold tracking-tight lg:text-lg">
        Projets persos
      </h1>
      <div className="flex flex-col gap-4">
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
};
