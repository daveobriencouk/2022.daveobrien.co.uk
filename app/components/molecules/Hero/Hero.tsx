type HeroProps = {
  children: React.ReactNode
  image: {
    src: string
    alt: string
  }
}

export function Hero({ children, image }: HeroProps) {
  return (
    <div className="relative shadow-xl sm:shadow-md sm:overflow-hidden sm:rounded-lg">
      <div className="absolute inset-0">
        <img className="h-full w-full object-cover" src={image.src} alt={image.alt} />
      </div>
      <div className="relative flex justify-between px-6 pt-12 pb-6">{children}</div>
    </div>
  )
}
