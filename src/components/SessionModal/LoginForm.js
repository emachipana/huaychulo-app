import InputForm from "../InputForm";

function LoginForm({ values, handleChange, handleBlur, errors, touched }) {
  return (
    <>
      <InputForm 
        id="document"
        label="Usuario"
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

export default LoginForm;
