import { Post } from "./Post"
import { Header } from "./components/header/Header"
import "./global.css"
import styles from "./App.module.css"

export function App() {
  return (
    <div>
      <Header></Header>

      <div className={styles.wrapper}>
        <aside>
          sidebar
        </aside>
        <main>
          <Post author="Maciel Ferreira" 
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nisi minima beatae adipisci! Dignissimos tempore 
                      magnam voluptate quisquam assumenda nisi eos, ipsam aliquid deleniti consequatur delectus eius, ad eaque recusandae.">
          </Post>
          <Post author="DIego Fernandes" 
                content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, sapiente numquam culpa officiis laboriosam voluptatibus. 
                        Rerum perferendis cumque dolores numquam suscipit reprehenderit veniam sit, debitis nostrum consequatur maiores aliquid quasi?">
          </Post>
        </main>
      </div>
      
    </div>
  )
}

