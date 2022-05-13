import { render, screen } from '@testing-library/react'
import App from './App'

test('renders the top bar with demo request link', () => {
  render(<App />)
  const logoElement = screen.getByText(/^moveworks$/i)
  expect(logoElement).toBeInTheDocument()

  const linkElement = screen.getByText(/demo request/i)
  expect(linkElement).toBeInTheDocument()
  expect(linkElement).toHaveAttribute(
    'href',
    'https://www.moveworks.com/request-demo',
  )
})

test('renders the footer with accurate copyright year', () => {
  render(<App />)
  const copyrightElement = screen.getByText(/moveworks, inc./i)
  expect(copyrightElement).toBeInTheDocument()
  const currentYear = new Date().getFullYear().toString()
  expect(copyrightElement).toHaveTextContent(currentYear)
})

test('renders the preamble', () => {
  render(<App />)
  const preambleElement = screen.getByText(/See your ROI with Moveworks/i)
  expect(preambleElement).toBeInTheDocument()
})

test('renders the definitions', () => {
  render(<App />)
  const definitionsElement = screen.getAllByText(/A couple of definitions/i)
  expect(definitionsElement[0]).toBeInTheDocument()
})
