import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ContentVisibility1 from './pages/ContentVisibility1';
import ContentVisibility2 from './pages/ContentVisibility2';


function App() {
    return (
        <React.Fragment>
            <header>
                <h1>Fancy CSS Playground</h1>
            </header>
            <main>
                <Router>
                    {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path="/contentvisibility1">
                            <ContentVisibility1 />
                        </Route>
                        <Route path="/contentvisibility2">
                            <ContentVisibility2 />
                        </Route>
                        <Route path="/">
                            Welcome to my Fancy CSS Playground!
                        </Route>
                    </Switch>
                </Router>
            </main>
        </React.Fragment>
    );
}

export default App;
