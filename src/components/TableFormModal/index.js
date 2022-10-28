/** @jsxImportSource @emotion/react */
import { Formik } from "formik";
import { Alert, Label, Modal, ModalBody, ModalHeader } from "reactstrap";
import { post, update } from "../../services";
import { uploadImage } from "../../services/cloudinary";
import FooterForm from "../CategoryFormModal/FooterForm";
import InputFile from "../DishFormModal/InputFIle";
import InputSelect from "../DishFormModal/InputSelect";
import { Image, ImageSection } from "../DishFormModal/styles";
import InputForm from "../InputForm";
import { AlertStyle } from "../SessionModal/styles";
import validate from "./validate";

const { useState } = require("react");

function TableFormModal({ editableItem, tables, onClose, setParent, isOpen, title, setEditableItem }) {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState("");
  const [imgError, setImgError] = useState(null);

  const handleClose = () => {
    setError(null);
    onClose();
    setImage("");
    setEditableItem(null);
  }

  const getTable = () => {
    if(editableItem) {
      return tables.find(table => table.id === editableItem.id);
    }

    return {};
  }

  const changeImage = (e) => {
    setImage(e.target.files[0]);
    if(imgError) setImgError(null);
  }

  const initialValues = {
    pavilion: getTable()?.pavilion || "",
    code: getTable()?.code || "",
    chairs: getTable()?.chairs || "",
    available: getTable()?.available || true
  }

  const handleSubmit = async (values) => {
    setIsLoading(true);
    try {
      if(!editableItem) {
        if(!image) {
          setImgError("Necesitas elegir una imagen");
          setIsLoading(false);
          return;
        }
        
        const photo_url = await uploadImage(image);
        const response = await post("tables", {...values, image: photo_url});
        setParent(data => ({main: [...data.main, response], backup: [...data.backup, response]}));
      }else {
        let data = {
          ...values,
          available: values.available === "true"
        }

        if(image) {
          const photo_url = await uploadImage(image);
          data = {...data, image: photo_url};
        }

        const response = await update("tables", data, editableItem.id);
        setParent(data => {
          const position = data.backup.findIndex(table => table.id === editableItem.id);
          const newTables = data.backup.map(table => table);
          newTables[position] = response;

          return {main: newTables, backup: newTables};
        });
      }

      setIsLoading(false);
      handleClose();
    }catch(e) {
      setError(e.message);
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
        { title } mesa
      </ModalHeader>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validate={(values) => validate(values, editableItem)}
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
              <InputForm 
                id="pavilion"
                label="Pabellón"
                placeholder="B"
                value={values.pavilion}
                handleChange={handleChange}
                handleBlur={handleBlur}
                error={errors.pavilion}
                touched={touched.pavilion}
              />
              <InputForm 
                id="code"
                label="Código"
                placeholder="250"
                value={values.code}
                handleChange={handleChange}
                handleBlur={handleBlur}
                error={errors.code}
                touched={touched.code}
              />
              <InputForm 
                id="chairs"
                label="Sillas"
                type="number"
                placeholder="4"
                value={values.chairs}
                handleChange={handleChange}
                handleBlur={handleBlur}
                error={errors.chairs}
                touched={touched.chairs}
              />
              {
                editableItem
                ?
                  <InputSelect 
                    id="available"
                    label="Estado"
                    value={values.available}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    error={errors.available}
                    touched={touched.available}
                    options={[{id: true, name: "Disponible"}, {id: false, name: "Ocupado"}]}
                  />
                :
                  null
              }
              <InputFile 
                id="photo"
                handleChange={changeImage}
                imgError={imgError}
                label="Imagen"
              />
              {
                editableItem
                ?
                  <ImageSection>
                    <Label
                      style={{fontWeight: 500, alignSelf: "start"}}
                    >
                      Imagen actual
                    </Label>
                    <Image 
                      src={getTable().image}
                      alt="photo-table"
                    />
                  </ImageSection>
                :
                  null
              }
              {
                error
                ?
                  <Alert
                    color="danger"
                    css={AlertStyle}
                  >
                    { error }
                  </Alert>
                :
                  null
              }
            </ModalBody>
            <FooterForm 
              editableItem={editableItem}
              handleClose={handleClose}
              isLoading={isLoading}
              isValid={isValid}
            />
          </form>
        )}
      </Formik>
    </Modal>
  );
}

export default TableFormModal;
