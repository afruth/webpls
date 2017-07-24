import React from 'react';
import { Container, Row, Col } from 'reactstrap';

class ProjectBody extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>{this.props.project._id}</Col>
                    <Col>{this.props.project.title}</Col>
                    <Col>{this.props.project.ownerId}</Col>
                </Row>
            </Container>
        )
    }
}

export default ProjectBody;