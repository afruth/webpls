import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Row, Col, Card, CardTitle, CardText, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import Autoform from 'uniforms-bootstrap4/AutoForm';
import PageTitle from '../../components/utils/PageTitle/PageTitle.jsx';
import BreadCrumbHolder from '../../components/utils/BreadcrumbHolder/BreadcrumbHolder.jsx';

import DB from '../../../common/database/DB.js';
class ProjectAdd extends React.Component {
    saveProject(doc) {
        Meteor.call('projects.add', doc, (e,r) => {
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
                label: "Add Project",
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
                            <CardTitle>Enter a project title</CardTitle>
                            <CardText>The project title will help you easily find this project later. After you save the project you will be able to add datasets and dataviews to it!</CardText>
                        </Card>
                    </Col>
                    <Col md="9">
                        <Autoform schema={DB.Projects.Schema} onSubmit={doc => this.saveProject(doc)} />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default ProjectAdd;