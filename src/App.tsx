import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';
import PoemCollection from './components/poem-collection/PoemCollection';
import Header from './components/header/Header';
import SideBar from './components/side-bar/SideBar';
import SideBarDetail from './components/side-bar-detail/SideBarDetail';

const App = () => {
  return (
    <div className="layout-container">
      <Router>
        <Header />
        <aside>
          <SideBar />
          <SideBarDetail />
        </aside>
        <main>
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
        </main>
      </Router>
    </div>
  );
};

export default App;
