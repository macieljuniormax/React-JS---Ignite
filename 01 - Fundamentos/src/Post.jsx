import PropTypes from 'prop-types';

Post.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export function Post(props) {
  return (
    <div>
      <strong>{props.author}</strong>
      <p>{props.content}</p>
    </div>
  )
}

