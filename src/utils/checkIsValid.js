export const checkLoginInput = input => {
  const idCheck = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/g;
  const passwordCheck = /^.{8,}$/g;
  const validation = idCheck.test(input.email) && passwordCheck.test(input.password);
  if (input.email === undefined || input.password === undefined) return false;
  return validation;
};

export const checkSignupInput = input => {
  const validation = checkLoginInput(input) && input.password === input.password_confirm;
  if (input.password_confirm === undefined || input.name === undefined) return false;
  return validation;
};
