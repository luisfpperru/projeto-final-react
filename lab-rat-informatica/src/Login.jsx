import React, {useState} from 'react'
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import DoubleArrow from '@material-ui/icons/DoubleArrow';
import {Link } from "react-router-dom";

function Login(){

    const estilo = {
        marginTop: "15%",
        textAlign: "center",
    };

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const handleLogin = (event) => {
        event.preventDefault();
        console.log(email);
        console.log(senha);
        let request = {email,senha};
        axios.post("http://localhost:8080/api/login", request)
             .then((response) => {
                 localStorage.setItem("api-token",response.data.token);
                 localStorage.setItem("user-id",response.data.cliente.id);
                 localStorage.setItem("login","yes");
             });
      }
      return (
          <div style={estilo}>
              <h1>LOGIN</h1>
          <form onSubmit={handleLogin}>
            <p>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </p>

            <p>
                <label htmlFor="senha">Senha:</label>
                <input type="password" name="senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
            </p>
            {/* <button type="submit"> Logar </button> */}
            <Button startIcon={<DoubleArrow />} type="submit" variant="contained" color="primary">Login</Button>
            <br/><br/><br/>
            <p>Não possui uma conta?</p>
            <Link to="/cadastro">
            <Button startIcon={<DoubleArrow />} type="submit" variant="outlined" color="primary"> Cadastre-se</Button>
            </Link>
        </form>
        </div>
      )
}

export default Login;
