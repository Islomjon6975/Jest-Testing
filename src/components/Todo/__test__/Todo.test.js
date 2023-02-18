import {fireEvent, render, screen} from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Todo from "../Todo"

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  )
}

const addTask = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
  const buttonElement = screen.getByRole("button", { name: "Add" })
  tasks.forEach((task) => {
    fireEvent.change(inputElement, { target: { value: task }})
    fireEvent.click(buttonElement)
  })
}

describe('Todo', () => {
  it('should render a task with integration testing', async () => {
    render(<MockTodo />)
    addTask(["Go Grocery shopping"])
    const divElement = screen.getByText(/Go Grocery shopping/i)
    expect(divElement).toBeInTheDocument()
  })

  it('should render multiple tasks with integration testing', async () => {
    render(<MockTodo />)
    addTask(["Go Grocery shopping", "Pet my Cat", "Wash my Hands"])
    const divElements = screen.getAllByTestId('task-container')
    expect(divElements.length).toBe(3)
  })

  it('task should not have completed class when initially rendered', async () => {
    render(<MockTodo />)
    addTask(["Go Grocery shopping"])
    const divElement = screen.getByText(/Go Grocery shopping/i)
    expect(divElement).not.toHaveClass("todo-item-active")
  })

  it('task should have completed class when clicked', async () => {
    render(<MockTodo />)
    addTask(["Go Grocery shopping"])
    const divElement = screen.getByText(/Go Grocery shopping/i)
    fireEvent.click(divElement)
    expect(divElement).toHaveClass("todo-item-active")
  })
})

