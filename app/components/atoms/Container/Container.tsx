import classNames from 'classnames'

type ContainerProps = {
  children: React.ReactNode
  className?: string
  isFlushBelowSmall?: boolean
}

export const Container = ({ children, className, isFlushBelowSmall }: ContainerProps) => {
  return (
    <div className={classNames('mx-auto max-w-7xl sm:px-6 lg:px-8', isFlushBelowSmall ? 'sm:px-6' : 'px-6', className)}>
      {children}
    </div>
  )
}
