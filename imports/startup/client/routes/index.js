import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Row, Col } from 'reactstrap';
import { BrowserRouter as Router, IndexRoute, Route, Fade, Switch, browserHistory, Redirect } from 'react-router-dom';
import { createContainer } from 'meteor/react-meteor-data';

import Home from '../../../ui/pages/Home/Home.jsx';
import Projects from '../../../ui/pages/Project/Projects.jsx';
import ProjectAdd from '../../../ui/pages/Project/ProjectAdd.jsx';
import ProjectEdit from '../../../ui/pages/Project/ProjectEdit.jsx';
import ProjectView from '../../../ui/pages/Project/ProjectView.jsx';
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
                                <Route path="/projects" component={Projects} />
                                <Route path="/project/add" component={ProjectAdd} />
                                <Route path="/project/edit/:id" component={ProjectEdit} />
                                <Route path="/project/:id" component={ProjectView} />
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