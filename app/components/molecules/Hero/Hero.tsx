type HeroProps = {
  children: React.ReactNode
  image: {
    src: string
    alt: string
  }
}

export function Hero({ children, image }: HeroProps) {
  return (
    <div className="relative shadow-xl sm:overflow-hidden sm:rounded-lg sm:shadow-md">
      <div className="absolute inset-0">
        <img className="h-full w-full object-cover" src={image.src} alt={image.alt} />
      </div>
      <div className="relative flex justify-between px-4 pt-8 pb-4 lg:px-6 lg:pt-12 lg:pb-6">{children}</div>
    </div>
  )
}
