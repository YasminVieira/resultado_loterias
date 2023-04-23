import "../styles/LotoFacil.css";
import { Contexto } from "../contexts";
import { useContext, useEffect } from "react";
import "../styles/Carregando.css"
import { ObterUltimosResultados} from "../services/LoteriasAPIService";

function Carregando() {

    const { carregado, setCarregado, setLotoFacil, setMegaSena, } = useContext(Contexto)

    useEffect(()=>{
        setTimeout(()=>{
            ObterUltimosResultados().then((r)=>{
                setLotoFacil(r.lotofacil)
                setMegaSena(r.megaSena)
                setCarregado(true)
            })
        }, 3000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <>
            <div className="carregando" style={{ display: carregado ? "none" : "" }}>
                <div>
                    <h3>Carregando...</h3>
                </div>
                <div className="spinner">
                </div>

            </div>
            <hr style={{ display: carregado ? "" : "none" }}></hr>
        </>
    )    
}

export default Carregando;