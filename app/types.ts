import type { LinkProps } from '@remix-run/react'

export type FlagOptions = 'section_cv' | 'section_notes' | 'section_project';

export type ListLinkProps = {
  name: string
  to: LinkProps['to']
  featureFlag?: FlagOptions
}
