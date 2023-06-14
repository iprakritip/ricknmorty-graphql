import { render, screen } from "@testing-library/react"
import { BrowserRouter, useNavigate } from "react-router-dom"
import '@testing-library/jest-dom';
import Character from "../Character"


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

})