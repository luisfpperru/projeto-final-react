import React from 'react'

function Formulario(){
    return (
        <>
        <h3> Informe seus dados: </h3>
          <form onSubmit={handleSubmit}>
              <h2> Dados pessoais</h2>
          <p>
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </p>
          <p>
              <label htmlFor="senha">Senha:</label>
              <input type="password" name="senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
          </p>
          <p>
              <label htmlFor="nome">Nome:</label>
              <input type="text" name="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
          </p>

          <p>
              <label htmlFor="cpf">CPF (ou CNPJ):</label>
              <input type="text" name="cpf" value={cpf} onChange={(e) => setCpf(e.target.value)} />
          </p>

          <p>
              <label htmlFor="telefone">Telefone:</label>
              <input type="tel" pattern="([0-9]{2})[0-9]{5}-[0-9]{4}" name="telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
          </p>

          <p>
              <label htmlFor="data">Data de nascimento:</label>
              <input type="date" name="data" value={data} onChange={(e) => setData(e.target.value)} />
          </p>

          <h2> Endereço </h2>
          <p>
              <label htmlFor="cep">CEP:</label>
              <input type="text" name="cep" value={cep} onChange={(e) => setCep(e.target.value)} />
          </p>

          <p>
              <label htmlFor="numero">Número:</label>
              <input type="number" name="numero" value={numero} onChange={(e) => setNumero(e.target.value)} />
          </p>
          <button type="submit"> Enviar </button>
          </form>
        </>
    )
}

export default Formulario;