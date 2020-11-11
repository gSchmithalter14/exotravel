import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Global from './Global.styled';
import Home from './pages/home';
import Results from './pages/results';
import Favorites from './pages/favorites';
import Favorite from './pages/favorite';
import Navbar from './components/navbar';

function App() {
  const theme = {
    main: '#eff0f3',
    secondary: '#0d0d0d',
    tertiary: '#d9376e',
    highlight: '#ff8e3c',
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Global />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/results" component={Results} />
          <Route path="/favorites" exact component={Favorites} />
          <Route path="/favorites/favorite" component={Favorite} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
