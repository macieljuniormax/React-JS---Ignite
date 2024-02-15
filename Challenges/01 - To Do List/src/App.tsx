import { Header } from './components/Header'
import { Header as HeaderList } from './components/Task List/Header'
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

        <section>
          <HeaderList />

        </section>
      </main>
    </div>
  )
}

export default App
