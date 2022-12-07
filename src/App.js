import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from './pages/Detail';
import Home from './pages/Home';
import Menu from './pages/Menu';
import TypeList from './pages/TypeList';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/detail/:name' element={<Detail />}></Route>
        <Route path='/menu' element={<Menu />}></Route>
        <Route path='/typelist/:type' element={<TypeList />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
