"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import "./page.scss";

const Login = () => {
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const [httpStatus, setHttpStatus] = useState(null);
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await fetch(`http://localhost:8080/demo/webapi/usuarios/${cpf}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setHttpStatus(response.status);

      if (response.ok) {
        const user = await response.json();

        if (user && user.senha === senha) {
          sessionStorage.setItem('usuario', JSON.stringify(user));
          router.push('/');
        } else {
          setError('CPF ou senha inválidos');
        }
      } else {
        setError('Erro ao autenticar');
      }
    } catch (error) {
      console.error('Erro ao autenticar:', error);
    }
  };

  return (
    <main className="form">
      <h1>Entre em sua conta</h1>
      {httpStatus && httpStatus !== 200 && <p style={{ color: 'red' }}>{`Erro ${httpStatus}: ${error}`}</p>}
      <br />
      <label>
        Email:
        <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} />
      </label>
      <br />
      <label>
        Senha:
        <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
      </label>
      <br />
      <button onClick={handleLogin}>Entrar</button>
      <br />
      <p>
        Ainda não tem uma conta?{' '}
        <Link href="entrar/cadastro">
          Cadastre-se aqui
        </Link>
      </p>
    </main>
  );
};

export default Login;
