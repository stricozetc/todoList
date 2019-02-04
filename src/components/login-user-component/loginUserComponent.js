import React from 'react';
import './style.css';

class LoginUserComponent extends React.Component {
    render() {
        return(
            <React.Fragment>
                <div className="container-input">
                    <input
                        placeholder="Username"
                        className="login-input"
                    />
                    <i
                        className="icon-input fas fa-user"
                    />
                </div>
            </React.Fragment>
        );
    }
}

export default LoginUserComponent;