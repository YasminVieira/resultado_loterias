import "../styles/Cabecalho.css";

function Cabecalho({trevo, jogo, color}:any) {
    return (
        <div className="cabecalho-container">
            <div className="cabecalho-image">
                <img src={trevo} alt="trevo" />
            </div>
            <div className="cabecalho-logo" style={{color:color}}>
                <h3>{jogo}</h3>
            </div>

        </div>
    )
}

export default Cabecalho;