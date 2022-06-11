import styles from './styles.module.scss';

import { Header } from '../../components/Header';
import { WordsBox } from '../../components/WordsBox';
import { Keyboard } from '../../components/Keyboard';

export function Home() {
  return (
    <div className={styles.homeWrapper}>
      <Header />
      <WordsBox />
      <Keyboard />
    </div>
  )
}