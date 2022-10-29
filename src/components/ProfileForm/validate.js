function validate(values) {
  const errors = {};

  if(values.newPassword === "") {
    errors.newPassword = "Este campo es obligatorio";
  }else if(values.newPassword.length < 6){
    errors.newPassword = "El mínimo son 6 caracteres";
  }

  if(values.passwordConfirmation === "") {
    errors.passwordConfirmation = "Este campo es obligatorio";
  }else if(values.passwordConfirmation.length < 6){
    errors.passwordConfirmation = "El mínimo son 6 caracteres";
  }else if(values.newPassword !== values.passwordConfirmation) {
    errors.passwordConfirmation = "Las contraseñas no coinciden";
  }

  return errors;
}

export default validate;
