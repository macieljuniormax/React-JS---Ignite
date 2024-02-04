import { ThumbsUp, Trash } from '@phosphor-icons/react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment({ content, onDeleteComment }) {
  function handleDeletComment() {
    onDeleteComment(content)
  }
  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        className={styles.avatar}
        src="http://github.com/macieljuniormax.png"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Maciel Júnior</strong>
              <time
                title="01 de Fevereiro de 2024"
                dateTime="2024-02-01 21:06:00"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleDeletComment} title="Deletar">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
