import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import { useState } from 'react';
import{
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Home } from './components/Home';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  const [alert, setAlert]=useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500);
  }
  return (
    <>
    <NoteState>
    <Router>
      <Navbar></Navbar>
      <Alert alert={alert}></Alert>
      <div className="container">
      <Switch>
        <Route exact path="/">
          <Home showAlert={showAlert}></Home>
        </Route>
        <Route exact path="/about">
          <About></About>
        </Route>
        <Route exact path="/signup">
          <Signup showAlert={showAlert}></Signup>
        </Route>
        <Route exact path="/login">
          <Login showAlert={showAlert}></Login>
        </Route>
      </Switch>
      </div>
    </Router>
    </NoteState>
    </>
  );
}

export default App;
