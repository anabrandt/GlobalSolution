import Image from "next/image";
import "./page.scss";
import Link from "next/link";

export default function Home() {
  return (
    <main>

      <aside>
        <div>
          <h1><span> Telemedicina e pré natal </span></h1>

          <p>
            Aqui te auxilimos durante o pré natal ultilizando inteligencia
            artificial
          </p>
        </div>
        <article>

          <div className="imgpreg">
            <Image
              src={"/4.PNG"}
              alt="grávidas"
              width={300}
              height={300} />
          </div>
        </article>
      </aside>

      <section className="section2">
        <aside>
        <div>
          <Image src={"/8.PNG"} alt="grávidas" width={300} height={300} />
        </div>

        <div className="faq">
          <h2>Afinal, o que é o pré-natal?</h2>
          <p>
            O pré-natal é o acompanhamento feito pelo obstetra ou médico de
            família, que está atento tanto às condições maternas quanto da
            criança em formação. Durante esse período, a troca de informações
            entre profissionais da saúde e as gestantes precisa ser constante.
          </p>
        </div>
        </aside>
        
      </section>


      <div className="exame">
        <aside>
        <h2>Quais exames preciso fazer?</h2>
        <p>
          O Ministério da Saúde elaborou uma série de dados que devem ser
          fornecidos pela futura mãe no início do pré natal. São eles: o cartão
          da gestante com a identificação preenchida e orientação sobre o mesmo;
          o calendário de vacinas e suas orientações; a solicitação de exames de
          rotina; as orientações sobre a sua participação nas atividades
          educativas – reuniões em grupo e visitas domiciliares; o agendamento
          de consulta médica para pesquisa de fatores de risco.
        </p>

      <div>
        <Image src={"/7.PNG"} alt="grávidas" width={300} height={300} />
      </div>

        </aside>
        
      </div>

      <div className="journey">
        <h2 className="title">Clique aqui e inicie sua jornada</h2>
        <Link href={'/sobre'}><button >Oriente-se</button></Link>

      </div>
    </main>
  );
}
