type PageProps = {
  children: React.ReactNode
}

export const Page = ({ children }: PageProps) => {
  return <div className="lg:pt relative min-h-screen bg-white sm:pt-6 sm:pb-12 lg:pb-16">{children}</div>
}
