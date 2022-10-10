import type { User, Note } from '@prisma/client'

import { prisma } from '~/db.server'

export type { Note } from '@prisma/client'

export function getNote(slug: string) {
  return prisma.note.findFirst({
    select: { id: true, body: true, title: true },
    where: { slug },
  })
}

export function getUserNote({
  id,
  userId,
}: Pick<Note, "id"> & {
  userId: User["id"];
}) {
  return prisma.note.findFirst({
    select: { id: true, body: true, title: true },
    where: { id, userId },
  });
}

export function getAllNoteListItems() {
  return prisma.note.findMany({
    select: { id: true, title: true, slug: true },
    orderBy: { updatedAt: 'desc' },
  })
}

export function getNoteListItems({ userId }: { userId: User['id'] }) {
  return prisma.note.findMany({
    where: { userId },
    select: { id: true, title: true },
    orderBy: { updatedAt: 'desc' },
  })
}

export function createNote({
  body,
  slug,
  title,
  userId,
}: Pick<Note, 'body' | 'slug' | 'title'> & {
  userId: User['id']
}) {
  return prisma.note.create({
    data: {
      title,
      slug,
      body,
      user: {
        connect: {
          id: userId,
        },
      },
    },
  })
}

export function deleteNote({ id, userId }: Pick<Note, 'id'> & { userId: User['id'] }) {
  return prisma.note.deleteMany({
    where: { id, userId },
  })
}
