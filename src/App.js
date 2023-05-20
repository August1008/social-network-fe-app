import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Registration from './Components/Registration';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login';
import RouterPage from './Components/RouterPage';
function App() {
  return (
    <div className="App">
      <RouterPage/>
    </div>
  );
}

export default App;
