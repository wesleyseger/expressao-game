
import styles from './styles.module.scss';

import { Modal } from 'react-bootstrap';

import example1 from '../../assets/example1.png';
import example2 from '../../assets/example2.png';
import example3 from '../../assets/example3.png';

export function InstructionsModal({ show, onHide }) {
  return (
    <Modal
      size="lg"
      centered
      variant="success"
      show={show}
      onHide={onHide}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          Instruções
        </Modal.Title>
      </Modal.Header>
      <Modal.Body closeButton
        className={styles.instructionsModalWrapper}
      >
        <h4>Olá, seja bem vindo ao Expressão!</h4>
        <p>
          Descubra a palavra certa em 6 tentativas.
          Depois de cada tentativa, as peças mostram o quão perto você está da solução.
        </p>
        <img src={example1} alt="" />
        <p>A letra <b>"T"</b> faz parte da palavra e está na posição correta.</p>
        <img src={example2} alt="" />
        <p>A letra <b>"O"</b> faz parte da palavra mas em outra posição.</p>
        <img src={example3} alt="" />
        <p>A letra <b>"G"</b> não faz parte da palavra.</p>
        <p>
          As palavras podem possuir letras repetidas.
        </p>
      </Modal.Body>
    </Modal>
  );
}