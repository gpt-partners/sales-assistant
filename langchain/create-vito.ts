import { OpenAI } from 'langchain/llms/openai'

const llm = new OpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY,
})

export const createVitoLlm = (data: { companyUrl: string; linkedinUrl: string }) => {
  console.log('hey')
  return data
}
