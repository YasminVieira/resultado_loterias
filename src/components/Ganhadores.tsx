import "../styles/Ganhadores.css"

function Ganhadores({ acumulado, quantidadeGanhadores }: any) {
    return (
        <h1 className="ganhadores">
            {acumulado ? "ACUMULOU" : quantidadeGanhadores + (quantidadeGanhadores === 1 ? " GANHADOR" : " GANHADORES")}
        </h1>
    )
}

export default Ganhadores;