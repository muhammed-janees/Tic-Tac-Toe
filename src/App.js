import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Singleplayer from './Pages/Singleplayer';
import Multiplayer from './Pages/Multiplayer'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/singleplayer' element={<Singleplayer/>}/>
          <Route path='/multiplayer' element={<Multiplayer/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
