import { render, screen } from "@testing-library/react"
import { Skills } from "../skills"

describe('Skills', () => {
  const skills = ['HTML', 'CSS', 'JavaScript']
  
  test('render correctly', () => {
    render(<Skills skills={skills} />)
    
    const listElement = screen.getByRole('list');
    expect(listElement).toBeInTheDocument()
  })            

  test('render a list of items', () => {
    render(<Skills skills={skills} />)

    const listItemElements = screen.getAllByRole('listitem')
    expect(listItemElements).toHaveLength(skills.length)
  })
  
  test('render login button', () => {
    render(<Skills skills={skills} />)

    const loginButton = screen.getByRole('button', { name: 'Login' })
    expect(loginButton).toBeInTheDocument()
  })

  test('start learning button', () => {
    render(<Skills skills={skills} />)

    const startLearningButton = screen.queryByRole('button', {name: 'Start learning'})
    expect(startLearningButton).not.toBeInTheDocument()
  })

   test('start learning button is eventually displayed', async () => {
    render(<Skills skills={skills} />)

    const startLearningButton = await screen.findByRole('button', {name: 'Start learning'}, {timeout: 2000})
    expect(startLearningButton).toBeInTheDocument()
  })
})