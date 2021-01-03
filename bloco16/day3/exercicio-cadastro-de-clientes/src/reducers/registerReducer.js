const initialState = {
  name: '',
  age: '',
  email:'',
};

function registerReducer(state = initialState, action) {
  switch(action.type) {
    case 'REGISTER_INPUT':
        return {
          ...state,
          name: action.name,
          age: action.age,
          email: action.email
        }
        default: 
        return state
  }
}

export default registerReducer

// const Initial_State = [];

// function registerReducer(state = Initial_State, action) {
//   switch (action.type) {
//     case 'ADD_REGISTER':
//       return [...state, action.data];
//     default:
//       return state;
//   }
// }

// export default registerReducer;