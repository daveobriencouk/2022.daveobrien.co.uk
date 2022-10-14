import type { ListLinkProps } from '~/types'

export const navigationLinks: ListLinkProps[] = [
  // {
  //   name: 'Home',
  //   to: '/',
  // },
  {
    name: 'CV',
    to: '/cv',
    featureFlag: 'section_cv',
  },
  {
    name: 'Notes',
    to: '/notes',
    featureFlag: 'section_notes',
  },
  {
    name: 'Projects',
    to: '/projects',
    featureFlag: 'section_project',
  },
]
