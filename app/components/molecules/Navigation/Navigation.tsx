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
    <nav className={classNames('mb-6 -mt-2 relative z-50', className)} aria-label="Global">
      <ol className="flex justify-end space-x-1 max-w-screen-md mx-auto">
        {links.filter(filterListLinksByFeatureFlag).map((link) => (
          <li key={link.name}>
            <NavLink
              to={link.to}
              className={({ isActive }) => 
                classNames(
                  isActive ? 'bg-red-700 text-gray-50' : 'text-gray-100 hover:bg-gray-900 hover:text-gray-50 hover:translate-y-0.5',
                  'inline-flex items-center rounded-sm bg-zinc-400 pt-6 pb-1 px-2 text-md font-overlock font-thin',
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
