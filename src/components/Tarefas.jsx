

function Tarefas(props) {
    const { nome } = props;

    function concluirTarefa(e) {
        e.preventDefault();
        console.log(`Tarefa ${nome} concluída!`);
    }

    return (
        <div className="tarefas">
            <h2>{nome}</h2>
            <button onClick={concluirTarefa}>Concluir</button>
        </div>
    )
}

export default Tarefas;