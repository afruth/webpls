import React from 'react';
import { Meteor } from 'meteor/meteor';
import Autoform from 'uniforms-bootstrap4/AutoForm';

import DB from '../../../common/database/DB.js';
class ProjectAdd extends React.Component {
    saveProject(doc) {
        Meteor.call('projects.add', doc, (e,r) => {
            if(e) alert("Error");
            else this.props.history.push('/projects')
        });
    }
    render() {
        return (
            <div className="app-large">
                <h3>Add a new project</h3>
                <Autoform schema={DB.Projects.Schema} onSubmit={doc => this.saveProject(doc)} />
            </div>
        )
    }
}

export default ProjectAdd;