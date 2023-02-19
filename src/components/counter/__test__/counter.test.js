import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Counter } from '../counter'

describe('Counter', () => {
  test('render correctly', () => {
    render(<Counter />)
    
    const counterElement = screen.getByRole('heading')
    expect(counterElement).toBeInTheDocument()

    const incrementButton = screen.getByRole('button', { name: 'Increment' })
    expect(incrementButton).toBeInTheDocument()
  })

  test('render a count of 0', () => {
    render(<Counter />)
    
    const counterElement = screen.getByRole('heading')
    expect(counterElement).toHaveTextContent('0')
  })

  test('render count of 1 after clicking the increment button', async () => {
    render(<Counter />)
  
    const incrementButton = screen.getByRole('button', { name: 'Increment' })
    await userEvent.click(incrementButton)

    const counterElement = screen.getByRole('heading')
    expect(counterElement).toHaveTextContent('1')
  })

  test('render count of 2 after clicking the increment button twice', async () => {
    render(<Counter />)
  
    const incrementButton = screen.getByRole('button', { name: 'Increment' })
    await userEvent.click(incrementButton)
    await userEvent.click(incrementButton)

    const counterElement = screen.getByRole('heading')
    expect(counterElement).toHaveTextContent('2')
  })

  test('render a count of 10 after clicking the set button', async () => {
    // userEvent.setup()
    render(<Counter />)

    const amountInput = screen.getByRole('spinbutton')
    await userEvent.type(amountInput, '10')
    expect(amountInput).toHaveValue(10)
    const setButton = screen.getByRole('button', { name: "Set" })
    await userEvent.click(setButton)
    const countElement = screen.getByRole("heading")
    expect(countElement).toHaveTextContent('10')
  })

  test('elements are focused in the right order', async () => {
    // userEvent.setup()
    render(<Counter />)
    
    const amountInput = screen.getByRole('spinbutton')
    const setButton = screen.getByRole('button', { name: "Set" })
    const incrementButton = screen.getByRole('button', { name: "Increment" })

    await userEvent.tab()
    expect(incrementButton).toHaveFocus()
    await userEvent.tab()
    expect(amountInput).toHaveFocus()
    await userEvent.tab()
    expect(setButton).toHaveFocus()
  })
})