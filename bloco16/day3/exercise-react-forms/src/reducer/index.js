import { createStore } from 'redux';
import { CHANGE_FORM } from './actions';

const initialState = {
  forms: {
    name: '',
    email: '',
    idade: 0,
    foto: '',
    trybe: false,
    estado: '',
    descricao: '',
    formularioComErros: true,
  },
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FORM: 
    return { ...state.forms,
      name: action.name,
      email: action.email,
      idade: action.age,
      foto: action.photo,
      trybe: action.trybe,
      estado: action.place,
      descricao: action.description,
      formularioComErros: action.error};
      default:
        return state
  }
}
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;