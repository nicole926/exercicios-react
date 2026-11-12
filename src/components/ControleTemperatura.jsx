function ControleTemperatura({temperatura, setTemperatura}){ 
    return(
        <div>
            <input type="number" value={temperatura} onChange={(e) => setTemperatura(Number(e.target.value))} />
            <button onClick={() => setTemperatura(temperatura + 1)}>Aumentar</button>
            <button onClick={() => setTemperatura(temperatura - 1)}>Diminuir</button>
        </div>
    )
}

export default ControleTemperatura