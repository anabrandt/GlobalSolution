import "./page.scss";
import Link from "next/link";
import Image from "next/image";

export default function Usuario() {
    return (
        <main>
            <aside className="pregnant">
                <div className="divpreg">
                    <Image
                        src={"/14.PNG"}
                        alt="grávidas"
                        width={70}
                        height={70}
                        className="divpreg" />
                    <h2>Nome do user</h2>
                    <p>Gestante</p>
                    <span></span>
                </div>

                <div className="informations-pessoais">
                    <h2>Informações Pessoais</h2>
                    <div className="divpreg">
                        <h3>Pressão arterial</h3>
                        <p>140/90 mmHg</p>
                        <h3>Peso</h3>
                        <p>70kg</p>
                        <h3>Remédios controlados</h3>
                        <p>Sim</p>
                    </div>
                </div>
            </aside>

                <div className="acompanhamento-do-pre-natal">
                    <div>
                        <h2>Acompanhamento do pré natal</h2>
                        <h3>Exames Realizados</h3>
                        <p>Glicemia de jejum</p>
                        <p>Hemograma</p>
                        <p>Testes sorológicos</p>
                        <p>Tipagem sanguínea e Coombs</p>
                    </div>

                    <div>
                        <h3>Exames pendentes</h3>
                        <p>Ultrassom obstétrico e morfológico</p>
                        <p>Ultrassom do último trimestre</p>
                    </div>
                </div>

            <div>
                <h2>Clique aqui para agendar um exame</h2>
                <Link href={'usuario/teleconsulta'}><button >Agendar</button></Link>
            </div>
        </main>
    )
}