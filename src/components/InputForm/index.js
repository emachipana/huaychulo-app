import { FormFeedback, FormGroup, Input, Label } from "reactstrap";

function InputForm({id, label, placeholder, type, value, handleChange, handleBlur, error, touched}) {
  return (
    <FormGroup>
      <Label
        style={{fontWeight: 500}}
        htmlFor={id}
      >
        { label }
      </Label>
      <Input 
        id={id}
        name={id}
        type={type || "text"}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        invalid={error && touched}
        valid={!error && touched}
      />
      {
        error && touched && (
          <FormFeedback>{ error }</FormFeedback>
        )
      }
    </FormGroup>
  )
}

export default InputForm;
