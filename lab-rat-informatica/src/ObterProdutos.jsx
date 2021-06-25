import React, {useState} from 'react'
import axios from 'axios';
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Carrinho from './Carrinho'
import Storefront from '@material-ui/icons/Storefront';
import DeletarProduto from './DeletarProduto';

function ObterProdutos(){
  const [produtos,setProdutos] = React.useState([]);
  const [carrinho, setCarrinho] = React.useState([]);
  
  

  const badge = {
  display: "inline-block",
  padding: ".25em .4em",
  fontSize: "75%",
  fontWeight: 400,
  lineHeight: 2,
  textAlign: "center",
  whiteSpace: "nowrap",
  verticalAlign: "baseline",
  borderRadius: ".25rem",
  backgroundColor: "#dc3545",
  };

  const estiloTitulo = {
    textAlign: "center",
    marginRight: "0%",
  }

  const bordas = {
    marginLeft: "25%", 
    marginRight: "25%",
  }
  if (localStorage.getItem("login") == "yes"){
    React.useEffect(() => {
        let headers = {
                          "Content-Type": "application/json",
                          Authorization: localStorage.getItem("api-token")
                      };
        let body = {
                status:"Não-finalizado",
                clienteId:localStorage.getItem("user-id"),
                produtosId:carrinho.map( (produto)=> produto.id)
              };
        axios.post("http://localhost:8080/api/pedidos",body,headers)
              .then((response) => {
              localStorage.setItem("order-id",response.data.id)
              console.log("Criar pedido");
                            }
              )
            },[]);
  }
  React.useEffect(() => {
    axios.get("http://localhost:8080/api/produtos")
         .then((response) => {
          setProdutos(response.data);
          console.log("Obter produtos");
          }
                  )
                        },[]);

      const addCarrinho = (produto) => {
        setCarrinho((anterior) => {
              let c = [...anterior, produto];
                  console.log(c);
                    return c;
          })
         let headers = {
                "Content-Type": "application/json",
                Authorization: localStorage.getItem("api-token")
              };
          let body = {
                  "status":"Não-finalizado",
                  "produtosId": carrinho.map( (produto)=> produto.id),
                    };
          console.log(body.produtosId)
          let id = localStorage.getItem("order-id");
          axios.put(`http://localhost:8080/api/pedidos/id/${id}`,body,headers)
              .then((response) => {
              console.log("Editar pedido");
        }
      )
    }

      
  return (
    <> 
    <div style={bordas}>
      <div>      
      <h2 style={estiloTitulo}>
      <Storefront />Produtos <span style={badge}>{carrinho.length}</span>
      </h2>
      </div>

     <TableContainer component={Paper} >
        <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Produto</TableCell>
            <TableCell>Preço</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {produtos.map((produto) => (
            <TableRow>
              <TableCell>{produto.nome}</TableCell>
              <TableCell>{produto.preco}</TableCell>
              <TableCell>
                <Button onClick={() => addCarrinho(produto)}>
                <Fab color="primary" aria-label="add">
                  <AddIcon />
                </Fab>
                </Button>
              </TableCell>
            </TableRow>
          ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    </>
  )
}

export default ObterProdutos;
