'use client'

export default function FilterIcon(props: Readonly<SvgProps>) {
  const { width = 16, height = 16, ...rest } = props
  // Ensure width and height are valid numbers
  const validWidth = typeof width === 'number' && !isNaN(width) ? width : 16
  const validHeight = typeof height === 'number' && !isNaN(height) ? height : 16

  return (
    <svg
      width={validWidth}
      height={validHeight}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M6.22222 13.3333H9.77778V11.5556H6.22222V13.3333ZM0 2.66667V4.44445H16V2.66667H0ZM2.66667 8.88889H13.3333V7.11111H2.66667V8.88889Z"
        fill="currentColor"
      />
    </svg>
  )
}
