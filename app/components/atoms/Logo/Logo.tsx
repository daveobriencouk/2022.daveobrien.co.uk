import { Link, useLocation } from '@remix-run/react'
import { ConditionalWrap } from '~/components/atoms/ConditionalWrap'

import stroke from '~/assets/stroke.svg'
import angleBracket from '~/assets/angle-bracket.svg'
import classNames from 'classnames'

type LogoProps = {
  size?: 'small' | 'large'
}

const useLogoClassNames = (size: LogoProps['size']) => {
  if (size === 'small') {
    return {
      h1: 'text-[2.12rem] mt-[0.7rem] text-zinc-500',
      stroke: 'right-[-2.5rem] bottom-0 w-[35px]',
      bracket: 'right-[-4.35rem] bottom-[0.5rem] w-[9px]',
      span: 'text-zinc-400',
    }
  }

  return {
    h1: 'text-[8.48rem] text-zinc-700',
    stroke: 'right-[-7.75rem] bottom-[-2.25rem] w-[140px]',
    bracket: 'right-[-2.55rem] bottom-[0.33rem] w-[36px]',
    span: 'text-zinc-500',
  }
}

const Lines = () => {
  const lines = [1, 2, 3, 4, 5, 6, 7, 8]
  return (
    <>
      {lines.map((line) => (
        <div key={line} className="absolute top-6 left-0 h-1 w-full bg-slate-700" />
      ))}
    </>
  )
}

export function Logo({ size = 'large' }: LogoProps) {
  const { pathname } = useLocation()
  const logoClassNames = useLogoClassNames(size)

  return (
    <hgroup className="mb-12 flex flex-col items-center">
      <h1
        className={classNames(
          'relative flex flex-col flex-wrap justify-center gap-x-5 sm:flex-row',
          'left-[-0.08em]',
          `text-center font-display leading-[0.67em] tracking-tighter`,
          logoClassNames.h1
        )}
      >
        <ConditionalWrap condition={pathname !== '/'} wrap={(children) => <Link to="/">{children}</Link>}>
          <>
            <span>Dave</span>
            <span className={classNames('relative', logoClassNames.span)}>
              <span className="relative z-20">O'Brien</span>
              <span className={classNames('absolute z-10 block  text-base tracking-normal', logoClassNames.stroke)}>
                <img src={stroke} alt="Decorative stroke for logo type" />
              </span>
              <span className={classNames('absolute z-30 block text-base tracking-normal', logoClassNames.bracket)}>
                <img src={angleBracket} alt="Decorative angle bracket for logo type" />
              </span>
            </span>
          </>
        </ConditionalWrap>
      </h1>
      {size === 'large' && (
        <h2 className="oblique flex text-center font-overlock text-5xl font-normal text-zinc-400">
          Frontend Engineer.
        </h2>
      )}
      {/* <Lines /> */}
    </hgroup>
  )
}
