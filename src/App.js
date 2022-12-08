import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Detail from './pages/Detail';
import Home from './pages/Home';
import Menu from './pages/Menu';
import TypeList from './pages/TypeList';
import SearchBar from './components/searchbar/SearchBar';



function App() {
  const [searchTerm, setSearchTerm] = useState();


  function searchFunction(search) {
    setSearchTerm(search);
  }


  return (
    <Router>
      <Routes>
        <Route path='/' element={<> <SearchBar search={searchFunction} /> <Home searchTerm={searchTerm} /></>}></Route>
        <Route path='/detail/:name' element={<><SearchBar search={searchFunction} /> <Detail /> </>}></Route>
        <Route path='/menu' element={<Menu />}></Route>
        <Route path='/typelist/:type' element={<><SearchBar search={searchFunction} /><TypeList /></>}></Route>
      </Routes>
    </Router>
  );
};

export default App;
