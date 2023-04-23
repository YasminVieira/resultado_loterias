import "../styles/Concurso.css"

function Concurso({numeroDoConcurso, dataPorExtenso}:any){
    return(
        <p className="concurso">
            Concurso {numeroDoConcurso} - {dataPorExtenso}
        </p>
    )
}

export default Concurso;