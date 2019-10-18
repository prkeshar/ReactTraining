import React from 'react'

export class LoggedSuccessful extends React.Component {
    render() {
        let name = sessionStorage.getItem("loginname");
        return (
            <div>
                Welcome {name}
            </div>
        );
    }
}