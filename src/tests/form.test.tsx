import { render, screen } from '@testing-library/react'
import Form from '../component/Form'

test("Loading on screen", () => {
  render(<Form />)
  expect(screen.getByText(/Form/i)).toBeInTheDocument()
})
