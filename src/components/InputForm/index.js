/** @jsxImportSource @emotion/react */
import { FormFeedback, FormGroup, Input, Label } from "reactstrap";
import { InputStyle } from "../ProfileForm/styles";

function InputForm({id, label, placeholder, type, value, handleChange, handleBlur, error, touched, disabled}) {
  return (
    <FormGroup>
      <Label
        style={{fontWeight: 500}}
        htmlFor={id}
      >
        { label }
      </Label>
      <Input
        css={InputStyle}
        id={id}
        name={id}
        disabled={disabled}
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
