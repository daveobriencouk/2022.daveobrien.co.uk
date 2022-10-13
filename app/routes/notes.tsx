import { Outlet } from '@remix-run/react'
import { Container } from '~/components/atoms/Container'
import { Logo } from '~/components/atoms/Logo'
import { Page } from '~/components/atoms/Page'
import { Hero } from '~/components/molecules/Hero'
import { Navigation } from '~/components/molecules/Navigation'

export default function NotesRoute() {
  return (
    <Page>
      <header>
        <Container className="mb-8 flex items-end" isFlushBelowSmall={true}>
          <Hero
            image={{
              src: 'https://user-images.githubusercontent.com/1500684/157774694-99820c51-8165-4908-a031-34fc371ac0d6.jpg',
              alt: 'Sonic Youth On Stage',
            }}
          >
            <Logo />
          </Hero>
          <Navigation className='pb-4 pl-4 lg:pb-4 lg:pl-4' />
        </Container>
      </header>
      <Outlet />
    </Page>
  )
}