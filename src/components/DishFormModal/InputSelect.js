import { FormFeedback, FormGroup, Input, Label } from "reactstrap";

function InputSelect({ id, label, value, handleChange, handleBlur, error, touched, options }) {
  return (
    <FormGroup>
      <Label
        style={{fontWeight: 500}}
        htmlFor={id}
      >
        {label}
      </Label>
      <Input
        id={id}
        name={id}
        type="select"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        invalid={error && touched}
        valid={!error && touched}
      >
        <option value="" disabled>Elige una</option>
        {
          options.map(option => (
            <option 
              value={option.id}
              key={option.id}
            >
              { option.name }
            </option>
          ))
        }
      </Input>
      {
        error && touched && (
          <FormFeedback>{ error }</FormFeedback>
        )
      }
    </FormGroup>
  )
}

export default InputSelect;
