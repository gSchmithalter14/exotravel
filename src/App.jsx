import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Global from './Global.styled';
import Home from './pages/home';
import Results from './pages/results';
import Favorites from './pages/favorites';
import Navbar from './components/navbar';
import Map from './components/map/Map';
import theme from './theme';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Global />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/results/:keyword" exact component={Results} />
          <Route path="/favorites" exact component={Favorites} />
          <Route path="/map" exact component={Map} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
