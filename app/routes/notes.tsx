import { Outlet } from '@remix-run/react'
import { Logo } from '~/components/atoms/Logo'
import { Page } from '~/components/atoms/Page'
import { Navigation } from '~/components/molecules/Navigation'

export default function NotesRoute() {
  return (
    <Page>
        <header className="flex justify-between mx-3">
          <Logo size="small" />
          <Navigation className='mb-6 relative' />
        </header>
      <Outlet />
    </Page>
  )
}
