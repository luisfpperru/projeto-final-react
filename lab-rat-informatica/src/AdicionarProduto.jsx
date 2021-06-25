import React, {useState} from 'react'
import axios from 'axios';

function AdicionarProduto(){

  const [nome, setNome] = React.useState("");
  const [quantidade, setQuantidade] = React.useState(0);
  const [preco, setPreco] = React.useState(0.0);
  const [descricao, setDescricao] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    //Objeto que será enviado para API
    let novo = { nome,descricao,"quantidadeEmEstoque": quantidade, preco };
    axios.post("http://localhost:8080/api/produtos", novo).then(response => alert(`Novo produto adicionado com o id: ${response.data.id}`));
  }
  
  
  return (
        <>
          <h3>Adicione um produto aqui:</h3>
            <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor="nome">Nome:</label>
                <input type="text" name="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
            </p>

            <p>
                <label htmlFor="quantidade">Quantidade:</label>
                <input type="number" name="quantidade" min="0" max="100" step="1" value={quantidade} onChange={(e) => setQuantidade(e.target.value)} />
            </p>

            <p>
                <label htmlFor="preco">Preço:</label>
                <input type="number" name="preco" min="0" step="10" value={preco} onChange={(e) => setPreco(e.target.value)} />
            </p>
            <p>
                <label htmlFor="descricao">Descrição:</label>
                    <textarea rows="5" name="descricao" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
            </p>
            <button type="submit"> Enviar </button>
            </form>
      </>
  )
}

export default AdicionarProduto;