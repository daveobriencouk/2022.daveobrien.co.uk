type PageProps = {
  children: React.ReactNode
}

export const Page = ({ children }: PageProps) => {
  return <div className="relative min-h-screen bg-zinc-100 sm:pb-12 lg:pb-16">{children}</div>
}
