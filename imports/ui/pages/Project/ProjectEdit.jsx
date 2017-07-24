import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import Autoform from 'uniforms-bootstrap4/AutoForm';
import projectContainer from './ProjectContainer.jsx';
import { Row, Col, Card, CardTitle, CardText } from 'reactstrap';
import PageTitle from '../../components/utils/PageTitle/PageTitle.jsx';
import BreadCrumbHolder from '../../components/utils/BreadcrumbHolder/BreadcrumbHolder.jsx';

import DB from '../../../common/database/DB.js';
class ProjectEdit extends React.Component {
    saveProject(doc) {
        Meteor.call('projects.edit', doc, (e,r) => {
            if(e) alert("Error");
            else this.props.history.push('/projects')
        });
    }
    getBreadCrumb() {
        return [
            {
                label: "Home",
                link: "/"
            },
            {
                label: "Projects",
                link: "/projects"
            },
            {
                label: "Edit Project",
                link: null
            }
            
        ]
    }
    render() {
        return (
            <div className="app-large">
                <BreadCrumbHolder data={this.getBreadCrumb()} />

                <Row>
                    <Col md="3">
                        <Card block outline color="success">
                            <CardTitle>Edit the project title</CardTitle>
                            <CardText>This will allow you to modify the project title. Any other project data will remain as it is.</CardText>
                        </Card>
                    </Col>
                    <Col md="9">
                        {this.props.subReady ?
                        <Autoform schema={DB.Projects.Schema} onSubmit={doc => this.saveProject(doc)} model={this.props.project} />
                        : "Loading" }
                    </Col>
                </Row>
            </div>
        )
    }
}

export default createContainer(projectContainer, ProjectEdit);