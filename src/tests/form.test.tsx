import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Form from '../component/Form'
import {vi} from "vitest"

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

test("onSubmit function is called with correct form data", ()=>{
  // Action: Mock console.log

  const consoleSpy = vi.fn()
  vi.spyOn(console, "log").mockImplementation(consoleSpy)

  //Action: Render form

  render (<Form/>)

  fireEvent.change(screen.getByLabelText(/name/i),{
    target:{value:"Legend"}
  })

  fireEvent.change(screen.getByLabelText(/email/i),{
    target:{value:"legend@yahoo.com"}
  })

  fireEvent.change(screen.getByLabelText(/address/i),{
    target:{value:"aaa"}
  })

  fireEvent.click(screen.getByRole("button", {name:/submit/i}))

  expect(consoleSpy).toHaveBeenCalledWith("Form submitted",{
    name:"Legend",
    email:"legend@yahoo.com",
    address:"aaa"
  })

  consoleSpy.mockRestore()
})