// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface ActionResponse<T = any> {
  success: boolean
  message: string
  data?: T
  isIdle?: boolean
}

interface SvgProps extends React.SVGProps<SVGSVGElement> {
  width?: number
  height?: number
}
