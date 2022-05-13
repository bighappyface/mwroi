import { render, screen, fireEvent } from '@testing-library/react'
import { axe } from 'jest-axe'
import BusinessInfoForm from './BusinessInfoForm'

it('should pass basic a11y checks', async () => {
  const { container } = render(<BusinessInfoForm />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})

test('renders the business information form', () => {
  render(<BusinessInfoForm />)
  const titleElement = screen.getAllByText(/^business information$/i)
  expect(titleElement[0]).toBeInTheDocument()
})

test('formats number of employees with commas', () => {
  render(<BusinessInfoForm />)
  const employeeElement = screen.getByLabelText(/employees/i) as HTMLInputElement
  expect(employeeElement).toBeInTheDocument()
  fireEvent.change(employeeElement, {target: {value: '10000'}})
  expect(employeeElement.value).toBe('10,000')
  fireEvent.change(employeeElement, {target: {value: '100000aaaa'}})
  expect(employeeElement.value).toBe('100,000')
})

test('formats revenue with curreny symbol and commas', () => {
  render(<BusinessInfoForm />)
  const revenueElement = screen.getByLabelText(/revenue/i) as HTMLInputElement
  expect(revenueElement).toBeInTheDocument()
  fireEvent.change(revenueElement, {target: {value: '10000'}})
  expect(revenueElement.value).toBe('$10,000')
  fireEvent.change(revenueElement, {target: {value: '100000aaaa'}})
  expect(revenueElement.value).toBe('$100,000')
})
