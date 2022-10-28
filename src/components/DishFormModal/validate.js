function validate(values) {
  const errors = {};

  if(values.name === "") errors.name = "Este campo es obligatorio";
  if(values.category_id === "") errors.category_id = "Debes elegir uno";
  if(values.description === "") errors.description = "Este campo es obligatorio";

  if(values.price === "") {
    errors.price = "Este campo es obligatorio";
  }else if(values.price <= 0) {
    errors.price = "Debe ser mayor que 0";
  }

  if(values.quantity === "") {
    errors.quantity = "Este campo es obligatorio";
  }else if(values.quantity < 0) {
    errors.quantity = "No puede ser menor que 0";
  }

  if(values.waiting_time === "") {
    errors.waiting_time = "Este campo es obligatorio";
  }else if(values.waiting_time < 0) {
    errors.waiting_time = "No puede ser menor que 0";
  }

  return errors;
}

export default validate;
