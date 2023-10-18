'use client'

import { createRequest } from '@/app/actions'
import Button from '@/components/Button'
import Container from '@/components/Container'
import InputField from '@/components/InputField'
// @ts-expect-error
import { experimental_useFormState as useFormState } from 'react-dom'
// @ts-expect-error
import { experimental_useFormStatus as useFormStatus } from 'react-dom'

function SubmitButton({ action }: { action: (isOpen: boolean) => void }) {
  const { pending } = useFormStatus()
  return (
    <Button
      label="Generate message"
      onClick={() => {
        action(true)
      }}
      pending={pending}
    />
  )
}

type VitoFormProps = {
  linkedInUrl: string
  companyUrl: string
  onChangeLinkedInUrl: (url: string) => void
  onChangeCompanyUrl: (url: string) => void
  onSubmit: (response: string) => void
  onOpenModal: (open: boolean) => void
}

export default function VitoForm({
  linkedInUrl,
  companyUrl,
  onChangeLinkedInUrl,
  onChangeCompanyUrl,
  onOpenModal,
}: VitoFormProps) {
  const initialState = {
    message: null,
  }
  const [state, formAction] = useFormState(createRequest, initialState)
  return (
    <div id="anchor" className="element">
      <Container>
        <form action={formAction}>
          <InputField
            label="LinkedIn Url"
            value={linkedInUrl}
            onChange={(e) => onChangeLinkedInUrl(e.target.value)}
          />
          <InputField
            label="Company Url"
            value={companyUrl}
            onChange={(e) => onChangeCompanyUrl(e.target.value)}
          />

          <SubmitButton action={onOpenModal} />
        </form>
        <p aria-live="polite" className="sr-only" role="status">
          {state?.message}
        </p>
      </Container>
    </div>
  )
}
