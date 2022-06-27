import styles from './styles.module.scss';

export function Word({ word }) {
  return (
    <div className={styles.wordWrapper}>
      {word.map((letter, i) => <span key={i} >{letter}</span>)}
    </div>
  )
}