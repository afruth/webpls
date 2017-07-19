import React from 'react';
import { LoginButtons } from 'meteor/okgrow:accounts-ui-react';

class Login extends React.Component {
    render() {
        return (
            <LoginButtons visible />
        )
    }
}

export default Login;