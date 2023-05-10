import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Registration from './Components/Registration';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Registration/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
