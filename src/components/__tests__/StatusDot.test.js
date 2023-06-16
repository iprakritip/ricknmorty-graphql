import { render, screen } from "@testing-library/react"
import StatusDot from "../StatusDot"
import '@testing-library/jest-dom';


describe('status dot component', () => {
    const TestComponent = (<StatusDot status="Dead" />)

    it('Renders properly', () => {
        render(TestComponent)
        expect(screen.getByText("Dead")).toBeInTheDocument();
    })
})

// passed