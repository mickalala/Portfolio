import { Header } from "@/components/Header/header";
import "../styles/home.scss"
import { Experience } from "@/components/Experience/experience";

export default function Home() {
  return (
    <main className="container" >
      <Header />
      <Experience />
      <div>
        <h2>Contato</h2>
      </div>
      <div>
        <h2>Infos</h2>
      </div>
      {/* área de links para projetos? */}
    </main>
  );
}
