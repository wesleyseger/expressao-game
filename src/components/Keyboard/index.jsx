import styles from './styles.module.scss';

import { BsBackspace } from 'react-icons/bs';

export function Keyboard({ onClick }) {
  return (
    <div className={styles.keyboardWrapper}>
      <div>
        <button>Q</button>
        <button>W</button>
        <button>E</button>
        <button>R</button>
        <button>T</button>
        <button>Y</button>
        <button>U</button>
        <button>I</button>
        <button>O</button>
        <button>P</button>
      </div>
      <div>
        <button>A</button>
        <button>S</button>
        <button>D</button>
        <button>F</button>
        <button>G</button>
        <button>H</button>
        <button>J</button>
        <button>K</button>
        <button>L</button>
        <button className={styles.backButton}><span><BsBackspace /></span></button>
      </div>
      <div>
        <button>Z</button>
        <button>X</button>
        <button>C</button>
        <button>V</button>
        <button>B</button>
        <button>N</button>
        <button>M</button>
        <button className={styles.enterButton} onClick={onClick()}>ENTER</button>
      </div>
    </div>
  )
}