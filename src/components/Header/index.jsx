import styles from './styles.module.scss';

import { IoHelpCircleSharp } from 'react-icons/io5'
import { VscDebugRestart } from 'react-icons/vsc'

export function Header({ resetaPalavra }) {
  return (
    <div className={styles.headerWrapper}>
      <span>
        <button><IoHelpCircleSharp size={32}/></button>
        <h1>EXPRESSÃO</h1>
        <button onClick={() => resetaPalavra()}><VscDebugRestart size={32}/></button>
      </span>
    </div>
  )
}