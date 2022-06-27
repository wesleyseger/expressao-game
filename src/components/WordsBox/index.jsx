import { Word } from '../Word';
import styles from './styles.module.scss';

export function WordsBox({ letters }) {
  return (
    <div className={styles.wordsBoxWrapper} id="wordsPanel">
      <Word word={letters.slice(0, 5)} />
      <Word word={letters.slice(5, 10)} />
      <Word word={letters.slice(10, 15)} />
      <Word word={letters.slice(15, 20)} />
      <Word word={letters.slice(20, 25)} />
      <Word word={letters.slice(25, 30)} />
    </div>
  )
}