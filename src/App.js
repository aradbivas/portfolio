import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home'
import AboutMe from './Components/AboutMe'
import Projects from './Components/Projects'
import MainNavigation from "./Components/Navigation/MainNavigation";
import Footer from './Components/Footer/Footer'

function App() {
  return (
        <BrowserRouter>
            <MainNavigation/>
            <main>

            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/projects' element={<Projects/>}/>
                <Route path='/aboutme' element={<AboutMe/>}/>
            </Routes>
            </main>
            <Footer/>
        </BrowserRouter>
  );
}

export default App;
