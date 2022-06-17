
import styles from './styles.module.scss';

import { Modal, Button } from 'react-bootstrap';
import { Word } from '../Word';

const ATTEMPTS_WORDS = [
  'Inacreditável!',
  'Fantástico!',
  'Incrível!',
  'Excelente!',
  'Muito bom!',
  'Ufa!'
]

export function LoseModal({ show, onHide, word, handleRestart }) {

  function restartGame() {
    onHide();
    setTimeout(() => handleRestart, 100)
  }

  return (
    <Modal
      size="md"
      centered
      variant="success"
      show={show}
      onHide={onHide}
    >
      <Modal.Header closeButton />
      <Modal.Body className={styles.loseModalWrapper}>
        <span className={styles.tag}>Que pena!</span>

        <h3>Não foi dessa vez!</h3>
        <h5>A palavra era: </h5>
        <Word letras={[...word]} />

        <Button variant="success" onClick={() => restartGame()}>Tentar novamente</Button>

      </Modal.Body>
    </Modal>
  );
}