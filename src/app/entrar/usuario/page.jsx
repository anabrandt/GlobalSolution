import "./page.scss";
import Link from "next/link";
import Image from "next/image";

export default function Usuario(){
    return(
        <main>
            <div >
            <Image
              src={"/14.PNG"}
              alt="grávidas"
              width={70}
              height={70} />
                <h2>Nome do user</h2>
                <p><strong>Gestante</strong></p>
                <h2>Perfil</h2>
                <h2>Calendario</h2>
            </div>

            <div>
                <h2>Informações Pessoais</h2>
            </div>

            <div>
                <h3>Pressão arterial</h3>
                <p>140/90 mmHg</p>
                <h3>Peso</h3>
                <p>70kg</p>
                <h3>Remédios controlados</h3>
                <p>Sim</p>
            </div>

            <div>
                <h1>Exames Realizados</h1>
                <p>lorem</p>
                <p>lorem</p>
                <p>Lorem</p>
                <p>lorem</p>
            </div>

            <div>
                <h1>Exames pendentes</h1>
                <p>lorem</p>
                <p>lorem</p>
                <p>Lorem</p>
                <p>lorem</p> 
            </div>

            <div>
                <h2>Clique aqui para agendar um exame</h2>
                <Link href={'usuario/teleconsulta'}><button >Agendar</button></Link>
            </div>
        </main>
    )
}