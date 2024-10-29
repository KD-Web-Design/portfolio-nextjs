import Link from "next/link";
import Image from "next/image";

export type CertificatesProps = {
  image: string;
  title: string;
  date: string;
  url: string;
};

export const Certificates = (props: CertificatesProps) => {
  return (
    <Link
      href={props.url}
      target="blank"
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors rounded p-1 cursor-pointer"
    >
      <Image
        src={props.image}
        alt={props.title}
        className="object-contain rounded-md"
        width={40}
        height={40}
      />
      <div className="flex items-center gap-2">
        <p className="text-sm font-semibold">{props.title}</p>
      </div>
      <div className="ml-auto">
        <p className="text-xs text-end text-muted-foreground">{props.date}</p>
      </div>
    </Link>
  );
};
