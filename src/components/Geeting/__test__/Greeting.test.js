import { render, screen} from '@testing-library/react'
import { Greeting } from '../Greeting'

test('Greeting renders correctly', () => {
  render(<Greeting />)

  const divElement = screen.getByText(/greeting/i)
  expect(divElement).toBeInTheDocument()
})

test.skip('Greeting renders with a name', () => {
  render(<Greeting name={"Islom"} />)

  const divElement = screen.getByText(/greeting islom/i)
  expect(divElement).toBeInTheDocument()
})


// test.not('Greeting renders with a name', () => {
//   render(<Greeting name={"Islom"} />)

//   const divElement = screen.getByText(/greeting islom/i)
//   expect(divElement).toBeInTheDocument()
// })