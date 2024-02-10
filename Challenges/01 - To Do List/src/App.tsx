import { Header } from './components/Header'
import { Input } from './components/Input'
import styles from './App.module.css'

function App() {

  return (
    <div>
      <Header />
      <main className={styles.wraper}>
          <Input />
      </main>
    </div>
  )
}

export default App
