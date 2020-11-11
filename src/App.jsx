import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './pages/home';
import Results from './pages/results';
import Favorites from './pages/favorites';
import Favorite from './pages/favorite';

function App() {
  return (
    <Router>
      <nav>Navbar goes here!</nav>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/results" component={Results} />
        <Route path="/favorites" exact component={Favorites} />
        <Route path="/favorites/favorite" component={Favorite} />
      </Switch>
    </Router>
  );
}

export default App;
