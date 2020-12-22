import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/home';
import Login from './pages/login';
import Clients from './pages/clients';
import { Provider } from 'react-redux'
import store from '../src/store/index'

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/clients" component={Clients} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
