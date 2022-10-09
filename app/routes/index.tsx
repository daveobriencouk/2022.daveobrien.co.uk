import { Link, useLocation } from '@remix-run/react'

import { ConditionalWrap } from '~/components/atoms/ConditionalWrap'
import { Container } from '~/components/atoms/Container'
import { Page } from '~/components/atoms/Page'
import { Hero } from '~/components/molecules/Hero'
import { Navigation } from '~/components/molecules/Navigation'
import { useFeatureFlags } from '~/utils'

import type { ListLinkProps } from '~/types'

const readMoreLinks: ListLinkProps[] = [
  {
    name: 'My CV - extended readme',
    to: '/cv',
    featureFlag: 'section_cv',
  },
  {
    name: "Some projects I've worked on",
    to: '/projects',
    featureFlag: 'section_project',
  },
  {
    name: 'Notes from the code face',
    to: '/notes',
    featureFlag: 'section_notes',
  },
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

export default function IndexRoute() {
  const { checkSomeFeatureFlags, filterListLinksByFeatureFlag } = useFeatureFlags()

  return (
    <Page>
      <header>
        <Container className="mb-8" isFlushBelowSmall={true}>
          <Hero
            image={{
              src: 'https://user-images.githubusercontent.com/1500684/157774694-99820c51-8165-4908-a031-34fc371ac0d6.jpg',
              alt: 'Sonic Youth On Stage',
            }}
          >
            <Logo />
            <Navigation />
          </Hero>
        </Container>
      </header>
      <Container>
        <main>
          <article>
            <section className="prose mb-8 lg:prose-xl">
              <h2>Hello. I'm Dave, and I'm a JavaScript engineer.</h2>

              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati non odio amet quas beatae ullam
                porro? Omnis magnam adipisci quaerat error. Cumque, voluptate. Voluptates esse velit qui doloremque quas
                magni?
              </p>

              {checkSomeFeatureFlags(['section_cv', 'section_notes', 'section_project']) && (
                <>
                  <h3>Read more</h3>

                  <ul>
                    {readMoreLinks.filter(filterListLinksByFeatureFlag).map((link) => (
                      <li key={link.name}>
                        <Link to={link.to}>{link.name}</Link>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </section>

            {/* <section className="prose max-w-none lg:prose-xl">
              <h3>I've worked with</h3>

              <ul className="not-prose flex w-full list-none flex-wrap justify-center gap-2 p-0">
                <li className="h-12 w-28 bg-slate-200 p-2 text-center text-sm">Vodafone</li>
                <li className="h-12 w-28 bg-slate-200 p-2 text-center text-sm">VOXI</li>
                <li className="h-12 w-28 bg-slate-200 p-2 text-center text-sm">MMT Digital</li>
                <li className="h-12 w-28 bg-slate-200 p-2 text-center text-sm">Maersk</li>
                <li className="h-12 w-28 bg-slate-200 p-2 text-center text-sm">Virgin Media</li>
                <li className="h-12 w-28 bg-slate-200 p-2 text-center text-sm">NTL:Telewest</li>
                <li className="h-12 w-28 bg-slate-200 p-2 text-center text-sm">Telewest</li>
              </ul>
            </section> */}
          </article>
        </main>
      </Container>

      {/* Content */}
      {/* <div className="mx-auto max-w-7xl py-2 px-4 sm:px-6 lg:px-8">
        <div className="prose max-w-none lg:prose-xl">
          <div className="max-w-[65ch]">



        </div>
      </div> */}
    </Page>
  )
}
