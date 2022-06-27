import useEventListener from '../../hooks/Keyboard';

import styles from './styles.module.scss';

import { BsBackspace } from 'react-icons/bs';

const acceptedKeys = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M']

export function Keyboard({ submitWord, onKeyIn, backspace }) {

  //receive the key pressed on keyboard
  const handler = ({ key }) => {
    let curKey = key.toUpperCase();

    if (acceptedKeys.includes(curKey))
      onKeyIn(curKey);

    if (curKey === 'BACKSPACE')
      backspace();

    if (curKey === 'ENTER')
      submitWord();
  };

  useEventListener("keydown", handler);

  var firstLineButtons = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  var secondLineButtons = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
  var thirdLineButtons = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];

  return (
    <div className={styles.keyboardWrapper} id="keyboard">
      <div>
        {firstLineButtons.map((button, i) => <label key={i} id={button} onClick={() => onKeyIn(button)}>{button}</label>)}
      </div>
      <div>
        {secondLineButtons.map((button, i) => <label key={i} id={button} onClick={() => onKeyIn(button)}>{button}</label>)}
        <label className={styles.backButton} onClick={() => backspace()}><span><BsBackspace /></span></label>
      </div>
      <div>
        {thirdLineButtons.map((button, i) => <label key={i} id={button} onClick={() => onKeyIn(button)}>{button}</label>)}
        <label className={styles.enterButton} onClick={() => submitWord()}>ENTER</label>
      </div>
    </div>
  )
}