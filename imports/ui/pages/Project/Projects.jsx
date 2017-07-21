import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { browserHistory, Link } from 'react-router-dom';
import { Table, Button } from 'reactstrap';
import DB from '../../../common/database/DB.js';
class Project extends React.Component {
    constructor(props) {
        super(props);

        this.history = props.history;
    }
    editRow(rowId) {
        this.history.push(`/project/edit/${rowId}`)
    }
    deleteRow(rowId) {
        Meteor.call('projects.remove', rowId, (e,r) => {
            alert('Project removed');
        })
    }
    renderTable() {
        return (
            <Table>
                <thead>
                    <tr>
                        <th>Project id</th>
                        <th>Project title</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { this.props.projects.map((p) => this.renderRow(p)) }
                </tbody>
            </Table>
        )
    }
    renderRow(rowData) {
        return (
            <tr key={rowData._id}>
                <td>{rowData._id}</td>
                <td><Link to={`/project/${rowData._id}`}>{rowData.title}</Link></td>
                <td>
                    <Button onClick={() => this.editRow(rowData._id)}>Edit</Button>
                    <Button onClick={() => this.deleteRow(rowData._id)}>Delete</Button>
                </td>
            </tr>
        )
    }
    render() {
        return (
            <div className="app-large">
                <h3>Your latest projects</h3>
                <Button onClick={() => {this.history.push('/project/add')}}>Add a new project</Button>
                { this.props.subReady ? 
                this.renderTable() :
                "Loading"
                }
            </div>
        )
    }
}

export default createContainer(() => {
    const sub = Meteor.subscribe('projects.user');
    return {
        subReady: sub.ready(),
        projects: DB.Projects.find({ ownerId: Meteor.userId() },{
            sort: {
                modifiedAt: -1
            }
        }).fetch()
    }
}, Project);