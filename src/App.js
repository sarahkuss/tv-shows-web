import { useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from "./scenes/Home.jsx"
import AddShow from "./scenes/AddShow.jsx"
import Login from "./scenes/Login.jsx"
import SignUp from "./scenes/SignUp.jsx"
import './styles/App.css';

function App() {
  const [shows, setShows] = useState()
  const [user, setUser] = useState()

  return (
    <>
    {/* <ul>
      <li><Link to="/addshow">Add Show</Link></li>
    </ul> */}
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home shows={shows} setShows={setShows}/>} />
        <Route path='/addshow' element={<AddShow setShows={setShows} />} />
        <Route path='/signup' element={<SignUp setUser={setUser}/>} />
        <Route path='/login' element={<Login setUser={setUser} />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
