function validate(values, isLogin) {
  const errors = {};

  if(!values.document) {
    errors.document = "Este campo es obligatorio";
  }else if(values.document.length < 8) {
    errors.document = "El mínimo son 8 caracteres";
  }else if((values.document * 1).toString() === "NaN") {
    errors.document = "Solo se aceptan números";
  }

  if(!values.password) {
    errors.password = "Este campo es obligatorio";
  }else if(values.password.length < 6) {
    errors.password = "El mínimo son 6 caracteres";
  }

  if(!isLogin) {
    if(!values.document_type) errors.document_type = "Debes elegir uno";
  }

  return errors;
}

export default validate;
