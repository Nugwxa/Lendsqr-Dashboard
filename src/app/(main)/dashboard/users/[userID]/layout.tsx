'use client'
import { ArrowLeftLongIcon } from '@/components/Icons/General'
import { getUser } from '@/app/data/user'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Button from '@/components/Button'
import classNames from 'classnames'
import Link from 'next/link'
import NotFound from '@/app/not-found'
import styles from './layout.module.scss'
import UserSummary from './_components/UserSummary'

type Params = {
  userID: string
}
interface LayoutProps {
  children: React.ReactNode
}

export default function Layout(props: Readonly<LayoutProps>) {
  const { children } = props

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
  if (!user) return <NotFound />

  return (
    <div className={styles.layout}>
      <section className={styles.layoutHeading}>
        <Button
          icon={<ArrowLeftLongIcon />}
          as={Link}
          href={'/dashboard/users'}
          className={styles.layoutHeadingNavLink}
          mode="transparent"
        >
          Back to Users
        </Button>

        <div className={styles.layoutHeadingActionRow}>
          <h1 className={'dashboardTitle'}>User Details</h1>

          <div className={styles.layoutHeadingActionRowButtons}>
            <Button
              className={classNames(styles.actionButton, styles.redButton)}
              mode="stroke"
            >
              Blacklist User
            </Button>
            <Button
              className={classNames(styles.actionButton, styles.tealButton)}
              mode="stroke"
            >
              Activate User
            </Button>
          </div>
        </div>
      </section>

      <UserSummary className={styles.layoutSection} user={user} />

      <section className={styles.layoutSection}>{children}</section>
    </div>
  )
}
