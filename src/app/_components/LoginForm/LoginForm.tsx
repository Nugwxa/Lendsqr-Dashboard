'use client'
import { handleLoginForm } from './actions'
import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import authStyles from '@/styles/authStyles.module.scss'
import Button from '@/components/Button'
import Link from 'next/link'
import PasswordInput from '@/components/PasswordInput'

export default function LoginForm() {
  const initialState: ActionResponse = {
    success: false,
    message: '',
    isIdle: true,
  }
  const [formState, formAction] = useActionState(handleLoginForm, initialState)

  return (
    <form action={formAction} className={authStyles.authFormBody}>
      {!formState.isIdle && (
        <div className={authStyles.authFormBodyFeedback}>
          {formState.message}
        </div>
      )}
      <input
        className={authStyles.authFormBodyInput}
        type="email"
        name="email"
        required
        placeholder="Email"
      />
      <PasswordInput
        required
        className={authStyles.authFormBodyInput}
        name="password"
        placeholder="Password"
      />

      <Link href={'#'} className={authStyles.authFormBodyLink}>
        FORGOT PASSWORD?
      </Link>

      <SubmitButton />
    </form>
  )
}

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" disabled={pending} isBold isWide>
      LOG IN
    </Button>
  )
}
