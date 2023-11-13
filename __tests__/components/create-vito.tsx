import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { CreateVito } from '@/components/create-vito'

global.fetch = jest
  .fn()
  .mockResolvedValueOnce({ json: async () => ({ vitoMessage: 'This is some message' }) })

test('creates a Vito message', async () => {
  render(<CreateVito />)
  await waitFor(() => {
    expect(screen.getByText(/This is some/)).toBeInTheDocument()
  })
})
