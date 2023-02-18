import {render, screen} from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Footer from '../Footer'

const MockFooter = ({numberOfIncompleteTasks}) => {
  return (
    <BrowserRouter>
      <Footer numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  )
}

// Describe - bu blocklarni alohid alohida qilib olish uchun ishlatsak bo'ladi

// describe("Footer", () => {
//   it('should render the correct amount of incomplete tasks', async () => {
//     render(<MockFooter numberOfIncompleteTasks={5} />)
//     const paragraphElement = screen.getByText(/5 tasks left/i)
//     expect(paragraphElement).toBeInTheDocument()
//   })
  
//   it('should render "task" when the number of incomplete tasks is one', async () => {
//     render(<MockFooter numberOfIncompleteTasks={1} />)
//     const paragraphElement = screen.getByText(/1 task left/i)
//     expect(paragraphElement).toBeInTheDocument()
//   })
// })


describe("Footer", () => {
  describe("Functionality 1", () => {
    it('should render the correct amount of incomplete tasks', async () => {
      render(<MockFooter numberOfIncompleteTasks={5} />)
      const paragraphElement = screen.getByText(/5 tasks left/i)
      expect(paragraphElement).toBeInTheDocument()
    })
  })
  
  describe("Functionality 2", () => {
    it('should render "task" when the number of incomplete tasks is one', async () => {
      render(<MockFooter numberOfIncompleteTasks={1} />)
      const paragraphElement = screen.getByText(/1 task left/i)
      expect(paragraphElement).toBeInTheDocument()
    })
  })
})



// it('should render "task" when the number of incomplete tasks is one visible', async () => {
//   render(<MockFooter numberOfIncompleteTasks={1} />)
//   const paragraphElement = screen.getByText(/1 task left/i)
//   expect(paragraphElement).toBeVisible()
// })


// it('should render contain', async () => {
//   render(<MockFooter numberOfIncompleteTasks={1} />)
//   const paragraphElement = screen.getByText(/1 task left/i)
//   expect(paragraphElement).toContainHTML('p')
// })

// it('should render toHaveTextContent', async () => {
//   render(<MockFooter numberOfIncompleteTasks={1} />)
//   const paragraphElement = screen.getByRole('paragraph')
//   expect(paragraphElement).toHaveTextContent("1 task left")
// })

// it('should render not toHaveTextContent', async () => {
//   render(<MockFooter numberOfIncompleteTasks={2} />)
//   const paragraphElement = screen.getByRole('paragraph')
//   expect(paragraphElement).not.toHaveTextContent("1 task left")
// })

// it('should render tobeFalse', async () => {
//   render(<MockFooter numberOfIncompleteTasks={1} />)
//   const paragraphElement = screen.getByRole('paragraph')
//   expect(paragraphElement).not.toBeFalsy()
// })

// it('should render textContent of element', async () => {
//   render(<MockFooter numberOfIncompleteTasks={1} />)
//   const paragraphElement = screen.getByRole('paragraph')
//   expect(paragraphElement.textContent).toBe('1 task left')
// })