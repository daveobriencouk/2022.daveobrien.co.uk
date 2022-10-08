import { Link } from '@remix-run/react'

type TagProps = {
  name: string
}

type NoteProps = {
  name: string
  to: string
  tags?: TagProps[]
}

const notes: NoteProps[] = [
  {
    name: 'Test not working with useEffect',
    to: '/notes/foo',
    tags: [{ name: 'FooTag' }],
  },
  {
    name: 'YALC not working / updating',
    to: '/notes/foo',
    tags: [{ name: 'FooTag' }],
  },
  {
    name: 'Circular JSON structure',
    to: '/notes/foo',
    tags: [{ name: 'FooTag' }],
  },
  {
    name: 'TypeScript: Require param is another param is present',
    to: '/notes/foo',
    tags: [{ name: 'FooTag' }],
  },
  {
    name: 'Publish alpha package',
    to: '/notes/foo',
    tags: [{ name: 'FooTag' }],
  },
  {
    name: 'Considerations web projects',
    to: '/notes/foo',
    tags: [{ name: 'FooTag' }],
  },
  {
    name: 'Debugging on the server',
    to: '/notes/foo',
    tags: [{ name: 'FooTag' }],
  },
  {
    name: 'No Xcode or CLT version detected',
    to: '/notes/foo',
    tags: [{ name: 'FooTag' }],
  },
  {
    name: 'Setting up linting and formatting in your Project',
    to: '/notes/foo',
    tags: [{ name: 'FooTag' }],
  },
]

export default function NotesIndexRoute() {
  return (
    <div>
      <h2>Notes from the code face</h2>
      <ol>
        {notes.map((note) => (
          <li key={note.name}>
            <h2>
              <Link to={note.to}>{note.name}</Link>
            </h2>
          </li>
        ))}
      </ol>
    </div>
  )
}
