import { Component } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HelloText from '../components/HelloText';

class InitialPage extends Component {
  render() {
    return (
      <div className="divGlobal">
        <Header />
        <HelloText />
        <Footer />
      </div>
    )
  }
}

export default InitialPage;