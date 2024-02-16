import { Header } from './components/Header'
import { Header as HeaderList } from './components/Task List/Header'
import { Input } from './components/Input'
import styles from './App.module.css'
import { CreateButton } from './components/CreateButton'
import { Empty } from './components/Task List/Empty'

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
          <Empty />
        </section>
      </main>
    </div>
  )
}

export default App
