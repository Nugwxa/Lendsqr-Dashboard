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

type UserBankAccountDetails = {
  id: string
  balance: number
  bankName: string
}

type UserAccountStatus = 'inactive' | 'pending' | 'blacklisted' | 'active'
type UserMaritalStatus = 'Single' | 'Married' | 'Divorced'
type UserResidenceType = 'flat' | "Parent's Apartment" | 'Owned'
type UserEducationLevel = 'B.Sc' | 'Secondary School' | "Master's"
type UserEmploymentStatus = 'Employed' | 'Unemployed' | 'Self Employed'
type UserEmploymentSector = 'FinTech' | 'Finance' | 'Music' | 'Agric'

type UserMonthlyIncome =
  | 'Less than ₦50,000.00'
  | '₦50,000.00 - ₦100,000.00'
  | '₦100,000.01 - ₦199,999.99'
  | '₦200,000.00 - ₦400,000.00'
  | 'More than ₦400,000.00'

type UserSocials = {
  twitter?: string
  facebook?: string
  instagram?: string
}

type GuarantorRelationship =
  | 'Sister'
  | 'Brother'
  | 'Partner'
  | 'Friend'
  | 'Parent'

interface Guarantor {
  firstName: string
  lastName: string
  phoneNumber: string
  email: string
  relationship: GuarantorRelationship
}

interface UserDTO {
  id: string
  firstName: string
  lastName: string
  status: UserAccountStatus
  email: string
  maritalStatus: UserMaritalStatus
  bvn: string
  bank: UserBankAccountDetails
  gender?: 'male' | 'female'
  hasChildren: boolean
  username: string
  phoneNumber: string
  organisation: string
  registrationDate: Date
  educationLevel: UserEducationLevel
  employmentStatus: UserEmploymentStatus
  employmentSector: UserEmploymentSector
  employmentYears: number
  officeEmail?: string
  monthlyIncome: UserMonthlyIncome
  loans: number[]
  socials: UserSocials
  guarantors: Guarantor[]
  savings: number[]
}
