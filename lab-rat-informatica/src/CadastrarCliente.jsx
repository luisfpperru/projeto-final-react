import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Send from '@material-ui/icons/Send';

function CadastrarCliente(){

    const estilo = {
        textAlign: "right",
        marginRight: "45%",
    };
    
      const estiloH3 = {
        textAlign: "center",
        marginRight: "0%",
      }

    const [email,setEmail] = React.useState("");
    const [senha,setSenha] = React.useState("");
    const [nome, setNome] = React.useState("");
    const [cpf, setCpf] = React.useState("");
    const [data, setData] = React.useState("");
    const [telefone, setTelefone] = React.useState("");
    const [cep, setCep] = React.useState("");
    const [numero, setNumero] = React.useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
        //Objeto que será enviado para API
        let novo = {
            email,
            senha, 
            nome,
            "cpfOuCnpj":cpf,
            telefone,
            "dataDeNascimento": data,
            "endereco":{ cep, numero}
        };
        console.log(novo)
        axios.post("http://localhost:8080/api/clientes", novo)
        .then(response => {
            alert(`Novo cliente adicionado com o id: ${response.data.id}`)
            console.log(response);
            }
            );
        
      }

/*
     "email",
      "senha",
      "nome",
      "cpfOuCnpj",
      "telefone",
      "dataDeNascimento",
      "endereco"
      */
    return (
        <>
        <h2 style={estiloH3}> Informe seus dados: </h2>
          <form onSubmit={handleSubmit}>
              <h3 style={estiloH3}> Dados pessoais</h3>
          <p style={estilo}>
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </p>
          <p style={estilo}>
              <label htmlFor="senha">Senha:</label>
              <input type="password" name="senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
          </p>
          <p style={estilo}>
              <label htmlFor="nome">Nome:</label>
              <input type="text" name="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
          </p >

          <p style={estilo}>
              <label htmlFor="cpf">CPF (ou CNPJ):</label>
              <input type="text" name="cpf" value={cpf} onChange={(e) => setCpf(e.target.value)} />
          </p>

          <p style={estilo}>
              <label htmlFor="telefone">Telefone:</label>
              <input type="tel" name="telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
          </p>

          <p style={estilo}>
              <label htmlFor="data">Data de nascimento:</label>
              <input type="date" name="data" value={data} onChange={(e) => setData(e.target.value)} />
          </p>

          <h3 style={estiloH3}> Endereço </h3>
          <p style={estilo}>
              <label htmlFor="cep">CEP:</label>
              <input type="text" name="cep" value={cep} onChange={(e) => setCep(e.target.value)} />
          </p>

          <p style={estilo}>
              <label htmlFor="numero">Número:</label>
              <input type="number" name="numero" value={numero} onChange={(e) => setNumero(e.target.value)} />
          </p>
          <div style={estiloH3}>
          <Button  startIcon={<Send />} type="submit" variant="contained" color="primary">Enviar</Button>
          {/* <button type="submit"> Enviar </button> */}
          </div>
          </form>
        </>
    )
}

export default CadastrarCliente;