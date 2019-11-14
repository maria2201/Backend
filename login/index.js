import React, {Component} from 'react'

import {Link, withRouter} from 'react-router-dom'

import {Container,FormLink, Form, SubmitButton} from './styles'
import api from '../../services/api'

import {login} from '../../services/auth'

class Login extends Component{
state = {
email : '',
senha: '',
error: ''
}
  
handleSignIn = async e => {
e.preventDefault();
const { email, senha } = this.state;
if (!email || !senha) {
this.setState({ error: "E-mail ou senha incorretos!" });
} else {
try {
const response = await api.get("/usuario", { email, senha });
login(response.data.token);
this.props.history.push("/teste");
} catch (err) {
this.setState({
 error:
"Houve um problema ao faer login"
});
}
}
}
    

render(){
return (
<Container>
     
<Form onSubmit = {this.handleSubmit}>
{this.state.error && <p>{this.state.error}</p>}
<input 
name = "email"
type = "email" 
placeholder = 'Digite seu e-mail'
onChange= {e => this.setState({email:e.target.value})}
/>
     
<input 
name = "senha"
type = "password" 
placeholder = 'Digite sua senha'
onChange= {e =>this.setState({senha: e.target.value})}
/>
      
<button type = "submit">
Enviar
</button>
<Link to = "/usuario">Criar uma conta</Link>
</Form>

</Container>
)
}
}

export default withRouter(Login)