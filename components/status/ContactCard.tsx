import { Card } from "../ui/card";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export const ContactCard = (props: {
  name: string;
  description: string;
  mediumImage: string;
}) => {
  return (
    <Card className="p-3 bg-accent/10 flex items-center gap-4 hover:bg-accent/30 transition-colors group cursor-pointer">
      <div className="relative">
        <Image
          src="/images/pp-circle.png"
          alt={props.name}
          width={40}
          height={40}
        />
        <Image
          src={props.mediumImage}
          alt={props.name}
          className="absolute -bottom-1 -right-1 rounded-full object-contain"
          width={16}
          height={16}
        />
      </div>
      <div className="mr-auto">
        <div className="flex items-center gap-2">
          <p className="text-sm font-semibold">{props.name}</p>
        </div>
        <p className="text-xs text-muted-foreground">{props.description}</p>
      </div>
      <ArrowUpRight
        size={16}
        className="group-hover:translate-x-2 mr-4 group-hover:-translate-y-2 transition-transform"
      />
    </Card>
  );
};
