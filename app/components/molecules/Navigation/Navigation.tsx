import { NavLink } from '@remix-run/react'
import classNames from 'classnames'

import { navigationLinks } from '~/consts'
import { useFeatureFlags } from '~/utils'

import type { ListLinkProps } from '~/types'

type NavigationProps = {
  className?: string
  links?: ListLinkProps[]
}

export const Navigation = ({ className, links = navigationLinks }: NavigationProps) => {
  const { filterListLinksByFeatureFlag } = useFeatureFlags()

  return (
    <nav className={classNames('hidden md:block', className)} aria-label="Global">
      <ol className="flex space-x-2 lg:space-x-4">
        {links.filter(filterListLinksByFeatureFlag).map((link) => (
          <li key={link.name}>
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                classNames(
                  isActive ? 'bg-red-700 text-gray-50' : 'text-gray-100 hover:bg-gray-900 hover:text-gray-50',
                  'inline-flex items-center rounded-md bg-green-600 py-2 px-3 text-sm font-medium'
                )
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ol>
    </nav>
  )
}
