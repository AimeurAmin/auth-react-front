import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router'
import Profile from './pages/Profile';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home}/>
      <Route path="/profile" component={Profile}/>
      <Route path="/register" component={Register}/>
      <Route path="/login" component={Login}/>
    </BrowserRouter>
  );
}

export default App;
