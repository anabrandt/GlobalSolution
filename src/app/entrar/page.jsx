import "./page.scss";
import Link from "next/link";

export default function Entrar() {
    return (
        <main>
            <div>
                <h1>Entre em sua conta</h1>
                <form className="form">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                    />

                    <label htmlFor="password">Senha:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                    />
                    <Link href={'entrar/usuario'}><button>Entrar</button></Link>
                </form>

                <div className="instrucoes">
                    <p><a href="#">Esqueceu sua senha?</a></p>

                    <Link href={'entrar/cadastro'}>Ainda não é cadastrado? Clique aqui para fazer o cadastro</Link>
                </div>


            </div>
        </main>
    );
}