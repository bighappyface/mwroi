import { render } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import App from './App'

expect.extend(toHaveNoViolations);

it('should pass basic a11y checks', async () => {
  const { container } = render(<App/>)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})