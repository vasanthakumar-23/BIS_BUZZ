import React from 'react'
import Home from './pages/home'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Game, Start } from './pages/home';
import Museum from './pages/museum';
import { Pipe, Electronics, Vehicle, Cement } from './pages/museum';
import Room1, { Door1,Bookshelf } from './pages/room1';
import Room2, { Door2 } from './pages/room2';
import Room3,{Door3} from './pages/room3';



const App = () => {
  return ( 
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/game' element={<Game />} />
        <Route path='/start' element={<Start />} />
        <Route path='/museum' element={<Museum/>}/>
      </Routes>
      <Routes>
        <Route path='/museum/pipe' element={<Pipe/>} />
        <Route path='/museum/car' element={<Vehicle/> } />
        <Route path='/museum/cement' element={<Cement/>} />
        <Route path='/museum/electronic' element={<Electronics/>} />

      </Routes>
      <Routes>
        <Route path='/door1' element={<Door1 />} />
        <Route path='/room1' element={<Room1 />} />
        <Route path='/room1/bookshelf' element={<Bookshelf/>} />
      </Routes>
      <Routes>
        <Route path='/door2' element={<Door2 />} />
        <Route path='/room2' element={<Room2/>}/>

      </Routes>
      <Routes>
        <Route path='/door3' element={<Door3 />} />
        <Route path='/room3' element={<Room3/>}/>

      </Routes>
    </Router>
  )
}

export default App