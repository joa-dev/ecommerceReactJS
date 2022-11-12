import './App.css';
import {NavBar} from './components/NavBar/NavBar'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
        <NavBar />
        <ItemListContainer />
    </div>
  );
}

export default App;