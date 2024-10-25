'use client'

export default function ChevronDownIcon(props: Readonly<SvgProps>) {
  const { width = 14, height = 14, ...rest } = props
  // Ensure width and height are valid numbers
  const validWidth = typeof width === 'number' && !isNaN(width) ? width : 14
  const validHeight = typeof height === 'number' && !isNaN(height) ? height : 14

  return (
    <svg
      width={validWidth}
      height={validHeight}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M11.0571 3.99391C11.8982 3.15281 13.1594 4.45656 12.3182 5.255L7.56747 10.0058C7.23115 10.3842 6.6427 10.3842 6.30638 10.0058L1.63989 5.38142C0.840914 4.54033 2.10255 3.27918 2.9431 4.12033L6.93688 8.1141L11.0571 3.99391Z"
        fill="currentColor"
      />
    </svg>
  )
}
