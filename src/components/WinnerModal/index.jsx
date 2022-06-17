
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

export function WinnerModal({ show, onHide, word, attempts, handleRestart }) {

  function restartGame() {
    onHide();
    setTimeout(() => handleRestart(), 100)
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
      <Modal.Body className={styles.winnerModalWrapper}>
        <span className={styles.tag}>{ATTEMPTS_WORDS[attempts - 1]}</span>

        <h3>Parabéns!</h3>
        <h5>Você acertou a expressão!</h5>
        <Word letras={[...word]} />

        <span className={styles.attempts}>
          <h5>Tentativas:</h5>
          <span><b>{attempts}</b><small> / 6</small></span>
        </span>

        <Button variant="success" onClick={() => restartGame()}>Jogar novamente</Button>
      </Modal.Body>
    </Modal>
  );
}