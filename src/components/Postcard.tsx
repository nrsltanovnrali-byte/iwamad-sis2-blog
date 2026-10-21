
import { Link } from 'react-router'
import type { Post } from '../data/posts'

function PostCard({ post }: { post: Post }) {
  return (
    <article className="post-card">
      <h2>{post.title}</h2>
      <p>{post.description}</p>

      <Link to={`/posts/${post.id}`}>
        Read more
      </Link>
    </article>
  )
}

export default PostCard
