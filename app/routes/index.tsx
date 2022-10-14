import { Link } from '@remix-run/react'

import { Container } from '~/components/atoms/Container'
import { Logo } from '~/components/atoms/Logo'
import { Page } from '~/components/atoms/Page'
import { Hero } from '~/components/molecules/Hero'
import { Navigation } from '~/components/molecules/Navigation'
import { useFeatureFlags } from '~/utils'

import stroke from '~/assets/stroke.svg'
import angleBracket from '~/assets/angle-bracket.svg'

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

const Lines = () => {
  const lines = [1, 2, 3, 4, 5, 6, 7, 8]
  return (
    <>
      {lines.map((line) => (
        <div key={line} className="absolute top-6 left-0 w-full h-1 bg-slate-700" />
      ))}
    </>
  )
}


export default function IndexRoute() {
  const { checkSomeFeatureFlags, filterListLinksByFeatureFlag } = useFeatureFlags()

  return (
    <Page>
      <header>
        <Navigation />
        <hgroup className="mb-12 flex flex-col items-center">
          <h1 className="flex flex-wrap justify-center gap-x-5 text-center font-display text-[9.26rem] relative left-[-11px] leading-[0.67em] tracking-tighter text-zinc-700">
            <span>Dave</span>
            <span className="relative text-zinc-500">
              <span className="relative z-20">O'Brien</span>
              <span className="absolute right-[-125px] bottom-[-40px] z-10 block w-[140px] text-base tracking-normal">
                <img src={stroke} alt="Decorative stroke for logo type" />
              </span>
              <span className="absolute right-[-38px] bottom-[5px] z-30 block w-[36px] text-base tracking-normal">
                <img src={angleBracket} alt="Decorative angle bracket for logo type" />
              </span>
            </span>
          </h1>
          <h2 className="oblique flex text-center font-overlock text-5xl text-zinc-400 font-normal">Frontend Engineer.</h2>
          {/* <Lines /> */}
        </hgroup>
        <Container className="mb-8" isFlushBelowSmall={true}>
          {/* <Hero
            image={{
              src: 'https://user-images.githubusercontent.com/1500684/157774694-99820c51-8165-4908-a031-34fc371ac0d6.jpg',
              alt: 'Sonic Youth On Stage',
            }}
          >
            <Logo />
            <Navigation />
          </Hero> */}
        </Container>
      </header>
      <Container>
        <main className='max-w-screen-md mx-auto'>
          <article>
            <section className="prose mb-8 font-body">
              <h2>Ahoy. I'm Dave, and I'm a Frontend Engineer. </h2>

              <p>
                Add copy here
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
                <li className="h-12 w-28 bg-zinc-200 p-2 text-center text-sm">Vodafone</li>
                <li className="h-12 w-28 bg-zinc-200 p-2 text-center text-sm">VOXI</li>
                <li className="h-12 w-28 bg-zinc-200 p-2 text-center text-sm">MMT Digital</li>
                <li className="h-12 w-28 bg-zinc-200 p-2 text-center text-sm">Maersk</li>
                <li className="h-12 w-28 bg-zinc-200 p-2 text-center text-sm">Virgin Media</li>
                <li className="h-12 w-28 bg-zinc-200 p-2 text-center text-sm">NTL:Telewest</li>
                <li className="h-12 w-28 bg-zinc-200 p-2 text-center text-sm">Telewest</li>
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
