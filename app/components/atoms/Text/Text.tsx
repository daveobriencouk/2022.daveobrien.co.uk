import classNames from 'classnames'

type TextProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  appearance?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
  className?: string
  children: React.ReactNode
}

function getAppearanceClassNames(appearance: TextProps['appearance']) {
  switch (appearance) {
    case 'h1':
      return 'text-4xl font-display tracking-tighter text-stone-900'
    case 'h2':
      return 'text-2xl font-heading text-stone-900'
    case 'h3':
      return 'text-2xl font-heading text-stone-900'
    case 'h4':
      return 'text-lg font-heading text-stone-900'
    case 'h5':
      return 'text-base font-heading text-stone-900'
    case 'h6':
      return 'text-sm font-heading text-stone-900'
    case 'p':
      return 'text-base font-body text-stone-900'
    default:
      return ''
  }
}

export function Text({ as = 'p', appearance = 'p', className, children }: TextProps) {
  const Component = as
  return <Component className={classNames(getAppearanceClassNames(appearance), className)}>{children}</Component>
}
