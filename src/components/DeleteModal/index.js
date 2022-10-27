import { useState } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Spinner } from "reactstrap";
import { destroy } from "../../services";

function DeleteModal({ id, handleClose, title, description, setParent, isOpen, endpoint, setName }) {
  const [isLoading, setIsLoading] = useState(false);
  
  const onClose = () => {
    handleClose();
    setName(null);
  }

  const handleDelete = async () => {
    setIsLoading(true);
    try {
      await destroy(endpoint, id);
      setParent(data => data.filter(i => i.id !== id));
      setTimeout(() => setIsLoading(false), 500);
      onClose();
    }catch(e) {
      console.log(e.message);
      setIsLoading(false);
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
        Eliminar { title }
      </ModalHeader>
      <ModalBody>
        { description }
      </ModalBody>
      <ModalFooter>
        <Button
          disabled={isLoading}
          onClick={() => handleDelete()}
          style={{fontWeight: "600"}}
          color="danger"
        >
          {
            isLoading
            ?
            <>
              <Spinner
                size="sm"
              />
              {" "}
              Eliminando..
            </>
            :
            "Eliminar"
          }
        </Button>
        <Button
          onClick={() => onClose()}
          style={{fontWeight: "600"}}
          color="warning"
        >
          Cancelar
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default DeleteModal;
