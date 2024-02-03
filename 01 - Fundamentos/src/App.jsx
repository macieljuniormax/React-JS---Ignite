import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

import './global.css'
import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com.br/macieljuniormax.png',
      name: 'Maciel Custódio',
      role: 'Web Developer',
    },
    content: [
      {
        type: 'parahraph',
        content: 'Fala galeraa 👋',
      },
      {
        type: 'parahraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      {
        type: '#link',
        content: '#novoprojeto',
      },
      {
        type: '#link',
        content: '#nlw',
      },
      {
        type: '#link',
        content: '#rocketseat',
      },
    ],
    publishedAt: new Date('2024-02-03 29:47 20:00:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com.br/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO Rocketseat',
    },
    content: [
      {
        type: 'parahraph',
        content: 'Fala galeraa 👋',
      },
      {
        type: 'parahraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      {
        type: '#link',
        content: '#novoprojeto',
      },
      {
        type: '#link',
        content: '#nlw',
      },
      {
        type: '#link',
        content: '#rocketseat',
      },
    ],
    publishedAt: new Date('2024-02-01 29:47 19:10:56'),
  },
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
