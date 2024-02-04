import { Avatar } from './Avatar'
import { Comment } from './Comment'
import { useState } from 'react'
import styles from './Post.module.css'

import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function Post({ author, content, publishedAt }) {
  const [comments, setComments] = useState(['Post muito bacana, hein!?'])
  const [newCommentText, setNewCommentText] = useState('')
  const publishedDateFormatted = format(
    publishedAt,
    "dd 'de' LLLL 'de' yyyy 'às' HH:mm'h'",
    { locale: ptBR },
  )

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  function handleCreateNewComment(event) {
    event.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange(event) {
    setNewCommentText(event.target.value)
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line, index) => {
          if (line.type === 'link') {
            return (
              <p key={index}>
                <a href="">{line.content}</a>
              </p>
            )
          } else if (line.type === '#link') {
            return (
              <a key={index} href="">
                #novoprojeto{' '}
              </a>
            )
          }

          return <p key={index}>{line.content}</p>
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.componentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
        ></textarea>

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment, index) => {
          return (
            <div key={index}>
              <Comment content={comment} />
            </div>
          )
        })}
      </div>
    </article>
  )
}
