import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Form from '../component/Form'

test("Loading on screen", () => {
  render(<Form />)
  expect(screen.getByText(/Form/i)).toBeInTheDocument()
})

test("Handle input change updates input values", async () => {
  render(<Form />)

  const nameInput = screen.getByLabelText(/name/i)
  const emailInput = screen.getByLabelText(/email/i)
  const addressInput = screen.getByLabelText(/address/i)

  await userEvent.type(nameInput, "Legend")
  await userEvent.type(emailInput, "legend@hotmail.com")
  await userEvent.type(addressInput, "aaa")

  expect(nameInput).toHaveValue("Legend")
  expect(emailInput).toHaveValue("legend@hotmail.com")
  expect(addressInput).toHaveValue("aaa")
})
