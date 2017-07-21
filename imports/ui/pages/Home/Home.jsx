import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Jumbotron, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
            <div className="app-large">
                <Jumbotron>
                    <h3>WebPLS</h3>
                    <p> is aiming to become the go-to solution 
                        for people looking to research sets of data using
                        PLS
                    </p>
                    { Meteor.userId() ?
                    <Link to="/projects">
                        <Button color="primary">Go to your projects</Button>
                    </Link> :
                    <Link to="/auth">
                        <Button color="primary">Join now!</Button>
                    </Link>
                    }
                    
                </Jumbotron>
            </div>
        )
    }
}

export default Home;