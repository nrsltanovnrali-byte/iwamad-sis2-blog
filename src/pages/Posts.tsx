
import { posts } from '../data/posts'
import PostCard from '../components/PostCard'

function Posts() {
  return (
    <section>
      <h1>My Blog Posts</h1>

      <p>
        Here you can read my articles about
        university, technology, and my life.
      </p>

      <div className="posts-grid">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  )
}

export default Posts
