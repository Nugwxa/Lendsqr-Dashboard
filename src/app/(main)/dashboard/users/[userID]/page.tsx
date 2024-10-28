'use client'

import { formatLabel, formatNumberWithCommas } from '@/app/utils'
import { getUser } from '@/app/data/user'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import classNames from 'classnames'
import PageContentItem from './_components/PageContentItem'
import styles from './page.module.scss'

type Params = {
  userID: string
}

export default function Page() {
  const [user, setUser] = useState<UserDTO | null>(null)
  const [loading, setLoading] = useState(true)

  const { userID } = useParams<Params>()

  useEffect(() => {
    async function fetchUser() {
      if (userID) {
        const savedUser = localStorage.getItem(`user-${userID}`)
        if (savedUser) {
          setUser(JSON.parse(savedUser))
          setLoading(false)
        } else {
          try {
            const userData = await getUser(userID)
            if (userData) {
              setUser(userData)
              localStorage.setItem(`user-${userID}`, JSON.stringify(userData))
            }
          } catch (error) {
            console.error('Failed to fetch user data:', error)
          } finally {
            setLoading(false)
          }
        }
      } else {
        setLoading(false)
      }
    }
    fetchUser()
  }, [userID])

  if (loading) {
    return <div>Loading...</div>
  }
  if (!user) return <p>No user data</p> // This should never happen but just in case
  return (
    <>
      {/* Personal Information */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Personal Information</h2>

        <div className={styles.sectionContent}>
          <PageContentItem
            title="Full Name"
            text={`${user.firstName} ${user.lastName}`}
          />

          <PageContentItem title="Phone Number" text={user.phoneNumber} />
          <PageContentItem
            title="Email Address"
            text={user.email.toLowerCase()}
            breakWord
          />
          <PageContentItem title="Bvn" text={user.bvn} />
          <PageContentItem
            title="Gender"
            text={user.gender ?? 'Not specified'}
            capitalize
          />
          <PageContentItem title="Marital Status" text={user.maritalStatus} />
          <PageContentItem
            title="Children"
            text={user.hasChildren ? 'Yes' : 'None'}
          />
          <PageContentItem title="Type of Residence" text={user.residence} />
        </div>
      </section>

      {/* Education and Employment */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Education and Employment</h2>

        <div className={classNames(styles.sectionContent, styles.fourLayout)}>
          <PageContentItem
            title="Level of Education"
            text={user.educationLevel}
          />

          <PageContentItem
            title="Employment Status"
            text={user.employmentStatus}
          />

          <PageContentItem
            title="Sector of Employment"
            text={user.employmentSector}
          />

          <PageContentItem
            title="Duration of Employment"
            text={`${user.employmentYears} ${formatLabel(
              user.employmentYears,
              'Year'
            )}`}
          />

          <PageContentItem
            title="Office Email"
            text={user.officeEmail ?? 'N/A'}
            breakWord
          />

          <PageContentItem title="Monthly Income" text={user.monthlyIncome} />
          <PageContentItem
            title="Loan Repayment"
            text={formatNumberWithCommas(
              user.loans.reduce(
                (accumulator, currentValue) => accumulator + currentValue,
                0
              )
            )}
          />
        </div>
      </section>

      {/* Socials */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Socials</h2>

        <div className={classNames(styles.sectionContent)}>
          <PageContentItem
            title="Twitter"
            text={user.socials.twitter ? `@${user.socials.twitter}` : 'N/A'}
          />

          <PageContentItem
            title="Facebook"
            text={user.socials.facebook ?? 'N/A'}
          />

          <PageContentItem
            title="Instagram"
            text={
              user.socials.instagram
                ? `@${user.socials.instagram?.toLocaleLowerCase()}`
                : 'N/A'
            }
          />
        </div>
      </section>

      {/* Guarantor */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Guarantor</h2>

        {user.guarantors.length > 0 ? (
          user.guarantors.map((guarantor) => {
            return (
              <div
                key={guarantor.email}
                className={classNames(styles.sectionContent)}
              >
                <PageContentItem
                  title="Full Name"
                  text={`${guarantor.firstName} ${guarantor.lastName}`}
                />

                <PageContentItem
                  title="Phone Number"
                  text={guarantor.phoneNumber}
                />

                <PageContentItem
                  title="Email Address"
                  text={guarantor.email.toLowerCase()}
                  breakWord
                />

                <PageContentItem
                  title="Relationship"
                  text={guarantor.relationship}
                  breakWord
                />
              </div>
            )
          })
        ) : (
          <p>No guarantor</p>
        )}
      </section>
    </>
  )
}
