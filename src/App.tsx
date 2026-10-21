
import { useState } from 'react'
import { Routes, Route, NavLink, Outlet } from 'react-router'
import Home from './pages/Home'
import Posts from './pages/Posts'
import PostDetails from './pages/PostDetails'
import './App.css'

function Layout() {
  return (
    <>
      <header>
        <h2>Nurali.</h2>

        <nav>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/posts">Posts</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <p>© 2026 Nurali. All rights reserved.</p>
      </footer>
    </>
  )
}

function App() {
  const [likes, setLikes] = useState<Record<number, boolean>>({})

  function handleLike(id: number) {
    setLikes({ ...likes, [id]: !likes[id] })
  }

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route
          path="/posts/:id"
          element={<PostDetails likes={likes} onLike={handleLike} />}
        />
      </Route>
    </Routes>
  )
}

export default App
