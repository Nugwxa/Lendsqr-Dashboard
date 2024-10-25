'use client'

// From Lucide Icons

export default function XIcon(props: Readonly<SvgProps>): JSX.Element {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
