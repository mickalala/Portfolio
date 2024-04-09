import { Header } from "@/components/Header/header";
import "../styles/home.scss"
import { Experience } from "@/components/Experience/experience";
import { Informations } from "@/components/Informations/infos";
import { SocialMediaButtons } from "@/components/Social-media-btns/social-media-bts";

export default function Home() {
  return (
    <main className="container" >
      <Header />
      <Experience />
      <Informations />

      <SocialMediaButtons />
      {/* área de links para projetos? */}
    </main>
  );
}
