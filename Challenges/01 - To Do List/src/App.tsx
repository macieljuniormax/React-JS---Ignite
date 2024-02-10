import { Header } from './components/Header'
import { Input } from './components/Input'
import styles from './App.module.css'

function App() {

  return (
    <div>
      <Header />
      <main className={styles.wraper}>
        <section className={styles.taskCreator}>
          <Input />
        </section>
      </main>
    </div>
  )
}

export default App
