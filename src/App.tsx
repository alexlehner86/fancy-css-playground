import './App.css';

import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import ContentVisibility1 from './pages/ContentVisibility1';
import ContentVisibility2 from './pages/ContentVisibility2';
import ContentVisibility3 from './pages/ContentVisibility3';
import Home from './pages/Home';
import PaintApi from './pages/PaintApi/PaintApi';


function App() {
    return (
        <React.Fragment>
            <Router>
                <header>
                    <Link to="/" title="Homepage">
                        <img src="/assets/icon/emoji_nature.svg" alt="Homepage" />
                    </Link>
                    <h1>Fancy CSS Playground</h1>
                </header>
                <main>
                    {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path="/paintapi">
                            <PaintApi />
                        </Route>
                        <Route path="/contentvisibility1">
                            <ContentVisibility1 />
                        </Route>
                        <Route path="/contentvisibility2">
                            <ContentVisibility2 />
                        </Route>
                        <Route path="/contentvisibility3">
                            <ContentVisibility3 />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </main>
            </Router>
        </React.Fragment>
    );
}

export default App;
