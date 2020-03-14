import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';
import PoemCollection from './components/poem-collection/PoemCollection';
import SideBar from './components/side-bar/SideBar';
import SideBarDetail from './components/side-bar-detail/SideBarDetail';
import { useSelector } from 'react-redux';

const App: React.FC = () => {
  const poemCollection = useSelector((state: any) => state.poems);
  return (
    <div className="layout-container">
      <Router>
        <SideBar />
        {poemCollection !== undefined && poemCollection.length > 0 ? <SideBarDetail /> : ''}
        <main>
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
