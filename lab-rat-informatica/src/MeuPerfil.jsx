import React, {useState} from 'react'
import axios from 'axios';
import DeletarCliente from './DeletarCliente';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';

function MeuPerfil(){

  const estilo = {
    textAlign: "right",
    marginRight: "45%",
};

  const estiloH3 = {
    textAlign: "center",
    marginRight: "0%",
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
     
    const [email,setEmail] = React.useState("");
    const [nome, setNome] = React.useState("");
    const [senha, setSenha] = React.useState("");
    const [cpf, setCpf] = React.useState("");
    const [dataDeNascimento, setDataDeNascimento] = React.useState("");
    const [telefone, setTelefone] = React.useState("");
    const [cep, setCep] = React.useState("");
    const [numero, setNumero] = React.useState(0);
  
    const obterDadosCliente = () => {
        let id = localStorage.getItem("user-id");
        console.log("user-id", id);
        let token = localStorage.getItem("api-token");
        console.log("token", token);
    
        const headers = {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          }
        };
        axios.get(`http://localhost:8080/api/clientes/id/${id}`,headers).then((response) => {
          let dadosCliente = response.data;
          let nascimento = new Date();
          nascimento = nascimento.toISOString().substring(0,10);
          console.log(dadosCliente)
          setEmail(dadosCliente.email);
          setSenha(dadosCliente.senha)
          setNome(dadosCliente.nome)
          setCpf(dadosCliente.cpfOuCnpj)
          setDataDeNascimento(nascimento)
          console.log(nascimento);
          setTelefone(dadosCliente.telefone)
          setCep(dadosCliente.endereco.cep)
          setNumero(dadosCliente.endereco.numero)
        });
      }
      const atualizarDadosCliente = (event) => {
        event.preventDefault();
        let id = localStorage.getItem("user-id");
        console.log("user-id", id);
        let token = localStorage.getItem("api-token");
        console.log("token", token);
        let headers = { 
          "Content-Type": "application/json",
          Authorization: token,
        };
        let body = {
            email,
            senha, 
            nome,
            "cpfOuCnpj":cpf,
            telefone,
            dataDeNascimento,
            "endereco":{ cep, numero}
            }
        
        console.log(body)
        axios.put(`http://localhost:8080/api/clientes/id/${id}`,body,headers).then((response) =>
        console.log(response.data)
        );
    }

    React.useEffect(obterDadosCliente,[]);

    return (
      <>
      <div>
      <h2 style={estiloH3}> Seus dados </h2>
        <form onSubmit={atualizarDadosCliente}>
            <h3 style={estiloH3}> Dados pessoais</h3>
        <p style={estilo}>
            <label htmlFor="email"> Email:</label>
            <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </p>
        <p style={estilo}>
            <label htmlFor="nome">Nome:</label>
            <input type="text" name="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
        </p>

        <p style={estilo}>
            <label htmlFor="cpf">CPF (ou CNPJ):</label>
            <input type="text" name="cpf" value={cpf} onChange={(e) => setCpf(e.target.value)} />
        </p>

        <p style={estilo}>
            <label htmlFor="telefone">Telefone:</label>
            <input type="tel" name="telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
        </p>

        <p style={estilo}>
            <label htmlFor="dataDeNascimento">Data de nascimento:</label>
            <input type="date" name="dataDeNascimento" value={dataDeNascimento} onChange={(e) => setDataDeNascimento(e.target.value)} />
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
        {/* <button  type="submit"> Atualizar </button> */}
        <Button startIcon={<SaveIcon />} type="submit" variant="contained" color="primary">Atualizar</Button>
        </div>
        </form>
        <br/>
        <DeletarCliente nome={nome}/>
        </div>
      </>
    )
}

export default MeuPerfil;


// const  cadastrarCliente  =  ( )  =>  {
//     // requisição GET ao backend
//     axios . get ( "http: // localhost:" ) . then ( ( response )  =>  {
//    setClientes ( resposta . dados ) ;
//} )
//}
