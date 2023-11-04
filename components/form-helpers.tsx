import { useFormStatus } from 'react-dom'

interface ErrorObject {
  errors: Array<{ message: string }>
}

export function Errors(props: ErrorObject) {
  if (!props.errors?.length) return null
  return (
    <>
      {props.errors.map((err, index) => (
        <div key={index} className="alert">
          {err.message}
        </div>
      ))}
    </>
  )
}

export function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button type="submit" aria-disabled={pending}>
      Generate Sales Messages
    </button>
  )
}
