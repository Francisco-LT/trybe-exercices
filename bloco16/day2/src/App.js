import React from 'react';
// o provider é o meio pelo qual disponibilizamos o Store
import { Provider } from 'react-redux';
import store from './store';
import List from '../src/components/list';
import InputsList from './components/inputList';

class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <InputsList />
        </Provider>
      </div>
    );
  }
}

export default App;