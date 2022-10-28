/** @jsxImportSource @emotion/react */
import { Formik } from "formik";
import { useState } from "react";
import { Modal, ModalHeader, ModalBody, Alert } from "reactstrap";
import { post, update } from "../../services";
import InputForm from "../InputForm";
import { AlertStyle } from "../SessionModal/styles";
import FooterForm from "./FooterForm";

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
              <InputForm
                id="name"
                label="Nombre"
                placeholder="Postres..."
                value={values.name}
                handleChange={handleChange}
                handleBlur={handleBlur}
                error={errors.name}
                touched={touched.name}
              />
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
            <FooterForm 
              editableItem={editableName}
              handleClose={onClose}
              isLoading={isLoading}
              isValid={isValid}
            />
          </form>
        )}
      </Formik>
    </Modal>
  )
}

export default CategoryFormModal;
