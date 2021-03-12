import { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
class About extends Component {
  render() {
    return (
      <div>
        <Header />
        <br></br>
        <h3>Benvindo à minha página pessoal!</h3>
        <p>
          Sou o Francisco, tenho 31 anos e sou nascido e criado em BH (Belo Horizonte!).
          Sou engenheiro civil, atuei bastante tempo na área, mas agora estou realizando o curso 
          de Desenvolvimento Web na Trybe. 
          Amo tecnologia e estou buscando me especializar para consegui entrar neste mercado.
        </p>
        <Footer />
      </div>
    )
  }
}

export default About;