import React, { useState } from 'react'
import axios from 'axios';

function ObterCategorias(){
    const [categorias, setCategorias] = useState([]);

    const Obter = () => {
        axios.get("http://localhost:8080/api/categorias").then((response) => {
            setCategorias(responde.data)
        });
    }

    React.useEffect(Obter, [categorias]);

    return (
        <>
            <ol>
                {categorias.map((categoria) => (
                    //Precisa colocar link para cada categoria
                <li key={categoria.id}>{categoria.nome}</li>))}
            </ol>
        </>
    )
}

export default ObterCategorias;