import './App.css';
import { Route, Routes } from 'react-router-dom'
import Main from './components/Main/Main'
import Navbar from './components/Navbar/Navbar'
import { About } from './pages/About/About';
import { Contact } from './pages/Contact/Contact';
import { Education } from './pages/Education/Education';
import { Project } from './pages/Project/Project';
import { Skill } from './pages/Skill/Skill';
import { Header } from './components/Header/Header';

function App() {

  return (
    <div>
      <Navbar />
      <Header />
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Skill' element={<Skill/>} />
        <Route path='/Education' element={<Education/>} />
        <Route path='/Project' element={<Project/>} />
        <Route path='/Contact' element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;


