import { Outlet } from '@remix-run/react'
import { Container } from '~/components/atoms/Container'
import { Navigation } from '~/components/molecules/Navigation'

export default function NotesRoute() {
  return (
    <Container>
      <Navigation />
      <Outlet />
    </Container>
  )
}