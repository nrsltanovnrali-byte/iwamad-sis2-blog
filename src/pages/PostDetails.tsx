
import { useParams, Link } from 'react-router'
import { posts } from '../data/posts'

type Props = {
  likes: Record<number, boolean>
  onLike: (id: number) => void
}

function PostDetails({ likes, onLike }: Props) {
  const { id } = useParams()

  const post = posts.find((item) => item.id === Number(id))

  if (!post) {
    return (
      <section>
        <h1>Post not found</h1>
        <p>Sorry, this post does not exist.</p>
        <Link to="/posts">Back to Posts</Link>
      </section>
    )
  }

  return (
    <article>
      <h1>{post.title}</h1>

      <p>{post.content}</p>

      <button
        type="button"
        aria-pressed={Boolean(likes[post.id])}
        onClick={() => onLike(post.id)}
      >
        {likes[post.id] ? '❤️ Liked' : '🤍 Like'}
      </button>

      <p>
        <Link to="/posts">Back to Posts</Link>
      </p>
    </article>
  )
}

export default PostDetails
