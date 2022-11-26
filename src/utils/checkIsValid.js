export const emailCheck = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/g;
export const passwordCheck = /^.{8,}$/g;

export const checkLoginInput = input => {
  return emailCheck.test(input.email) && passwordCheck.test(input.password);
};

export const checkSignupInput = input => {
  return checkLoginInput(input) && input.password === input.password_confirm;
};
