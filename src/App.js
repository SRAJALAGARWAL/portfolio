import './App.css';
import Home from './components/home';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {HashRouter, Routes, Route} from 'react-router-dom';
import About from './components/about';
import Footer from './components/footer';
import Skill from './components/skill';
import Projects from './components/project';

function App() {
  return (
    <div>
      <HashRouter>
        {/* <Home/> */}
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/skill' element={<Skill/>} />
          <Route path='/projects' element={<Projects/>} />
        </Routes>
        <Footer/>
      </HashRouter>
    </div>
  );
}

export default App;