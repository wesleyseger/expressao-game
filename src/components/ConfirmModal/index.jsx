import { Modal, Button } from 'react-bootstrap';

export function ConfirmModal({ show, onHide, onConfirm, message }) {
  return (
    <Modal
      size="md"
      centered
      variant="success"
      show={show}
      onHide={onHide}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          Confirmar
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          {message}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={() => { onConfirm(); onHide() }}>Confirmar</Button>
        <Button variant="danger" onClick={() => onHide()}>Cancelar</Button>
      </Modal.Footer>
    </Modal>
  );
}