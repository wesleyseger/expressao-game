import { Word } from '../Word';
import styles from './styles.module.scss';

export function WordsBox() {
  return (
    <div className={styles.wordsBoxWrapper}>
      <Word />
      <Word />
      <Word />
      <Word />
      <Word />
      <Word />
    </div>
  )
}