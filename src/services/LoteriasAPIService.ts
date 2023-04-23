import axios, { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://servicebus2.caixa.gov.br/portaldeloterias/api/home/ultimos-resultados",
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  }
});

export async function ObterUltimosResultados ():Promise<any>{
    var {data} = await axiosInstance.get("")
    return {lotofacil: data.lotofacil, megaSena: data.megasena};
} 
