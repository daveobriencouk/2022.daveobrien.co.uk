import classNames from "classnames"

type HeroProps = {
  children: React.ReactNode
  className?: string
  image: {
    src: string
    alt: string
  }
}

export function Hero({ children, className, image }: HeroProps) {
  return (
    <div className={classNames('mx-auto max-w-7xl sm:px-6 lg:px-8', className)}>
      <div className="relative shadow-xl sm:overflow-hidden sm:rounded-lg">
        <div className="absolute inset-0">
          <img className="h-full w-full object-cover" src={image.src} alt={image.alt} />
        </div>
        <div className="relative flex justify-between px-6 pt-12 pb-6">{children}</div>
      </div>
    </div>
  )
}
