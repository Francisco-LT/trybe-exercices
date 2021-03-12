import { BrowserRouter, Route, Switch } from 'react-router-dom';
import InitialPage from './pages/InitialPage';
import About from './components/About';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={ InitialPage } />
          <Route exact path="/about" component={ About } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
