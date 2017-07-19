import React from 'react';
import Meteor from 'meteor/meteor';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from '../../../ui/pages/Home/Home.jsx';
import Project from '../../../ui/pages/Project/Project.jsx';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                <Route exact={true} path="/" component={Home} />
                <Route path="/project" component={Project} />
                </div>
            </Router>
        )
    }
}

export default App;