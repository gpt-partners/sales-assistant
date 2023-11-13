import Home from '@/app/page'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { useFormState, useFormStatus } from 'react-dom'

jest.mock('react-dom', () => ({
  ...jest.requireActual('react-dom'),
  useFormState: jest.fn(),
  useFormStatus: jest.fn(),
}))

describe('Home', () => {
  beforeEach(() => {
    ;(useFormState as jest.Mock).mockImplementation(() => [0, jest.fn()])
    ;(useFormStatus as jest.Mock).mockImplementation(() => [0, jest.fn()])
    jest.spyOn(console, 'error').mockImplementation(() => {})
  })

  it('should render the heading', () => {
    render(<Home />)
    expect(screen.getByText('Generate Sales Messages')).toBeVisible()
  })
})
