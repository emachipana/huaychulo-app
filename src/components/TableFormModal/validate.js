function validate(values, editableItem) {
  const errors = {};

  if(values.pavilion === "") errors.pavilion = "Este campo es obligatorio";
  if(values.code === "") errors.code = "Este campo es obligatorio";

  if(values.chairs === "") {
    errors.chairs = "Este campo es obligatorio";
  }else if(values.chairs <= 0) {
    errors.chairs = "Deber ser mayor a 0";
  }

  if(editableItem) {
    if(values.available === "") errors.available = "Este campo es obligatorio";
  }

  return errors;
}

export default validate;
