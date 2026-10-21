
import { useState } from 'react'
import {
  Routes,
  Route,
  NavLink,
  Outlet,
  Navigate
} from 'react-router'

import Home from './pages/Home'
import Posts from './pages/Posts'
import PostDetails from './pages/PostDetails'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import SignIn from './pages/SignIn'
import Reader from './pages/Reader'
import './App.css'

function Layout() {
  return (
    <>
      <header>
        <h2>Nurali.</h2>

        <nav>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/posts">Posts</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/reader">Reader Room</NavLink>
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

function ProtectedRoute({ isSignedIn }: { isSignedIn: boolean }) {
  if (!isSignedIn) {
    return <Navigate to="/signin" replace />
  }

  return <Outlet />
}

function App() {
  const [likes, setLikes] = useState<Record<number, boolean>>({})
  const [isSignedIn, setIsSignedIn] = useState(false)

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

        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />

        <Route
          path="/signin"
          element={
            <SignIn onSignIn={() => setIsSignedIn(true)} />
          }
        />

        <Route
          element={<ProtectedRoute isSignedIn={isSignedIn} />}
        >
          <Route
            path="/reader"
            element={
              <Reader onSignOut={() => setIsSignedIn(false)} />
            }
          />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
