function Perfil(props) {
    return (
        <div className="perfil">
            <p>Nome: {props.nome}</p>
            <p>Idade: {props.idade}</p>
            <p>Profissão: {props.profissao}</p>
        </div>
    )
}

export default Perfil;