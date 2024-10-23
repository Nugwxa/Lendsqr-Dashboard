'use client'
import classNames from 'classnames'
import styles from './PasswordInput.module.scss'
import { useState } from 'react'
interface PasswordInputProps
  extends Omit<React.ComponentPropsWithoutRef<'input'>, 'type'> {
  //Prevent anyone from overwriting the type.
  className?: string
}

/**
 * A custom password input component that allows users to enter a password with an option to toggle visibility.
 *
 * @param {string} className - Additional class names to apply to the input for additional styling. (optional)
 *
 *
 * @example
 * <PasswordInput required name="password" id="password" placeholder="Password"/>
 */

export default function PasswordInput(
  props: Readonly<PasswordInputProps>
): JSX.Element {
  // Destructure props
  const { className, ...rest } = props

  const [showPassword, setShowPassword] = useState<boolean>(false)

  function toggleShowPassword() {
    setShowPassword((prev) => !prev)
  }

  return (
    <div className={styles.passwordInput}>
      <input
        className={classNames(className, styles.passwordInputField)}
        type={showPassword ? 'text' : 'password'}
        {...rest}
      />
      <button
        type="button"
        aria-label={showPassword ? 'Hide password' : 'Show password'}
        className={styles.passwordInputToggle}
        onClick={toggleShowPassword}
      >
        {showPassword ? 'Hide' : 'Show'}
      </button>
    </div>
  )
}
