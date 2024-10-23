import '@testing-library/jest-dom'
import { fireEvent, render } from '@testing-library/react'
import PasswordInput from './PasswordInput'

describe('PasswordInput Tests', () => {
  test('renders input with type "password"', () => {
    const { container } = render(<PasswordInput />)

    const input = container.querySelector('input')
    expect(input).toHaveAttribute('type', 'password')
  })

  test('passes additional props to the input element', () => {
    const { container } = render(<PasswordInput placeholder="Enter password" />)

    const input = container.querySelector('input')
    expect(input).toHaveAttribute('placeholder', 'Enter password')
  })

  test('toggle button works as intended', () => {
    const { container } = render(<PasswordInput />)
    const input = container.querySelector('input')
    const toggleButton = container.querySelector('button')

    expect(toggleButton).not.toBeNull()

    if (toggleButton) {
      // Show the password
      fireEvent.click(toggleButton)
      expect(input).toHaveAttribute('type', 'text')
      expect(toggleButton).toHaveTextContent('Hide')

      // Hide the password
      fireEvent.click(toggleButton)
      expect(input).toHaveAttribute('type', 'password')
      expect(toggleButton).toHaveTextContent('Show')
    }
  })

  test('toggle button does not crash on repeated clicks', () => {
    const { container } = render(<PasswordInput />)
    const toggleButton = container.querySelector('button')

    expect(toggleButton).not.toBeNull()

    if (toggleButton) {
      // Click the button multiple times
      fireEvent.click(toggleButton) // Show
      fireEvent.click(toggleButton) // Hide
      fireEvent.click(toggleButton) // Show

      const input = container.querySelector('input')
      expect(input).toHaveAttribute('type', 'text')
      expect(toggleButton).toHaveTextContent('Hide')
    }
  })
})
