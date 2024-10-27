'use client'

import Button from '@/components/Button'
import {
  EyeIcon,
  UserCheck2Icon,
  UserTimes2Icon,
  VerticalEllipseIcon,
} from '@/components/Icons/General'
import Popover from '@/components/Popover'
import styles from './UserActionsDropdown.module.scss'
import Link from 'next/link'

interface UserActionsDropdownProps {
  userID: string
}

/**
 * Renders a button that opens a popover containing actions that can be performed on a user.
 *
 * @param {string} userID - The id of the user to be affected.
 */
export default function UserActionsDropdown(
  props: Readonly<UserActionsDropdownProps>
) {
  const { userID } = props
  return (
    <Popover
      className={styles.popover}
      trigger={
        <span className={styles.trigger}>{<VerticalEllipseIcon />}</span>
      }
    >
      <Button
        as={Link}
        href={`/dashboard/users/${userID}`}
        icon={<EyeIcon />}
        mode="transparent"
      >
        View Details
      </Button>
      <Button icon={<UserTimes2Icon />} mode="transparent">
        Blacklist User
      </Button>
      <Button icon={<UserCheck2Icon />} mode="transparent">
        Activate User
      </Button>
    </Popover>
  )
}
