import authStyles from '@/styles/authStyles.module.scss'
import Image from 'next/image'
import LendsqrLogo from '@/components/LendsqrLogo'
import Link from 'next/link'
import LoginForm from './_components/LoginForm'

export default async function Page() {
  return (
    <main className={authStyles.auth}>
      <nav className={authStyles.authNav}>
        <Link href={'#'}>
          <LendsqrLogo />
        </Link>
      </nav>
      <div className={authStyles.authIllustration}>
        <div className={authStyles.authIllustrationImage}>
          <Image
            fill
            priority
            sizes="(max-width: 768px) 768px"
            src={'/assets/img/login/pablo-sign-in.png'}
            alt="Auth page illustration"
          />
        </div>
      </div>

      <section className={authStyles.authForm}>
        <div className={authStyles.authFormHeading}>
          <h1 className={authStyles.authFormHeadingTitle}>Welcome!</h1>
          <p className={authStyles.authFormHeadingSubTitle}>
            Enter details to login.
          </p>
        </div>

        <LoginForm />
      </section>
    </main>
  )
}
