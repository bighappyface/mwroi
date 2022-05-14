import { render, screen, fireEvent } from '@testing-library/react'
import { axe } from 'jest-axe'
import InputSlider from './InputSlider'

const slider = (
  <InputSlider
    defaultValue={50}
    minValue={0}
    maxValue={100}
    label="Average Ticket Time"
    labelShort="ticket-resolution-time"
  />
)

it('should pass basic a11y checks', async () => {
  const { container } = render(slider)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})

test('renders the various properties', () => {
  render(slider)
  const labelElement = screen.getByText(/average ticket time/i)
  expect(labelElement).toBeInTheDocument()
})

test('sets the default value', () => {
  render(slider)
  const inputElement = screen.getAllByLabelText(
    /average ticket time/i,
  ) as HTMLInputElement[]
  expect(inputElement[0].value).toBe('50')
})
