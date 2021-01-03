import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/home';
import Login from './pages/login';
import Clients from './pages/clients';
import Register from './pages/register';
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
            <Route exact path="/register" component={Register} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
