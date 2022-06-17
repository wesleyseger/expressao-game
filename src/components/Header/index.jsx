import { useState } from 'react';

import styles from './styles.module.scss';

import { IoHelpCircleSharp } from 'react-icons/io5'
import { VscDebugRestart } from 'react-icons/vsc'

import { InstructionsModal } from '../InstructionsModal';
import { ConfirmModal } from '../ConfirmModal';

export function Header({ resetaPalavra }) {
  const [instructionsModalShow, setInstructionsModalShow] = useState(false);
  const [confirmModal, setConfirmModalShow] = useState(false);

  return (
    <div className={styles.headerWrapper}>
      <span>
        <button onClick={() => setInstructionsModalShow(true)}>
          <IoHelpCircleSharp size={32} />
        </button>
        <h1>EXPRESSÃO</h1>
        <button onClick={() => setConfirmModalShow(true)}>
          <VscDebugRestart size={32} />
        </button>
      </span>
      <InstructionsModal show={instructionsModalShow} onHide={() => setInstructionsModalShow(false)} />
      <ConfirmModal
        show={confirmModal}
        onHide={() => setConfirmModalShow(false)}
        onConfirm={() => resetaPalavra()}
        message="Tem certeza que deseja resetar a palavra?"
      />
    </div>
  )
}