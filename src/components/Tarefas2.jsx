function Tarefas2({tarefas}) {
    return(
        <>
            <h3>Lista de Tarefas</h3>
            {
                tarefas.length > 0 ? (
                    tarefas.map((tarefa, index) => (
                        <p key={index}>{tarefa}</p>
                    ))
                ) : (
                    <p>Não há tarefas ainda!</p>
                )
            }
        </>
    )
}

export default Tarefas2