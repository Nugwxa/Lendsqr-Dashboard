import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import SearchIcon from './SearchIcon'

describe('SearhIcon Tests', () => {
  // Test if the component renders correctly
  test('renders with default size (14x14)', () => {
    const { container } = render(<SearchIcon />)

    // Select the SVG element
    const svg = container.querySelector('svg')
    expect(svg).toHaveAttribute('width', '14')
    expect(svg).toHaveAttribute('height', '14')
  })

  // Test if the component renders with custom width and height
  test('renders with custom size (200x200)', () => {
    const { container } = render(<SearchIcon width={200} height={200} />)

    const svg = container.querySelector('svg')
    expect(svg).toHaveAttribute('width', '200')
    expect(svg).toHaveAttribute('height', '200')
  })

  // Test if additional props are passed correctly
  test('renders with custom class name', () => {
    const { container } = render(<SearchIcon className="test-class" />)
    const svg = container.querySelector('svg')
    expect(svg).toHaveClass('test-class')
  })

  // Test if it handles invalid width/height correctly
  test('handles invalid width/height props correctly', () => {
    const { container } = render(
      <SearchIcon
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        width={'invalid' as any}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        height={{ test: 'something' } as any}
      />
    )

    const svg = container.querySelector('svg')
    expect(svg).toHaveAttribute('width', '14')
    expect(svg).toHaveAttribute('height', '14')
  })
})
