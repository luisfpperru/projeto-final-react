import React, { useState } from 'react'
import './App.css'
import 'fontsource-roboto';
import ObterProdutos from './ObterProdutos'
import AdicionarProduto from './AdicionarProduto'
import Login from './Login'
import CadastrarCliente from './CadastrarCliente'
import Menu from './Menu'

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Menu/>
      </header>
    </div>
  )
}

export default App
