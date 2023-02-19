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
})