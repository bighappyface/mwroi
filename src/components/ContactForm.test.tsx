import { render, screen, fireEvent } from '@testing-library/react'
import { axe } from 'jest-axe'
import ContactForm from './ContactForm'

it('should pass basic a11y checks', async () => {
  const { container } = render(<ContactForm />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})

test('renders the business information form', () => {
  render(<ContactForm />)
  const titleElement = screen.getAllByText(/interested in learning more/i)
  expect(titleElement[0]).toBeInTheDocument()
})

test('should enable the button when fields are filled', () => {
  render(<ContactForm />)
  const buttonElement = screen.getByText(/contact\!/i)
  expect(buttonElement).toBeInTheDocument()
  expect(buttonElement).toBeDisabled()

  const nameElement = screen.getByLabelText(/name/i) as HTMLInputElement
  expect(nameElement).toBeInTheDocument()
  fireEvent.change(nameElement, { target: { value: 'John Doe' } })

  const companyElement = screen.getByLabelText(/company/i) as HTMLInputElement
  expect(companyElement).toBeInTheDocument()
  fireEvent.change(companyElement, { target: { value: 'Moveworks' } })

  const emailElement = screen.getByLabelText(/email/i) as HTMLInputElement
  expect(emailElement).toBeInTheDocument()
  fireEvent.change(emailElement, { target: { value: 'contact@moveworks.com' } })

  expect(buttonElement).not.toBeDisabled()
})

test('should enable the button with a valid email', () => {
  render(<ContactForm />)
  const buttonElement = screen.getByText(/contact\!/i)
  expect(buttonElement).toBeDisabled()

  const nameElement = screen.getByLabelText(/name/i) as HTMLInputElement
  fireEvent.change(nameElement, { target: { value: 'John Doe' } })

  const companyElement = screen.getByLabelText(/company/i) as HTMLInputElement
  fireEvent.change(companyElement, { target: { value: 'Moveworks' } })

  const emailElement = screen.getByLabelText(/email/i) as HTMLInputElement

  fireEvent.change(emailElement, { target: { value: 'contact@gmail.com' } })
  expect(buttonElement).toBeDisabled()

  fireEvent.change(emailElement, { target: { value: 'contact@hotmail.com' } })
  expect(buttonElement).toBeDisabled()

  fireEvent.change(emailElement, { target: { value: 'contact@outlook.com' } })
  expect(buttonElement).toBeDisabled()

  fireEvent.change(emailElement, { target: { value: 'contact@moveworks.com' } })
  expect(buttonElement).not.toBeDisabled()
})
