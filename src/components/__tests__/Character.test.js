import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import '@testing-library/jest-dom';
import Character from "../Character"
import userEvent from "@testing-library/user-event";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
    ...(jest.requireActual("react-router-dom")),
    useNavigate: () => mockedUsedNavigate,
    useParams:()=>({id:1})
}));

describe('character component', () => {
    const character = {
        id: 1,
        name: 'Rick Sanchez',
        image: 'imageUrl'
    }
    const TestComponent = (
        <BrowserRouter>
            <Character character={character} />
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