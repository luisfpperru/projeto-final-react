import React from "react";
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import {Link} from "react-router-dom";

function DeletarCliente (props){

    const estilo = {
        textAlign: "center",
      }

    const useStyles = makeStyles((theme) => ({
        root: {
          '& > *': {
            margin: theme.spacing(1),
          },
        },
    }));
         

    const apagarPorId = (event) => {
        event.preventDefault();
        let token = localStorage.getItem("api-token");
        let id = localStorage.getItem("user-id");
        console.log("token", token);
    
        const request = {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        };
        axios.delete(`http://localhost:8080/api/clientes/id/${id}`,request)
             .then(response => {
               alert(`${props.nome}, seu perfil foi apagado com sucesso.`)
               localStorage.removeItem("api-token")
               localStorage.removeItem("user-id")
               localStorage.removeItem("login")
               });
             
    }

    return(
        <div style={estilo} >
        {/* <button onClick={apagarPorId}> Deletar </button> */}
        <Link to="/login">
        <Button onClick={apagarPorId} startIcon={<DeleteIcon />} variant="contained" style={{backgroundColor:"#c22121"}}>Deletar</Button>
        </Link>
        </div>
    )
}

export default DeletarCliente;