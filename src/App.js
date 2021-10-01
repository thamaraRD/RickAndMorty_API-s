import React from 'react'
import './App.css';
import RandMList from './components/RandMList'
import CharacterDetail from './components/CharacterDetail';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <nav>
          <ul>
            <li>
              <Link to="/Lista-personajes">Lista de Personajes</Link>
            </li>
            <li>
              <Link to="/about">Home</Link>
            </li>
            {/* <li>
              <Link to="/users">Users</Link>
            </li> */}
          </ul>
        </nav>
            <Switch>
          <Route exact path="/Lista-personajes">
            <RandMList />
          </Route>
          <Route exact path="/personaje/:id">
            <CharacterDetail />
          </Route>
          </Switch>
        </Router>
        </div>
    
    
  );
}

export default App;
