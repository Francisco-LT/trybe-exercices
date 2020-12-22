const initialState = {
  login: '',
  password: '',
};

function loginReducer(state = initialState, action) {
  switch(action.type) {
    case 'LOGIN_INPUT':
        return {
          ...state,
          email: action.email,
          pasword: action.password
        }
        default: 
        return state
  }
}
// VER EXMPLO DO DIA 4 de REDUX, MINUTO 1:35 VIDEO DE DE EXEMPLOS GUIADOS

export default loginReducer