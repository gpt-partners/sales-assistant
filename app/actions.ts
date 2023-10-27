'use server'
import { z } from 'zod'

export async function createVito(_prevState: any, formData: FormData) {
  const schema = z.object({
    companyUrl: z.string().url({ message: 'Please enter a valid company URL' }),
    linkedinUrl: z.string().url({ message: 'Please enter a valid Linkedin URL' }),
  })

  try {
    const data = schema.parse(Object.fromEntries(formData))
    return { message: JSON.stringify(data) }
  } catch (e: any) {
    return { errors: e.issues }
  }
}
