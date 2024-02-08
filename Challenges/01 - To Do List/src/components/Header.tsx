import ToDoLogo from '../assets/to-do-rocket.svg';
import styles from './Header.module.css'

export function Header() {
  return(
    <header className={styles.header}>
      <img className={styles.logo} src={ToDoLogo} alt="Logo ToDo Rocket" />
      <div><span>to</span><span>do</span></div>
    </header>
  )
}