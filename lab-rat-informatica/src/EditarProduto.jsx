import React from "react"
import axios from "axios";

function EditarProduto(props){

    const [nome, setNome] = React.useState("");
    const [quantidade, setQuantidade] = React.useState(0);
    const [preco, setPreco] = React.useState(0.0);
    const [descricao, setDescricao] = React.useState("");

    const handleAtualizar = (event) => {
        event.preventDefault();
        let novo = { nome,descricao,"quantidadeEmEstoque": quantidade, preco };
        axios
          .put(`http://localhost:8080/produtos/${props.id}`, )
          //Atrasada, assíncrona, posterior
          .then((response) => alert(`novo objeto: ${response.data}`))
          //tratamento
          .catch((response) => console.log(response));
      };

      return (
        <>
          <h3>Edite um produto aqui:</h3>
            <form onSubmit={handleAtualizar}>
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
