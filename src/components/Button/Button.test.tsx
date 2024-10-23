import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Button from './Button'
import Link from 'next/link'

describe('Button Tests', () => {
  it('renders a button with children text', () => {
    const { container } = render(<Button>Click Me</Button>)
    expect(container.firstChild).toHaveTextContent(/click me/i)
  })

  it('renders a button with an icon', () => {
    const icon = <span role="icon">🙂</span>
    const { container } = render(<Button icon={icon}>Test Text</Button>)

    const button = container.firstChild as HTMLElement

    expect(button).toHaveTextContent(/Test Text/i)
    expect(button.querySelector("span[role='icon']")).toBeInTheDocument()
  })

  it('renders a button element by default', () => {
    const { container } = render(<Button>Default Button</Button>)
    expect(container.firstChild).toBeInstanceOf(HTMLButtonElement)
  })

  it('renders a NextJS Link component when "as" prop is provided', () => {
    const { container } = render(
      <Button as={Link} href="/dashboard">
        Custom Button
      </Button>
    )
    const link = container.querySelector('a')
    expect(link).toHaveTextContent(/custom button/i)
    expect(link).toHaveAttribute('href', '/dashboard')
  })

  it('applies the isWide class when isWide prop is true', () => {
    const { container } = render(<Button isWide>Wide Button</Button>)
    expect(container.firstChild).toHaveClass('isWide')
  })

  it('applies the isBold class when isBold prop is true', () => {
    const { container } = render(<Button isBold>Bold Button</Button>)
    expect(container.firstChild).toHaveClass('isBold')
  })

  it('applies strokeButton styles when mode is "stroke"', () => {
    const { container } = render(<Button mode="stroke">Stroke Button</Button>)
    expect(container.firstChild).toHaveClass('strokeButton')
  })

  it('applies transparentButton styles when mode is "transparent"', () => {
    const { container } = render(
      <Button mode="transparent">Transparent Button</Button>
    )
    expect(container.firstChild).toHaveClass('transparentButton')
  })

  it('is disabled when disabled prop is passed', () => {
    const { container } = render(<Button disabled>Disabled Button</Button>)
    expect(container.firstChild).toBeDisabled()
  })

  it('should not be clickable when disabled', () => {
    const handleClick = jest.fn()
    const { container } = render(
      <Button onClick={handleClick} disabled>
        Disabled Click
      </Button>
    )
    const button = container.firstChild as HTMLElement
    button.click()
    expect(handleClick).not.toHaveBeenCalled()
  })

  it('renders without crashing when no props are provided', () => {
    const { container } = render(<Button />)
    expect(container.firstChild).toBeInTheDocument()
  })
})
