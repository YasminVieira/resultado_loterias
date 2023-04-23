import { createContext, useState } from "react";
import { Jogo, Props } from "../types";

const Contexto = createContext<Props>({} as Props);

function Provider({ children }: any) {
    const [megaSena, setMegaSena] = useState({} as Jogo);
    const [lotoFacil, setLotoFacil] = useState({} as Jogo);
    const [carregado, setCarregado] = useState(false)

    return (
        <Contexto.Provider value={{ megaSena, lotoFacil, carregado, setMegaSena, setLotoFacil, setCarregado }}>
            {children}
        </Contexto.Provider>
    );
}

export { Contexto, Provider };

