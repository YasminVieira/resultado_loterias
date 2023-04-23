import trevo from "../assets/trevo-lotofacil.png"
import "../styles/LotoFacil.css";
import { Contexto } from "../contexts";
import { useContext } from "react";
import Cabecalho from "./Cabecalho";
import Estimativa from "./Estimativa";
import ProximoPremio from "./ProximoPremio";
import Tabela from "./Tabela";
import Ganhadores from "./Ganhadores";
import Concurso from "./Concurso";

function LotoFacil() {
    const { lotoFacil, carregado } = useContext(Contexto)

    return (
        <>

            <div className="container" style={{ display: carregado ? "" : "none" }}>
                <div className="col-1">
                    <Cabecalho trevo={trevo} jogo={"LOTOFÁCIL"} color={"#930989"} />
                    <Estimativa data={lotoFacil.dataProximoConcurso} />
                    <ProximoPremio value={lotoFacil.valorEstimadoProximoConcurso} color={"#930989"} />

                </div>


                <div className="col-2">
                    <Tabela dezenas={lotoFacil.dezenas} type={"lotofacil"} />
                    <Ganhadores acumulado={lotoFacil.acumulado} quantidadeGanhadores={lotoFacil.quantidadeGanhadores} />
                    <Concurso numeroDoConcurso={lotoFacil.numeroDoConcurso} dataPorExtenso={lotoFacil.dataPorExtenso} />
                </div>

            </div>

        </>




    )
}

export default LotoFacil;