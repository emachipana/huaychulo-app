import { FormFeedback, FormGroup, Input, Label } from "reactstrap";

function InputFile({ handleChange, id, label, imgError }) {
  return (
    <FormGroup>
      <Label
        style={{fontWeight: 500}}
        htmlFor={id}
      >
        { label }
      </Label>
      <Input
        onChange={handleChange}
        type="file"
        id={id}
        name={id}
        accept="image/*"
        invalid={!!imgError}
      />
      {
        !!imgError && (
          <FormFeedback>{ imgError }</FormFeedback>
        )
      }
    </FormGroup>
  )
}

export default InputFile;
