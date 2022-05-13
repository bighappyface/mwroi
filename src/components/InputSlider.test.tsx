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
  const inputElement = screen.getAllByLabelText(/average ticket time/i) as HTMLInputElement[]
  expect(inputElement[0].value).toBe('50')
})

test('enforces minimum value', () => {
  render(slider)
  const inputElement = screen.getAllByLabelText(/average ticket time/i) as HTMLInputElement[]
  fireEvent.change(inputElement[0], {target: {value: '-9'}})
  fireEvent.focusOut(inputElement[0]);
  expect(inputElement[0].value).toBe('0')
})

test('enforces maximum value', () => {
  render(slider)
  const inputElement = screen.getAllByLabelText(/average ticket time/i) as HTMLInputElement[]
  fireEvent.change(inputElement[0], {target: {value: '10000'}})
  fireEvent.focusOut(inputElement[0]);
  expect(inputElement[0].value).toBe('100')
})
