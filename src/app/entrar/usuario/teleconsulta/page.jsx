import "./page.scss";

export default function Teleconsulta() {
  
    return (
      <main>
        <aside>
          <h1>Agende sua consulta aqui</h1>
        <div>
          <select id="opcoes" name="opcao">
            <option value="opcao1">Acompanhamento Ginecológico Online</option>
            <option value="opcao2">Avaliação de Sintomas</option>
            <option value="opcao3">Orientações Nutricionais</option>
            <option value="opcao4">Acompanhamento Psicológico</option>
            <option value="opcao5">Avaliação de Exames de Imagem</option>
            <option value="opcao6">Consulta com Enfermeira Obstetra</option>
            <option value="opcao7">Avaliação da Pressão Arterial</option>
            <option value="opcao8">Acompanhamento de Condições Crônicas</option>
          </select>
        </div>
   </aside>
        <div>
            <button >Agendar</button>
        </div>

      </main>
    );
  }
  