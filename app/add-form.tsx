'use client'

import { createVito } from '@/app/actions'
import { Errors, SubmitButton } from '@/components/form-helpers'
import { ErrorValidator } from '@/utils/error-validator'
import { useFormState } from 'react-dom'

const initialState = {
  message: null,
}

export function AddForm() {
  const [state, formAction] = useFormState(createVito, initialState)
  const validator = new ErrorValidator(state)
  return (
    <form action={formAction} className="mt-6 flex w-full flex-col items-center justify-center">
      <Errors errors={state?.errors} />
      <input
        className={validator.hasErrors('companyUrl') ? 'border-red-500' : ''}
        name="companyUrl"
        type="text"
        placeholder="https://www.yourcompany.com"
      />
      <input
        className={validator.hasErrors('linkedinUrl') ? 'border-red-500' : ''}
        name="linkedinUrl"
        type="text"
        placeholder="https://linkedin.com/example"
      />
      <SubmitButton />
    </form>
  )
}
