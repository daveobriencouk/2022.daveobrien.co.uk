import { Link } from '@remix-run/react'

import { Container } from '~/components/atoms/Container'
import { Logo } from '~/components/atoms/Logo'
import { Page } from '~/components/atoms/Page'
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

export default function IndexRoute() {
  const { checkSomeFeatureFlags, filterListLinksByFeatureFlag } = useFeatureFlags()

  return (
    <Page>
      <header className="overflow-hidden">
        <Navigation className='mb-6 mr-3' />
        <Container>
          <Logo />
        </Container>
      </header>
      <Container>
        <main>
          <article>
            <section className="prose mb-8 font-body">
              <h2>Ahoy. I'm Dave, and I'm a Frontend Engineer. </h2>

              <p>Add copy here</p>

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

            {false && (
              <section className="prose max-w-none lg:prose-xl">
                <h3>I've worked with</h3>

                <ul className="not-prose flex w-full list-none flex-wrap justify-center gap-2 p-0">
                  <li className="h-12 w-28 bg-zinc-200 p-2 text-center text-sm">Vodafone</li>
                  <li className="h-12 w-28 bg-zinc-200 p-2 text-center text-sm">VOXI</li>
                  <li className="h-12 w-28 bg-zinc-200 p-2 text-center text-sm">MMT Digital</li>
                  <li className="h-12 w-28 bg-zinc-200 p-2 text-center text-sm">Maersk</li>
                  <li className="h-12 w-28 bg-zinc-200 p-2 text-center text-sm">Virgin Media</li>
                  <li className="h-12 w-28 bg-zinc-200 p-2 text-center text-sm">NTL:Telewest</li>
                  <li className="h-12 w-28 bg-zinc-200 p-2 text-center text-sm">Telewest</li>
                </ul>
              </section>
            )}
          </article>
        </main>
      </Container>
    </Page>
  )
}
