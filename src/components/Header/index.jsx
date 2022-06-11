import styles from './styles.module.scss';

import { IoHelpCircleSharp } from 'react-icons/io5'
import { VscDebugRestart } from 'react-icons/vsc'

export function Header() {
  return (
    <div className={styles.headerWrapper}>
      <span>
        <button><IoHelpCircleSharp size={32}/></button>
        <h1>EXPRESSÃO</h1>
        <button><VscDebugRestart size={32}/></button>
      </span>
    </div>
  )
}