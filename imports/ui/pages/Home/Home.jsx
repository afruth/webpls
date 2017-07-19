import React from 'react';
import NavBar from '../../components/navbar/NavBar.jsx';

class Home extends React.Component {
    render() {
        return (
            <div className="app-large">
                <NavBar />
                HELLO FROM THE HOME PAGE!
            </div>
        )
    }
}

export default Home;