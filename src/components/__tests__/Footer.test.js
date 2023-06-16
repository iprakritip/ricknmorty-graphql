import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom';
import Footer from "../Footer";


describe('footer component', () => {

    const TestComponent = (<Footer />)
    it('Renders properly', () => {
        render(TestComponent)
        expect(screen.getByText('Made by @iprakritip')).toBeInTheDocument();
    })

})

//passed