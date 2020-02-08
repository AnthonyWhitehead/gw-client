import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.scss';
import Poem from './components/Poem/Poem';
import PoemCollection from './components/PoemCollection/PoemCollection';

const App = () => {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}

        <Switch>
          <Route path="/category/:cat">
            <PoemCollection />
          </Route>
          <Route path="/poem/:title">
            <PoemCollection />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
