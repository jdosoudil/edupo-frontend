export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full px-2 tablet:px-6 py-4 flex gap-6 flex-wrap items-center justify-center">
      {
        children
      }
    </main>
  )
}