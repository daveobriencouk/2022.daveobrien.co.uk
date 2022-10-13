import { Link, useLoaderData } from '@remix-run/react'
import { json } from '@remix-run/node'
import classNames from 'classnames'

import { Container } from '~/components/atoms/Container'
import { Text } from '~/components/atoms/Text'

import { getAllNoteListItems } from '~/models/note.server'

export async function loader() {
  const noteListItems = await getAllNoteListItems()
  return json({ noteListItems })
}

type TagProps = {
  as?: 'li' | 'span'
  children: React.ReactNode
  className?: string
}

function Tag({ as = 'span', children, className }: TagProps) {
  const Component = as
  return <Component className={classNames(className, 'bg-slate-400 px-2 text-base font-heading text-white')}>{children}</Component>
}

export default function NotesIndexRoute() {
  const { noteListItems } = useLoaderData<typeof loader>()

  return (
    <Container>
      <main>
        <article className="grid-cols-3 gap-x-8 sm:grid">
          <hgroup className="col-span-3">
            <Text
              as="h2"
              appearance="h1"
              className="mb-4"
              // className="mb-8 underline decoration-slate-400 decoration-8 underline-offset-4"
            >
              Notes from the code face.
            </Text>
          </hgroup>
          <ol className="col-span-2 mb-4">
            {noteListItems.map((note) => (
              <li key={note.title} className="mb-3">
                {/* align-content */}
                <section className="flex flex-col items-baseline justify-between gap-1 sm:gap-2 sm:flex-row">
                  <Text as="h2" appearance="h3" className='flex-1 bg-slate-300 text-white px-2'>
                    <Link to={note.slug}>{note.title}</Link>
                  </Text>
                  <ul className="flex gap-1">
                    {['tag1', 'tag2', 'tag3'].map((tag) => (
                      <Tag key={tag} as="li">
                        {tag}
                      </Tag>
                    ))}
                  </ul>
                </section>
              </li>
            ))}
          </ol>
          <aside className="col-span-1">
            <Text as="h3" appearance="h1" className="mb-4 text-2xl">
              Tags
            </Text>
            <ul className="inline-flex flex-wrap items-baseline gap-1">
              {['tag1', 'tag2', 'tag3', 'tag4', 'tag5', 'tag6'].map((tag) => (
                <Tag key={tag} as="li">
                  {tag}
                </Tag>
              ))}
            </ul>
          </aside>
        </article>
      </main>
    </Container>
  )
}
