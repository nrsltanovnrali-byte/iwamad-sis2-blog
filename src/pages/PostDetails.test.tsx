
import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router'
import App from '../App'

test('like button works', async () => {
  const user = userEvent.setup()

  render(
    <MemoryRouter initialEntries={['/posts/1']}>
      <App />
    </MemoryRouter>
  )

  const button = screen.getByRole('button', {
    name: /like/i
  })

  expect(button).toHaveAttribute('aria-pressed', 'false')

  await user.click(button)

  expect(button).toHaveAttribute('aria-pressed', 'true')
  expect(button).toHaveTextContent('Liked')
})
