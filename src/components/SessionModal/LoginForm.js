import { FormFeedback, FormGroup, Input, Label } from "reactstrap";

function LoginForm({ values, handleChange, handleBlur, errors, touched }) {
  return (
    <>
      <FormGroup>
        <Label
          style={{fontWeight: 500}}
          htmlFor="document"
        >
          Usuario
        </Label>
        <Input 
          id="document"
          name="document"
          placeholder="usuario..."
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
          placeholder="********"
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

export default LoginForm;
