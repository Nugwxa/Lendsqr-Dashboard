'use client'

// From Lucide Icons

export default function MenuIcon(props: Readonly<SvgProps>): JSX.Element {
  const { width = 24, height = 24, ...rest } = props

  // Ensure width and height are valid numbers
  const validWidth = typeof width === 'number' && !isNaN(width) ? width : 24
  const validHeight = typeof height === 'number' && !isNaN(height) ? height : 24
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={validWidth}
      height={validHeight}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}
