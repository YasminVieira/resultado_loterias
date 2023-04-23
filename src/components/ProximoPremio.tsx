import "../styles/ProximoPremio.css";

function ProximoPremio({ value, color }: any) {
    return (
        <div className="proximo-premio">
            <h2 style={{color:color}}>{value? value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : ""}</h2>
        </div>

    )
}

export default ProximoPremio;