import { NavLink } from '@remix-run/react'
import classNames from 'classnames'

import { navigationLinks } from '~/consts'
import { useFeatureFlags } from '~/utils'

import type { ListLinkProps } from '~/types'

type NavigationProps = {
  links?: ListLinkProps[]
}

export const Navigation = ({ links = navigationLinks }: NavigationProps) => {
  const { filterListLinksByFeatureFlag } = useFeatureFlags()

  return (
    <nav className="hidden lg:flex lg:space-x-4" aria-label="Global">
      {links.filter(filterListLinksByFeatureFlag).map((link) => (
        <NavLink
          key={link.name}
          to={link.to}
          className={({ isActive }) =>
            classNames(
              isActive ? 'bg-red-700 text-gray-50' : 'text-gray-100 hover:bg-gray-900 hover:text-gray-50',
              'inline-flex items-center rounded-md py-2 px-3 text-sm font-medium'
            )
          }
        >
          {link.name}
        </NavLink>
      ))}
    </nav>
  )
}
