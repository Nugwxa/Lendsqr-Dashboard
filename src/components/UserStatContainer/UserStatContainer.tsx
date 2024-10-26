'use server'
import classNames from 'classnames'
import styles from './UserStatContainer.module.scss'

interface UserStatContainerProps extends React.ComponentPropsWithoutRef<'div'> {
  className?: string
  icon: React.ReactNode
  label: string
  value: string
  color: 'pink' | 'purple' | 'orange' | 'red'
}

/**
 * Renders a stat with an icon and label.
 * The icon's color is determined by the color prop.
 *
 *
 *  @extends {React.ComponentPropsWithoutRef<'div'>}
 * @param {string} [className] - Additional CSS classes to apply to the component.
 * @param {React.ReactNode} icon - The icon to display in the stat container.
 * @param {string} label - The label for the stat.
 * @param {string} value - The value of the stat.
 * @param {'pink' | 'purple' | 'orange' | 'red'} color - The color theme for the icon.
 */
export default async function UserStatContainer(
  props: Readonly<UserStatContainerProps>
) {
  const { className, icon, label, value, color, ...rest } = props

  // Dynamically generate the color class based on the `color` prop
  const iconColorClass = styles[`${color}Icon`]
  return (
    <div className={classNames(className, styles.statContainer)} {...rest}>
      <div className={classNames(styles.statContainerIcon, iconColorClass)}>
        {icon}
      </div>
      <div className={styles.statContainerLabel}>{label}</div>
      <div className={styles.statContainerValue}>{value}</div>
    </div>
  )
}
