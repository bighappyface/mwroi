import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import BusinessInfoForm from './BusinessInfoForm'

expect.extend(toHaveNoViolations);

it('should pass basic a11y checks', async () => {
  const { container } = render(<BusinessInfoForm/>)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})


test('renders the business information form', () => {
  render(<BusinessInfoForm />)
  const titleElement = screen.getAllByText(/^business information$/i)
  expect(titleElement[0]).toBeInTheDocument()
})
