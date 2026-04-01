export function LayoutAutenticacion({ children }) {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(41,171,226,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(41,171,226,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '32px 32px',
          }}
        />

        <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(255,255,255,0))]" />
        <div className="absolute inset-x-0 bottom-0 h-1.5 bg-[#29ABE2]" />

        <div className="relative mx-auto flex min-h-screen max-w-6xl items-center justify-center px-3 py-4 sm:px-6 sm:py-6 lg:px-8">
          <div className="w-full max-w-[28rem]">{children}</div>
        </div>
      </section>
    </main>
  )
}
