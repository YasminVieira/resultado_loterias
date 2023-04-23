import trevo from "../assets/trevo-megasena.png"
import "../styles/MegaSena.css";
import useJogo from "../hooks/JogoHook";
import Cabecalho from "./Cabecalho";
import Estimativa from "./Estimativa";
import ProximoPremio from "./ProximoPremio";
import Tabela from "./Tabela";
import Ganhadores from "./Ganhadores";
import Concurso from "./Concurso";

function MegaSena() {
    const { megaSena, carregado } = useJogo();
    return (

        <div className="container" style={{ display: carregado ? "" : "none" }}>
            <div className="col-1">
                <Cabecalho trevo={trevo} jogo={"MEGASENA"} color={"#209869"} />
                <Estimativa data={megaSena.dataProximoConcurso} />
                <ProximoPremio value={megaSena.valorEstimadoProximoConcurso} color={"#209869"} />


            </div>


            <div className="megasena-col-2">
                <Tabela dezenas={megaSena.dezenas} type={"megasena"} />
                <Ganhadores acumulado={megaSena.acumulado} quantidadeGanhadores={megaSena.quantidadeGanhadores} />
                <Concurso numeroDoConcurso={megaSena.numeroDoConcurso} dataPorExtenso={megaSena.dataPorExtenso} />

            </div>


        </div>



    )
}

export default MegaSena;