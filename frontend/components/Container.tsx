type ContainerProps = {
  children: React.ReactNode
}

export default function Container({ children }: ContainerProps) {
  return (
    <section className="max-w-screen-xl mx-auto py-3 px-4 md:px-5">
      <div className="max-w-xl">
        <div className="text-gray-800">{children}</div>
      </div>
    </section>
  )
}
