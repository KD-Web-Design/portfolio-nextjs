import { SideProject, SideProjectProps } from "./SideProject";
import { Card } from "../ui/card";
import { Car, Mountain, ForkKnifeCrossed, Gamepad2 } from "lucide-react";

export const ProjectsSection = () => {
  const SIDE_PROJECTS: SideProjectProps[] = [
    {
      Logo: Mountain,
      title: "summitSeekers",
      description: "Concept d'application nature & montagnes",
      url: "https://mountains-next-js-git-preview-kd-web-designs-projects.vercel.app/",
    },
    {
      Logo: Car,
      title: "La Centrale",
      description: "Réplique de la landing page",
      url: "https://lacentrale-replica.netlify.app",
    },
    {
      Logo: ForkKnifeCrossed,
      title: "Burger Xpress",
      description: "Application de commande de burgers en ligne",
      url: "https://burger-xpress.netlify.app",
    },
    {
      Logo: Gamepad2,
      title: "Throttle & Pixels",
      description: "Blog CRUD Simracing",
      url: "https://throttle-and-pixels.netlify.app/",
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
