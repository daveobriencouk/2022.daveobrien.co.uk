import { Link, useLoaderData } from '@remix-run/react'
import { json } from '@remix-run/node'

import { getAllNoteListItems } from '~/models/note.server'

export async function loader() {
  const noteListItems = await getAllNoteListItems()
  return json({ noteListItems })
}

export default function NotesIndexRoute() {
  const { noteListItems } = useLoaderData<typeof loader>()

  return (
    <div>
      <h2>Notes from the code face</h2>
      <ol>
        {noteListItems.map((note) => (
          <li key={note.title}>
            <h2>
              <Link to={note.slug}>{note.title}</Link>
            </h2>
          </li>
        ))}
      </ol>
    </div>
  )
}
