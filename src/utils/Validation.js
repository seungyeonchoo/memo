class Validation {
  static signin = input => {
    const emailCheck = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/g;
    const passwordCheck = /^.{8,}$/g;
    return emailCheck.test(input?.email) && passwordCheck.test(input?.password);
  };

  static signup = input => {
    return this.signin(input) && input?.password === input?.password_confirm;
  };
}

export default Validation;
