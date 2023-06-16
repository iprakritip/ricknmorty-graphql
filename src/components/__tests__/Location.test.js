import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom';
import Location from "../Location";


describe('location component', () => {

    const TestComponent = (<Location location='Kyamadu' />)
    it('Renders properly', () => {
        render(TestComponent)
        expect(screen.getByText('Kyamadu')).toBeInTheDocument();
    })
})

//passed