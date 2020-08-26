import React, { Component } from 'react';

class Login extends Component {

    login=()=>{
        sessionStorage.setItem("userName","Barry")
    }

    logout=()=>{
        sessionStorage.clear()
    }

    render() {
        return (
            <div>
                <button onClick={this.login}>Login</button>
                <button onClick={this.logout}>Logout</button>
            </div>
        );
    }
}

export default Login;