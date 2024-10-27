import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react'
import { useRouter, useSearchParams } from 'next/navigation'
import Pagination from './Pagination'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  useSearchParams: jest.fn(),
}))

describe('Pagination Component', () => {
  let mockPush: jest.Mock
  let mockSearchParams: URLSearchParams

  beforeEach(() => {
    mockPush = jest.fn()
    mockSearchParams = new URLSearchParams()
    ;(useRouter as jest.Mock).mockReturnValue({ push: mockPush })
    ;(useSearchParams as jest.Mock).mockReturnValue(mockSearchParams)
  })

  it('renders the pagination component correctly', () => {
    const { container } = render(<Pagination totalPages={5} />)
    expect(container.querySelectorAll('button[data-page]')).toHaveLength(5)
  })

  it('disables the previous button on the first page', () => {
    const { container } = render(<Pagination totalPages={5} />)
    const prevButton = container.querySelector('[aria-label="previous"]')
    expect(prevButton).toBeDisabled()
  })

  it('disables the next button on the last page', () => {
    const { container } = render(<Pagination totalPages={5} />)
    const nextButton = container.querySelector('[aria-label="next"]')

    // Move to the last page and check if next is disabled
    fireEvent.click(container.querySelector('[data-page="5"]')!)
    expect(nextButton).toBeDisabled()
  })

  it('navigates to the next page when the "next" button is clicked', () => {
    const { container } = render(<Pagination totalPages={5} />)
    const nextButton = container.querySelector('[aria-label="next"]')
    fireEvent.click(nextButton!)

    expect(mockPush).toHaveBeenCalledWith('?page=2')
  })

  it('navigates to the previous page when the "previous" button is clicked', () => {
    const { container } = render(<Pagination totalPages={5} />)
    fireEvent.click(container.querySelector('[data-page="3"]')!)

    const prevButton = container.querySelector('[aria-label="previous"]')
    fireEvent.click(prevButton!)
    expect(mockPush).toHaveBeenCalledWith('?page=2')
  })

  it('renders ellipses for large page ranges', () => {
    const { container } = render(<Pagination totalPages={20} />)

    const nextButton = container.querySelector('[aria-label="next"]')
    fireEvent.click(nextButton!) // Move to page 2
    fireEvent.click(nextButton!) // Move to page 3
    fireEvent.click(nextButton!) // Move to page 4

    expect(container.querySelectorAll('[data-ellipsis="true"]')).toHaveLength(2)
  })

  it('initialises page based on URL query parameters', () => {
    mockSearchParams = new URLSearchParams({ page: '3' })
    ;(useSearchParams as jest.Mock).mockReturnValue(mockSearchParams)

    const { container } = render(<Pagination totalPages={5} />)
    const activeButton = container.querySelector('.active')
    expect(activeButton).toHaveAttribute('data-page', '3')
  })

  it('updates the URL query parameter on page change', () => {
    const { container } = render(<Pagination totalPages={5} />)
    fireEvent.click(container.querySelector('[data-page="4"]')!)
    expect(mockPush).toHaveBeenCalledWith('?page=4')
  })

  it('prevents navigation below page 1', () => {
    const { container } = render(<Pagination totalPages={5} />)
    const prevButton = container.querySelector('[aria-label="previous"]')

    fireEvent.click(prevButton!)
    expect(mockPush).not.toHaveBeenCalled()
  })
})