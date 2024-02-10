import { Header } from './components/Header'
import { Input } from './components/Input'
import styles from './App.module.css'
import { CreateButton } from './components/CreateButton'

function App() {
  return (
    <div>
      <Header />
      <main className={styles.wrapper}>
        <section className={styles.taskCreator}>
          <Input />
          <CreateButton />
        </section>
      </main>
    </div>
  )
}

export default App
