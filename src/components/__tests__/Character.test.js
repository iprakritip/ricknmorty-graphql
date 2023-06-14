import { fireEvent, getByAltText, render, screen } from "@testing-library/react"
import { BrowserRouter, useNavigate, Router, createMemoryRouter } from "react-router-dom"
// import {createMemoryHistory} from 'history'
import '@testing-library/jest-dom';
import Character from "../Character"
import userEvent from "@testing-library/user-event";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
    ...(jest.requireActual("react-router-dom")),
    useNavigate: () => mockedUsedNavigate
}));

describe('character component', () => {
    // test if correct route loads on click
    const characters = [{
        id: 1,
        name: 'Rick Sanchez',
        image: 'imageUrl'
    }]
    const TestComponent = (
        <BrowserRouter>
            <Character characters={characters} />
        </BrowserRouter>
    )
    it('Renders properly', () => {
        render(TestComponent);
        expect(screen.getByText('Rick Sanchez')).toBeInTheDocument();
    })
    // passed
    it('uses correct src', () => {
        render(TestComponent);
        const image = screen.getByAltText('Rick Sanchez')
        expect(image.src).toContain('imageUrl')
    })
    //passed

    test('navigates to correct route', async () => {
        render(TestComponent)
        await userEvent.click(screen.getByTestId('test-route'))
        expect(mockedUsedNavigate).toBeCalled()
    })
})