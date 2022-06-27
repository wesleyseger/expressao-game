import { useState } from 'react';

import styles from './styles.module.scss';

import { InstructionsModal } from '../InstructionsModal';
import { ConfirmModal } from '../ConfirmModal';

import { IoHelpCircleSharp } from 'react-icons/io5'
import { VscDebugRestart } from 'react-icons/vsc'

export function Header({ resetWord, setBlockGame }) {
  const [instructionsModalShow, setInstructionsModalShow] = useState(false);
  const [confirmModal, setConfirmModalShow] = useState(false);

  return (
    <div className={styles.headerWrapper}>
      <span>
        <label onClick={() => { setInstructionsModalShow(true); setBlockGame(true) }}>
          <IoHelpCircleSharp size={32} />
        </label>
        <h1>EXPRESSÃO</h1>
        <label onClick={() => { setConfirmModalShow(true); setBlockGame(true) }}>
          <VscDebugRestart size={32} />
        </label>
      </span>
      <InstructionsModal
        show={instructionsModalShow}
        onHide={() => { setInstructionsModalShow(false); setBlockGame(false); }}
      />
      <ConfirmModal
        show={confirmModal}
        onHide={() => { setConfirmModalShow(false); setBlockGame(false); }}
        onConfirm={() => resetWord()}
        message="Tem certeza que deseja resetar a palavra?"
      />
    </div>
  )
}