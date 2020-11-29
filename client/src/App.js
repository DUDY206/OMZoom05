import React from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';
import Home from "./components/Home/Home";
import Authorize from './components/Authorize/Authorize';

const App = () => {
    return (
        <Router>
            <Route path="/" exact component={Join} />
            <Route path="/chat" exact component={Chat} />
            <Route path="/login" exact component={Authorize} />
            <Route path="/home" exact component={Home} />
        </Router>
    )

};

export default App;

