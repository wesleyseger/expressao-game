import { Word } from '../Word';
import styles from './styles.module.scss';

export function WordsBox({ letras }) {
  return (
    <div className={styles.wordsBoxWrapper}>
      <Word letras={letras} min={0} max={5} />
      <Word letras={letras} min={5} max={10} />
      <Word letras={letras} min={10} max={15} />
      <Word letras={letras} min={15} max={20} />
      <Word letras={letras} min={20} max={25} />
      <Word letras={letras} min={25} max={30} />
    </div>
  )
}