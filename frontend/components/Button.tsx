export default function Button({
  label,
  onClick,
  pending,
}: {
  label: string
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  pending: boolean
}) {
  return (
    <button
      onClick={onClick}
      type="submit"
      aria-disabled={pending}
      className="my-4 flex w-full flex-col items-center justify-center rounded border-0 bg-indigo-500 py-4 text-lg text-white hover:bg-indigo-600 focus:outline-none lg:w-2/3"
    >
      {label}
    </button>
  )
}
