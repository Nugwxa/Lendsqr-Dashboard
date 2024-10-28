'use client'
import { formatNumberWithCommas } from '@/app/utils'
import { StarFilledIcon, StarIcon } from '@/components/Icons/General'
import classNames from 'classnames'
import Image from 'next/image'
import styles from './UserSummary.module.scss'
import UserSummaryNavLink from '../UserSummaryNavLink'

interface UserSummaryProps extends React.ComponentPropsWithoutRef<'section'> {
  className?: string
  user: UserDTO
}

/**
 * Displays a summary of the user's information and navigation links.
 *
 * @param {string} className - CSS class for custom styling. (optional)
 * @param {UserDTO} props.user - User data.
 *
 */
export default function UserSummary(
  props: Readonly<UserSummaryProps>
): JSX.Element {
  const { className, user, ...rest } = props
  return (
    <section className={classNames(className, styles.userSummary)} {...rest}>
      <div className={styles.userSummaryMain}>
        <Image
          src={'/assets/img/dashboard/profileImg.png'}
          width={100}
          height={100}
          alt="Profile Image"
        />

        {/* Display user's name and ID */}
        <div className={styles.userDetail}>
          <div className={styles.userDetailItem}>
            <div
              className={styles.mainText}
            >{`${user.firstName} ${user.lastName}`}</div>
            <div className={styles.subText}>{user.id}</div>
          </div>

          {/* Display user's tier level */}
          <div className={styles.userDetailItem}>
            <div className={classNames(styles.subText, styles.medium)}>
              User&apos;s Tier
            </div>

            <TierStars level={user.level} />
          </div>

          {/* Display user's bank balance and bank details */}
          <div className={styles.userDetailItem}>
            <div className={styles.mainText}>{`₦${formatNumberWithCommas(
              user.bank.balance
            )}`}</div>
            <div
              className={styles.subText}
            >{`${user.bank.id}/${user.bank.bankName}`}</div>
          </div>
        </div>
      </div>

      {/* Navigation links for user-related sections */}
      <div className={styles.userSummaryFooter}>
        <UserSummaryNavLink
          href={`/dashboard/users/${user.id}`}
          label="General Details"
        />

        <UserSummaryNavLink
          href={`/dashboard/users/${user.id}/documents`}
          label="Documents"
        />

        <UserSummaryNavLink
          href={`/dashboard/users/${user.id}/bank-details`}
          label="Bank Details"
        />

        <UserSummaryNavLink
          href={`/dashboard/users/${user.id}/loans`}
          label="Loans"
        />

        <UserSummaryNavLink
          href={`/dashboard/users/${user.id}/savings`}
          label="Savings"
        />

        <UserSummaryNavLink
          href={`/dashboard/users/${user.id}/app-and-system`}
          label="App and System"
        />
      </div>
    </section>
  )
}

/**
 * Renders a set of tiered stars indicating a user's level.
 *
 * @param {number} level - The level (1-3) indicating how many stars should be filled.
 *
 * @example
 * // Renders two filled stars and one empty star:
 * <TierStars level={2} />
 */
function TierStars(props: Readonly<{ level: number }>): JSX.Element {
  // Generate an array of 3 elements, mapping each to a filled or empty star based on level
  const stars = Array(3)
    .fill(0)
    .map((_, i) =>
      // Check if index i is less than the level, if so render a filled star, else an empty star
      i < props.level ? <StarFilledIcon key={i} /> : <StarIcon key={i} />
    )

  return <div className={styles.tierStars}>{stars}</div>
}
