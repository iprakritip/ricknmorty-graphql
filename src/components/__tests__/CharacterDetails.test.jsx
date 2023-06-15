import { MockedProvider } from "@apollo/client/testing";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { GET_CHARACTER_DETAILS } from "../../hooks/useCharactereDetails";
import CharacterDetails from "../../pages.js/CharacterDetails";


jest.mock("react-router-dom", () => ({
    ...(jest.requireActual("react-router-dom")),
    useParams: () => ({ id: 7 })
}));

const mocks = [{
    request: {
        query: GET_CHARACTER_DETAILS,
        variables: {
            id: 7
        }
    },
    
  "result": {
    data:{
    "character": {
      "id": "7",
      "name": "Abradolf Lincler",
      "image": "https://rickandmortyapi.com/api/character/avatar/7.jpeg",
      "episode": [
        {
          "id": "10",
          "name": "Close Rick-counters of the Rick Kind",
          "episode": "S01E10"
        },
        {
          "id": "11",
          "name": "Ricksy Business",
          "episode": "S01E11"
        }
      ]
    }
  }}
}]
const TestComponent=(<MockedProvider mocks={mocks} >
    <CharacterDetails />
</MockedProvider>)

test('should render a profile', async () => {
    render(TestComponent)
    expect(await screen.findByRole('heading', {level:2})).toBeInTheDocument();
})

it('matches snapshot',async () => {
    const {baseElement} = render(TestComponent);
    expect(await screen.findByRole('heading', {level:2})).toBeInTheDocument();
    expect(baseElement).toMatchSnapshot();
  });



