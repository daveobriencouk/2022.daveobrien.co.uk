import { Outlet } from '@remix-run/react'
import { Container } from '~/components/atoms/Container'
import { Navigation } from '~/components/molecules/Navigation'

import { navigationLinks } from '~/consts'

export default function NotesRoute() {
  return (
    <Container>
      <Navigation links={navigationLinks} />
      <Outlet />
    </Container>
  )
}