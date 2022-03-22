import './App.css';
import { Route, Routes } from 'react-router-dom'
import Main from './components/Main/Main'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main/>} />
      </Routes>
    </div>
  );
}

export default App;


