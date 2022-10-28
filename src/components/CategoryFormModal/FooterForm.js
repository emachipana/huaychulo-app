/** @jsxImportSource @emotion/react */
import { Button, ModalFooter, Spinner } from "reactstrap";
import { ButtonStyle } from "../SessionModal/styles";

function FooterForm({ isValid, isLoading, editableItem, handleClose }) {
  return (
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
              editableItem
              ?
              "Actualizando..."
              :
              "Agregando..."
            }
          </>
          :
          editableItem
          ?
          "Actualizar"
          :
          "Agregar"
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
  );
}

export default FooterForm;
