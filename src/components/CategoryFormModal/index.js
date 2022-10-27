/** @jsxImportSource @emotion/react */
import { Formik } from "formik";
import { useState } from "react";
import { Modal, Button, ModalHeader, ModalBody, FormGroup, Label, Input, FormFeedback, Alert, ModalFooter, Spinner } from "reactstrap";
import { post, update } from "../../services";
import { AlertStyle, ButtonStyle } from "../SessionModal/styles";

function CategoryFormModal({ editableName, setParent, handleClose, isOpen, title, setEditableName }) {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onClose = () => {
    setError(null);
    handleClose();
    setEditableName(null);
  }
  
  const validate = (values) => {
    const errors = {};

    if(values.name === "") {
      errors.name = "Este campo es obligatorio";
    }else if(values.name.length < 3) {
      errors.name = "El mínimo son 3 caracteres";
    }

    return errors;
  }

  const initialValues = { name: editableName?.name || "" }

  const handleSubmit = async (values) => {
    setIsLoading(true);
    try {
      if(!editableName) {
        const response = await post("categories", values);
        setParent(categories => [...categories, response]);
      }else {
        const response = await update("categories", values, editableName.id);
        setParent(categories => {
          const position = categories.findIndex(category => category.id === editableName.id);
          const newCategories = categories.map(category => category);
          newCategories[position] = response;
          return newCategories;
        });
        setEditableName(null);
      }
      setIsLoading(false);
      setError(null);
      handleClose();
    }catch(e) {
      setIsLoading(false);
      setError(e.message);
    }
  }

  return (
    <Modal
      size="sm"
      isOpen={isOpen}
      toggle={onClose}
    >
      <ModalHeader
        toggle={onClose}
      >
        { title } categoría
      </ModalHeader>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validate={validate}
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
          <form onSubmit={handleSubmit}>
            <ModalBody>
              <FormGroup>
                <Label
                  style={{fontWeight: 500}}
                  htmlFor="name"
                >
                  Nombre
                </Label>
                <Input 
                  id="name"
                  name="name"
                  placeholder="Postres..."
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  invalid={errors.name && touched.name}
                  valid={!errors.name && touched.name}
                />
                {
                  errors.name && touched.name && (
                    <FormFeedback>{ errors.name }</FormFeedback>
                  )
                }
              </FormGroup>
              {
                error
                ?
                  <Alert
                    color="danger"
                    css={AlertStyle}
                  >
                    { error.includes("has already been taken") ? "Esta categoría ya existe" : error }
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
                      editableName
                      ?
                      "Actualizando..."
                      :
                      "Agregando..."
                    }
                  </>
                  :
                  editableName
                  ?
                  "Actualizar"
                  :
                  "Agregar"
                }
              </Button>
              {" "}
              <Button
                style={{fontWeight: 600}}
                onClick={onClose}
                color="danger"
              >
                Cerrar
              </Button>
            </ModalFooter>
          </form>
        )}
      </Formik>
    </Modal>
  )
}

export default CategoryFormModal;
