
import './App.css';
import Add from './components/add/Add';
import Edit from './components/edit/Edit';
import Home from './components/home/Home';
import Login from './components/login/Login';
import {BrowserRouter ,Route,Routes} from 'react-router-dom'


function App() {


  

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route  path='/' element={<Login/>}> </Route>
        <Route path='/home' element={<Home/>}> </Route>
        <Route path='/emp/edit/:uid' element={<Edit/>}> </Route>
        <Route path='/emp/create' element={<Add/>}> </Route>
      </Routes>
      </BrowserRouter>
      
       {/* <Login/> */}
    
    </div>
  );
}

export default App;
