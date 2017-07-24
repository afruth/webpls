import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { browserHistory, Link } from 'react-router-dom';
import { Table, Button, Row, Col } from 'reactstrap';
import FA from 'react-fontawesome';
import PageTitle from '../../components/utils/PageTitle/PageTitle.jsx';
import BreadCrumbHolder from '../../components/utils/BreadcrumbHolder/BreadcrumbHolder.jsx';
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
                        <th>Project title</th>
                        <th>DataViews</th>
                        <th>Models</th>
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
                <td><Link to={`/project/${rowData._id}`}>{rowData.title}</Link></td>
                <td>6</td>
                <td>3</td>
                <td>
                    <Button size="sm" color="primary" onClick={() => this.history.push(`/project/${rowData._id}`)}>
                        <FA name="folder-open-o" />
                    </Button>
                    <Button size="sm" color="success" onClick={() => this.editRow(rowData._id)}>
                        <FA name="pencil" />                        
                    </Button>
                    <Button size="sm" color="danger" onClick={() => this.deleteRow(rowData._id)}>
                        <FA name="times" />                        
                    </Button>
                </td>
            </tr>
        )
    }
    getBreadCrumb() {
        return [
            {
                label: "Home",
                link: "/"
            },
            {
                label: "Projects",
                link: null
            }
        ]
    }
    render() {
        return (
            <div className="app-large">
                <BreadCrumbHolder data={this.getBreadCrumb()} />
                <Row>
                    <Col md="2">
                        <Button size="sm" color="success" onClick={() => {this.history.push('/project/add')}}>
                            <FA name="plus" />&nbsp;
                            New project
                        </Button>
                    </Col>
                    <Col md="10">
                        { this.props.subReady ? 
                        this.renderTable() :
                        "Loading"
                        }
                    </Col>
                </Row>
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