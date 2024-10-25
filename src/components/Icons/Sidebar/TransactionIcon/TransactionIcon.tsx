'use client'

export default function TransactionIcon(props: Readonly<SvgProps>) {
  const { width = 16, height = 18, ...rest } = props
  // Ensure width and height are valid numbers
  const validWidth = typeof width === 'number' && !isNaN(width) ? width : 16
  const validHeight = typeof height === 'number' && !isNaN(height) ? height : 18

  return (
    <svg
      width={validWidth}
      height={validHeight}
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M13.0001 5.94542V0.999364C13.0001 0.734985 12.8941 0.47999 12.7066 0.292506C12.5191 0.105022 12.2651 0 11.9998 0H1.0003C0.448119 0 0 0.447183 0 0.999364V16.9994C0 17.2647 0.104998 17.5187 0.292506 17.7062C0.480014 17.8937 0.735009 17.9997 1.0003 17.9997H11.9998C12.2651 17.9997 12.5191 17.8937 12.7066 17.7062C12.8941 17.5187 13.0001 17.2647 13.0001 16.9994V12.9446H11.9998V16.9994H1.0003V0.999364H11.9998V5.94542H13.0001Z"
        fill="currentColor"
      />
      <path
        d="M1.99951 13.9946H10.9993V14.9949H1.99951V13.9946Z"
        fill="currentColor"
      />
      <path
        d="M1.99951 2.49548H10.9993V3.49578H1.99951V2.49548Z"
        fill="currentColor"
      />
      <path
        d="M5.74967 15.4946C5.47406 15.4946 5.25 15.7187 5.25 15.9952C5.25 16.2708 5.47406 16.4949 5.74967 16.4949H7.24964C7.52619 16.4949 7.75025 16.2708 7.75025 15.9952C7.75025 15.7187 7.52619 15.4946 7.24964 15.4946H5.74967Z"
        fill="currentColor"
      />
      <path
        d="M10.9997 6.44507H6.49977V4.44543L2.50049 6.94475L6.49977 9.44501V7.44537H10.9997V6.44507Z"
        fill="currentColor"
      />
      <path
        d="M16.0001 9.44509L11.9999 6.94482V8.9454H7.5V9.94476H11.9999V11.9453L16.0001 9.44509Z"
        fill="currentColor"
      />
    </svg>
  )
}
