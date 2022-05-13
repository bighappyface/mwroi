import { render, screen, fireEvent } from '@testing-library/react'
import { axe } from 'jest-axe'
import ServiceDeskInfoForm from './ServiceDeskInfoForm'

it('should pass basic a11y checks', async () => {
  const { container } = render(<ServiceDeskInfoForm />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})

test('renders the business information form', () => {
  render(<ServiceDeskInfoForm />)
  const titleElement = screen.getAllByText(/^service desk information$/i)
  expect(titleElement[0]).toBeInTheDocument()
})
