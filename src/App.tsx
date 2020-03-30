import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';

import PoemCollection from './components/poem-collection/PoemCollection';
import SideBar from './components/side-bar/SideBar';
import SideBarDetail from './components/side-bar-detail/SideBarDetail';
import SinglePoem from './components/single-poem/SinglePoem';

const App: React.FC = () => {

  return (
    <div className="layout-container">
      <Router>
        <SideBar />
        <SideBarDetail />
        <main>
          <Switch>
            <Route exact path="/category/:cat/:title">
            <SinglePoem></SinglePoem> 
            </Route>
            <Route exact path="/category/:cat">
              <PoemCollection />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
};

export default App;
