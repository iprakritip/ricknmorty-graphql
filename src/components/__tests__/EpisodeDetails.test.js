import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom';
import EpisodeDetails from "../EpisodeDetails"

describe('episode details component', () => {

    const TestComponent = (<EpisodeDetails episode='S1E1' name="Rick and Morty" />)

    it('Renders properly', () => {
        render(TestComponent);
        expect(screen.getByText(/Rick and Morty/i)).toBeInTheDocument()
    })
})