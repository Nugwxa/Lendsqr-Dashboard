'use client'

import { ChangeEvent, useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { ChevronDownIcon } from '../Icons/Sidebar'
import styles from './PageLimitControl.module.scss'

interface PageLimitControlProps {
  totalCount: number
}

/**
 * A component for controlling the number of items displayed per page in a paginated list.
 * Updates the URL parameters when the selected limit changes, allowing for pagination based on the limit.
 *
 * @component
 * @param totalCount - The total number of entries(e.g users) in the database.
 * @returns {JSX.Element} - The rendered `PageLimitControl` component.
 */
export default function PageLimitControl(
  props: Readonly<PageLimitControlProps>
) {
  const { totalCount } = props
  const router = useRouter()
  const searchParams = useSearchParams()
  const [perPage, setPerPage] = useState<number>(10)

  useEffect(() => {
    const urlPerPage = parseInt(searchParams.get('perPage') ?? '10', 10)

    // Ensure perPage is a valid number and greater than 0
    setPerPage(urlPerPage > 0 ? urlPerPage : 10)
  }, [searchParams])

  /**
   * Handles changes to the items per page selector, updating the URL query parameters.
   * Resets the current page to 1 whenever the items per page value changes.
   *
   * @param {ChangeEvent<HTMLSelectElement>} e - The event triggered by the select input.
   */
  function handleChange(e: ChangeEvent<HTMLSelectElement>) {
    const selectedValue = Number(e.target.value)

    // Ensure selected value is valid
    if (selectedValue <= 0) return

    const params = new URLSearchParams(window.location.search)
    params.set('perPage', selectedValue.toString())
    params.set('page', '1')

    router.push(`${window.location.pathname}?${params.toString()}`)
    setPerPage(selectedValue)
  }

  return (
    <div className={styles.pageLimit}>
      Showing{' '}
      <div className={styles.pageLimitSelector}>
        <select onChange={handleChange} value={perPage}>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option> {/* Corrected value here */}
        </select>
        <ChevronDownIcon className={styles.pageLimitSelectorIcon} />
      </div>
      of {totalCount}
    </div>
  )
}
