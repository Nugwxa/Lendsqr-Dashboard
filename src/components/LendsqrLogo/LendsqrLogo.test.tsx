import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import LendsqrLogo from './LendsqrLogo'

describe('LendsqrLogo Tests', () => {
  // Test if the component renders correctly
  test('renders with default size (174x36)', () => {
    const { container } = render(<LendsqrLogo />)

    // Select the SVG element
    const svg = container.querySelector('svg')
    expect(svg).toHaveAttribute('width', '174')
    expect(svg).toHaveAttribute('height', '36')
  })

  // Test if the component renders with custom width and height
  test('renders with custom size (200x50)', () => {
    const { container } = render(<LendsqrLogo width={200} height={50} />)

    const svg = container.querySelector('svg')
    expect(svg).toHaveAttribute('width', '200')
    expect(svg).toHaveAttribute('height', '50')
  })

  // Test if additional props are passed correctly
  test('renders with custom class name', () => {
    const { container } = render(<LendsqrLogo className="test-class" />)
    const svg = container.querySelector('svg')
    expect(svg).toHaveClass('test-class')
  })

  // Test if it handles invalid width/height correctly
  test('handles invalid width/height props correctly', () => {
    const { container } = render(
      <LendsqrLogo
        width={'invalid' as any}
        height={{ test: 'something' } as any}
      />
    )

    const svg = container.querySelector('svg')
    expect(svg).toHaveAttribute('width', '174')
    expect(svg).toHaveAttribute('height', '36')
  })
})
