import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Row, Col } from 'reactstrap';
import { createContainer } from 'meteor/react-meteor-data';
import DB from '../../../common/database/DB.js';

class ProjectBody extends React.Component {
    hasDataset() {
        return "Dataset loaded"
    }
    needsDataset() {
        return "No dataset loaded"
    }
    render() {
        return (
            <Row>
                <Col>
                    {this.props.subReady ?
                        this.props.dataset ?
                            this.hasDataset()
                            : this.needsDataset()
                    : "Loading..."}
                </Col>
            </Row>
        )
    }
}

export default createContainer(({ project }) => {
    const sub = Meteor.subscribe('datasets.project', project._id);
    return {
        subReady: sub.ready(),
        dataset: DB.Datasets.findOne({
            projectId: project._id
        }),
        project,
    }
}, ProjectBody);