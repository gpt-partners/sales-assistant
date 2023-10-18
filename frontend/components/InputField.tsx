export default function InputField({
  label,
  value,
  onChange,
}: {
  value: string
  onChange: (e: any) => void
  label: string
}) {
  return (
    <div className="flex w-full sm:flex-row flex-col mx-auto sm:space-y-0 space-y-4 sm:px-0 items-start">
      <div className="relative flex-grow w-full">
        <label className="leading-7 text-sm text-gray-600">{label}</label>
        <input
          type="text"
          value={value}
          onChange={onChange}
          className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
    </div>
  )
}
