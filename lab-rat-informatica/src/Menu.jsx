import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import MeuPerfil from './MeuPerfil';
import NotFound from './NotFound'
import ObterProdutos from './ObterProdutos'
import Carrinho from './Carrinho'
import CadastrarCliente from './CadastrarCliente';
import Login from './Login';
import Homepage from './Homepage';
import Storefront from '@material-ui/icons/Storefront';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Menu() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.root}>
        <AppBar position="static">
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon /> */}
                {/* </IconButton> */}
                    <img src="https://i.ibb.co/ccyhrhC/logo.png\" alt="Lab Rat Logo" height="40"/>
                  <div style={{margin: "auto"}}>
                  </div>
                <Link to="/">
                <Button variant="outlined" color="secondary"> Inicio </Button>
                </Link>
                <Link to="/produtos">
                <Button startIcon={<Storefront />}variant="outlined" color="secondary"> Produtos </Button>
                </Link>
               
                <Link to="/carrinho">
                <Button startIcon={<ShoppingCart />}variant="outlined" color="secondary"> Carrinho </Button>
                </Link>
               { localStorage.getItem("login") == "yes" 
                 ? 
                 <>
                <Link to="/meuperfil">
                <Button startIcon={<AccountCircle />}variant="outlined" color="secondary"> Perfil </Button>
                </Link> 
                <Link to="/login">
                <Button color="secondary" onClick={()=> {
                   localStorage.removeItem("api-token")
                   localStorage.removeItem("user-id")
                   localStorage.removeItem("login")
                }}> Logout </Button>
                </Link>
                </>
                :  
                <Link to="/login">
                <Button variant="outlined" color="secondary"> Login </Button>
                </Link>
                }
                
          </Toolbar>
        </AppBar>
                <Switch>
                    <Route path="/" exact component={Homepage} />
                    <Route path="/produtos" exact component={ObterProdutos} />
                    <Route path="/cadastro" exact component={CadastrarCliente} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/meuPerfil" exact component={MeuPerfil} />
                    <Route path="/carrinho" exact component={Carrinho} />
                    <Route path="*" component={NotFound} />
                </Switch>
      </div>
     </BrowserRouter>
  );
}