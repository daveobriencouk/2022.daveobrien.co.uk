type ContainerProps = {
  children: React.ReactNode
}

export function Container({ children }: ContainerProps) {
  return (
    <main className="relative min-h-screen bg-white sm:flex sm:justify-center">
      <div className="relative sm:pb-12 sm:pt-6 lg:pb-16 lg:pt-8">{children}</div>
    </main>
  )
}
