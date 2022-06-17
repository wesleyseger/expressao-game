import styles from './styles.module.scss';

import { BsBackspace } from 'react-icons/bs';

export function Keyboard({ onClick, onKeyIn, backspace }) {

  var botoesPrimeiraLinha = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  var botoesSegundaLinha = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
  var botoesTerceiraLinha = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];

  return (
    <div className={styles.keyboardWrapper}>
      <div>
        {
          botoesPrimeiraLinha.map((botao, i) => <button key={i} onClick={() => onKeyIn(botao)}>{botao}</button>)
        }
      </div>
      <div>
        {
          botoesSegundaLinha.map((botao, i) => <button key={i} onClick={() => onKeyIn(botao)}>{botao}</button>)
        }
        <button className={styles.backButton} onClick={() => backspace()}><span><BsBackspace /></span></button>
      </div>
      <div>
        {
          botoesTerceiraLinha.map((botao, i) => <button key={i} onClick={() => onKeyIn(botao)}>{botao}</button>)
        }
        <button className={styles.enterButton} onClick={() => onClick()}>ENTER</button>
      </div>
    </div>
  )
}