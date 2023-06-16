import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom';
import Fallback from "../Fallback";


describe('status dot component', () => {
    const TestComponent = (<Fallback loading={false} />)

    it('Renders properly', () => {
        render(TestComponent)
        expect(screen.getByText("Something went wrong!!! Please try again.")).toBeInTheDocument();
    })
})

//passed