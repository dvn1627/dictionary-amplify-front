import React from 'react';
import AllPage from './pages/all';
import AddPage from './pages/add';
import LeanPage from './pages/lean';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './style.css';

function App() {
  return (
    <Router>
      <nav className="main-navigation">
        <Link to='/'>All</Link>
        <Link to='/create'>Add</Link>
        <Link to='/lean'>Lean</Link>
      </nav>
      <Switch>
          <Route path="/create">
            <AddPage />
          </Route>
          <Route path="/lean">
            <LeanPage />
          </Route>
          <Route path="/">
            <AllPage />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;