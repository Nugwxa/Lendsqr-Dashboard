'use client'

export default function ChevronLeftIcon(props: Readonly<SvgProps>) {
  const { width = 14, height = 14, ...rest } = props
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
      <g opacity="1">
        <path
          d="M10.0061 11.0572C10.8472 11.8983 9.54344 13.1594 8.745 12.3183L3.99424 7.56753C3.61581 7.23121 3.61581 6.64276 3.99424 6.30644L8.61858 1.63996C9.45967 0.840975 10.7208 2.10261 9.87967 2.94316L5.8859 6.93694L10.0061 11.0572Z"
          fill="currentColor"
        />
      </g>
    </svg>
  )
}
