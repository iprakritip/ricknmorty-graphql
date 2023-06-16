import { MockedProvider } from "@apollo/client/testing";
import { render, screen } from "@testing-library/react";
import { GET_CHARACTER_LOCATIONS } from "../../hooks/useSearch";
import Search from "./../../pages.js/Search"
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";

const mocks = [{
    request: {
        query: GET_CHARACTER_LOCATIONS,
        variables: {
            name: "Rick Sanchez"
        }
    },
    "result": {
        "data": {
            "characters": {
                "results": [
                    {
                        "location": {
                            "name": "Citadel of Ricks"
                        }
                    },
                    {
                        "location": {
                            "name": "Earth (Evil Rick's Target Dimension)"
                        }
                    },
                    {
                        "location": {
                            "name": "Earth (Replacement Dimension)"
                        }
                    },
                    {
                        "location": {
                            "name": "Story Train"
                        }
                    }
                ]
            }
        }
    }
}]

const TestComponent = (
    <MockedProvider mocks={mocks}>
        <Search />
    </MockedProvider>)

test('label renders properly', () => {
    render(TestComponent)
    expect(screen.getByLabelText("Search for a character's locations")).toBeInTheDocument()
})

// passed

test('locations render properly',async()=>{
    render(TestComponent)
    await userEvent.click(screen.getByRole('textbox'),'Submit')
    expect(screen.getAllByText("Citadel of Ricks")).toBeInTheDocument();
})

//failed