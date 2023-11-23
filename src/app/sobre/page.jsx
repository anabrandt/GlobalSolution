import Image from "next/image";
import Link from "next/link";
import "./page.scss";

export default function Sobre() {
    return (
        <main>
            <div>
                <aside>
                    <h1>Entenda tudo sobre o apoio no pré natal e inteligencia artificial </h1>
                </aside>
                <Image
                    src={"/10.jpeg"}
                    alt="grávidas"
                    width={230}
                    height={230} />
                <Image
                    src={"/6.PNG"}
                    alt="grávidas"
                    width={230}
                    height={230} />
            </div>

            <div className="faq2">
                <h2>Inteligencia  artificial e medicina podem coexistir? </h2>
                <p className="p1">Sim, a Inteligência artificial (IA) tem o potencial de desempenhar um papel significativo no campo do cuidado pré-natal e saúde, trazendo inovações e melhorias em várias áreas. </p>
                <p className="p2">pode analisar grandes conjuntos de dados para identificar padrões e prever complicações durante a gravidez, como a pré-eclâmpsia ou o diabetes gestacional</p>
            </div>

            <div className="faq">
                <aside>
                    <div>
                    <Image
                        src={"/12.jpeg"}
                        alt="grávidas"
                        width={230}
                        height={230} />
                    </div>
                    <h2>Monitoramento remoto</h2>
                    <p>Dispositivos conectados e sensores podem coletar dados remotamente, permitindo o monitoramento contínuo da saúde da mãe e do feto.
                        A IA pode analisar esses dados em tempo real, identificando padrões e alertando os profissionais de saúde sobre qualquer anomalia.</p>
                    
                </aside>
            </div>
            <div className="journey">
        <h2 className="title">Clique para agendar um exame</h2>
        <Link href={'/entrar'}><button >Agendar</button></Link>

      </div>
        </main>
    )
}