import { Header } from "@/components/Header/header";
import "../styles/home.scss"
import { Experience } from "@/components/Experience/experience";
import { Informations } from "@/components/Informations/infos";

export default function Home() {
  return (
    <main className="container" >
      <Header />
      <Experience />
      <Informations />
      {/* área de links para projetos? */}
    </main>
  );
}
