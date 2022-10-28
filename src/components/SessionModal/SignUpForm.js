import { FormFeedback, FormGroup, Input, Label } from "reactstrap";
import InputForm from "../InputForm";

function SignUpForm({ values, handleChange, handleBlur, errors, touched }) {
  return (
    <>
      <FormGroup>
        <Label
          style={{fontWeight: 500}}
          htmlFor="document_type"
        >
          Tipo de documento
        </Label>
        <Input
          id="document_type"
          type="select"
          name="document_type"
          value={values.document_type}
          onChange={handleChange}
          onBlur={handleBlur}
          invalid={errors.document_type && touched.document_type}
          valid={!errors.document_type && touched.document_type}
        >
          <option disabled selected>Elige una</option>
          <option value={0}>DNI</option>
          <option value={1}>RUC</option>
        </Input>
        {
          errors.document_type && touched.document_type && (
            <FormFeedback>{ errors.document_type }</FormFeedback>
          )
        }
      </FormGroup>
      <InputForm
        id="document"
        label="Document(*usuario)"
        placeholder="usuario..."
        value={values.document}
        handleChange={handleChange}
        handleBlur={handleBlur}
        error={errors.document}
        touched={touched.document}
      />
      <InputForm 
        id="password"
        label="Contraseña"
        type="password"
        placeholder="*******"
        value={values.password}
        handleChange={handleChange}
        handleBlur={handleBlur}
        error={errors.password}
        touched={touched.password}
      />
    </>
  );
}

export default SignUpForm;
