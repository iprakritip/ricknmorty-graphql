import { Route, Routes } from "react-router-dom";
import CharacterDetails from "./pages.js/CharacterDetails";
import CharactersList from "./pages.js/CharactersList";


function App() {
  return (
    <div className="App">
      <h1 className="logo">Rick and Morty API with GraphQL</h1>
      <Routes>
        <Route path='/' element={<CharactersList />} />
        <Route path='/:id' element={<CharacterDetails />} />
      </Routes>
    </div>
  );
}

export default App;
