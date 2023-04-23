import "../styles/Estimativa.css"

function Estimativa({data}:any){
    return (
        <div className="estimativa">
            Estimativa de prêmio do proximo concuncurso. Sorteio {data}
        </div>
    )
}

export default Estimativa