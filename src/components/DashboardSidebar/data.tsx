import {
  BadgePercentIcon,
  BankIcon,
  BreifcaseIcon,
  ChartIcon,
  ClipboardIcon,
  CoinsIcon,
  GalaxyIcon,
  HandSackIcon,
  HandshakeIcon,
  MoneySackIcon,
  PiggyBankIcon,
  ScrollIcon,
  SlidersIcon,
  TireIcon,
  TransactionIcon,
  UserCheckIcon,
  UserCogIcon,
  Users2Icon,
  UsersIcon,
  UserTimesIcon,
} from '../Icons/Sidebar'

type NavLink = {
  icon: JSX.Element
  label: string
  href: string
}

type NavGroup = {
  groupName: string
  links: NavLink[]
}

/**
 * An array of navigation link groups for the dashboard's sidebar.
 * @type {NavGroup[]}
 */

export const navLinks: NavGroup[] = [
  {
    groupName: 'Customers',
    links: [
      {
        label: 'Users',
        icon: <UsersIcon />,
        href: '/dashboard/users',
      },
      {
        label: 'Guarantors',
        icon: <Users2Icon />,
        href: '/dashboard/customers/guarantors',
      },
      {
        label: 'Loans',
        icon: <MoneySackIcon />,
        href: '/dashboard/customers/loans',
      },
      {
        label: 'Decision Models',
        icon: <HandshakeIcon />,
        href: '/dashboard/customers/decision-models',
      },
      {
        label: 'Savings',
        icon: <PiggyBankIcon />,
        href: '/dashboard/customers/savings',
      },
      {
        label: 'Loan Requests',
        icon: <HandSackIcon />,
        href: '/dashboard/customers/loan-requests',
      },
      {
        label: 'Whitelist',
        icon: <UserCheckIcon />,
        href: '/dashboard/customers/whitelist',
      },
      {
        label: 'Karma',
        icon: <UserTimesIcon />,
        href: '/dashboard/customers/karma',
      },
    ],
  },
  {
    groupName: 'Businesses',
    links: [
      {
        label: 'Organization',
        icon: <BreifcaseIcon />,
        href: '/dashboard/businesses/organization',
      },
      {
        label: 'Loan Products',
        icon: <HandSackIcon />,
        href: '/dashboard/businesses/loan-products',
      },
      {
        label: 'Savings Products',
        icon: <BankIcon />,
        href: '/dashboard/businesses/savings-products',
      },
      {
        label: 'Fees and Charges',
        icon: <CoinsIcon />,
        href: '/dashboard/businesses/fees-charges',
      },
      {
        label: 'Transactions',
        icon: <TransactionIcon />,
        href: '/dashboard/businesses/transactions',
      },
      {
        label: 'Services',
        icon: <GalaxyIcon />,
        href: '/dashboard/businesses/services',
      },
      {
        label: 'Service Account',
        icon: <UserCogIcon />,
        href: '/dashboard/businesses/service-account',
      },
      {
        label: 'Settlements',
        icon: <ScrollIcon />,
        href: '/dashboard/businesses/settlements',
      },
      {
        label: 'Reports',
        icon: <ChartIcon />,
        href: '/dashboard/businesses/reports',
      },
    ],
  },
  {
    groupName: 'Settings',
    links: [
      {
        label: 'Preferences',
        icon: <SlidersIcon />,
        href: '/dashboard/settings/preferences',
      },
      {
        label: 'Fees and Pricing',
        icon: <BadgePercentIcon />,
        href: '/dashboard/settings/fees-pricing',
      },
      {
        label: 'Audit Logs',
        icon: <ClipboardIcon />,
        href: '/dashboard/settings/audit-logs',
      },
      {
        label: 'Systems Messages',
        icon: <TireIcon />,
        href: '/dashboard/settings/systems-messages',
      },
    ],
  },
]
