import Home from './components/Home';
import Login from './components/Login';
import Navigation from './components/Navigaton';
import Register from './components/Register';
import Tasks from './components/Tasks';
import './App.css';

import { Route, Routes } from 'react-router-dom';

function App () {
  return (
      <div>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/tasks' element={<Tasks />}/>
          <Route path='/' element={<Navigation/>}/>

        </Routes>

      </div>
    
  );
}

export default App;
