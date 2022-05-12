import { render, screen } from '@testing-library/react'
import App from './App'

test('renders the top bar with demo request link', () => {
  render(<App />)
  const logoElement = screen.getByText(/moveworks/i)
  expect(logoElement).toBeInTheDocument()

  const linkElement = screen.getByText(/demo request/i)
  expect(linkElement).toBeInTheDocument()
  expect(linkElement).toHaveAttribute(
    'href',
    'https://www.moveworks.com/request-demo',
  )
})
