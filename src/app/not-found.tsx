import Button from '@/components/Button'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find the requested page</p>
      <Button as={Link} href="/">
        Return Home
      </Button>
    </div>
  )
}
