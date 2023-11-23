import "./page.scss";
import Link from "next/link";

export default function Cadastro() {

  return (
    <main>

    
    <div>
      <h1>Crie uma conta</h1>
      <form className="form">
        <label htmlFor="fullName">Nome </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
        />

        <label htmlFor="telefone">Telefone</label>
        <input />

        <label htmlFor="beneficiaryCode">Senha</label>
        <input
          type="password"
          id="password"
          name="password"
          required
        />

        <label htmlFor="password">Cpf</label>
        <input
          type="text"
          id="cpf"
          name="cpf"
          required
        />
        <button className="botao-entrar" type="submit">Entrar</button>
        <div>
          
          <Link href={'/entrar'}>Já tem uma conta? Clique aqui para fazer o login</Link>
        </div>


      </form>
    </div>
    </main>
  );
}