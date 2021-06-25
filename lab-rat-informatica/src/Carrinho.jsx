import React from "react";
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

function Carrinho() {

  const [carrinho, setCarrinho] = React.useState([]);

  React.useEffect(() => {
    let request = {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("api-token"),
    }};
    axios.get("http://localhost:8080/api/pedidos",request)
         .then((response) => {
          setCarrinho(response.data.produtos);
          console.log("Obter carrinho");
    }
    )
    },[]);

    React.useEffect(() => {
      let request = {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("api-token"),
        },
        "produtos": carrinho.map((produto)=> produto.id),
      };
      let id = localStorage.getItem("order-id");
      axios.put(`http://localhost:8080/api/pedidos/id/${id}`,request)
           .then((response) => {
            console.log("Carrinho atualizado");
      }
      )
      },[]);

     // localStorage.removeItem("api-token")
     // localStorage.removeItem("user-id")
     // localStorage.removeItem("login")

    const deleteCarrinho = (id) => {
      console.log("Passou aqui");
      setCarrinho((anterior) => {
       let c = [...anterior, produto];
        console.log(c);
        return c;
      })
    };

    const finalizarCarrinho = () => {
      let request = {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("api-token"),
        },
        data:{"status": "Finalizado"}
      };
      let id = localStorage.getItem("order-id");
      axios.put(`http://localhost:8080/api/pedidos/id/${id}`,request)
           .then((response) => {
            console.log("Pedido finalizado");
            })
      }

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

        const alinharBotao = {
          textAlign: "center",
        }
      

  return (
    <>
    <div style={bordas}>
    <div>
      <h2 style={estiloTitulo}>
      🛒 Carrinho <span style={badge}>{carrinho.length}</span>
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
  {carrinho.map((produto) => (
    <TableRow>
      <TableCell>{produto.nome}</TableCell>
      <TableCell>{produto.preco}</TableCell>
      <TableCell>
        <Button onClick={() => deleteCarrinho(produto.id)}>
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

    <div style={alinharBotao}>
      <br/>
  <Button onClick={finalizarCarrinho} variant="outlined" color="secondary"> Finalizar pedido </Button>
  </div>
  </div>
</>
  );
}

export default Carrinho;
