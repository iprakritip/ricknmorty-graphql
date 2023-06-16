import { MockedProvider } from "@apollo/client/testing"
import '@testing-library/jest-dom';
import CharactersList from "../../pages.js/CharactersList"
import { render, screen } from "@testing-library/react";
import { GET_CHARACTERS } from "../../hooks/useCharacters";
import { BrowserRouter } from "react-router-dom";

const mocks = [{
    request: {
        query: GET_CHARACTERS,
    },
    "result": {
        "data": {
            "characters": {
                "results": [
                    {
                        "id": "1",
                        "name": "Rick Sanchez",
                        "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
                        "species": "Human"
                    },
                    {
                        "id": "2",
                        "name": "Morty Smith",
                        "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
                        "species": "Human"
                    },
                    {
                        "id": "3",
                        "name": "Summer Smith",
                        "image": "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
                        "species": "Human"
                    },
                    {
                        "id": "4",
                        "name": "Beth Smith",
                        "image": "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
                        "species": "Human"
                    },
                    {
                        "id": "5",
                        "name": "Jerry Smith",
                        "image": "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
                        "species": "Human"
                    },
                    {
                        "id": "6",
                        "name": "Abadango Cluster Princess",
                        "image": "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
                        "species": "Alien"
                    },
                    {
                        "id": "7",
                        "name": "Abradolf Lincler",
                        "image": "https://rickandmortyapi.com/api/character/avatar/7.jpeg",
                        "species": "Human"
                    },
                    {
                        "id": "8",
                        "name": "Adjudicator Rick",
                        "image": "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
                        "species": "Human"
                    },
                    {
                        "id": "9",
                        "name": "Agency Director",
                        "image": "https://rickandmortyapi.com/api/character/avatar/9.jpeg",
                        "species": "Human"
                    },
                    {
                        "id": "10",
                        "name": "Alan Rails",
                        "image": "https://rickandmortyapi.com/api/character/avatar/10.jpeg",
                        "species": "Human"
                    },
                    {
                        "id": "11",
                        "name": "Albert Einstein",
                        "image": "https://rickandmortyapi.com/api/character/avatar/11.jpeg",
                        "species": "Human"
                    },
                    {
                        "id": "12",
                        "name": "Alexander",
                        "image": "https://rickandmortyapi.com/api/character/avatar/12.jpeg",
                        "species": "Human"
                    },
                    {
                        "id": "13",
                        "name": "Alien Googah",
                        "image": "https://rickandmortyapi.com/api/character/avatar/13.jpeg",
                        "species": "Alien"
                    },
                    {
                        "id": "14",
                        "name": "Alien Morty",
                        "image": "https://rickandmortyapi.com/api/character/avatar/14.jpeg",
                        "species": "Alien"
                    },
                    {
                        "id": "15",
                        "name": "Alien Rick",
                        "image": "https://rickandmortyapi.com/api/character/avatar/15.jpeg",
                        "species": "Alien"
                    },
                    {
                        "id": "16",
                        "name": "Amish Cyborg",
                        "image": "https://rickandmortyapi.com/api/character/avatar/16.jpeg",
                        "species": "Alien"
                    },
                    {
                        "id": "17",
                        "name": "Annie",
                        "image": "https://rickandmortyapi.com/api/character/avatar/17.jpeg",
                        "species": "Human"
                    },
                    {
                        "id": "18",
                        "name": "Antenna Morty",
                        "image": "https://rickandmortyapi.com/api/character/avatar/18.jpeg",
                        "species": "Human"
                    },
                    {
                        "id": "19",
                        "name": "Antenna Rick",
                        "image": "https://rickandmortyapi.com/api/character/avatar/19.jpeg",
                        "species": "Human"
                    },
                    {
                        "id": "20",
                        "name": "Ants in my Eyes Johnson",
                        "image": "https://rickandmortyapi.com/api/character/avatar/20.jpeg",
                        "species": "Human"
                    }
                ]
            }
        }
    }
}]

const TestComponent = (
    <BrowserRouter>
        <MockedProvider mocks={mocks}>
            <CharactersList />
        </MockedProvider>
    </BrowserRouter>)

test('should render characters list', async () => {
    render(TestComponent)
    expect(await screen.findByRole('button')).toBeInTheDocument();
})

// passed