import styles from './Empty.module.css'

export function Empty() {
  return (
    <div className={styles.container}>
      <div></div>
      <div></div>
    </div>
  )
}