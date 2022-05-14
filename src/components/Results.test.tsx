import { render, screen, fireEvent } from '@testing-library/react'
import { axe } from 'jest-axe'
import Results from './Results'

it('should pass basic a11y checks', async () => {
  const { container } = render(<Results />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})
