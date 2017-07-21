import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import Autoform from 'uniforms-bootstrap4/AutoForm';
import projectContainer from './ProjectContainer.jsx';
import DB from '../../../common/database/DB.js';
import { Container, Row, Col } from 'reactstrap';

import ProjectBody from './ProjectBody.jsx';

class ProjectView extends React.Component {
    saveProject(doc) {
        Meteor.call('projects.edit', doc, (e,r) => {
            if(e) alert("Error");
            else this.props.history.push('/projects')
        });
    }
    render() {
        return (
            <div>
                {this.props.subReady ?
                (
                    <div>
                        <h3>{this.props.project.title}</h3>
                        <ProjectBody project={this.props.project} />
                    </div>
                )
                : "Loading" }
            </div>
        )
    }
}

export default createContainer(projectContainer, ProjectView);