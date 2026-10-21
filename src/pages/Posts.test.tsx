
import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import Posts from './Posts'
import { posts } from '../data/posts'

test('shows all blog posts', () => {
  render(
    <MemoryRouter>
      <Posts />
    </MemoryRouter>
  )

  const cards = screen.getAllByRole('article')

  expect(cards).toHaveLength(posts.length)
})
