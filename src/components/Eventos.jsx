import Button from './Button';

function Evento() {

    function avisar() {
        console.log("Evento executado com sucesso!");
    }

    function dizerOla() {
        console.log("Olá! Seja bem-vinda ao React!");
    }

    function mostrarMensagem() {
        console.log("Você clicou no segundo botão!");
    }

    return (
        <div>
            <Button event={avisar} text="Botão 1" />
            <Button event={dizerOla} text="Botão 2" />
            <Button event={mostrarMensagem} text="Botão 3" />
        </div>
    )
}

export default Evento;