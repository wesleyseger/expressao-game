import styles from './styles.module.scss';

export function Word({ letras, min, max }) {
  return (
    <div className={styles.wordWrapper}>
      {
        letras.slice(min, max).map((letra, i) => <span key={i} >{letra}</span>)
      }
    </div>
  )
}