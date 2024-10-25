'use client'

export default function DropdownIcon(props: Readonly<SvgProps>): JSX.Element {
  const { width = 20, height = 20, ...rest } = props

  // Ensure width and height are valid numbers
  const validWidth = typeof width === 'number' && !isNaN(width) ? width : 20
  const validHeight = typeof height === 'number' && !isNaN(height) ? height : 20
  return (
    <svg
      width={validWidth}
      height={validHeight}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.39229 12.0516C9.72823 12.425 10.2751 12.4219 10.6079 12.0516L13.4829 8.857C13.8188 8.48434 13.6852 8.182 13.1845 8.182H6.81567C6.31489 8.182 6.18363 8.48746 6.51723 8.857L9.39229 12.0516Z"
        fill="currentColor"
      />
    </svg>
  )
}
