/** @jsxImportSource @emotion/react */
import { Formik } from "formik";
import { useState } from "react";
import { Alert, Button, Spinner } from "reactstrap";
import { useAuth } from "../../context/auth";
import { update } from "../../services";
import InputForm from "../InputForm";
import { AlertStyle } from "../SessionModal/styles";
import { Form } from "./styles";
import validate from "./validate";

function ProfileForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { user, setUser } = useAuth();

  const initialValues = {
    name: user.document_type === "ruc" && user.user_type !== "admin" ? user.name : user.name + " " + user.last_name,
    document: user.document,
    newPassword: "",
    passwordConfirmation: ""
  }

  const handleSubmit = async (values) => {
    setIsLoading(true);
    try {
      const response = await update("profile", { password: values.newPassword });
      setUser(response);
      setTimeout(() => setIsLoading(false), 500);
      setError(null);
    }catch(e) {
      setError(e.message);
      setIsLoading(false);
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={handleSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isValid
      }) => (
        <Form
          onSubmit={handleSubmit}
        >
          <InputForm 
            id="name"
            label="Nombre"
            value={values.name.toLowerCase()}
            disabled
          />
          <InputForm 
            id="document"
            label="Usuario(*documento)"
            value={values.document}
            disabled
          />
          {
            user.user_type === "client"
            ?
              <InputForm 
                id="intake"
                label="Consumo"
                value={`S/. ${user.intake}.00`}
                disabled
              />
            :
              null
          }
          <InputForm 
            id="newPassword"
            label="Nueva contraseña"
            type="password"
            placeholder="*******"
            value={values.newPassword}
            handleChange={handleChange}
            handleBlur={handleBlur}
            error={errors.newPassword}
            touched={touched.newPassword}
          />
          <InputForm 
            id="passwordConfirmation"
            label="Confirmar contraseña"
            type="password"
            placeholder="*******"
            value={values.passwordConfirmation}
            handleChange={handleChange}
            handleBlur={handleBlur}
            error={errors.passwordConfirmation}
            touched={touched.passwordConfirmation}
          />
          {
            error
            ?
              <Alert
                color="danger"
                css={AlertStyle}
              >

              </Alert>
            :
              null
          }
          <Button
            type="submit"
            block
            style={{fontWeight: 700}}
            color="warning"
            disabled={!isValid || isLoading}
          >
            {
              isLoading
              ?
                <>
                  <Spinner 
                    size="sm"
                  />
                  {" "}
                  Actualizando...
                </>
              :
                "Actualizar"
            }
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default ProfileForm;
