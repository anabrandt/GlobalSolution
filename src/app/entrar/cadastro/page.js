"use client"

import { useState } from 'react';
import './page.scss';

const Cadastro = () => {
  const [formValues, setFormValues] = useState({
    fullName: '',
    email: '',
    telefone: '',
    password: '',
    cpf: '',
  });

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };


  const handleCadastro = async (e) => {
    e.preventDefault();
  
    if (typeof window !== 'undefined') {
  
      try {
        const response = await fetch('http://localhost:8080/demo/apisaude/cadastro', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formValues),
        });
  
        if (response.ok) {
          const newUser = await response.json();
          sessionStorage.setItem('usuario', JSON.stringify(newUser));
          router.push('/entrar/usuario');
        } else {
          const errorData = await response.json();
          console.error('Erro ao cadastrar:', errorData.error);
        }
      } catch (error) {
        console.error('Erro ao cadastrar:', error);
      }
    }
  };

  return (
    <main className="cadastro">
      <div>
        <h1>Crie uma conta</h1>
        <form onSubmit={handleCadastro} className="form">
          <label htmlFor="fullName">Nome:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formValues.fullName}
            onChange={handleChange}
            required
            placeholder="Digite seu nome completo"
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            required
            placeholder="Digite seu melhor email"
          />

          <label htmlFor="telefone">Telefone:</label>
          <input
            type="tel"
            id="telefone"
            name="telefone"
            value={formValues.telefone}
            onChange={handleChange}
            required
            placeholder="Digite seu telefone"
          />

          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
            required
            placeholder="Crie sua senha"
          />

          <label htmlFor="cpf">CPF:</label>
          <input
            type="text"
            id="cpf"
            name="cpf"
            value={formValues.cpf}
            onChange={handleChange}
            required
            placeholder="Digite seu CPF"
          />

          <button type="submit" className="botao-entrar">
            Cadastrar
          </button>

          <div>
            <p>
              Já tem uma conta?{' '}
              <a href="/entrar">Clique aqui para fazer o login</a>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Cadastro;
