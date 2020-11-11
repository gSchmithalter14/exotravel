import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Global from './Global.styled';
import Home from './pages/home';
import Results from './pages/results';
import Favorites from './pages/favorites';
import Favorite from './pages/favorite';
import Navbar from './components/navbar';

function App() {
  return (
    <Router>
      <Global />
      <Navbar />
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
