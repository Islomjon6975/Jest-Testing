import {render, screen} from '@testing-library/react'
import Header from '../Header'

describe("Header", () => {
  test('should render the same text passed into title prop', async () => {
    render(<Header title='my header' />)
    const headingElement = screen.getByText(/my header/i);
    expect(headingElement).toBeInTheDocument();
  })
})


// it('should render the same text passed into title prop', async () => {
//   render(<Header title='My Header' />)
//   const headingElement = screen.getByText(/my header/i);
//   expect(headingElement).toBeInTheDocument();
// });

// it('should render the same heading passed into title prop', async () => {
//   render(<Header title='My Header' />)
//   const headingElement = screen.getByRole('heading', { name: "My Header"});
//   expect(headingElement).toBeInTheDocument();
// })

// it('should render the same title passed into title prop', async () => {
//   render(<Header title='My Header' />)
//   const headingElement = screen.getByTitle('Header');
//   expect(headingElement).toBeInTheDocument();
// })

// it('should render the same testId passed into title prop', async () => {
//   render(<Header title='My Header' />)
//   const headingElement = screen.getByTestId('header-1');
//   expect(headingElement).toBeInTheDocument();
// })


// FIND BY
// agar bizda async await kerak bolsa findBy ni ishlatsak bo'ladi

// it('should render find the same text passed into title prop', async () => {
//   render(<Header title='My Header' />)
//   const headingElement = await screen.findByText(/my header/i);
//   expect(headingElement).toBeInTheDocument();
// });

// it('should render find the same text query passed into title prop', async () => {
//   render(<Header title='My Header' />)
//   const headingElement = screen.queryByText(/my dog/i);
//   expect(headingElement).not.toBeInTheDocument();
// });


// it('should render the Roles query passed into title prop', async () => {
//   render(<Header title='My Header' />)
//   const headingElements = screen.getAllByRole('heading');
//   expect(headingElements.length).toBe(2)
// });
