import { useLoaderData } from '@remix-run/react'
import { json } from '@remix-run/node'
import type { LoaderArgs } from '@remix-run/node'
import { marked } from 'marked'
import invariant from 'tiny-invariant'

import { getNote } from '~/models/note.server'

type LoaderData = {
  html: string
  title: string
}

export async function loader({ params }: LoaderArgs) {
  const { slug } = params

  invariant(slug, 'NOTE_SLUG_REQUIRED')

  const note = await getNote(slug)

  invariant(note, 'NOTE_NOT_FOUND')

  const html = marked(note.body)

  return json<LoaderData>({ html, title: note.title })
}

export default function NoteRoute() {
  const note = useLoaderData<typeof loader>()

  if (!note) {
    return <div>Loading</div>
  }

  return (
    <>
      <h1>{note?.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: note?.html }} />
    </>
  )
}
