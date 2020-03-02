import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import TvShowPage from './pages/TvShow';
import EpisodeDetailPage from './pages/EpisodeDetail';

import './App.css';

function App() {
  return (
          <div className="App">
              <header className="App-header">
                  <Link to={`/`} className='link'>
                      <p>Shows App</p>
                  </Link>
              </header>
              <Switch>
                  <Route exact path='/' component={ TvShowPage } />
                  <Route  path='/episode/:id' component={ EpisodeDetailPage } />
                  <Route path="*" render={ () => <h1>NoFoundPage</h1> } />
              </Switch>
          </div>
  );
}

export default App;
