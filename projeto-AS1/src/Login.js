import React, {Component} from 'react';
import './Login.css';

class Login extends Component{

  constructor(props){
    super(props);
    this.state = {
      email: "",
      senha: "",
      mensagem: "",  
      usuarios: [
        {email: "eduardo.lino@pucpr.br", senha: "123456"},
        {email: "diana.dg@gmail.com", senha: "654321"}
      ]           
    }
    this.acessar = this.acessar.bind(this);
  }

  emailChange(event){
    let state = this.state;
    state.email = event.target.value;
    state.mensagem = ""
    this.setState(state);
  }

  senhaChange(event){
    let state = this.state;
    state.senha = event.target.value;
    state.mensagem = ""
    this.setState(state);
  }

  acessar(){
    let state = this.state;
    for (const element of state.usuarios){
      if (element.email == state.email && element.senha == state.senha){ 
        state.mensagem = "Acessado com sucesso!";
        break;
      }
      else state.mensagem = "Usuário ou senha incorretos!"
    };
    this.setState(state);
  }

  render(){
    return (
      <div id ="maindiv">
        <h1>Login</h1>
        <input type="text" name="email" onChange={(e) => this.emailChange(e)}></input><br/>
        <input type="password" name="senha" onChange={(e) => this.senhaChange(e)} ></input><br/>        
        <button onClick={this.acessar}> Acessar </button>
        <label><h4>{this.state.mensagem}</h4></label>
      </div>
    )
  }

}

export default Login;