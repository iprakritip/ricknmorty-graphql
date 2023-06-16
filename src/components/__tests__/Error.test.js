import { render, screen } from "@testing-library/react"
import Error from "../Error"
import '@testing-library/jest-dom';


describe('error component', () => {

    const TestComponent = (<Error />)
it('Renders properly',()=>{
    render(TestComponent)
    expect(screen.getByText('Something went wrong!!! Please try again.')).toBeInTheDocument();
})

})

//passed