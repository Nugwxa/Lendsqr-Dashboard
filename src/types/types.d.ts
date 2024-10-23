interface ActionResponse<T = any> {
  success: boolean
  message: string
  data?: T
  isIdle?: boolean
}
