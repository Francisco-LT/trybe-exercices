export const login = (email, password) => ({
  type: 'LOGIN_INPUT', 
  email,
  password,
 });

export const register = (name, age, email) => ({
  type: 'REGISTER_INPUT',
  name,
  age,
  email,
 });