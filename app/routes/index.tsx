import { Link, useLocation } from '@remix-run/react'

import { ConditionalWrap } from '~/components/atoms/ConditionalWrap'
import { Container } from '~/components/atoms/Container'
import { Hero } from '~/components/molecules/Hero'
import { Navigation } from '~/components/molecules/Navigation'

import { useOptionalUser } from '~/utils'

import type { ListLinkProps } from '~/types'

const navigationLinks: ListLinkProps[] = [
  { name: 'CV', to: '/cv' },
  { name: 'Notes', to: '/notes' },
  { name: 'Projects', to: '/projects' },
]

const Logo = () => {
  const { pathname } = useLocation()

  return (
    <h1>
      <ConditionalWrap condition={pathname !== '/'} wrap={(children) => <Link to="/">{children}</Link>}>
        <img
          src="https://user-images.githubusercontent.com/1500684/158298926-e45dafff-3544-4b69-96d6-d3bcc33fc76a.svg"
          alt="Remix"
          className="h-full w-[144px]"
        />
      </ConditionalWrap>
    </h1>
  )
}

const readMoreLinks: ListLinkProps[] = [
  {
    name: 'My CV - extended readme',
    to: '/cv',
  },
  {
    name: "Some projects I've worked on",
    to: '/projects',
  },
  {
    name: 'Notes from the code face',
    to: '/notes',
  },
]

export default function Index() {
  const user = useOptionalUser()

  return (
    <Container>
      <Hero
        className="mb-4"
        image={{
          src: 'https://user-images.githubusercontent.com/1500684/157774694-99820c51-8165-4908-a031-34fc371ac0d6.jpg',
          alt: 'Sonic Youth On Stage',
        }}
      >
        <Logo />
        <Navigation links={navigationLinks} />
      </Hero>

      {/* Content */}
      <div className="mx-auto max-w-7xl py-2 px-4 sm:px-6 lg:px-8">
        <div className="prose max-w-none lg:prose-xl">
          <div className="max-w-[65ch]">
            <h2>Hello. I'm Dave, and I'm a JavaScript engineer.</h2>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati non odio amet quas beatae ullam porro?
              Omnis magnam adipisci quaerat error. Cumque, voluptate. Voluptates esse velit qui doloremque quas magni?
            </p>

            <h3>Read more</h3>

            <ul>
              {readMoreLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.to}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <h3>I've worked with</h3>

          <ul className="not-prose flex flex-wrap w-full list-none justify-center gap-2 p-0">
            <li className="w-28 h-12 text-center p-2 text-sm bg-slate-200">Vodafone</li>
            <li className="w-28 h-12 text-center p-2 text-sm bg-slate-200">VOXI</li>
            <li className="w-28 h-12 text-center p-2 text-sm bg-slate-200">MMT Digital</li>
            <li className="w-28 h-12 text-center p-2 text-sm bg-slate-200">Maersk</li>
            <li className="w-28 h-12 text-center p-2 text-sm bg-slate-200">Virgin Media</li>
            <li className="w-28 h-12 text-center p-2 text-sm bg-slate-200">NTL:Telewest</li>
            <li className="w-28 h-12 text-center p-2 text-sm bg-slate-200">Telewest</li>
          </ul>
        </div>
      </div>
    </Container>
  )
}
