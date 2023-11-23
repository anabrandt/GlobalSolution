import "./page.scss";
import React from 'react';
import { showAlert } from './teleconsulta'

export default function Teleconsulta() {
  const handleClick = () => {
    showAlert();
  };

  return (
    <main>
      <h1>Agende sua consulta aqui</h1>
      <div className="center-container">
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
      <div className="center-container">
        <button id="agendarButton" onClick={handleClick}>
          Agendar
        </button>
      </div>
    </main>
  );
}