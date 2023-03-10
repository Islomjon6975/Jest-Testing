import { render, screen } from "@testing-library/react"
import { Application } from "../application"

describe('Application', () => {
  test('render correctly', () => {
    render(<Application />)

    const pageHeading = screen.getByRole('heading', {
      level: 1
    })
    expect(pageHeading).toBeInTheDocument()

    const sectionHeading = screen.getByRole('heading', {
      level: 2
    })
    expect(sectionHeading).toBeInTheDocument();

    const paragraph = screen.getByText('All fields are mandatory')
    expect(paragraph).toBeInTheDocument()

    const paragraph2 = screen.getByText(/All fields are mandatory/i)
    expect(paragraph2).toBeInTheDocument()

    const nameElement = screen.getByRole('textbox', {
      name: 'Name'
    })
    expect(nameElement).toBeInTheDocument();
    
    const nameElement2 = screen.getByLabelText('Name', {
      selector: 'input'
    })
    expect(nameElement2).toBeInTheDocument()

    const nameElement3 = screen.getByPlaceholderText('Fullname')
    expect(nameElement3).toBeInTheDocument()

    const nameElement4 = screen.getByDisplayValue('Vishwas')
    expect(nameElement4).toBeInTheDocument()

    const imageElement = screen.getByAltText('a person with a laptop')
    expect(imageElement).toBeInTheDocument()

    const spanElement = screen.getByTitle('close');
    expect(spanElement).toBeInTheDocument()

    const divElement = screen.getByTestId('custom-element');
    expect(divElement).toBeInTheDocument()

    const bioElement = screen.getByRole('textbox', {
      name: 'Bio'
    })
    expect(bioElement).toBeInTheDocument()

    const jobLocation = screen.getByRole('combobox')
    expect(jobLocation).toBeInTheDocument()

    const termsElement = screen.getByRole('checkbox')
    expect(termsElement).toBeInTheDocument()

    const termsElement2 = screen.getByLabelText('I agree to the terms and conditions')
    expect(termsElement2).toBeInTheDocument()

    const submitButtonElement = screen.getByRole('button')
    expect(submitButtonElement).toBeInTheDocument()
  })
})