/** @jsxImportSource @emotion/react */
import { Formik } from "formik";
import { useState } from "react";
import { Alert, Button, Modal, ModalBody, ModalFooter, ModalHeader, Spinner } from "reactstrap";
import { useAuth } from "../../context/auth";
import getData from "../../services/sunat";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { AlertStyle, ButtonStyle } from "./styles";
import validate from "./validate";

function SessionModal({ isOpen, onClose }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isLogin, setisLogin] = useState(true);
  const { login, error, setError, signup } = useAuth();

  const handleClose = () => {
    onClose();
    setError(null);
    setisLogin(true);
    setIsLoading(false);
  }

  const handleChangeLog = () => {
    if(isLoading) return;
    setisLogin(!isLogin);
    setError(null);
  }

  const initialValues = isLogin
                        ?
                        { document: "", password: "" }
                        :
                        {
                          document_type: "",
                          document: "",
                          password: ""
                        };
                      
  const handleSubmit = async (values) => {
    setIsLoading(true);
    const doc_type = (values.document_type * 1) === 0 ? "dni" : "ruc";
    try {
      if(isLogin) {
        const user = await login(values);
        if(user) handleClose();
        setIsLoading(false);
        return;
      }
      
      const userData = await getData(doc_type, values.document * 1);
      if(userData.message) throw new Error("Unexpected");

      const data = {
        ...values,
        document: values.document * 1,
        document_type: values.document_type * 1,
        name: doc_type === "dni" ? userData.nombres : userData.razonSocial,
        last_name: doc_type === "dni" ? `${userData.apellidoPaterno} ${userData.apellidoMaterno}` : userData.razonSocial
      }

      const user = await signup(data);
      if(user) handleClose();
      setIsLoading(false);
    }catch(e) {
      setError(e.message.includes("Unexpected") ? `No se encontraron resultados para el ${doc_type}` : e.message);
      setIsLoading(false);
    }
  }

  return (
    <Modal
      size="sm"
      isOpen={isOpen}
      toggle={handleClose}
    >
      <ModalHeader
        toggle={handleClose}
      >
        <span
          style={{fontWeight: 600}}
        >
          {
            isLogin ? "Iniciar Sesión" : "Registrate"
          }
        </span>
      </ModalHeader>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validate={(values) => validate(values, isLogin)}
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
          <form
            onSubmit={handleSubmit}
          >
            <ModalBody>
              {
                isLogin
                ?
                <LoginForm 
                  errors={errors}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  touched={touched}
                  values={values}
                />
                :
                <SignUpForm 
                  errors={errors}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  touched={touched}
                  values={values}
                />
              }
              <Button
                onClick={() => handleChangeLog()}
                style={{fontSize: "14px"}}
                color="link"
              >
                {
                  isLogin
                  ?
                  "¿Aún no tienes una cuenta?, Registrate"
                  :
                  "¿Ya cuentas con una cuenta?, Iniciar Sesión"
                }
              </Button>
              {
                error
                ?
                <Alert
                  css={AlertStyle}
                  color="danger"
                > 
                  { error.replaceAll('"', "").includes("has already been taken") ? "Este usuario ya existe" : error.replaceAll('"', "") }
                </Alert>
                :
                null
              }
            </ModalBody>
            <ModalFooter>
              <Button
                disabled={!isValid || isLoading}
                css={ButtonStyle}
                type="submit"
              >
                {
                  isLoading
                  ?
                  <>
                    <Spinner 
                      size="sm"
                    />
                    {" "}
                    {
                      isLogin
                      ?
                      "Entrando..."
                      :
                      "Registrando..."
                    }
                  </>
                  :
                  isLogin ? "Entrar" : "Registrarme"
                }
              </Button>
              {" "}
              <Button
                style={{fontWeight: 600}}
                onClick={handleClose}
                color="danger"
              >
                Cerrar
              </Button>
            </ModalFooter>
          </form>
        )}
      </Formik>
    </Modal>
  );
}

export default SessionModal;
