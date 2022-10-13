import { Link, useLocation } from '@remix-run/react'
import { ConditionalWrap } from '~/components/atoms/ConditionalWrap'

export function Logo() {
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
