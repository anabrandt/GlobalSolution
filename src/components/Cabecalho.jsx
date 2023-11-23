import Link from "next/link";
import "./cabecalho.scss";


export default function Cabecalho() {
    return (
        <header className="header">
            <div className="navbar">
                <nav>
                <Link href={'/home'}> Página inicial </Link>
                <Link href={'/sobre'}>Oriente-se</Link>
                <Link href={'/hapvida'}>Hapvida</Link>
                <Link id="entrar-btn" href={'/entrar'}>Entrar</Link>
                </nav>
            </div>
        </header>
    )
}