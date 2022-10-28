/** @jsxImportSource @emotion/react */
import { Formik } from "formik";
import { useState } from "react";
import { Alert, Label, Modal, ModalBody, ModalHeader } from "reactstrap";
import { post, update } from "../../services";
import { uploadImage } from "../../services/cloudinary";
import FooterForm from "../CategoryFormModal/FooterForm";
import InputForm from "../InputForm";
import { AlertStyle } from "../SessionModal/styles";
import InputFile from "./InputFIle";
import InputSelect from "./InputSelect";
import { Image, ImageSection, Section } from "./styles";
import validate from "./validate";

function DishFormModal({editableItem, dishes, onClose, categories, setParent, isOpen, title, setEditableItem}) {
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

  const getDish = () => {
    if(editableItem) {
      return dishes.find(dish => dish.id === editableItem.id);
    }

    return {};
  }

  const changeImage = (e) => {
    setImage(e.target.files[0]);
    if(imgError) setImgError(null);
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
        const data = {
          ...values,
          category_id: values.category_id * 1,
          price: values.price * 1,
          quantity: values.quantity * 1,
          waiting_time: values.waiting_time * 1,
          image: photo_url
        }

        const response = await post("dishes", data);
        setParent(data => ({dishes: [...data.dishes, response], backup: [...data.backup, response]}));
      }else {
        let data = {
          ...values,
          category_id: values.category_id * 1,
          price: values.category_id * 1,
          quantity: values.quantity * 1,
          waiting_time: values.waiting_time * 1
        }

        if(image) {
          const photo_url = await uploadImage(image);
          data = {...data, image: photo_url};
        }
        const response = await update("dishes", data, editableItem.id);
        setParent(data => {
          const position = data.backup.findIndex(dish => dish.id === editableItem.id);
          const newDishes = data.backup.map(dish => dish);
          newDishes[position] = response;
          
          return { dishes: newDishes, backup: newDishes };
        });
      }

      setIsLoading(false);
      handleClose();
    }catch(e) {
      setError(e.message);
      setIsLoading(false);
    }
  }

  const initialValues = {
    name: getDish()?.name || "",
    category_id: getDish()?.category_id || "",
    price: getDish()?.price || "",
    quantity: getDish()?.quantity || "",
    description: getDish()?.description || "",
    waiting_time: getDish()?.waiting_time || ""
  }

  return (
    <Modal
      isOpen={isOpen}
      toggle={handleClose}
    >
      <ModalHeader
        toggle={handleClose}
      >
        { title } platillo
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
          <form
            onSubmit={handleSubmit}
          >
            <ModalBody>
              <Section>
                <InputForm
                  id="name"
                  label="Nombre"
                  placeholder="trucha..."
                  value={values.name}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  error={errors.name}
                  touched={touched.name}
                />
                <InputSelect 
                  id="category_id"
                  label="Categoría"
                  value={values.category_id}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  error={errors.category_id}
                  touched={touched.category_id}
                  options={categories}
                />
              </Section>
              <Section>
                <InputForm
                  id="price"
                  label="Precio"
                  type="number"
                  placeholder="20.00"
                  value={values.price}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  error={errors.price}
                  touched={touched.price}
                />
                <InputForm
                  id="quantity"
                  label="Cantidad"
                  placeholder="10"
                  value={values.quantity}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  error={errors.quantity}
                  touched={touched.quantity}
                />
              </Section>
              <Section>
                <InputForm
                  id="description"
                  label="Descripción"
                  placeholder="platillo de la mejor..."
                  value={values.description}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  error={errors.description}
                  touched={touched.description}
                />
                <InputForm
                  id="waiting_time"
                  label="Tiempo de espera(*mins)"
                  placeholder="15"
                  value={values.waiting_time}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  error={errors.waiting_time}
                  touched={touched.waiting_time}
                />
              </Section>
              <Section>
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
                          src={getDish().image}
                          alt="photo-dish"
                        />
                      </ImageSection>
                    :
                      null
                  }
              </Section>
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

export default DishFormModal;
