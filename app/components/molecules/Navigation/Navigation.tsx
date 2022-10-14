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

  // TODO: Animate navigation in
  // TODO: Sort out font
  // TODO: Animate on hover

  return (
    <nav className={classNames('relative z-50', className)} aria-label="Global">
      <ol className="flex justify-end space-x-1">
        {links.filter(filterListLinksByFeatureFlag).map((link) => (
          <li key={link.name}>
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                classNames(
                  isActive
                    ? 'bg-red-700 text-stone-50'
                    : 'bg-stone-400 text-stone-100 hover:-translate-y-3 hover:bg-stone-900 hover:text-stone-50',
                  'text-md flex items-center px-2 pt-8 pb-1 font-overlock font-thin',
                  '-translate-y-4'
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
