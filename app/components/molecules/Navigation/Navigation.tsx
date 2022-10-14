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
    <nav className={classNames('relative z-50', className)} aria-label="Global">
      <ol className="flex justify-end space-x-1">
        {links.filter(filterListLinksByFeatureFlag).map((link) => (
          <li key={link.name}>
            <NavLink
              to={link.to}
              className={({ isActive }) => 
                classNames(
                  isActive ? 'bg-zinc-700 text-gray-50' : 'bg-zinc-400 text-gray-100 hover:bg-gray-900 hover:text-gray-50 hover:-translate-y-3',
                  'flex items-center pt-8 pb-1 px-2 text-md font-overlock font-thin',
                  '-translate-y-4'
                  // TODO: Add hover animation
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
