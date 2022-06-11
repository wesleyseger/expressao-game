import styles from './styles.module.scss';

export function Word() {
  return (
    <div className={styles.wordWrapper}>
      <span className={styles.colorGreen}>Á</span>
      <span>U</span>
      <span>D</span>
      <span className={styles.colorYellow}>I</span>
      <span>O</span>
    </div>
  )
}