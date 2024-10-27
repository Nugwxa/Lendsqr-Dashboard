'use client'

import { CalenderIcon, FilterIcon } from '@/components/Icons/General'
import { ChevronDownIcon } from '@/components/Icons/Sidebar'
import Button from '@/components/Button'
import Popover from '@/components/Popover'
import styles from './TableFilterButton.module.scss'

interface TableFilterButtonProps {
  label: string
}

/**
 * Renders a button that opens a popover containing various filter fields used for filtering data within a table.
 *
 * @param {string} label - The label for the button, displayed next to the filter icon.
 */
export default function TableFilterButton(
  props: Readonly<TableFilterButtonProps>
): JSX.Element {
  const { label } = props
  return (
    <Popover
      className={styles.popover}
      trigger={
        <span className={styles.headingToggle}>
          {label} <FilterIcon />
        </span>
      }
    >
      <form>
        {/* Organization */}
        <div className={styles.inputWrapper}>
          <label htmlFor="organization">Organization</label>
          <div className={styles.inputWrapperContainer}>
            <select id="organization" defaultValue={''}>
              <option value="" disabled>
                Select
              </option>
              <option value={'lendsqr'}>Lendsqr </option>
            </select>

            <span className={styles.inputWrapperContainerIcon}>
              <ChevronDownIcon />
            </span>
          </div>
        </div>

        {/* Username */}
        <div className={styles.inputWrapper}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" placeholder="User" name="username" />
        </div>

        {/* Email */}
        <div className={styles.inputWrapper}>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" placeholder="Email" />
        </div>

        {/* Date */}
        <div className={styles.inputWrapper}>
          <label htmlFor="date">Date</label>

          <div className={styles.inputWrapperContainer}>
            <input
              data-placeholder="Date"
              className={styles.inputWrapperContainerDateInput}
              id="date"
              onFocus={(e) => (e.target.type = 'date')}
              onBlur={(e) => (e.target.type = 'text')}
              type="date"
              placeholder="Date"
            />

            <span className={styles.inputWrapperContainerIcon}>
              <CalenderIcon />
            </span>
          </div>
        </div>

        <div className={styles.inputWrapper}>
          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            type="text"
            name="phone"
            placeholder="Phone Number"
          />
        </div>

        <div className={styles.inputWrapper}>
          <label htmlFor="status">Status</label>

          <div className={styles.inputWrapperContainer}>
            <select id="status" defaultValue={''}>
              <option value="" disabled>
                Select
              </option>
              <option value={'active'}>Active</option>
              <option value={'inactive'}>Inactive</option>
              <option value={'pending'}>Pending</option>
              <option value={'active'}>Active</option>
              <option value={'blacklisted'}>Blacklisted</option>
            </select>

            <span className={styles.inputWrapperContainerIcon}>
              <ChevronDownIcon />
            </span>
          </div>
        </div>

        <div className={styles.actionButtons}>
          <Button type="button" isWide mode="stroke">
            Reset
          </Button>
          <Button type="button" isWide>
            Filter
          </Button>
        </div>
      </form>
    </Popover>
  )
}
