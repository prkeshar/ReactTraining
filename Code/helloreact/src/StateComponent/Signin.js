import React from 'react'

export class Signin extends React.Component {

    constructor(props) {
        super(props);

        if(sessionStorage.getItem("loginname") != null) {
            alert('already loggedin');
            this.props.history.push("/loginsuccess");
        }

        this.state ={
            login : ''
        }
    }

    Login = () => {
        let u = this.refs.un.value;
        let p = this.refs.pass.value;
        if(u === 'john' && p === '123') {
            sessionStorage.setItem("loginname", u);
            this.props.history.push("/loginsuccess");
        } else {
            this.setState({
                login : 'Incorrect password',
            })
        }
    }

    render () {
        return (
            <div>
                <div>
                    Username :
                    <input type="text" ref="un" />
                </div>
                <div>
                    Password :
                    <input type="Password" ref="pass" />
                </div>
                <button onClick={this.Login}>Login</button>
                <div>{this.state.login}</div>
            </div>
        );
    }
}