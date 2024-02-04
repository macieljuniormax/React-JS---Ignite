import { Paragraph } from '@phosphor-icons/react'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function Post({ author, content, publishedAt }) {
  const publishedDateFormatted = format(
    publishedAt,
    "dd 'de' LLLL 'de' yyyy 'às' HH:mm'h'",
    { locale: ptBR },
  )

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

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

      <form className={styles.componentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário"></textarea>

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment src="https://github.com/diego3g.png" />
        <Comment src="https://github.com/macieljuniormax.png" />
        <Comment src="https://github.com/diego3g.png" />
      </div>
    </article>
  )
}
