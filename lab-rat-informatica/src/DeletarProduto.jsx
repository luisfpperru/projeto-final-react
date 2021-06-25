import React from "react"
import axios from "axios";

function DeletarProduto(props){
    const apagarPorId = (id) => {
        axios.delete(`http://localhost:8080/produtos/id/${id}`)
             .then(response => alert(`O produto com id ${id} foi apagado com sucesso.`));
    }
    return(
        <button onClick={() => apagarPorId(props.id)}> Deletar </button>
    )
}

export default DeletarProduto;
   
