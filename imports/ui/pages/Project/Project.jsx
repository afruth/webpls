import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import DB from '../../../common/database/DB.js';
class Project extends React.Component {
    render() {
        return (
            <div className="app-large">
                { this.props.subReady ? 
                    this.props.projects.map((p) => {
                        return (
                            <div key={p._id}>
                                {p.title}
                            </div>
                        )
                    }) : "Loading"
                }
            </div>
        )
    }
}

export default createContainer(() => {
    const sub = Meteor.subscribe('projects.user');
    return {
        subReady: sub.ready(),
        projects: DB.Projects.find({ ownerId: Meteor.userId() }).fetch()
    }
}, Project);