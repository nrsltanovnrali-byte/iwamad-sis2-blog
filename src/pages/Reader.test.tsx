
import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import App from '../App'

test('reader page requires sign in', async () => {
  render(
    <MemoryRouter initialEntries={['/reader']}>
      <App />
    </MemoryRouter>
  )

  const heading = await screen.findByRole('heading', {
    name: 'Sign In'
  })

  expect(heading).toBeInTheDocument()

  expect(
    screen.queryByRole('heading', { name: 'Reader Room' })
  ).not.toBeInTheDocument()
})
