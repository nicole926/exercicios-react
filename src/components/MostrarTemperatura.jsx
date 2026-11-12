function MostrarTemperatura({temperatura}){
    function GerarTemperatura(){
        return `Temperatura Atual: ${temperatura}°C`
    }

    return(
        <div>
            {temperatura && <p>{GerarTemperatura()}</p>}
        </div>
    )

}

export default MostrarTemperatura