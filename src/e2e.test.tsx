import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

it('should calculate ROI when all forms are completed', async () => {
  const { container } = render(<App />)

  // Business Information
  let titleElement = screen.getAllByText(/^business information$/i)
  expect(titleElement[0]).toBeInTheDocument()

  let buttonElement = screen.getByText(/^next$/i)
  expect(buttonElement).toBeDisabled()

  const employeeElement = screen.getByLabelText(
    /employees/i,
  ) as HTMLInputElement
  fireEvent.change(employeeElement, { target: { value: '10000' } })

  const revenueElement = screen.getByLabelText(/revenue/i) as HTMLInputElement
  fireEvent.change(revenueElement, { target: { value: '1000000000' } })

  expect(buttonElement).not.toBeDisabled()
  fireEvent.click(buttonElement)

  // Service Desk Information
  titleElement = screen.getAllByText(/^service desk information$/i)
  expect(titleElement[0]).toBeInTheDocument()

  buttonElement = screen.getByText(/what\'s my roi/i)
  fireEvent.click(buttonElement)

  // Results
  titleElement = screen.getAllByText(/what\'s my roi/i)
  expect(titleElement[0]).toBeInTheDocument()

  titleElement = screen.getAllByText(/year 1 ticket impact/i)
  expect(titleElement[0]).toBeInTheDocument()

  titleElement = screen.getAllByText(/year 1 benefit/i)
  expect(titleElement[0]).toBeInTheDocument()

  const total = screen.getByText(/\$2,220,192/i)
  expect(total).toBeInTheDocument()
})
