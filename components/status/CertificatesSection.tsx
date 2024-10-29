import { Certificates, CertificatesProps } from "./Certificates";
import { Card } from "../ui/card";

export const CertificatesSection = () => {
  const CERTIFICATES: CertificatesProps[] = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpCpzAlmrfzPB_q16Dbvq0IihxEcGEKTZFLA&s",
      title: "Responsive Web Design",
      date: "08/2024",
      url: "https://www.freecodecamp.org/certification/KD-Web-Design/responsive-web-design",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpCpzAlmrfzPB_q16Dbvq0IihxEcGEKTZFLA&s",
      title: "Front End Development Librairies",
      date: "09/2024",
      url: "https://www.freecodecamp.org/certification/KD-Web-Design/front-end-development-libraries",
    },
  ];

  return (
    <Card className="p-4 flex-1 flex flex-col gap-4">
      <h1 className="scroll-m-20 text-md font-extrabold tracking-tight lg:text-lg">
        Certificats
      </h1>
      <div className="flex-[2] flex flex-col gap-4">
        {CERTIFICATES.map((certificate, index) => (
          <Certificates
            key={index}
            image={certificate.image}
            title={certificate.title}
            date={certificate.date}
            url={certificate.url}
          />
        ))}
      </div>
    </Card>
  );
};
