import  React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Container } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import './Styles/App.css';

import MenuBar from './Components/MenuBar';
import Home from './Pages/Home';
import Register from './Pages/Register';
import Login from './Pages/Login';

function App() {
  return (
    <Router>
    <Container>
      <MenuBar/>
      <Route exact path = '/' component ={Home}/>
      <Route exact path = "/login" component = {Login}/>
      <Route exact path = '/register' component ={Register}/>
    </Container>
    </Router>
  );
}

export default App;
