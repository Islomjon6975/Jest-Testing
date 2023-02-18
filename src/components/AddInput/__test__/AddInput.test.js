import {fireEvent, render, screen} from '@testing-library/react'
import AddInput from '../AddInput'

const mockedSetTodo = jest.fn()

describe("AddInput Functionality", () => {
  it("should render input element", async () => {
    render(<AddInput setTodos={mockedSetTodo} todos={[]} />)
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
    expect(inputElement).toBeInTheDocument();
  })

  it("should be able to type in input", async () => {
    render(<AddInput setTodos={mockedSetTodo} todos={[]} />)
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
    fireEvent.change(inputElement, { target: { value: 'Go Grocery shopping'}})
    expect(inputElement.value).toBe('Go Grocery shopping');
  })

  it("should have empty input when add button is clicked", async () => {
    render(<AddInput setTodos={mockedSetTodo} todos={[]} />)
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
    const buttonElement = screen.getByRole("button", { name: /Add/i })
    fireEvent.change(inputElement, { target: { value: 'Go Grocery shopping'}})
    fireEvent.click(buttonElement)
    expect(inputElement.value).toBe('');
  })
  
})

// describe("AddInput Functionality", () => {
//   it("should render input element", async () => {
//     render(<AddInput setTodos={() => {}} todos={[]} />)
//     const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
//     expect(inputElement).toBeInTheDocument();
//   })
// })