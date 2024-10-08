import Header from "@/components/Header";
import Image from "next/image";
import Hero from "@/components/Hero";
import { Spacing } from "@/components/Spacing";
import Status from "@/components/Status";
import Stack from "@/components/Stack";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Spacing size="md" />
      <Hero />
      <Spacing size="md" />
      <Status />
      <Spacing size="md" />
      <Stack />
      <Spacing size="md" />
      <Footer />
      
    </main>
  );
}
