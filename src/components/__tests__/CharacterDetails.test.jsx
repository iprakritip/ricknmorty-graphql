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
      "status": "unknown",
      "gender": "Male",
      "species": "Human",
      "created": "2017-11-04T19:59:20.523Z",
      "episode": [
        {
          "id": "10",
          "episode": "S01E10"
        },
        {
          "id": "11",
          "episode": "S01E11"
        }
      ],
      "origin": {
        "id": "20",
        "name": "Earth (Replacement Dimension)"
      },
      "location": {
        "id": "21",
        "name": "Testicle Monster Dimension"
      }
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




