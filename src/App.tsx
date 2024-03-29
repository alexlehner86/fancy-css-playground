import './App.css';

import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import A11yFeatures from './pages/A11yFeatures/A11yFeatures';
import ContentVisibility1 from './pages/ContentVisibility/ContentVisibility1';
import ContentVisibility2 from './pages/ContentVisibility/ContentVisibility2';
import ContentVisibility3 from './pages/ContentVisibility/ContentVisibility3';
import DialogElement from './pages/DialogElement/DialogElement';
import FileUpload from './pages/FileUpload/FileUpload';
import HasPseudoClass from './pages/HasPseudoClass/HasPseudoClass';
import Home from './pages/Home';
import PaintApi from './pages/PaintApi/PaintApi';
import InertAttributePage from './pages/InertAttribute/InertAttribute';
import InlineSvgPage from './pages/InlineSvg/InlineSvg';
import ScrollPadding from './pages/ScrollPadding/ScrollPadding';

function App() {
    const toHomepageLinkImg = process.env.PUBLIC_URL + '/assets/icon/emoji_nature.svg';
    return (
        <React.Fragment>
            <header>
                <Link to="/" title="Homepage">
                    <img src={toHomepageLinkImg} alt="Homepage" />
                </Link>
                <h1>Fancy CSS Playground</h1>
            </header>
            <main>
                {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/a11yfeatures">
                        <A11yFeatures />
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
                    <Route path="/paintapi">
                        <PaintApi />
                    </Route>
                    <Route path="/fileupload">
                        <FileUpload />
                    </Route>
                    <Route path="/dialog">
                        <DialogElement />
                    </Route>
                    <Route path="/inert">
                        <InertAttributePage />
                    </Route>
                    <Route path="/haspseudoclass">
                        <HasPseudoClass />
                    </Route>
                    <Route path="/inlinesvg">
                        <InlineSvgPage />
                    </Route>
                    <Route path="/scrollpadding">
                        <ScrollPadding />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </main>
        </React.Fragment>
    );
}

export default App;
