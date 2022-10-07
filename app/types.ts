import type { LinkProps } from '@remix-run/react'

export type ListLinkProps = {
  name: string
  to: LinkProps['to']
}