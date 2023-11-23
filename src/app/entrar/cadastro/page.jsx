import "./page.scss";
import Link from "next/link";

export default function Cadastro() {

  return (
    <main className="cadastromain">
      <div>
        <h1 className="titulo__create">Crie uma conta</h1>
        <form className="form">
          <label htmlFor="fullName">Nome </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            placeholder="Digite seu nome completo"
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Digite seu melhor email"
          />

          <label htmlFor="telefone">Telefone</label>
          <input
            type="telefone"
            id="telefone"
            name="telefone"
            required
            placeholder="Digite seu telefone"
          />

          <label htmlFor="beneficiaryCode">Senha</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            placeholder="Crie sua senha"
          />

          <label htmlFor="password">Cpf</label>
          <input
            type="text"
            id="cpf"
            name="cpf"
            required
            placeholder="Digite seu CPF"
          />

          <Link href='/entrar/usuario'><button className="botao-entrar">Entrar</button></Link>

          <div>
            <Link href={'/entrar'}>Já tem uma conta? Clique aqui para fazer o login</Link>
          </div>
        </form>
      </div>
    </main>
  );
}