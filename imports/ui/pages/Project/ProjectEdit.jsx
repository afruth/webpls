import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import Autoform from 'uniforms-bootstrap4/AutoForm';
import projectContainer from './ProjectContainer.jsx';

import DB from '../../../common/database/DB.js';
class ProjectEdit extends React.Component {
    saveProject(doc) {
        Meteor.call('projects.edit', doc, (e,r) => {
            if(e) alert("Error");
            else this.props.history.push('/projects')
        });
    }
    render() {
        return (
            <div className="app-large">
                <h3>Edit your project</h3>
                {this.props.subReady ?
                <Autoform schema={DB.Projects.Schema} onSubmit={doc => this.saveProject(doc)} model={this.props.project} />
                : "Loading" }
            </div>
        )
    }
}

export default createContainer(projectContainer, ProjectEdit);