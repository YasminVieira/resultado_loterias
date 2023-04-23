import Carregando from "../components/Carregando";
import LotoFacil from "../components/LotoFacil";
import MegaSena from "../components/MegaSena";

function Home() {
    return (
        <>
            <MegaSena />
            <Carregando />
            <LotoFacil /> 
        </>
    )
}

export default Home;