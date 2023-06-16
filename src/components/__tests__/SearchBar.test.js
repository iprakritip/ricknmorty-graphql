import { getByLabelText, render, screen } from "@testing-library/react"
import '@testing-library/jest-dom';
import SearchBar from "../SearchBar";
import userEvent from "@testing-library/user-event";


describe('search bar component', () => {
    const mockedOnChange = jest.fn();
    const TestComponent = (<SearchBar label="Search character" name="Rick" placeholder="e.g: Rick Sanchez" onChange={mockedOnChange} />)

    it('Renders label', () => {
        render(TestComponent)
        expect(screen.getByLabelText("Search character")).toBeInTheDocument();
    })
    it('Renders placeholder', () => {
        render(TestComponent)
        expect(screen.getByPlaceholderText("e.g: Rick Sanchez")).toBeInTheDocument();
    })
    it('Renders search input value', () => {
        render(TestComponent)
        expect(screen.getByDisplayValue("Rick")).toBeInTheDocument();
    })
    test('runs onChange function',async () => {
        render(TestComponent)
        await userEvent.type(screen.getByRole('textbox'),'Rick')
        expect(mockedOnChange).toBeCalled();
    })
})