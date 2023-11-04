'use server'
import { z } from 'zod'
import { createVitoLlm } from '@/langchain/create-vito'

export async function createVito(_prevState: any, formData: FormData) {
  const schema = z.object({
    companyUrl: z.string().url({ message: 'Please enter a valid company URL' }),
    linkedinUrl: z.string().url({ message: 'Please enter a valid Linkedin URL' }),
  })

  try {
    const data = schema.parse(Object.fromEntries(formData))
    createVitoLlm(data)
    return { message: JSON.stringify(data) }
  } catch (e: any) {
    return { errors: e.issues }
  }
}
