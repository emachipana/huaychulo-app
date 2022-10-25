import { FormFeedback, FormGroup, Input, Label } from "reactstrap";

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
      <FormGroup>
        <Label
          style={{fontWeight: 500}}
          htmlFor="document"
        >
          Documento
        </Label>
        <Input 
          id="document"
          name="document"
          placeholder="documento..."
          value={values.document}
          onChange={handleChange}
          onBlur={handleBlur}
          invalid={errors.document && touched.document}
          valid={!errors.document && touched.document}
        />
        {
          errors.document && touched.document && (
            <FormFeedback>{ errors.document }</FormFeedback>
          )
        }
      </FormGroup>
      <FormGroup>
        <Label
          style={{fontWeight: 500}}
          htmlFor="password"
        >
          Contraseña
        </Label>
        <Input 
          id="password"
          type="password"
          name="password"
          placeholder="*********"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          invalid={errors.password && touched.password}
          valid={!errors.password && touched.password}
        />
        {
          errors.password && touched.password && (
            <FormFeedback>{ errors.password }</FormFeedback>
          )
        }
      </FormGroup>
    </>
  );
}

export default SignUpForm;
