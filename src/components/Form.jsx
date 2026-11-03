import {useState} from 'react';
import Participante from './Participante';

function Form(){
    function cadastrarparticipante(e){
    e.preventDefault();
    console.log(`Nome: ${nome} Idade: ${idade}`); 
}

    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState('')

    return(
    <>
        <div>
            <h1>Formulário</h1>
            <form onSubmit={cadastrarparticipante}>
                <div>
                    <label htmlFor="nome">Nome:</label>
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        placeholder="Digite seu nome"
                        onChange={(e) => setNome(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="idade">Idade:</label>
                    <input
                        type="number"
                        id="idade"
                        name="idade"
                        placeholder="Digite sua idade"
                        onChange={(e) => setIdade(e.target.value)}
                    />
                </div>

                <input type="submit" value="Cadastrar"/>
            </form>
        </div>

        <Participante nome={nome} idade={idade} />
    </>
)
}

export default Form;