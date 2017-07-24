import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';

class BCH extends React.Component {
    render() {
        return (
            <Row>
                <Col>
                    <Breadcrumb>
                        {this.props.data.map(d => {
                            return d.link ? 
                                <BreadcrumbItem key={d.link}>
                                    <Link to={d.link}>{d.label}</Link>
                                </BreadcrumbItem>
                            :   <BreadcrumbItem key={d.link} active>
                                    {d.label}
                                </BreadcrumbItem>
                            
                        })}
                    </Breadcrumb>
                </Col>
            </Row>
        )
    }
}

export default BCH;
