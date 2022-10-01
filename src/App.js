import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './Components/Home'
import AboutMe from './Components/AboutMe'
import Projects from './Components/Projects'
import MainNavigation from "./Components/Navigation/MainNavigation";

function App() {
  return (
        <BrowserRouter>
            <MainNavigation/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/projects' element={<Projects/>}/>
                <Route path='/aboutme' element={<AboutMe/>}/>
            </Routes>

        </BrowserRouter>
  );
}

export default App;