import { Button } from "react-bootstrap";
import Cabecalho from "./components/Cabecalho";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Button variant="primary">Primary</Button>{' '}

      <Cabecalho titulo="Página Inicial" subtitulo="Vamos"/>
      <Cabecalho titulo="Ian" subtitulo="Corinthains"/>
      <Cabecalho titulo="Araujo" subtitulo="Essa noite"/>
      <Cabecalho titulo="Corinthians" subtitulo="Teremos que ganhar"/>

      <Link href="/fundamentos">Página Fundamentos</Link>

    </main>
  );
}