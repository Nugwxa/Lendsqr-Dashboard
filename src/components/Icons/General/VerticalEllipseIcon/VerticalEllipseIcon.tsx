'use client'

export default function VerticalEllipseIcon(props: Readonly<SvgProps>) {
  const { width = 20, height = 20, ...rest } = props
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
      <g clipPath="url(#clip0_90_1855)">
        <path
          d="M10.0002 6.11117C10.9224 6.11117 11.6668 5.36672 11.6668 4.4445C11.6668 3.52228 10.9224 2.77783 10.0002 2.77783C9.07794 2.77783 8.3335 3.52228 8.3335 4.4445C8.3335 5.36672 9.07794 6.11117 10.0002 6.11117ZM10.0002 8.33339C9.07794 8.33339 8.3335 9.07783 8.3335 10.0001C8.3335 10.9223 9.07794 11.6667 10.0002 11.6667C10.9224 11.6667 11.6668 10.9223 11.6668 10.0001C11.6668 9.07783 10.9224 8.33339 10.0002 8.33339ZM10.0002 13.8889C9.07794 13.8889 8.3335 14.6334 8.3335 15.5556C8.3335 16.4778 9.07794 17.2223 10.0002 17.2223C10.9224 17.2223 11.6668 16.4778 11.6668 15.5556C11.6668 14.6334 10.9224 13.8889 10.0002 13.8889Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_90_1855">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
