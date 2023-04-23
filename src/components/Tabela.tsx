import "../styles/Tabela.css";

function Tabela({dezenas, type}:any) {
  
    return (
        <div className={type}>
            <ul>
                {dezenas ? dezenas.map( (el:any, index: number) =>
                    <li key={index}>
                        {el}
                    </li>
                ) : ""}
            </ul>
        </div>
    )
}

export default Tabela;