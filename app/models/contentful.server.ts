import contentful from 'contentful';

const client = contentful.createClient({
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  space: process.env.CONTENTFUL_SPACE_ID,
})

export function getNote(slug: string) {
  return client.getEntry({
    content_type: 'note',
    'fields.slug': slug,
  })
}