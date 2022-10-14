import type { LinksFunction, LoaderArgs, MetaFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from '@remix-run/react'
import flagsmith from 'flagsmith'
import { FlagsmithProvider } from 'flagsmith/react'

import tailwindStylesheetUrl from './styles/tailwind.css'
import { getUser } from './session.server'

const fontFamilies = ['Archivo+Black', 'Fira+Sans+Extra+Condensed:400', 'Hind+Guntur:400,700', 'Overlock:i400,i700,i900', 'Pridi:200,400,i200,i400']

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: tailwindStylesheetUrl },
    {
      rel: 'stylesheet',
      href: `https://fonts.googleapis.com/css?family=${fontFamilies.join('|')}`,
    },
  ]
}

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Remix Notes',
  viewport: 'width=device-width,initial-scale=1',
})

export async function loader({ request }: LoaderArgs) {
  return json({
    user: await getUser(request),
    ENV: {
      FLAGSMITH_ENVIRONMENT_ID: process.env.FLAGSMITH_ENVIRONMENT_ID,
    },
  })
}

export default function App() {
  const data = useLoaderData()

  return (
    <FlagsmithProvider
      options={{
        environmentID: data.ENV.FLAGSMITH_ENVIRONMENT_ID,
      }}
      flagsmith={flagsmith}
    >
      <html lang="en" className="h-full">
        <head>
          <Meta />
          <Links />
        </head>
        <body className="h-full">
          <Outlet />
          <ScrollRestoration />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.ENV = ${JSON.stringify(data.ENV)}`,
            }}
          />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    </FlagsmithProvider>
  )
}
