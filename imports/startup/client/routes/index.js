import React from 'react';
import Meteor from 'meteor/meteor';
import { Container, Row, Col } from 'reactstrap';
import { BrowserRouter as Router, IndexRoute, Route, Fade, Switch, browserHistory } from 'react-router-dom';

import Home from '../../../ui/pages/Home/Home.jsx';
import Project from '../../../ui/pages/Project/Project.jsx';
import NavBar from '../../../ui/components/navbar/NavBar.jsx';
import Login from '../../../ui/pages/Authentication/Login.jsx';
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
    render() {
        return (
            <Router history={ browserHistory }>
                <Container>
                    <Row>
                        <Col>
                            <NavBar />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route path="/project" component={Project} />
                                <Route path="/auth" component={Login} />
                            </Switch>
                        </Col>
                    </Row>
                </Container>
            </Router>            
        )
    }
}

export default App;