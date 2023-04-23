export interface Jogo {
    acumulado: boolean,
    concursoEspecial: boolean,
    dataApuracao: string,
    dataPorExtenso: string,
    dataProximoConcurso: string,
    dezenas: string[],
    numeroDoConcurso: number,
    quantidadeGanhadores: number,
    tipoJogo: string,
    valorEstimadoProximoConcurso: number,
    valorPremio: number

}

export interface Props{
    megaSena: Jogo;
    lotoFacil: Jogo;
    carregado: boolean
    setMegaSena: Function;
    setLotoFacil: Function;
    setCarregado : Function;
} 



