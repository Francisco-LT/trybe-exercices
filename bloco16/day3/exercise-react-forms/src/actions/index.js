export const CHANGE_FORM = 'CHANGE_FORM';

export const changeForm = (name, email, age, photo, trybe, place, description, error) => ({
  type: CHANGE_FORM,
  name,
  email,
  age,
  photo,
  trybe,
  place,
  description,
  error
});