import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import Autoform from 'uniforms-bootstrap4/AutoForm';
import projectContainer from './ProjectContainer.jsx';
import DB from '../../../common/database/DB.js';
import { Container, Row, Col } from 'reactstrap';
import BreadCrumbHolder from '../../components/utils/BreadcrumbHolder/BreadcrumbHolder.jsx';

import ProjectBody from './ProjectBody.jsx';

class ProjectView extends React.Component {
    constructor(props) {
        super(props);

        this.getBreadCrumb = this.getBreadCrumb.bind(this);
    }
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
                label: this.props.project ? this.props.project.title : "Loading",
                link: null
            }
        ]
    }
    render() {
        return (
            <div>
                <BreadCrumbHolder data={this.getBreadCrumb()} />
                <Row>
                    <Col>
                        {this.props.subReady ?
                        (
                            <div>
                                <h3>{this.props.project.title}</h3>
                                <ProjectBody project={this.props.project} />
                            </div>
                        )
                        : "Loading" }
                    </Col>
                </Row>
            </div>
        )
    }
}

export default createContainer(projectContainer, ProjectView);