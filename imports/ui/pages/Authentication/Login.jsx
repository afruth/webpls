import React from 'react';
import { LoginButtons } from 'meteor/okgrow:accounts-ui-react';
import Center from '../../components/utils/Center/Center.jsx';
import './Login.css';

class Login extends React.Component {
    render() {
        return (
            <Center>
                <LoginButtons visible />
            </Center>
        )
    }
}

export default Login;