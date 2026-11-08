import { useState } from 'react';

function Login() {

    const [name, setName] = useState('');
    const [usuario, setUsuario] = useState('');

    function fazerLogin(event) {
        event.preventDefault();
        setUsuario(name);
    }

    function fazerLogout(event) {
        event.preventDefault();
        setUsuario(null);
    }

    return (
        <div>
            <h1>Seja Bem-Vindo!</h1>
            <form>
                <input type="text" placeholder="Nome de usuário" value={name} onChange={(e) => setName(e.target.value)}/>
                <button type="submit" onClick={fazerLogin}>Fazer Login</button>

                {usuario ? (
                    <>
                    <p>Seja Bem-Vindo, {usuario}!</p>
                    <button type="button" onClick={fazerLogout}>Sair</button>
                    </>
                ) : (
                    <p>Por favor, faça o login.</p>
                )}
            </form>
        </div>
    )
}

export default Login;