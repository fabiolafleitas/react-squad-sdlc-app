import { render, screen } from '@testing-library/react'
import App from '../App'

describe('App', () => {
  it('renders the application main title', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { level: 1, name: 'Vite + React' })
    ).toBeInTheDocument()
  })
})
