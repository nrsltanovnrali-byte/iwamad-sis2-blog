
import { Routes, Route, NavLink, Outlet } from 'react-router'
import Home from './pages/Home'
import './App.css'

function Layout() {
  return (
    <>
      <header>
        <h2>Nurali.</h2>

        <nav>
          <NavLink to="/" end>Home</NavLink>
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
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
