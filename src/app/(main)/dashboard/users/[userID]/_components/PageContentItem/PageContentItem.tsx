'use client'
import classNames from 'classnames'
import styles from './PageContentItem.module.scss'

interface PageContentItemProps {
  title: string
  text: string | number
  capitalize?: boolean
  breakWord?: boolean
}

export default function PageContentItem(props: Readonly<PageContentItemProps>) {
  const { title, text, capitalize = false, breakWord = false } = props
  return (
    <div className={styles.pageContent}>
      <div className={styles.pageContentTitle}>{title}</div>
      <div
        className={classNames(styles.pageContentText, {
          [styles.capitalize]: capitalize,
          [styles.breakWord]: breakWord,
        })}
      >
        {text}
      </div>
    </div>
  )
}
