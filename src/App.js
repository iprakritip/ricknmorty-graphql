import { Link, Route, Routes } from "react-router-dom";
import CharacterDetails from "./pages.js/CharacterDetails";
import CharactersList from "./pages.js/CharactersList";
import Search from "./pages.js/Search";


function App() {
  return (
    <div className="App w-[100vw] h-[100vh] py-1 px-2 lg:px-[6rem] lg:py-[1rem] bg-slate-100">
      <Link to='/'>
      <div className="h-[3rem] w-[3rem] lg:h-[6rem] lg:w-[6rem]">
        
        <img src="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-portal-moon-mod-download-35.png" alt="logo" />
      </div>
      </Link>
      <Routes>
        <Route path='/' element={<CharactersList />} />
        <Route path='/search' element={<Search />} />
        <Route path='/:id' element={<CharacterDetails />} />
      </Routes>
    </div>
  );
}

export default App;
